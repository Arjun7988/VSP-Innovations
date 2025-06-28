-- Drop the existing foreign key constraint if it exists
ALTER TABLE blog_posts 
DROP CONSTRAINT IF EXISTS blog_posts_author_id_fkey;

-- Update the author_id column to reference auth.users instead of admins
ALTER TABLE blog_posts
  ALTER COLUMN author_id TYPE uuid,
  ADD CONSTRAINT blog_posts_author_id_fkey 
  FOREIGN KEY (author_id) 
  REFERENCES auth.users(id)
  ON DELETE SET NULL;

-- Update storage.objects policy to allow larger file uploads
UPDATE storage.buckets
SET public = true,
    file_size_limit = 104857600, -- 100MB in bytes
    allowed_mime_types = ARRAY[
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'video/mp4'
    ]
WHERE id = 'blog-media';