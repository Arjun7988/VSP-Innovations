/*
  # Add position field to team_members table

  1. Changes
    - Add position column to team_members table
    - This allows ordering team members by their position
    - Default value is 0 (no specific position)
  
  2. Security
    - Maintain existing RLS policies
*/

-- Add position column to team_members table
ALTER TABLE team_members 
ADD COLUMN IF NOT EXISTS position integer DEFAULT 0;

-- Create index for better performance when ordering by position
CREATE INDEX IF NOT EXISTS team_members_position_idx ON team_members(position);