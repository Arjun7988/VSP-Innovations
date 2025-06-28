/*
  # Fix blog categories policies

  1. Changes
    - Drop existing policies
    - Create new policies for public read and admin management
    - Add performance indexes
  
  2. Security
    - Enable RLS
    - Allow public read access
    - Restrict management to admin users
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can read categories" ON blog_categories;
DROP POLICY IF EXISTS "Enable admin category management" ON blog_categories;
DROP POLICY IF EXISTS "Authenticated users can manage categories" ON blog_categories;
DROP POLICY IF EXISTS "Admins can manage categories" ON blog_categories;

-- Enable RLS
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;

-- Add policies for blog_categories
CREATE POLICY "Anyone can read categories"
ON blog_categories
FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable admin category management"
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

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS blog_categories_name_idx ON blog_categories(name);
CREATE INDEX IF NOT EXISTS blog_categories_is_active_idx ON blog_categories(is_active);