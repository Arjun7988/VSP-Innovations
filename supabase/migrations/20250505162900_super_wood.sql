/*
  # Fix blog posts author relationship

  1. Changes
    - Drop existing foreign key constraint
    - Add new foreign key constraint to reference auth.users
    - Update RLS policy to use auth.users
  
  2. Security
    - Maintain RLS protection
    - Allow authors to manage their own posts
    - Allow admins to manage all posts
*/

-- Drop existing foreign key constraint
ALTER TABLE blog_posts
DROP CONSTRAINT IF EXISTS blog_posts_author_id_fkey;

-- Add new foreign key constraint to reference auth.users
ALTER TABLE blog_posts
ADD CONSTRAINT blog_posts_author_id_fkey
FOREIGN KEY (author_id) REFERENCES auth.users(id) ON DELETE SET NULL;

-- Update RLS policy to use auth.users
DROP POLICY IF EXISTS "Authors can manage own posts" ON blog_posts;

CREATE POLICY "Authors can manage own posts"
ON blog_posts
FOR ALL
TO authenticated
USING (
  (auth.uid() = author_id) OR (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid() 
      AND (auth.users.raw_user_meta_data->>'role')::text = 'admin'
    )
  )
)
WITH CHECK (
  (auth.uid() = author_id) OR (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid() 
      AND (auth.users.raw_user_meta_data->>'role')::text = 'admin'
    )
  )
);