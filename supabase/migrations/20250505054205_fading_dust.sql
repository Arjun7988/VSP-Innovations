/*
  # Fix Blog Posts and Users Relationship

  1. Changes
    - Drop existing policies and constraints
    - Recreate foreign key relationship to auth.users
    - Add proper policies for post management
  
  2. Security
    - Enable RLS on auth.users
    - Allow authenticated users to read user data
    - Allow authors to manage their own posts
*/

-- First ensure we have the auth.users table accessible
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Allow authenticated users to read user data" ON auth.users;
DROP POLICY IF EXISTS "Authors can manage own posts" ON blog_posts;
DROP POLICY IF EXISTS "Enable admin blog post management" ON blog_posts;
DROP POLICY IF EXISTS "Anyone can read blog posts" ON blog_posts;

-- Drop existing foreign key if it exists
ALTER TABLE blog_posts 
DROP CONSTRAINT IF EXISTS blog_posts_author_id_fkey;

-- Add foreign key constraint to auth.users
ALTER TABLE blog_posts
ADD CONSTRAINT blog_posts_author_id_fkey 
FOREIGN KEY (author_id) 
REFERENCES auth.users(id) 
ON DELETE SET NULL;

-- Create index on author_id if it doesn't exist
CREATE INDEX IF NOT EXISTS blog_posts_author_id_idx ON blog_posts(author_id);

-- Add policies for auth.users
CREATE POLICY "Allow authenticated users to read user data"
ON auth.users
FOR SELECT
TO authenticated
USING (true);

-- Add policies for blog_posts
CREATE POLICY "Anyone can read blog posts"
ON blog_posts
FOR SELECT
TO public
USING (true);

CREATE POLICY "Authors can manage own posts"
ON blog_posts
FOR ALL
TO authenticated
USING (
  auth.uid() = author_id OR 
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND auth.users.raw_user_meta_data->>'role' = 'admin'
  )
)
WITH CHECK (
  auth.uid() = author_id OR 
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND auth.users.raw_user_meta_data->>'role' = 'admin'
  )
);