/*
  # Basic Signups Table

  1. New Tables
    - `basic_signups`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `business_email` (text, unique)
      - `whatsapp_number` (text)
      - `company_name` (text)
      - `shop_url` (text, optional)
      - `industry` (text)
      - `country` (text)
      - `status` (text, default: 'pending')
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS
    - Add policy for public signup submissions
    - Add policy for users to read their own data

  3. Constraints
    - Status must be one of: 'pending', 'approved', 'active'
*/

-- Drop existing constraint if it exists
DO $$ BEGIN
  ALTER TABLE IF EXISTS basic_signups
    DROP CONSTRAINT IF EXISTS basic_signups_status_check;
EXCEPTION
  WHEN undefined_table THEN NULL;
END $$;

-- Create table if it doesn't exist
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

-- Allow public to submit signup
DO $$ BEGIN
  DROP POLICY IF EXISTS "Anyone can submit signup" ON basic_signups;
  CREATE POLICY "Anyone can submit signup"
    ON basic_signups
    FOR INSERT
    TO public
    WITH CHECK (true);
EXCEPTION
  WHEN undefined_object THEN NULL;
END $$;

-- Allow users to read their own signup data
DO $$ BEGIN
  DROP POLICY IF EXISTS "Users can read own signup data" ON basic_signups;
  CREATE POLICY "Users can read own signup data"
    ON basic_signups
    FOR SELECT
    TO authenticated
    USING (business_email = current_user);
EXCEPTION
  WHEN undefined_object THEN NULL;
END $$;

-- Add status check constraint
ALTER TABLE basic_signups
  ADD CONSTRAINT basic_signups_status_check
  CHECK (status = ANY (ARRAY['pending'::text, 'approved'::text, 'active'::text]));

-- Add trigger for updating updated_at
DO $$ BEGIN
  DROP TRIGGER IF EXISTS update_basic_signups_updated_at ON basic_signups;
  CREATE TRIGGER update_basic_signups_updated_at
    BEFORE UPDATE ON basic_signups
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
EXCEPTION
  WHEN undefined_object THEN NULL;
END $$;