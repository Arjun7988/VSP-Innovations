/*
  # Fix blog posts author relationship

  1. Changes
    - Drop existing foreign key constraint that references auth.users
    - Add new foreign key constraint to reference public.users table
    - Update the blog posts queries to use correct relationship

  2. Security
    - Maintain existing RLS policies
    - Ensure data integrity with foreign key constraint
*/

-- First drop the existing foreign key constraint
ALTER TABLE blog_posts 
DROP CONSTRAINT IF EXISTS blog_posts_author_id_fkey;

-- Add new foreign key constraint referencing public.users
ALTER TABLE blog_posts
ADD CONSTRAINT blog_posts_author_id_fkey 
FOREIGN KEY (author_id) 
REFERENCES users(id) 
ON DELETE SET NULL;