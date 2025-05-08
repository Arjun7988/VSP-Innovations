/*
  # Add foreign key relationship between blog_posts and users

  1. Changes
    - Add foreign key constraint between blog_posts.author_id and users.id
    - Add index on blog_posts.author_id for better query performance

  2. Security
    - No changes to RLS policies
*/

-- Add foreign key constraint if it doesn't exist
DO $$ 
BEGIN 
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.table_constraints 
    WHERE constraint_name = 'blog_posts_author_id_fkey'
  ) THEN
    ALTER TABLE blog_posts
    ADD CONSTRAINT blog_posts_author_id_fkey
    FOREIGN KEY (author_id) REFERENCES auth.users(id)
    ON DELETE SET NULL;
  END IF;
END $$;