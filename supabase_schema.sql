-- Supabase SQL Schema
-- Run this in your Supabase SQL editor to create the franchise_applications table

create table if not exists public.franchise_applications (
  id            uuid primary key default gen_random_uuid(),
  first_name    text not null,
  last_name     text not null,
  email         text not null,
  phone         text not null,
  city_state    text not null,
  franchise_model text not null,
  occupation    text,
  message       text,
  status        text not null default 'new',
  submitted_at  timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.franchise_applications enable row level security;

-- Allow anonymous inserts (for the public form)
create policy "Allow anon insert"
  on public.franchise_applications
  for insert
  to anon
  with check (true);

-- Only allow service role to read (for admin dashboard)
create policy "Service role only read"
  on public.franchise_applications
  for select
  to service_role
  using (true);
