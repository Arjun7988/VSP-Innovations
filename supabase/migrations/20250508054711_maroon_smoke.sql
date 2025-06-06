-- Add position column to team_members table
ALTER TABLE team_members 
ADD COLUMN IF NOT EXISTS position integer DEFAULT 0;

-- Create index for better performance when ordering by position
CREATE INDEX IF NOT EXISTS team_members_position_idx ON team_members(position);