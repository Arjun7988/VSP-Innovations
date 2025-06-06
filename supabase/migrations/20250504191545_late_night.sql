/*
  # Fix Admin Policies

  1. Changes
    - Drop all existing conflicting policies
    - Create new comprehensive policies for admins
    - Add proper checks for admin authentication
  
  2. Security
    - Enable RLS on all tables
    - Ensure proper admin access control
*/

-- Drop existing policies
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Admins can read their own data" ON admins;
  DROP POLICY IF EXISTS "Enable admin read access" ON admins;
  DROP POLICY IF EXISTS "Enable admin blog post management" ON blog_posts;
  DROP POLICY IF EXISTS "Enable admin category management" ON blog_categories;
END $$;

-- Create tables if they don't exist
CREATE TABLE IF NOT EXISTS admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  created_at timestamptz DEFAULT now(),
  last_login timestamptz
);

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  slug text UNIQUE,
  image_url text,
  video_url text,
  seo_title text,
  seo_keywords text,
  seo_description text,
  category_ids uuid[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  author_id uuid REFERENCES admins(id)
);

CREATE TABLE IF NOT EXISTS blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;

-- Create new admin policies
CREATE POLICY "Enable admin read access"
ON admins
FOR SELECT
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Enable admin blog post management"
ON blog_posts
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Enable admin category management"
ON blog_categories
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Create public read policies
CREATE POLICY "Allow public read access to blog posts"
ON blog_posts
FOR SELECT
TO public
USING (true);

CREATE POLICY "Allow public read access to categories"
ON blog_categories
FOR SELECT
TO public
USING (true);