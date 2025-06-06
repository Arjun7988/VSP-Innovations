/*
  # Fix blog categories permissions

  1. Changes
    - Drop existing policies
    - Create new policies for public and authenticated access
    - Add proper RLS policies
  
  2. Security
    - Enable RLS on blog_categories table
    - Allow public read access
    - Allow authenticated users to manage categories
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can read categories" ON blog_categories;
DROP POLICY IF EXISTS "Enable admin category management" ON blog_categories;
DROP POLICY IF EXISTS "Authenticated users can manage categories" ON blog_categories;

-- Enable RLS
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;

-- Add policies for blog_categories
CREATE POLICY "Anyone can read categories"
ON blog_categories
FOR SELECT
TO public
USING (true);

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