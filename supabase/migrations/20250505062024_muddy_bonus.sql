-- Drop existing policies that depend on author_id
DROP POLICY IF EXISTS "Authors can manage own posts" ON blog_posts;
DROP POLICY IF EXISTS "Anyone can read blog posts" ON blog_posts;

-- Drop existing foreign key constraint if it exists
ALTER TABLE blog_posts 
DROP CONSTRAINT IF EXISTS blog_posts_author_id_fkey;

-- Update author_id column to reference auth.users
ALTER TABLE blog_posts
ALTER COLUMN author_id TYPE uuid USING author_id::uuid;

-- Add foreign key constraint to auth.users
ALTER TABLE blog_posts
ADD CONSTRAINT blog_posts_author_id_fkey 
FOREIGN KEY (author_id) 
REFERENCES auth.users(id) 
ON DELETE SET NULL;

-- Create index for better performance
CREATE INDEX IF NOT EXISTS blog_posts_author_id_idx ON blog_posts(author_id);

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
  (auth.uid() = author_id) OR 
  (EXISTS (
    SELECT 1
    FROM auth.users
    WHERE auth.users.id = auth.uid() 
    AND (auth.users.raw_user_meta_data->>'role')::text = 'admin'
  ))
)
WITH CHECK (
  (auth.uid() = author_id) OR 
  (EXISTS (
    SELECT 1
    FROM auth.users
    WHERE auth.users.id = auth.uid() 
    AND (auth.users.raw_user_meta_data->>'role')::text = 'admin'
  ))
);