/*
  # Fix RLS policies for basic signups

  1. Changes
    - Drop all existing policies
    - Create new INSERT policy for public access
    - Create new SELECT policy for authenticated users
    - No changes to table structure
  
  2. Security
    - Enable RLS
    - Allow anyone to insert new signups
    - Allow users to read their own signup data
*/

-- Drop all existing policies
DROP POLICY IF EXISTS "Anyone can insert basic_signups" ON basic_signups;
DROP POLICY IF EXISTS "Users can read own basic_signups" ON basic_signups;
DROP POLICY IF EXISTS "Anyone can submit signup" ON basic_signups;
DROP POLICY IF EXISTS "Users can read own signup data" ON basic_signups;

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