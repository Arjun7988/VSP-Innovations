/*
  # Add is_active column to blog_posts table

  1. Changes
    - Add is_active column to blog_posts table with default value true
    - Update existing rows to have is_active = true
  
  2. Security
    - Maintain existing RLS policies
*/

-- Add is_active column if it doesn't exist
ALTER TABLE blog_posts 
ADD COLUMN IF NOT EXISTS is_active boolean DEFAULT true;

-- Update any existing rows to have is_active = true
UPDATE blog_posts 
SET is_active = true 
WHERE is_active IS NULL;