-- Add image_url column to events table
ALTER TABLE events ADD COLUMN IF NOT EXISTS image_url text;

-- Create a storage bucket for event posters
INSERT INTO storage.buckets (id, name, public) 
VALUES ('event-posters', 'event-posters', true)
ON CONFLICT (id) DO NOTHING;

-- Set up security policies for the storage bucket
-- Allow public read access to event posters
CREATE POLICY "Public Access" 
ON storage.objects FOR SELECT 
USING ( bucket_id = 'event-posters' );

-- Allow authenticated users to upload event posters
CREATE POLICY "Authenticated users can upload" 
ON storage.objects FOR INSERT 
WITH CHECK ( bucket_id = 'event-posters' AND auth.role() = 'authenticated' );

-- Allow authenticated users to update their uploads
CREATE POLICY "Authenticated users can update" 
ON storage.objects FOR UPDATE
USING ( bucket_id = 'event-posters' AND auth.role() = 'authenticated' );

-- Allow authenticated users to delete their uploads
CREATE POLICY "Authenticated users can delete" 
ON storage.objects FOR DELETE
USING ( bucket_id = 'event-posters' AND auth.role() = 'authenticated' );
