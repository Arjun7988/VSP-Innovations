/*
  # Create blog categories table

  1. New Tables
    - `blog_categories`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `blog_categories` table
    - Add policies for authenticated users to manage categories
*/

CREATE TABLE IF NOT EXISTS blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to read all categories
CREATE POLICY "Anyone can read categories" 
  ON blog_categories
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to insert categories
CREATE POLICY "Authenticated users can create categories" 
  ON blog_categories
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update their categories
CREATE POLICY "Authenticated users can update categories" 
  ON blog_categories
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to delete categories
CREATE POLICY "Authenticated users can delete categories" 
  ON blog_categories
  FOR DELETE
  TO authenticated
  USING (true);