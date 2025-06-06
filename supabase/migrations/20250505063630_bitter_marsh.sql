/*
  # Create users table and add RLS policies

  1. New Tables
    - `users` table for storing user information
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `raw_user_meta_data` (jsonb)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on users table
    - Add policies for user data access
    - Add policies for admin access
*/

-- Create users table if it doesn't exist
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  raw_user_meta_data jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on users table
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to read their own data
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Allow admins to read all user data
CREATE POLICY "Admins can read all user data"
  ON users
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid()
      AND (users.raw_user_meta_data->>'role')::text = 'admin'
    )
  );

-- Add index on email for faster lookups
CREATE INDEX IF NOT EXISTS users_email_idx ON users (email);

-- Add index on role for admin checks
CREATE INDEX IF NOT EXISTS users_role_idx ON users ((raw_user_meta_data->>'role'));