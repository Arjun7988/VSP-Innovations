/*
  # Fix blog categories and permissions

  1. Changes
    - Remove all existing categories
    - Update policies to ensure only admin-added categories are shown
    - Add index for better performance
  
  2. Security
    - Only allow admins to manage categories
    - Public can only read active categories
*/

-- First, delete all existing categories
DELETE FROM blog_categories;

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can read categories" ON blog_categories;
DROP POLICY IF EXISTS "Allow public read access to categories" ON blog_categories;
DROP POLICY IF EXISTS "Enable admin category management" ON blog_categories;

-- Create new policies
CREATE POLICY "Anyone can read active categories"
ON blog_categories
FOR SELECT
TO public
USING (is_active = true);

CREATE POLICY "Admins can manage categories"
ON blog_categories
FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1
    FROM auth.users
    WHERE auth.users.id = auth.uid() 
    AND (auth.users.raw_user_meta_data->>'role')::text = 'admin'
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1
    FROM auth.users
    WHERE auth.users.id = auth.uid() 
    AND (auth.users.raw_user_meta_data->>'role')::text = 'admin'
  )
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS blog_categories_is_active_idx ON blog_categories(is_active);