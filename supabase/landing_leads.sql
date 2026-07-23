create table if not exists public.landing_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text not null,
  email text not null,
  phone text,
  service text not null,
  timeline text not null,
  message text not null,
  consent boolean not null default true,
  privacy_version text not null,
  consent_at timestamptz not null,
  source text not null default 'mundaca-solutions-landing',
  status text not null default 'nuevo',
  created_at timestamptz not null default now()
);

alter table public.landing_leads enable row level security;

create index if not exists landing_leads_created_at_idx
  on public.landing_leads (created_at desc);

create index if not exists landing_leads_status_idx
  on public.landing_leads (status);

comment on table public.landing_leads is
  'Leads capturados por la landing de Mundaca''s Solutions. Escritura exclusiva desde servidor.';
