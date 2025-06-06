/*
  # Create team members table and policies

  1. New Tables
    - `team_members` table for storing team information
      - `id` (uuid, primary key)
      - `name` (text)
      - `designation` (text)
      - `image_url` (text)
      - `linkedin_url` (text)
      - `instagram_url` (text)
      - `facebook_url` (text)
      - `is_active` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS
    - Allow public read access to active members
    - Allow admin management
*/

-- Create team_members table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  designation text NOT NULL,
  image_url text,
  linkedin_url text,
  instagram_url text,
  facebook_url text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- Add policies
CREATE POLICY "Public can read active team members"
ON team_members
FOR SELECT
TO public
USING (is_active = true);

CREATE POLICY "Admins can manage team members"
ON team_members
FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM auth.users
    WHERE auth.users.id = auth.uid()
    AND (auth.users.raw_user_meta_data->>'role')::text = 'admin'
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM auth.users
    WHERE auth.users.id = auth.uid()
    AND (auth.users.raw_user_meta_data->>'role')::text = 'admin'
  )
);

-- Create storage bucket for team member images if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('team-images', 'team-images', true)
ON CONFLICT (id) DO NOTHING;

-- Update storage bucket configuration
UPDATE storage.buckets
SET public = true,
    file_size_limit = 10485760, -- 10MB in bytes
    allowed_mime_types = ARRAY[
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp'
    ]
WHERE id = 'team-images';

-- Create policies for team-images bucket
CREATE POLICY "Allow authenticated users to upload team images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'team-images');

CREATE POLICY "Allow authenticated users to update team images"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'team-images')
WITH CHECK (bucket_id = 'team-images');

CREATE POLICY "Allow authenticated users to delete team images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'team-images');

CREATE POLICY "Allow public to read team images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'team-images');