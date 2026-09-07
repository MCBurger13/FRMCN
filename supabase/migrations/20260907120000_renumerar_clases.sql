-- [m].seny /academy · renumeración de módulos (7 sep 2026)
-- M3 se parte en M3 (Imagen, C1–C3) y M4 (Automatización, C1–C2).
-- M8 se parte en M6 (Claude suite, C1–C3), M7 (Cerebros de IA, C1–C3) y
-- M8 (Desarrollo de software, C1).
-- Los class_id del progreso siguen a las clases para que nadie pierda lo visto.
--
-- Se hace en dos pasos con un prefijo temporal porque la clave primaria es
-- (user_id, class_id) y hay ids que se reutilizan: el antiguo m8c7 pasa a
-- llamarse m8c1, nombre que ocupaba otra clase antes de migrar.

begin;

update public.academy_progress
set class_id = 'tmp_' || case class_id
    when 'm3c4' then 'm4c1'
    when 'm3c5' then 'm4c2'
    when 'm8c1' then 'm6c1'
    when 'm8c2' then 'm6c2'
    when 'm8c3' then 'm6c3'
    when 'm8c4' then 'm7c1'
    when 'm8c5' then 'm7c2'
    when 'm8c6' then 'm7c3'
    when 'm8c7' then 'm8c1'
  end
where class_id in ('m3c4', 'm3c5', 'm8c1', 'm8c2', 'm8c3', 'm8c4', 'm8c5', 'm8c6', 'm8c7');

update public.academy_progress
set class_id = substring(class_id from 5)
where class_id like 'tmp\_%';

commit;

-- Comprobación:
-- select class_id, count(*) from public.academy_progress group by 1 order by 1;
