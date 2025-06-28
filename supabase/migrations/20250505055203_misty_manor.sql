/*
  # Add foreign key relationship for blog posts authors

  1. Changes
    - Add foreign key constraint between blog_posts.author_id and auth.users.id
    - This enables proper joins between blog posts and their authors

  2. Security
    - No changes to RLS policies
*/

-- Add foreign key constraint for author_id
ALTER TABLE blog_posts
DROP CONSTRAINT IF EXISTS blog_posts_author_id_fkey,
ADD CONSTRAINT blog_posts_author_id_fkey 
FOREIGN KEY (author_id) 
REFERENCES auth.users(id) 
ON DELETE SET NULL;