/*
  # Enrollment and Waitlist Schema

  1. New Tables
    - `enrollments`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `plan` (text) - Basic or Premium
      - `status` (text) - active, cancelled, trial
      - `trial_ends_at` (timestamptz)
      - `current_period_ends_at` (timestamptz)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      - `cancelled_at` (timestamptz)
      - `team_members` (integer)
    
    - `waitlist_entries`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `email` (text, unique)
      - `phone_number` (text)
      - `industry` (text)
      - `interests` (text[])
      - `message` (text)
      - `status` (text) - pending, contacted, enrolled
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      - `contacted_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for user access
*/

-- Create enrollments table
CREATE TABLE IF NOT EXISTS enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users ON DELETE CASCADE,
  plan text NOT NULL CHECK (plan IN ('basic', 'premium')),
  status text NOT NULL CHECK (status IN ('active', 'cancelled', 'trial')),
  trial_ends_at timestamptz,
  current_period_ends_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  cancelled_at timestamptz,
  team_members integer DEFAULT 1,
  CONSTRAINT valid_trial_period CHECK (
    (status = 'trial' AND trial_ends_at IS NOT NULL) OR
    (status != 'trial' AND trial_ends_at IS NULL)
  )
);

-- Enable RLS on enrollments
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

-- Add enrollments policies
CREATE POLICY "Users can read own enrollment"
  ON enrollments
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own enrollment"
  ON enrollments
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can insert own enrollment"
  ON enrollments
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create waitlist_entries table
CREATE TABLE IF NOT EXISTS waitlist_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL UNIQUE,
  phone_number text,
  industry text,
  interests text[],
  message text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'enrolled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  contacted_at timestamptz
);

-- Enable RLS on waitlist_entries
ALTER TABLE waitlist_entries ENABLE ROW LEVEL SECURITY;

-- Add waitlist_entries policies
CREATE POLICY "Anyone can insert waitlist entry"
  ON waitlist_entries
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can read own waitlist entry"
  ON waitlist_entries
  FOR SELECT
  TO authenticated
  USING (email = auth.jwt() ->> 'email');

-- Add updated_at triggers
CREATE TRIGGER update_enrollments_updated_at
  BEFORE UPDATE ON enrollments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_waitlist_entries_updated_at
  BEFORE UPDATE ON waitlist_entries
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create indexes
CREATE INDEX enrollments_user_id_idx ON enrollments (user_id);
CREATE INDEX enrollments_status_idx ON enrollments (status);
CREATE INDEX waitlist_entries_email_idx ON waitlist_entries (email);
CREATE INDEX waitlist_entries_status_idx ON waitlist_entries (status);