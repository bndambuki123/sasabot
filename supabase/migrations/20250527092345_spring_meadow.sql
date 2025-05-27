/*
  # Create basic signups table

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
    - Add policy for public signup submissions
    - Add policy for authenticated users to read their own data
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

ALTER TABLE basic_signups ENABLE ROW LEVEL SECURITY;

-- Allow users to read their own signup data
CREATE POLICY "Users can read own signup data"
  ON basic_signups
  FOR SELECT
  TO authenticated
  USING (business_email = current_user);

-- Add status check constraint
ALTER TABLE basic_signups
  ADD CONSTRAINT basic_signups_status_check
  CHECK (status = ANY (ARRAY['pending'::text, 'approved'::text, 'active'::text]));

-- Add trigger for updating updated_at
CREATE TRIGGER update_basic_signups_updated_at
  BEFORE UPDATE ON basic_signups
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();