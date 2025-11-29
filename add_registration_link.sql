-- Add registration_link column to events table safely
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'events' AND column_name = 'registration_link') THEN
        ALTER TABLE public.events ADD COLUMN registration_link text;
    END IF;
END $$;
