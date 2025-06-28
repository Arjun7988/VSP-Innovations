/*
  # Add foreign key relationship between blog_posts and users tables

  1. Changes
    - Add foreign key constraint between blog_posts.author_id and users.id
    - Add index on author_id for better query performance
    - Add RLS policy for users to manage their own posts

  2. Security
    - Add RLS policy for authors to manage their own posts
    - Maintain existing RLS policies
*/

-- First check if the author_id column exists and is of type uuid
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'blog_posts' 
    AND column_name = 'author_id' 
    AND data_type = 'uuid'
  ) THEN
    ALTER TABLE blog_posts 
    ADD COLUMN author_id uuid REFERENCES auth.users(id) ON DELETE SET NULL;
  END IF;
END $$;

-- Add index on author_id if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_indexes 
    WHERE tablename = 'blog_posts' 
    AND indexname = 'blog_posts_author_id_idx'
  ) THEN
    CREATE INDEX blog_posts_author_id_idx ON blog_posts(author_id);
  END IF;
END $$;

-- Add RLS policy for authors to manage their own posts if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'blog_posts' 
    AND policyname = 'Authors can manage own posts'
  ) THEN
    CREATE POLICY "Authors can manage own posts" 
    ON blog_posts 
    FOR ALL 
    TO authenticated 
    USING (auth.uid() = author_id)
    WITH CHECK (auth.uid() = author_id);
  END IF;
END $$;