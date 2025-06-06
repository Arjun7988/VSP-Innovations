/*
  # Remove dummy data from blog categories

  1. Changes
    - Delete all existing categories
    - Add initial categories for VSP Innovations blog
  
  2. Security
    - Maintain existing RLS policies
*/

-- First, delete all existing categories
DELETE FROM blog_categories;

-- Add initial categories
INSERT INTO blog_categories (name, is_active) VALUES
('AI & Machine Learning', true),
('Technology', true),
('Business Automation', true),
('Digital Transformation', true),
('Industry Insights', true),
('Company News', true);