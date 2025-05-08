/*
  # Fix blog posts author relationship

  1. Changes
    - Drop existing policy and foreign key constraint
    - Update author_id column to reference auth.users
    - Add new foreign key constraint
    - Create new policy using auth.users instead of users table
  
  2. Security
    - Maintain RLS protection
    - Allow authors to manage their own posts
    - Allow admins to manage all posts
*/

-- Drop existing policy that depends on author_id
DROP POLICY IF EXISTS "Authors can manage own posts" ON blog_posts;

-- Drop existing foreign key constraint if it exists
ALTER TABLE blog_posts 
DROP CONSTRAINT IF EXISTS blog_posts_author_id_fkey;

-- Update author_id column to reference auth.users
ALTER TABLE blog_posts
ALTER COLUMN author_id TYPE uuid USING author_id::uuid;

-- Add foreign key constraint to auth.users
ALTER TABLE blog_posts
ADD CONSTRAINT blog_posts_author_id_fkey 
FOREIGN KEY (author_id) 
REFERENCES auth.users(id) 
ON DELETE SET NULL;

-- Recreate the policy
CREATE POLICY "Authors can manage own posts"
ON blog_posts
FOR ALL
TO authenticated
USING (
  (auth.uid() = author_id) OR 
  (EXISTS (
    SELECT 1
    FROM auth.users
    WHERE auth.users.id = auth.uid() 
    AND (auth.users.raw_user_meta_data->>'role')::text = 'admin'
  ))
)
WITH CHECK (
  (auth.uid() = author_id) OR 
  (EXISTS (
    SELECT 1
    FROM auth.users
    WHERE auth.users.id = auth.uid() 
    AND (auth.users.raw_user_meta_data->>'role')::text = 'admin'
  ))
);