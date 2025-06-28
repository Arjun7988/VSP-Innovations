/*
  # Fix Blog Posts and Users Relationship

  1. Changes
    - Enable RLS on auth.users table
    - Drop existing problematic policies
    - Set up proper foreign key relationship
    - Create new policies for blog posts
  
  2. Security
    - Maintain RLS protection
    - Allow proper access to user data
    - Enable post management for authors and admins
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

-- Ensure author_id column exists and is properly typed
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'blog_posts' 
    AND column_name = 'author_id' 
    AND data_type = 'uuid'
  ) THEN
    ALTER TABLE blog_posts 
    ADD COLUMN author_id uuid;
  END IF;
END $$;

-- Add foreign key constraint to auth.users
ALTER TABLE blog_posts
ADD CONSTRAINT blog_posts_author_id_fkey 
FOREIGN KEY (author_id) 
REFERENCES auth.users(id) 
ON DELETE SET NULL;

-- Create index on author_id
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

-- Ensure is_active column exists
ALTER TABLE blog_posts 
ADD COLUMN IF NOT EXISTS is_active boolean DEFAULT true;

-- Update any existing rows to have is_active = true
UPDATE blog_posts 
SET is_active = true 
WHERE is_active IS NULL;