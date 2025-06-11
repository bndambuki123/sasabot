/*
  # Beta Registration Schema

  1. New Tables
    - `beta_registrations`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `full_name` (text)
      - `email` (text, unique)
      - `phone_number` (text)
      - `preferred_contact` (text)
      - `business_name` (text)
      - `industry_sector` (text)
      - `company_size` (text)
      - `business_location_country` (text)
      - `business_location_city` (text)
      - `customer_channels` (text[])
      - `customer_enquiries` (text)
      - `expectations` (text)
      - `share_data` (boolean)
      - `feedback_preference` (text[])
      - `referral_source` (text)
      - `selected_plan` (text)
      - `status` (text)

  2. Security
    - Enable RLS on `beta_registrations` table
    - Add policies for inserting new registrations
    - Add policies for admin access
*/

CREATE TABLE IF NOT EXISTS beta_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL UNIQUE,
  phone_number text,
  preferred_contact text,
  business_name text NOT NULL,
  industry_sector text,
  company_size text,
  business_location_country text DEFAULT 'Kenya',
  business_location_city text NOT NULL,
  customer_channels text[],
  customer_enquiries text,
  expectations text,
  share_data boolean DEFAULT false,
  feedback_preference text[],
  referral_source text,
  selected_plan text NOT NULL,
  status text DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE beta_registrations ENABLE ROW LEVEL SECURITY;

-- Allow new registrations to be created
CREATE POLICY "Allow public to create registrations"
  ON beta_registrations
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only allow admins to view registrations
CREATE POLICY "Allow admins to view registrations"
  ON beta_registrations
  FOR SELECT
  TO authenticated
  USING (auth.role() = 'admin');