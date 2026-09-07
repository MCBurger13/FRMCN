/* ============================================================================
   escena.mjs — revisa la capa v2 de las clases (apertura, cita y despiece).
   Uso: node tools/escena.mjs
   Comprueba lo que qa.mjs no puede saber: que el pegamento `data-capa` case,
   que cada pieza sea de una de las tres variantes y que nadie se haya
   inventado dos despieces en la misma página.
   ========================================================================== */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'public';
const errors = [];
const warns = [];
const err = (f, m) => errors.push(`${f}: ${m}`);
const warn = (f, m) => warns.push(`${f}: ${m}`);

const files = readdirSync(DIR).filter((f) => f.endsWith('.html') && !f.startsWith('_'));
let conEscena = 0;
let conDespiece = 0;

for (const file of files) {
  const html = readFileSync(join(DIR, file), 'utf8');
  if (!/<body[^>]*data-class=/.test(html)) continue;   /* solo páginas de clase */

  const escena = /class="hero escena"/.test(html);
  if (escena) conEscena += 1;

  /* la apertura */
  if (escena) {
    const hero = html.match(/<header class="hero escena">[\s\S]*?<\/header>/);
    if (!hero) err(file, 'la apertura no cierra: falta </header>');
    else {
      const h = hero[0];
      const ems = (h.match(/<em>/g) || []).length;
      if (ems === 0) warn(file, 'la apertura no marca ninguna palabra con <em>');
      if (ems > 1) err(file, `${ems} <em> en el h1 de la apertura (debe ser 1)`);
      if (/<figure class="esc-fig">/.test(h) && !/<img[^>]+alt="[^"]{10,}"/.test(h)) {
        err(file, 'la lámina de la apertura no tiene un alt de verdad');
      }
    }
  }

  /* la cita editorial */
  for (const m of html.matchAll(/<blockquote class="pull[^"]*">([\s\S]*?)<\/blockquote>/g)) {
    if (!/<footer class="src">/.test(m[1])) err(file, 'una cita .pull sin <footer class="src">');
  }
  if (/\[ Frase clave \]/.test(html) && /class="pull[^"]*"/.test(html)) {
    warn(file, 'quedan a la vez un callout [ Frase clave ] y una cita .pull');
  }

  /* el despiece */
  /* Desde la auditoría de 2026-09-08, el despiece NO es obligatorio: solo se usa
     cuando la pieza es una imagen real (fotografía o captura) con detalle que
     señalar. Si la pieza hay que dibujarla y su contenido es texto, es una
     figura, no un despiece. Una clase sin despiece es lo normal. */
  const dps = [...html.matchAll(/<div class="despiece"[^>]*data-despiece[^>]*>/g)];
  if (!dps.length) {
    /* pero no puede quedar andamiaje suelto */
    for (const resto of ['dp-media', 'dp-steps', 'dp-step', 'dp-nav', 'dp-cap', 'dp-tira', 'dp-stage', 'dp-capa']) {
      if (html.includes(resto)) err(file, `queda "${resto}" pero ya no hay despiece`);
    }
    continue;
  }
  conDespiece += 1;
  if (dps.length > 1) err(file, `${dps.length} despieces (solo puede haber 1)`);

  const pasos = [...html.matchAll(/<li class="dp-step"[^>]*data-capa="([^"]+)"/g)].map((m) => m[1]);
  const capas = [...html.matchAll(/class="dp-capa"[^>]*data-capa="([^"]+)"|data-capa="([^"]+)"[^>]*class="dp-capa"/g)]
    .map((m) => m[1] || m[2]);
  const frags = [...html.matchAll(/class="frag" data-capa="([^"]+)"/g)].map((m) => m[1]);
  const navs = [...html.matchAll(/<button[^>]*data-go="([^"]+)"/g)].map((m) => m[1]);

  if (!pasos.length) err(file, 'despiece sin pasos .dp-step[data-capa]');
  const set = new Set(pasos);
  if (set.size !== pasos.length) err(file, 'hay claves data-capa repetidas entre los pasos');
  for (const k of pasos) {
    if (!/^[a-z0-9-]+$/.test(k)) err(file, `clave data-capa "${k}": solo minúsculas sin acentos`);
    if (!capas.includes(k)) err(file, `el paso "${k}" no enciende ninguna capa en .dp-media`);
  }
  for (const k of new Set([...capas, ...frags, ...navs])) {
    if (!set.has(k)) err(file, `"${k}" apunta a un paso que no existe`);
  }
  if (pasos.length > 9) warn(file, `${pasos.length} pasos en el despiece: se hace largo`);

  /* la pieza y su sección */
  const stage = html.match(/<div class="dp-stage([^"]*)"/);
  if (!stage) err(file, 'despiece sin .dp-stage');
  else if (!/dp-foto|dp-pantalla/.test(stage[1])) {
    err(file, '.dp-stage sin variante (dp-foto / dp-pantalla)');
  }
  const sec = html.slice(0, html.indexOf('class="despiece"')).match(/<section class="sec([^"]*)" id="([^"]+)"[^>]*>(?![\s\S]*<section)/);
  if (sec && !/ sec-ancho/.test(sec[1])) warn(file, `la sección #${sec[2]} lleva el despiece pero no sec-ancho`);
  if (sec && / sec-dark/.test(sec[1])) err(file, `la sección #${sec[2]} del despiece no puede ser sec-dark`);

  /* diagramas accesibles */
  for (const m of html.matchAll(/<svg(?![^>]*aria-hidden)[^>]*>/g)) {
    if (!/role="img"/.test(m[0]) || !/aria-label=/.test(m[0])) {
      warn(file, 'un <svg> visible sin role="img" + aria-label (o sin aria-hidden si es decorativo)');
      break;
    }
  }
}

console.log(`Escena · ${conEscena} clases con apertura · ${conDespiece} con despiece`);
for (const w of warns) console.log('  ⚠ ' + w);
for (const e of errors) console.log('  ✗ ' + e);
if (!errors.length && !warns.length) console.log('✓ sin errores, 0 avisos');
else console.log(`${errors.length ? '✗' : '✓'} ${errors.length} errores, ${warns.length} avisos`);
process.exit(errors.length ? 1 : 0);
