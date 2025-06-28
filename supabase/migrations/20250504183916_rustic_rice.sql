/*
  # Create blog-media storage bucket

  1. Changes
    - Creates a new storage bucket for blog media files
    - Sets up storage policies for authenticated users
    - Enables public access for reading files
  
  2. Security
    - Only authenticated users can upload/modify files
    - Public read access for serving images/videos
*/

-- Create the storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-media', 'blog-media', true)
ON CONFLICT (id) DO NOTHING;

-- Create policy to allow authenticated users to upload files
CREATE POLICY "Allow authenticated users to upload files"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'blog-media');

-- Create policy to allow authenticated users to update their files
CREATE POLICY "Allow authenticated users to update their files"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'blog-media');

-- Create policy to allow authenticated users to delete their files
CREATE POLICY "Allow authenticated users to delete their files"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'blog-media');

-- Create policy to allow public read access to files
CREATE POLICY "Allow public read access to files"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'blog-media');