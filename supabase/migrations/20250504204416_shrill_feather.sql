/*
  # Update blog comments default status

  1. Changes
    - Set default value of is_approved to true for blog_comments table
    - Update any existing comments to be approved
  
  2. Security
    - Maintain existing RLS policies
*/

-- Update the default value for is_approved column
ALTER TABLE blog_comments 
ALTER COLUMN is_approved SET DEFAULT true;

-- Update any existing comments to be approved
UPDATE blog_comments 
SET is_approved = true 
WHERE is_approved = false;