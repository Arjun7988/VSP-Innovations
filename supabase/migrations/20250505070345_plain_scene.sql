/*
  # Fix blog posts author relationship and policies

  1. Changes
    - Update foreign key relationship between blog_posts and auth.users
    - Add index for better query performance
    - Add policy for public user data access
  
  2. Security
    - Allow public access to user data
    - Maintain existing blog post policies
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

-- Add policy for reading user data
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE policyname = 'Allow public to read user data'
    AND tablename = 'users'
    AND schemaname = 'auth'
  ) THEN
    CREATE POLICY "Allow public to read user data"
    ON auth.users
    FOR SELECT
    TO public
    USING (true);
  END IF;
END $$;