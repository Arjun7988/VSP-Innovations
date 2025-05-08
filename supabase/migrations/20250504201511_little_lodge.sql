/*
  # Fix blog_posts author relationship

  1. Changes
    - Drop existing foreign key constraint
    - Add is_active column to blog_posts
    - Update author_id to reference admins table
    - Preserve existing data
  
  2. Security
    - Maintain referential integrity
    - Handle NULL values appropriately
*/

-- First, add is_active column if it doesn't exist
ALTER TABLE blog_posts 
ADD COLUMN IF NOT EXISTS is_active boolean DEFAULT true;

-- Drop the existing foreign key constraint if it exists
ALTER TABLE blog_posts 
DROP CONSTRAINT IF EXISTS blog_posts_author_id_fkey;

-- Set any invalid author_ids to NULL
UPDATE blog_posts
SET author_id = NULL
WHERE author_id NOT IN (SELECT id FROM admins);

-- Add the foreign key constraint
ALTER TABLE blog_posts
ADD CONSTRAINT blog_posts_author_id_fkey 
FOREIGN KEY (author_id) 
REFERENCES admins(id)
ON DELETE SET NULL;