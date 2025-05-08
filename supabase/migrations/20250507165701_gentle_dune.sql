/*
  # Create portfolio table and policies

  1. New Tables
    - `portfolio` table for storing portfolio items
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `image_url` (text)
      - `category` (text)
      - `technologies` (text[])
      - `live_url` (text)
      - `github_url` (text)
      - `is_active` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS
    - Allow public read access to active items
    - Allow admin management
*/

-- Create portfolio table
CREATE TABLE IF NOT EXISTS portfolio (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text,
  category text NOT NULL,
  technologies text[] DEFAULT '{}',
  live_url text,
  github_url text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;

-- Add policies
CREATE POLICY "Public can read active portfolio items"
ON portfolio
FOR SELECT
TO public
USING (is_active = true);

CREATE POLICY "Admins can manage portfolio"
ON portfolio
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

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS portfolio_is_active_idx ON portfolio(is_active);
CREATE INDEX IF NOT EXISTS portfolio_category_idx ON portfolio(category);
CREATE INDEX IF NOT EXISTS portfolio_created_at_idx ON portfolio(created_at);