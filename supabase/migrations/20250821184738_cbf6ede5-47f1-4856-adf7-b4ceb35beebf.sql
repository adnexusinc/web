-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Admins can view all contacts" ON public.contacts;
DROP POLICY IF EXISTS "Admins can update contacts" ON public.contacts;
DROP POLICY IF EXISTS "Admins can delete contacts" ON public.contacts;

-- Create more secure admin policies with explicit role restrictions
CREATE POLICY "Authenticated admins can view contacts" 
ON public.contacts 
FOR SELECT 
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND is_admin(auth.uid()) = true
);

CREATE POLICY "Authenticated admins can update contacts" 
ON public.contacts 
FOR UPDATE 
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND is_admin(auth.uid()) = true
);

CREATE POLICY "Authenticated admins can delete contacts" 
ON public.contacts 
FOR DELETE 
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND is_admin(auth.uid()) = true
);

-- Update the insert policy to be more explicit about roles
DROP POLICY IF EXISTS "Anyone can submit contacts" ON public.contacts;
CREATE POLICY "Anyone can submit contact forms" 
ON public.contacts 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Create an improved is_admin function with additional safety checks
CREATE OR REPLACE FUNCTION public.is_admin_secure(user_id uuid)
RETURNS boolean
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Additional security: check if user_id is provided and not null
  IF user_id IS NULL THEN
    RETURN false;
  END IF;
  
  -- Check if user exists in profiles with admin status AND approved account
  RETURN EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.user_id = user_id 
    AND profiles.is_admin = true 
    AND profiles.approval_status = 'approved'
  );
END;
$$;

-- Update policies to use the more secure function
DROP POLICY "Authenticated admins can view contacts" ON public.contacts;
DROP POLICY "Authenticated admins can update contacts" ON public.contacts;
DROP POLICY "Authenticated admins can delete contacts" ON public.contacts;

CREATE POLICY "Verified admins can view contacts" 
ON public.contacts 
FOR SELECT 
TO authenticated
USING (is_admin_secure(auth.uid()));

CREATE POLICY "Verified admins can update contacts" 
ON public.contacts 
FOR UPDATE 
TO authenticated
USING (is_admin_secure(auth.uid()));

CREATE POLICY "Verified admins can delete contacts" 
ON public.contacts 
FOR DELETE 
TO authenticated
USING (is_admin_secure(auth.uid()));

-- Create audit log table for contact access (optional security enhancement)
CREATE TABLE IF NOT EXISTS public.contact_audit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  action text NOT NULL,
  contact_id uuid,
  timestamp timestamp with time zone DEFAULT now(),
  ip_address inet,
  user_agent text
);

-- Enable RLS on audit log
ALTER TABLE public.contact_audit_log ENABLE ROW LEVEL SECURITY;

-- Only admins can view audit logs
CREATE POLICY "Admins can view audit logs" 
ON public.contact_audit_log 
FOR SELECT 
TO authenticated
USING (is_admin_secure(auth.uid()));