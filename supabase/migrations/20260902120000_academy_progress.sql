-- [m].seny /academy · progreso del alumno
-- Ejecutar en Supabase → SQL Editor del proyecto ndtoqnpomhtubcygkwlh.
-- Una fila por alumno y clase: cuándo la vio y su mejor nota en el test.
-- La web escribe por la API REST con el JWT del alumno; RLS limita cada
-- usuario a sus propias filas. Marc puede consultar el avance con la vista
-- academy_progress_resumen (solo desde el SQL Editor / service role).

create table if not exists public.academy_progress (
  user_id     uuid        not null references auth.users (id) on delete cascade,
  class_id    text        not null,                 -- id de curso-data.js (m3c1, m7c2, …)
  seen_at     timestamptz,                          -- null = no vista
  score       integer,                              -- mejor nota del test de la clase
  score_total integer,
  updated_at  timestamptz not null default now(),
  primary key (user_id, class_id)
);

alter table public.academy_progress enable row level security;

drop policy if exists "academy_progress: leer lo propio" on public.academy_progress;
create policy "academy_progress: leer lo propio"
  on public.academy_progress for select to authenticated
  using (auth.uid() = user_id);

drop policy if exists "academy_progress: crear lo propio" on public.academy_progress;
create policy "academy_progress: crear lo propio"
  on public.academy_progress for insert to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "academy_progress: actualizar lo propio" on public.academy_progress;
create policy "academy_progress: actualizar lo propio"
  on public.academy_progress for update to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

grant select, insert, update on public.academy_progress to authenticated;

-- updated_at automático
create or replace function public.academy_touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists academy_progress_touch on public.academy_progress;
create trigger academy_progress_touch
  before update on public.academy_progress
  for each row execute function public.academy_touch_updated_at();

-- Resumen por alumno para el instructor (no expuesto a la API: sin grant a anon/authenticated)
create or replace view public.academy_progress_resumen
with (security_invoker = false) as
select
  u.email,
  u.raw_user_meta_data ->> 'access_level'                      as nivel,
  count(*) filter (where p.seen_at is not null)                 as clases_vistas,
  max(p.updated_at)                                             as ultima_actividad,
  string_agg(p.class_id || ' ' || coalesce(p.score::text || '/' || p.score_total::text, '-'), ', ' order by p.class_id)
    filter (where p.score is not null)                          as notas
from auth.users u
left join public.academy_progress p on p.user_id = u.id
group by u.id, u.email, u.raw_user_meta_data;

revoke all on public.academy_progress_resumen from anon, authenticated;

-- Endurecimiento (avisos del linter de Supabase tras aplicar lo anterior):
-- 1) el rol anon no necesita ningún privilegio sobre la tabla (RLS ya lo bloquea, pero mejor sin grant);
-- 2) la función del trigger debe fijar su search_path.
revoke all on public.academy_progress from anon;
alter function public.academy_touch_updated_at() set search_path = public;
