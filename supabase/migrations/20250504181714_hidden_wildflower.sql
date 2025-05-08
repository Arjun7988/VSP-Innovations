-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Admins can read their own data" ON admins;
DROP POLICY IF EXISTS "Anyone can read categories" ON blog_categories;
DROP POLICY IF EXISTS "Authenticated users can manage categories" ON blog_categories;
DROP POLICY IF EXISTS "Anyone can read blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can manage blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Allow public to create comments" ON blog_comments;
DROP POLICY IF EXISTS "Allow public to read approved comments" ON blog_comments;
DROP POLICY IF EXISTS "Allow authenticated users to manage comments" ON blog_comments;

-- Create admins table
CREATE TABLE IF NOT EXISTS admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  created_at timestamptz DEFAULT now(),
  last_login timestamptz
);

-- Create blog_categories table
CREATE TABLE IF NOT EXISTS blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create blog_posts table
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

-- Create blog_comments table
CREATE TABLE IF NOT EXISTS blog_comments (
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
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_comments ENABLE ROW LEVEL SECURITY;

-- Policies for admins
CREATE POLICY "Admins can read their own data"
ON admins
FOR SELECT
TO authenticated
USING (auth.uid() = id);

-- Policies for blog_categories
CREATE POLICY "Anyone can read categories"
ON blog_categories
FOR SELECT
TO public
USING (true);

CREATE POLICY "Authenticated users can manage categories"
ON blog_categories
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Policies for blog_posts
CREATE POLICY "Anyone can read blog posts"
ON blog_posts
FOR SELECT
TO public
USING (true);

CREATE POLICY "Authenticated users can manage blog posts"
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