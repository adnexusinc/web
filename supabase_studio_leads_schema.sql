-- Create studio_leads table for capturing lead information
-- Run this in Supabase SQL Editor

CREATE TABLE IF NOT EXISTS public.studio_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  use_case TEXT NOT NULL CHECK (use_case IN ('brand', 'agency', 'creator', 'other')),
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS studio_leads_email_idx ON public.studio_leads(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS studio_leads_created_at_idx ON public.studio_leads(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.studio_leads ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert (for lead capture form)
CREATE POLICY "Anyone can insert studio leads"
  ON public.studio_leads
  FOR INSERT
  WITH CHECK (true);

-- Policy: Only authenticated users can view (for admin dashboard)
CREATE POLICY "Authenticated users can view studio leads"
  ON public.studio_leads
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER studio_leads_updated_at
  BEFORE UPDATE ON public.studio_leads
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Grant permissions
GRANT INSERT ON public.studio_leads TO anon;
GRANT SELECT ON public.studio_leads TO authenticated;

COMMENT ON TABLE public.studio_leads IS 'Leads captured from Adnexus Studio access request form';
COMMENT ON COLUMN public.studio_leads.use_case IS 'Type of user: brand, agency, creator, or other';
