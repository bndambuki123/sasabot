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
    - Enable RLS
    - Public can insert new signups
    - Users can read their own signup data
    
  3. Constraints
    - Status must be one of: 'pending', 'approved', 'active'
    - Business email must be unique
*/

-- Create the updated_at function if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create the table
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
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT basic_signups_status_check CHECK (status IN ('pending', 'approved', 'active'))
);

-- Enable RLS
ALTER TABLE basic_signups ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can submit signup"
  ON basic_signups
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can read own signup data"
  ON basic_signups
  FOR SELECT
  TO authenticated
  USING (business_email = CURRENT_USER);

-- Create the trigger
DROP TRIGGER IF EXISTS update_basic_signups_updated_at ON basic_signups;
CREATE TRIGGER update_basic_signups_updated_at
  BEFORE UPDATE ON basic_signups
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();