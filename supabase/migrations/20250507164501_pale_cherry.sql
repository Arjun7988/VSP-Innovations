/*
  # Create testimonials table and policies

  1. New Tables
    - `testimonials` table for storing testimonial data
      - `id` (uuid, primary key)
      - `name` (text)
      - `role` (text)
      - `text` (text)
      - `rating` (integer)
      - `is_active` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS on testimonials table
    - Add policies for public read access
    - Add policies for admin management
*/

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  text text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Add policies
CREATE POLICY "Public can read active testimonials"
ON testimonials
FOR SELECT
TO public
USING (is_active = true);

CREATE POLICY "Admins can manage testimonials"
ON testimonials
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
CREATE INDEX IF NOT EXISTS testimonials_is_active_idx ON testimonials(is_active);
CREATE INDEX IF NOT EXISTS testimonials_created_at_idx ON testimonials(created_at);