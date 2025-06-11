/*
  # Add pricing plan enum type

  1. New Types
    - `pricing_plan_type` enum for standardized plan categories
  
  2. Changes
    - Modify beta_registrations table to use the new enum type
    - Add check constraint to ensure valid plan values
*/

CREATE TYPE pricing_plan_type AS ENUM (
  'msingi',
  'hustler',
  'growth',
  'boss',
  'enterprise'
);

ALTER TABLE beta_registrations 
  ALTER COLUMN selected_plan TYPE pricing_plan_type 
  USING selected_plan::pricing_plan_type;