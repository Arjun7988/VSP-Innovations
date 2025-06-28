/*
  # Update blog categories permissions

  1. Changes
    - Add RLS policies for blog categories management
    - Allow authenticated users with admin role to manage categories
    - Allow public users to read active categories

  2. Security
    - Enable RLS on blog_categories table
    - Add policies for:
      - Admin users can perform all operations
      - Public users can read active categories
*/

-- First ensure RLS is enabled
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Anyone can read active categories" ON blog_categories;
DROP POLICY IF EXISTS "Anyone can read categories" ON blog_categories;
DROP POLICY IF EXISTS "Enable admin category management" ON blog_categories;

-- Create new policies
CREATE POLICY "Admins can manage categories"
ON blog_categories
FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM auth.users
    WHERE auth.users.id = auth.uid()
    AND auth.users.raw_user_meta_data->>'role' = 'admin'
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM auth.users
    WHERE auth.users.id = auth.uid()
    AND auth.users.raw_user_meta_data->>'role' = 'admin'
  )
);

-- Allow public read access to active categories
CREATE POLICY "Public can read active categories"
ON blog_categories
FOR SELECT
TO public
USING (is_active = true);