-- Add new fields to contacts table for enhanced contact form
ALTER TABLE public.contacts ADD COLUMN IF NOT EXISTS interest_area text;
ALTER TABLE public.contacts ADD COLUMN IF NOT EXISTS company_size text;