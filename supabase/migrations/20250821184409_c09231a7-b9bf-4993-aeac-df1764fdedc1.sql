-- Add platform type and approval status to profiles table
ALTER TABLE public.profiles 
ADD COLUMN platform_type text CHECK (platform_type IN ('ssp', 'dsp', 'licensed_ad_network')),
ADD COLUMN approval_status text DEFAULT 'pending' CHECK (approval_status IN ('pending', 'approved', 'rejected')),
ADD COLUMN company_name text,
ADD COLUMN website_url text,
ADD COLUMN monthly_volume text,
ADD COLUMN business_description text;

-- Update profiles policies to allow users to view approved profiles
CREATE POLICY "Users can view approved profiles" 
ON public.profiles 
FOR SELECT 
USING (approval_status = 'approved');

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER 
LANGUAGE plpgsql 
SECURITY DEFINER 
SET search_path TO 'public'
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name)
  VALUES (
    NEW.id, 
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', '')
  );
  RETURN NEW;
END;
$$;

-- Create trigger for automatic profile creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();