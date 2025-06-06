/*
  # Fix blog categories policies

  1. Changes
    - Drop all existing policies
    - Create new policies for public read access and admin management
    - Add performance indexes
  
  2. Security
    - Enable RLS on blog_categories table
    - Allow public read access to active categories
    - Allow admin users to manage all categories
*/

-- Drop ALL existing policies
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Anyone can read categories" ON blog_categories;
  DROP POLICY IF EXISTS "Enable admin category management" ON blog_categories;
  DROP POLICY IF EXISTS "Authenticated users can manage categories" ON blog_categories;
  DROP POLICY IF EXISTS "Admins can manage categories" ON blog_categories;
  DROP POLICY IF EXISTS "Public can read active categories" ON blog_categories;
  DROP POLICY IF EXISTS "Admins can manage all categories" ON blog_categories;
END $$;

-- Enable RLS
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;

-- Add new policies
CREATE POLICY "categories_public_read"
ON blog_categories
FOR SELECT
TO public
USING (is_active = true);

CREATE POLICY "categories_admin_all"
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