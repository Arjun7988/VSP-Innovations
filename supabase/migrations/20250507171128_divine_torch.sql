/*
  # Update portfolio table schema

  1. Changes
    - Add client_name column for storing client information
    - Add comments column for additional project notes
    - Add client_image_url column for client logos
    - Rename live_url to website_url for clarity
    - Create storage bucket for portfolio images
  
  2. Security
    - Set up proper storage policies for portfolio images
    - Maintain existing RLS policies
*/

-- Add new columns to portfolio table
ALTER TABLE portfolio 
ADD COLUMN IF NOT EXISTS client_name text,
ADD COLUMN IF NOT EXISTS comments text,
ADD COLUMN IF NOT EXISTS client_image_url text;

-- Rename live_url to website_url if it exists
DO $$ 
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'portfolio' AND column_name = 'live_url'
  ) THEN
    ALTER TABLE portfolio RENAME COLUMN live_url TO website_url;
  END IF;
END $$;

-- Create storage bucket for portfolio images if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('portfolio-images', 'portfolio-images', true)
ON CONFLICT (id) DO NOTHING;

-- Create policies for portfolio-images bucket
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE policyname = 'Allow authenticated users to upload portfolio images'
    AND tablename = 'objects'
    AND schemaname = 'storage'
  ) THEN
    CREATE POLICY "Allow authenticated users to upload portfolio images"
    ON storage.objects
    FOR INSERT
    TO authenticated
    WITH CHECK (bucket_id = 'portfolio-images');
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE policyname = 'Allow authenticated users to update portfolio images'
    AND tablename = 'objects'
    AND schemaname = 'storage'
  ) THEN
    CREATE POLICY "Allow authenticated users to update portfolio images"
    ON storage.objects
    FOR UPDATE
    TO authenticated
    USING (bucket_id = 'portfolio-images')
    WITH CHECK (bucket_id = 'portfolio-images');
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE policyname = 'Allow authenticated users to delete portfolio images'
    AND tablename = 'objects'
    AND schemaname = 'storage'
  ) THEN
    CREATE POLICY "Allow authenticated users to delete portfolio images"
    ON storage.objects
    FOR DELETE
    TO authenticated
    USING (bucket_id = 'portfolio-images');
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE policyname = 'Allow public to read portfolio images'
    AND tablename = 'objects'
    AND schemaname = 'storage'
  ) THEN
    CREATE POLICY "Allow public to read portfolio images"
    ON storage.objects
    FOR SELECT
    TO public
    USING (bucket_id = 'portfolio-images');
  END IF;
END $$;

-- Update storage bucket configuration
UPDATE storage.buckets
SET public = true,
    file_size_limit = 10485760, -- 10MB in bytes
    allowed_mime_types = ARRAY[
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'image/svg+xml'
    ]
WHERE id = 'portfolio-images';