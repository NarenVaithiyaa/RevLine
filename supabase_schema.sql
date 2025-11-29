-- Create the events table
create table public.events (
  id uuid not null default gen_random_uuid(),
  title text not null,
  description text,
  date text not null, -- Keeping as text for flexibility as per prompt, but date/timestamp is usually better
  venue text,
  status text check (status in ('upcoming', 'completed')) default 'upcoming',
  drive_link text,
  created_at timestamp with time zone default now(),
  constraint events_pkey primary key (id)
);

-- Enable Row Level Security (RLS)
alter table public.events enable row level security;

-- Create policies
-- Allow public read access to all events
create policy "Public events are viewable by everyone"
  on public.events for select
  using (true);

-- Allow authenticated users (admins) to insert, update, delete
create policy "Admins can insert events"
  on public.events for insert
  with check (auth.role() = 'authenticated');

create policy "Admins can update events"
  on public.events for update
  using (auth.role() = 'authenticated');

create policy "Admins can delete events"
  on public.events for delete
  using (auth.role() = 'authenticated');
