/*
  # M-PESA Integration Schema

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `phone_number` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `mpesa_payments`
      - `id` (uuid, primary key)
      - `merchant_request_id` (text)
      - `checkout_request_id` (text)
      - `result_code` (integer)
      - `result_desc` (text)
      - `amount` (numeric)
      - `mpesa_receipt_number` (text)
      - `transaction_date` (text)
      - `phone_number` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for user access
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users ON DELETE CASCADE,
  phone_number text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Add profiles policies
CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create mpesa_payments table
CREATE TABLE IF NOT EXISTS mpesa_payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  merchant_request_id text,
  checkout_request_id text,
  result_code integer,
  result_desc text,
  amount numeric,
  mpesa_receipt_number text,
  transaction_date text,
  phone_number text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on mpesa_payments
ALTER TABLE mpesa_payments ENABLE ROW LEVEL SECURITY;

-- Add mpesa_payments policies
CREATE POLICY "Users can read own payments"
  ON mpesa_payments
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT user_id FROM profiles WHERE phone_number = mpesa_payments.phone_number
  ));

-- Add updated_at trigger for profiles
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();