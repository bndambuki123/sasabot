/*
  # Basic Signups Table

  1. New Tables
    - `basic_signups`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `business_email` (text, unique, required)
      - `whatsapp_number` (text, required)
      - `company_name` (text, required)
      - `shop_url` (text, optional)
      - `industry` (text, required)
      - `country` (text, required)
      - `status` (text, default: 'pending')
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `basic_signups` table
    - Add policy for public to insert signups
    - Add policy for authenticated users to read their own signup data
*/

CREATE TABLE IF NOT EXISTS basic_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  business_email text UNIQUE NOT NULL,
  whatsapp_number text NOT NULL,
  company_name text NOT NULL,
  shop_url text,
  industry text NOT NULL,
  country text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE basic_signups ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can insert basic_signups" ON basic_signups;
DROP POLICY IF EXISTS "Users can read own basic_signups" ON basic_signups;

-- Create new policies
CREATE POLICY "Anyone can insert basic_signups"
  ON basic_signups
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can read own basic_signups"
  ON basic_signups
  FOR SELECT
  TO authenticated
  USING (business_email = auth.email());