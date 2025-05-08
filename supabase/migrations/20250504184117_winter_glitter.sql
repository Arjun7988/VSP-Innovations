/*
  # Fix Admin Policies

  1. Changes
    - Drop existing conflicting policies
    - Recreate admin policies with proper checks
    - Ensure no duplicate policies
  
  2. Security
    - Maintain RLS protection
    - Ensure proper admin access control
*/

-- Drop existing policies if they exist
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Admins can read their own data" ON admins;
  DROP POLICY IF EXISTS "Admins can manage blog posts" ON blog_posts;
  DROP POLICY IF EXISTS "Admins can manage categories" ON blog_categories;
END $$;

-- Create new admin policies
CREATE POLICY "Enable admin read access"
ON admins
FOR SELECT
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Enable admin blog post management"
ON blog_posts
FOR ALL
TO authenticated
USING (EXISTS (
  SELECT 1 FROM admins 
  WHERE admins.id = auth.uid()
))
WITH CHECK (EXISTS (
  SELECT 1 FROM admins 
  WHERE admins.id = auth.uid()
));

CREATE POLICY "Enable admin category management"
ON blog_categories
FOR ALL
TO authenticated
USING (EXISTS (
  SELECT 1 FROM admins 
  WHERE admins.id = auth.uid()
))
WITH CHECK (EXISTS (
  SELECT 1 FROM admins 
  WHERE admins.id = auth.uid()
));