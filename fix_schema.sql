-- 1. Add image_url column safely
-- This block checks if the column exists before adding it to avoid errors
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'events' AND column_name = 'image_url') THEN
        ALTER TABLE public.events ADD COLUMN image_url text;
    END IF;
END $$;

-- 2. Create the storage bucket safely
-- This creates the bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('event-posters', 'event-posters', true)
ON CONFLICT (id) DO NOTHING;

-- 3. Clean up existing policies to prevent conflicts
-- We drop them first so we can recreate them without "policy already exists" errors
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete" ON storage.objects;

-- 4. Create new policies
-- Allow anyone to view the images (needed for the public website)
CREATE POLICY "Public Access" 
ON storage.objects FOR SELECT 
USING ( bucket_id = 'event-posters' );

-- Allow any logged-in user (admin) to upload images
CREATE POLICY "Authenticated users can upload" 
ON storage.objects FOR INSERT 
WITH CHECK ( bucket_id = 'event-posters' AND auth.role() = 'authenticated' );

-- Allow any logged-in user (admin) to update images
CREATE POLICY "Authenticated users can update" 
ON storage.objects FOR UPDATE
USING ( bucket_id = 'event-posters' AND auth.role() = 'authenticated' );

-- Allow any logged-in user (admin) to delete images
CREATE POLICY "Authenticated users can delete" 
ON storage.objects FOR DELETE
USING ( bucket_id = 'event-posters' AND auth.role() = 'authenticated' );
