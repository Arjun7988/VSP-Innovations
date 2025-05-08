/*
  # Fix blog posts author relationship

  1. Changes
    - Add foreign key constraint between blog_posts.author_id and auth.users.id
    - Add policy to allow authenticated users to read auth.users data

  2. Security
    - Enable RLS on auth.users table
    - Add policy for authenticated users to read user data
*/

-- Add foreign key constraint
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.table_constraints 
    WHERE constraint_name = 'blog_posts_author_id_fkey'
  ) THEN
    ALTER TABLE blog_posts
    ADD CONSTRAINT blog_posts_author_id_fkey 
    FOREIGN KEY (author_id) 
    REFERENCES auth.users(id) ON DELETE SET NULL;
  END IF;
END $$;

-- Enable RLS on auth.users
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Add policy to allow authenticated users to read user data
CREATE POLICY "Allow authenticated users to read user data"
ON auth.users
FOR SELECT
TO authenticated
USING (true);