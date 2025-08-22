# Chapter Health — Take Control (Next.js + Tailwind)

Updated “coming soon” site with:
- Brand fonts (National 2 Narrow + PP Mori)
- Cross-fade background
- Waitlist form (Supabase-ready)
- Privacy Policy modal
- Updated copy

## Deploy
1) Push this folder to a GitHub repo (upload its **contents**, not the zip).
2) In Vercel → New Project → import the repo → Deploy.
3) Add env vars (optional for Supabase inserts):
   - SUPABASE_URL
   - SUPABASE_SERVICE_ROLE (or ANON key)

## Supabase
```sql
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  source text,
  user_agent text,
  created_at timestamptz default now()
);
alter table public.waitlist enable row level security;
create policy insert_waitlist on public.waitlist for insert with check (true);
```
