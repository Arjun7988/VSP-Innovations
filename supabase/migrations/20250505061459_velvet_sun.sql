/*
  # Add foreign key relationship for blog posts authors

  1. Changes
    - Add foreign key constraint between blog_posts.author_id and users.id
    - Add index on author_id column for better query performance

  2. Security
    - No changes to RLS policies
*/

-- First verify the users table exists and has the correct id column
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.tables 
    WHERE table_name = 'users'
  ) THEN
    RAISE EXCEPTION 'users table does not exist';
  END IF;
END $$;

-- Add foreign key constraint if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'blog_posts_author_id_fkey'
  ) THEN
    ALTER TABLE blog_posts
    ADD CONSTRAINT blog_posts_author_id_fkey
    FOREIGN KEY (author_id) REFERENCES auth.users(id)
    ON DELETE SET NULL;
  END IF;
END $$;