/*
  # Update basic_signups table policies and constraints

  1. Changes
    - Drop and recreate RLS policies
    - Add status check constraint if not exists
    - Add updated_at trigger if not exists

  2. Security
    - Enable RLS
    - Allow public inserts
    - Allow authenticated users to read their own entries
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

-- Add status check constraint if not exists
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'basic_signups_status_check'
  ) THEN
    ALTER TABLE basic_signups
      ADD CONSTRAINT basic_signups_status_check
      CHECK (status = ANY (ARRAY['pending'::text, 'approved'::text, 'active'::text]));
  END IF;
END $$;

-- Add trigger for updating updated_at if not exists
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'update_basic_signups_updated_at'
  ) THEN
    CREATE TRIGGER update_basic_signups_updated_at
      BEFORE UPDATE ON basic_signups
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;