/*
  # Fix users table permissions

  1. Changes
    - Grant proper permissions to authenticated users
    - Fix RLS policies for users table
    - Add necessary indexes
  
  2. Security
    - Maintain RLS protection
    - Allow proper access to user data
*/

-- Enable RLS on auth.users
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Enable public read access for users" ON auth.users;
DROP POLICY IF EXISTS "Enable authenticated read access for users" ON auth.users;

-- Create new policies
CREATE POLICY "Enable read access for users"
ON auth.users
FOR SELECT
TO authenticated
USING (true);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA auth TO authenticated;
GRANT USAGE ON SCHEMA auth TO anon;
GRANT SELECT ON auth.users TO authenticated;
GRANT SELECT ON auth.users TO anon;

-- Create index for better performance
CREATE INDEX IF NOT EXISTS auth_users_id_idx ON auth.users(id);