-- Add is_active column to blog_categories table
ALTER TABLE blog_categories ADD COLUMN IF NOT EXISTS is_active boolean DEFAULT true;