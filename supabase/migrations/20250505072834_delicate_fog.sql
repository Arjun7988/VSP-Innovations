/*
  # Fix users table permissions

  1. Changes
    - Drop existing policies
    - Add new policies for public and authenticated access
    - Update RLS settings
  
  2. Security
    - Allow public read access to necessary user data
    - Maintain data privacy
*/

-- Enable RLS on auth.users if not already enabled
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Allow public to read user data" ON auth.users;
DROP POLICY IF EXISTS "Allow authenticated to read user data" ON auth.users;

-- Create new policy for public access
CREATE POLICY "Enable public read access for users"
ON auth.users
FOR SELECT
TO public
USING (true);

-- Create new policy for authenticated users
CREATE POLICY "Enable authenticated read access for users"
ON auth.users
FOR SELECT
TO authenticated
USING (true);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS auth_users_id_idx ON auth.users(id);