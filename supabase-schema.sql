create table if not exists public.destinations (
  name text primary key,
  district text,
  category text,
  description text,
  low_budget_hotel text,
  mid_budget_hotel text,
  nearest_railway_station text,
  latitude double precision,
  longitude double precision,
  constraint destinations_latitude_range check (latitude is null or latitude between -90 and 90),
  constraint destinations_longitude_range check (longitude is null or longitude between -180 and 180)
);

create table if not exists public.itineraries (
  id uuid primary key default gen_random_uuid(),
  client_id text not null,
  user_id uuid references auth.users (id) on delete cascade,
  starting_point text not null check (char_length(starting_point) between 2 and 120),
  duration_days integer not null check (duration_days between 1 and 14),
  travel_style text not null,
  budget_tier text not null check (budget_tier in ('budget', 'mid', 'luxury')),
  total_calculated_budget numeric not null default 0
    check (total_calculated_budget >= 0),
  schedule jsonb not null check (jsonb_typeof(schedule) = 'array'),
  created_at timestamptz not null default now()
);

alter table public.itineraries
  add column if not exists user_id uuid references auth.users (id) on delete cascade;
alter table public.itineraries
  add column if not exists client_id text;
alter table public.itineraries
  alter column total_calculated_budget set default 0;
create unique index if not exists itineraries_user_client_id_key
  on public.itineraries (user_id, client_id);

create table if not exists public.favorites (
  user_id uuid not null references auth.users (id) on delete cascade,
  destination_id text not null check (char_length(destination_id) between 1 and 100),
  created_at timestamptz not null default now(),
  primary key (user_id, destination_id)
);

alter table public.destinations enable row level security;
alter table public.itineraries enable row level security;
alter table public.favorites enable row level security;

grant select on public.destinations to anon, authenticated;
grant select, insert, update, delete on public.itineraries to authenticated;
grant select, insert, update, delete on public.favorites to authenticated;

drop policy if exists "Anyone can read destinations" on public.destinations;
create policy "Anyone can read destinations"
  on public.destinations for select
  to anon, authenticated
  using (true);

drop policy if exists "Anyone can submit itineraries" on public.itineraries;
drop policy if exists "Users can read their itineraries" on public.itineraries;
create policy "Users can read their itineraries"
  on public.itineraries for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Users can save their itineraries" on public.itineraries;
create policy "Users can save their itineraries"
  on public.itineraries for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "Users can update their itineraries" on public.itineraries;
create policy "Users can update their itineraries"
  on public.itineraries for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Users can delete their itineraries" on public.itineraries;
create policy "Users can delete their itineraries"
  on public.itineraries for delete
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Users can read their favorites" on public.favorites;
create policy "Users can read their favorites"
  on public.favorites for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Users can save their favorites" on public.favorites;
create policy "Users can save their favorites"
  on public.favorites for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "Users can update their favorites" on public.favorites;
create policy "Users can update their favorites"
  on public.favorites for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Users can delete their favorites" on public.favorites;
create policy "Users can delete their favorites"
  on public.favorites for delete
  to authenticated
  using (auth.uid() = user_id);

insert into public.destinations (name, district, category, description)
values
  ('Konark Sun Temple', 'Puri District', 'heritage', 'Marvel at the 13th century chariot-shaped temple, a masterpiece of Kalinga architecture and UNESCO World Heritage Site.'),
  ('Puri - Sea & Soul', 'Puri District', 'beach spiritual', 'Golden sands meet divine spirituality at the abode of Lord Jagannath. A sacred pilgrimage and glorious beach destination in one.'),
  ('Chilika Lake', 'Khurda & Puri', 'nature wildlife', 'Asia''s largest brackish water lagoon, home to rare Irrawaddy dolphins, migratory flamingos, and thousands of avian species.'),
  ('Bhubaneswar', 'Khurda District', 'heritage spiritual', 'The City of Temples - home to the Lingaraj Temple, ancient Udayagiri caves, and over a thousand medieval temples.'),
  ('Simlipal National Park', 'Mayurbhanj', 'nature wildlife', 'A UNESCO Biosphere Reserve with Royal Bengal Tigers, wild elephants, hidden waterfalls and dense sal forests.'),
  ('Daringbadi', 'Kandhamal', 'nature', 'Odisha''s own hill station with misty valleys, coffee and pepper plantations, and frost in winter months.')
on conflict (name) do nothing;
