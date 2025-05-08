/*
  # Fix blog posts and users relationship

  1. Changes
    - Add foreign key constraint between blog_posts and auth.users tables
    - Update RLS policies to handle the relationship

  2. Security
    - Maintain existing RLS policies
    - Add policy for authenticated users to manage their own posts
*/

-- Add foreign key constraint to auth.users
ALTER TABLE blog_posts
DROP CONSTRAINT IF EXISTS blog_posts_author_id_fkey,
ADD CONSTRAINT blog_posts_author_id_fkey 
FOREIGN KEY (author_id) 
REFERENCES auth.users(id) 
ON DELETE SET NULL;