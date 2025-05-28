/*
  # Create basic_signups table

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
    - Add policies for public insert
    - Add policies for authenticated users to read own data
*/

-- Create the table if it doesn't exist
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

-- Create policies (no need to drop as they're idempotent with IF NOT EXISTS)
CREATE POLICY IF NOT EXISTS "Anyone can insert basic_signups"
  ON basic_signups
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Users can read own basic_signups"
  ON basic_signups
  FOR SELECT
  TO authenticated
  USING (business_email = auth.email());

-- Create the trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create the trigger if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM pg_trigger 
    WHERE tgname = 'update_basic_signups_updated_at' 
    AND tgrelid = 'basic_signups'::regclass
  ) THEN
    CREATE TRIGGER update_basic_signups_updated_at
      BEFORE UPDATE ON basic_signups
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END
$$;