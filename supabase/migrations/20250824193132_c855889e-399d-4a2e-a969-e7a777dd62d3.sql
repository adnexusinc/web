-- Fix the contacts table SELECT policy to use security definer function
-- This prevents potential infinite recursion issues and improves security

-- Drop the existing policy that directly queries the profiles table
DROP POLICY IF EXISTS "Admins can view all contacts" ON public.contacts;

-- Create a new policy using the existing security definer function
CREATE POLICY "Admins can view all contacts" 
ON public.contacts 
FOR SELECT 
USING (public.is_admin_secure(auth.uid()));

-- Add audit logging trigger for contact access (security enhancement)
CREATE OR REPLACE FUNCTION public.log_contact_access()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.contact_audit_log (
    contact_id,
    user_id,
    action,
    ip_address,
    user_agent
  ) VALUES (
    COALESCE(NEW.id, OLD.id),
    auth.uid(),
    TG_OP,
    inet_client_addr(),
    current_setting('request.headers', true)::json->>'user-agent'
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;