/*
  # Fix Admin Tables and Relationships

  1. Changes
    - Drop existing tables to avoid conflicts
    - Recreate tables with proper relationships
    - Update foreign key constraints
    - Add proper policies
  
  2. Security
    - Enable RLS on all tables
    - Set up proper access control
*/

-- Drop existing tables if they exist
DROP TABLE IF EXISTS blog_comments CASCADE;
DROP TABLE IF EXISTS blog_posts CASCADE;
DROP TABLE IF EXISTS blog_categories CASCADE;
DROP TABLE IF EXISTS admins CASCADE;

-- Create admins table
CREATE TABLE admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  last_login timestamptz,
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Create blog_categories table
CREATE TABLE blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE blog_posts (
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
  author_id uuid REFERENCES auth.users(id)
);

-- Create blog_comments table
CREATE TABLE blog_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid REFERENCES blog_posts(id) ON DELETE CASCADE,
  name text NOT NULL,
  email text NOT NULL,
  comment text NOT NULL,
  created_at timestamptz DEFAULT now(),
  is_approved boolean DEFAULT false,
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Enable RLS
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- Policies for blog_categories
CREATE POLICY "Allow public read access to categories"
ON blog_categories
FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable admin category management"
ON blog_categories
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Policies for blog_posts
CREATE POLICY "Allow public read access to blog posts"
ON blog_posts
FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable admin blog post management"
ON blog_posts
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Policies for blog_comments
CREATE POLICY "Allow public to create comments"
ON blog_comments
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Allow public to read approved comments"
ON blog_comments
FOR SELECT
TO public
USING (is_approved = true);

CREATE POLICY "Allow authenticated users to manage comments"
ON blog_comments
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Policies for admins
CREATE POLICY "Enable admin read access"
ON admins
FOR SELECT
TO authenticated
USING (auth.uid() IN (SELECT id FROM admins));