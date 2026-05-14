create extension if not exists "pgcrypto";

create table if not exists public.kepler_gl_shares (
  id uuid primary key default gen_random_uuid(),
  source_project_id text not null,
  snapshot_storage_path text not null,
  title text not null default '',
  created_by uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists kepler_gl_shares_source_project_id_key
  on public.kepler_gl_shares (source_project_id);

alter table public.kepler_gl_shares enable row level security;

insert into storage.buckets (id, name, public)
values ('kepler-gl-shares', 'kepler-gl-shares', false)
on conflict (id) do nothing;
