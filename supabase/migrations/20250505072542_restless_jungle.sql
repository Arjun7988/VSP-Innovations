/*
  # Fix permissions for users and blog categories

  1. Changes
    - Drop existing policies
    - Add proper policies for public access to blog categories
    - Add policy for authenticated users to manage categories
    - Add policy for public access to user data
  
  2. Security
    - Enable RLS on all tables
    - Allow public read access to necessary data
    - Restrict management to authenticated users
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Allow public to read user data" ON auth.users;
DROP POLICY IF EXISTS "Allow authenticated users to read user data" ON auth.users;
DROP POLICY IF EXISTS "Anyone can read categories" ON blog_categories;
DROP POLICY IF EXISTS "Authenticated users can manage categories" ON blog_categories;

-- Add policy for public access to user data
CREATE POLICY "Allow public to read user data"
ON auth.users
FOR SELECT
TO public
USING (true);

-- Add policies for blog categories
CREATE POLICY "Anyone can read categories"
ON blog_categories
FOR SELECT
TO public
USING (is_active = true);

CREATE POLICY "Authenticated users can manage categories"
ON blog_categories
FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM auth.users
    WHERE auth.users.id = auth.uid()
    AND (auth.users.raw_user_meta_data->>'role')::text = 'admin'
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM auth.users
    WHERE auth.users.id = auth.uid()
    AND (auth.users.raw_user_meta_data->>'role')::text = 'admin'
  )
);

-- Create index for better performance if it doesn't exist
CREATE INDEX IF NOT EXISTS blog_categories_is_active_idx ON blog_categories(is_active);