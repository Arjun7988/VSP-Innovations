/*
  # Fix Schema Relationships

  1. Changes
    - Drop existing foreign key constraints
    - Update blog_posts table to properly reference auth.users
    - Add necessary indexes and policies
    - Enable proper access to user data
  
  2. Security
    - Maintain RLS protection
    - Allow public read access to necessary data
*/

-- Drop existing foreign key constraint
ALTER TABLE blog_posts 
DROP CONSTRAINT IF EXISTS blog_posts_author_id_fkey;

-- Add foreign key constraint to auth.users
ALTER TABLE blog_posts
ADD CONSTRAINT blog_posts_author_id_fkey 
FOREIGN KEY (author_id) 
REFERENCES auth.users(id) 
ON DELETE SET NULL;

-- Create index for better performance
CREATE INDEX IF NOT EXISTS blog_posts_author_id_idx ON blog_posts(author_id);

-- Enable RLS on auth.users if not already enabled
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public to read user data" ON auth.users;
DROP POLICY IF EXISTS "Allow authenticated to read user data" ON auth.users;

-- Add policies for reading user data
CREATE POLICY "Allow public to read user data"
ON auth.users
FOR SELECT
TO public
USING (true);

CREATE POLICY "Allow authenticated to read user data"
ON auth.users
FOR SELECT
TO authenticated
USING (true);

-- Update blog_posts policies
DROP POLICY IF EXISTS "Authors can manage own posts" ON blog_posts;

CREATE POLICY "Authors can manage own posts"
ON blog_posts
FOR ALL
TO authenticated
USING (
  auth.uid() = author_id OR 
  EXISTS (
    SELECT 1
    FROM auth.users
    WHERE auth.users.id = auth.uid() 
    AND (auth.users.raw_user_meta_data->>'role')::text = 'admin'
  )
)
WITH CHECK (
  auth.uid() = author_id OR 
  EXISTS (
    SELECT 1
    FROM auth.users
    WHERE auth.users.id = auth.uid() 
    AND (auth.users.raw_user_meta_data->>'role')::text = 'admin'
  )
);