/*
  # Fix Blog Posts and Users Relationship

  1. Changes
    - Drop existing foreign key constraint
    - Add proper foreign key relationship to auth.users
    - Update policies for proper access
  
  2. Security
    - Enable RLS on auth.users
    - Allow proper access to user data
*/

-- Enable RLS on auth.users
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Enable read access for users" ON auth.users;
DROP POLICY IF EXISTS "Allow reading user data" ON auth.users;

-- Create policy to allow reading auth.users data
CREATE POLICY "Enable read access for users"
ON auth.users
FOR SELECT
TO authenticated
USING (true);

-- Drop existing foreign key if it exists
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

-- Grant necessary permissions
GRANT USAGE ON SCHEMA auth TO authenticated;
GRANT USAGE ON SCHEMA auth TO anon;
GRANT SELECT ON auth.users TO authenticated;
GRANT SELECT ON auth.users TO anon;