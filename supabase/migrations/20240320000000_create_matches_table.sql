-- Create matches table
CREATE TABLE IF NOT EXISTS matches (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    farmer_id UUID REFERENCES farmers(id) ON DELETE CASCADE,
    recipient_id UUID REFERENCES recipients(id) ON DELETE CASCADE,
    match_score DECIMAL(5,2) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected', 'completed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    UNIQUE(farmer_id, recipient_id)
);

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_matches_farmer_id ON matches(farmer_id);
CREATE INDEX IF NOT EXISTS idx_matches_recipient_id ON matches(recipient_id);
CREATE INDEX IF NOT EXISTS idx_matches_status ON matches(status);
CREATE INDEX IF NOT EXISTS idx_matches_created_at ON matches(created_at);

-- Add RLS policies
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;

-- Policy for farmers to view their matches
CREATE POLICY "Farmers can view their matches"
    ON matches FOR SELECT
    USING (
        farmer_id IN (
            SELECT id FROM farmers
            WHERE profile_id IN (
                SELECT id FROM profiles
                WHERE auth.uid() = user_id
            )
        )
    );

-- Policy for recipients to view their matches
CREATE POLICY "Recipients can view their matches"
    ON matches FOR SELECT
    USING (
        recipient_id IN (
            SELECT id FROM recipients
            WHERE profile_id IN (
                SELECT id FROM profiles
                WHERE auth.uid() = user_id
            )
        )
    );

-- Policy for updating match status
CREATE POLICY "Users can update their match status"
    ON matches FOR UPDATE
    USING (
        farmer_id IN (
            SELECT id FROM farmers
            WHERE profile_id IN (
                SELECT id FROM profiles
                WHERE auth.uid() = user_id
            )
        )
        OR
        recipient_id IN (
            SELECT id FROM recipients
            WHERE profile_id IN (
                SELECT id FROM profiles
                WHERE auth.uid() = user_id
            )
        )
    )
    WITH CHECK (
        farmer_id IN (
            SELECT id FROM farmers
            WHERE profile_id IN (
                SELECT id FROM profiles
                WHERE auth.uid() = user_id
            )
        )
        OR
        recipient_id IN (
            SELECT id FROM recipients
            WHERE profile_id IN (
                SELECT id FROM profiles
                WHERE auth.uid() = user_id
            )
        )
    );

-- Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_matches_updated_at
    BEFORE UPDATE ON matches
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 