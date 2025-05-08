-- Drop existing policies and constraints
DROP POLICY IF EXISTS "Authors can manage own posts" ON blog_posts;
DROP POLICY IF EXISTS "Anyone can read blog posts" ON blog_posts;

ALTER TABLE blog_posts 
DROP CONSTRAINT IF EXISTS blog_posts_author_id_fkey;

-- Ensure author_id references auth.users
ALTER TABLE blog_posts
ADD CONSTRAINT blog_posts_author_id_fkey 
FOREIGN KEY (author_id) 
REFERENCES auth.users(id) 
ON DELETE SET NULL;

-- Create index for better performance
CREATE INDEX IF NOT EXISTS blog_posts_author_id_idx ON blog_posts(author_id);

-- Update storage bucket configuration
UPDATE storage.buckets
SET public = true,
    file_size_limit = 10485760, -- 10MB in bytes
    allowed_mime_types = ARRAY[
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'video/mp4'
    ]
WHERE id = 'blog-media';

-- Add policies for blog posts
CREATE POLICY "Anyone can read blog posts"
ON blog_posts
FOR SELECT
TO public
USING (true);

CREATE POLICY "Authors can manage own posts"
ON blog_posts
FOR ALL
TO authenticated
USING (
  auth.uid() = author_id OR 
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND auth.users.raw_user_meta_data->>'role' = 'admin'
  )
)
WITH CHECK (
  auth.uid() = author_id OR 
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND auth.users.raw_user_meta_data->>'role' = 'admin'
  )
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;