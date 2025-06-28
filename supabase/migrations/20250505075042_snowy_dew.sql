/*
  # Fix blog posts author relationship

  1. Changes
    - Add foreign key relationship between blog_posts.author_id and auth.users.id
    - Add policy to allow authenticated users to read auth.users data

  2. Security
    - Add policy for reading auth.users data
*/

-- Create policy to allow reading auth.users data
CREATE POLICY "Allow reading user data"
  ON auth.users
  FOR SELECT
  TO authenticated
  USING (true);

-- Drop existing foreign key if it exists
DO $$ BEGIN
  IF EXISTS (
    SELECT 1 
    FROM information_schema.table_constraints 
    WHERE constraint_name = 'blog_posts_author_id_fkey'
  ) THEN
    ALTER TABLE blog_posts DROP CONSTRAINT blog_posts_author_id_fkey;
  END IF;
END $$;

-- Add foreign key relationship to auth.users
ALTER TABLE blog_posts
ADD CONSTRAINT blog_posts_author_id_fkey
FOREIGN KEY (author_id) REFERENCES auth.users(id) ON DELETE SET NULL;