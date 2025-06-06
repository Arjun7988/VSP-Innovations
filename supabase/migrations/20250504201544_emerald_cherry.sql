/*
  # Fix infinite recursion in admins policy

  1. Changes
    - Remove the recursive policy on admins table
    - Add a simpler policy that checks auth.uid() directly
    
  2. Security
    - Maintains RLS protection
    - Allows authenticated users to read their own admin record
    - Prevents infinite recursion by removing the subquery
*/

-- Drop the existing policy that's causing recursion
DROP POLICY IF EXISTS "Enable admin read access" ON admins;

-- Create a new, simpler policy
CREATE POLICY "Enable admin read access"
ON admins
FOR SELECT
TO authenticated
USING (auth.uid() = id);