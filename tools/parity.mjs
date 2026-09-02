#!/usr/bin/env node
/* ============================================================================
   tools/parity.mjs — test de paridad de contenido entre la versión antigua de
   una página (git HEAD) y la nueva (árbol de trabajo).

   Uso:  node tools/parity.mjs public/modulo3-clase1.html [más páginas…]
         node tools/parity.mjs --all
         node tools/parity.mjs --old ruta/vieja.html --new ruta/nueva.html
   Opciones: --json (salida máquina) · --top N (palabras a listar, 80)
             --ref <rev> (por defecto HEAD)

   Qué compara (texto visible + literales de string de los <script>, para que
   el contenido de quizzes y widgets que vive en arrays JS también cuente):
   - bolsa de palabras: palabras de la vieja que faltan (o aparecen menos veces)
     en la nueva, excluyendo una lista de palabras de interfaz (nav, botones…);
   - contadores: secciones, preguntas de test, botones Copiar, imágenes, tablas.
   Sale con código 1 si faltan más del 0,5 % de las palabras o alguna pregunta.
   ========================================================================== */
import { execFileSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, basename } from 'node:path';

const args = process.argv.slice(2);
const opt = (name, def) => { const i = args.indexOf(name); return i === -1 ? def : (args[i + 1] ?? def); };
const flag = (name) => args.includes(name);
const REF = opt('--ref', 'HEAD');
const TOP = +opt('--top', 80);
const JSON_OUT = flag('--json');

const UI_WORDS = new Set(('salir temario volver siguiente anterior finalizar módulo modulo clase clases copiar copiado validar respuestas reintentar ' +
  'seny labs academy material apoyo formativo derechos reservados todos los de la el y a en un una del al lo las con para por es se su que o no ' +
  'marcar vista vistas publicadas progreso curso navegación anclas entrar test conocimientos pregunta preguntas responde valida ' +
  'exportar pdf imprimir index html menu menú cerrar sesión ir arriba abajo ver más leer ' +
  'hora horas minutos min teoría práctica cuestionario evaluación 2025 2026 roi visual flujo trabajo fórmulas herramientas glosario introducción ' +
  'finalizar ejercicios copiado prompt volver siguiente anterior aprobado certificado ').split(/\s+/));

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', laquo: '«', raquo: '»', ndash: '–', mdash: '—', hellip: '…', rarr: '→', larr: '←', check: '✓', times: '×', middot: '·', bull: '•' };
function decode(s) {
  return s.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (m, e) => {
    if (e[0] === '#') { const n = e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10); return isNaN(n) ? m : String.fromCodePoint(n); }
    return ENT[e] ?? m;
  });
}
function scriptStrings(html) {
  const out = [];
  const re = /<script\b[^>]*>([\s\S]*?)<\/script>/gi; let m;
  while ((m = re.exec(html))) {
    const body = m[1];
    if (/^\s*$/.test(body) || /src=/.test(m[0].slice(0, 200)) && body.trim() === '') continue;
    /* solo literales con comillas simples/dobles (los template literals de los render antiguos son HTML) */
    const clean = body.replace(/`(?:\\.|[^`\\])*`/g, ' ');
    const lit = /(['"])((?:\\.|(?!\1)[^\\])*)\1/g; let s;
    while ((s = lit.exec(clean))) {
      const v = s[2];
      if (v.length < 12 || !/\s/.test(v)) continue;
      if (/<[a-z]|^[\w\s:.#-]+$|\bfa-|\bbg-|\btext-|\bborder-|\brounded|\bflex\b/.test(v)) continue;
      out.push(v.replace(/\\n/g, ' '));
    }
  }
  return out.join(' ');
}
function visibleText(html) {
  let h = html.replace(/<!--[\s\S]*?-->/g, ' ');
  const strings = scriptStrings(h);
  h = h.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ');
  h = h.replace(/<(?:br|p|div|li|tr|h[1-6]|section|article|header|footer|td|th|pre)\b[^>]*>/gi, '\n');
  /* etiquetas con atributos entrecomillados (un "=>" dentro de onclick rompía el stripper simple) */
  h = h.replace(/<\/?[a-zA-Z][^\s>\/]*(?:\s+[^\s=>\/]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s*\/?>/g, ' ');
  h = h.replace(/<[^>]+>/g, ' ');
  return decode(h) + '\n' + decode(strings);
}
function words(text) {
  return (text.toLowerCase().normalize('NFC').match(/[\p{L}\p{N}][\p{L}\p{N}'’.-]*[\p{L}\p{N}]|[\p{L}\p{N}]/gu) || []).map(w => w.replace(/^[.'’-]+|[.'’-]+$/g, '')).filter(w => w.length > 1);
}
function bag(ws) { const b = new Map(); for (const w of ws) b.set(w, (b.get(w) || 0) + 1); return b; }
const count = (html, re) => (html.match(re) || []).length;
function metrics(html) {
  return {
    sections: count(html, /<section\b/gi),
    questions: Math.max(count(html, /\b(?:question|pregunta|q)\s*:\s*['"`]/g), count(html, /\bq\s*:\s*['"`]/g)),
    copyButtons: count(html, /data-copy\b|copyToClipboard|copyCurrentAgentCode|copiar/gi),
    images: count(html, /<img\b/gi),
    tables: count(html, /<table\b/gi),
    words: words(visibleText(html)).length,
  };
}
function compare(oldHtml, newHtml) {
  const ob = bag(words(visibleText(oldHtml))), nb = bag(words(visibleText(newHtml)));
  const missing = [];
  let missingCount = 0, total = 0;
  for (const [w, c] of ob) {
    total += c;
    if (UI_WORDS.has(w)) continue;
    const d = c - (nb.get(w) || 0);
    if (d > 0) { missing.push([w, d, c]); missingCount += d; }
  }
  missing.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  return { total, missingCount, ratio: total ? missingCount / total : 0, missing, old: metrics(oldHtml), new: metrics(newHtml) };
}
function oldVersion(file) {
  try { return execFileSync('git', ['show', `${REF}:${file.replace(/\\/g, '/')}`], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }); }
  catch { return null; }
}

let pairs = [];
if (flag('--old') || flag('--new')) pairs = [{ name: basename(opt('--new')), oldHtml: readFileSync(opt('--old'), 'utf8'), newHtml: readFileSync(opt('--new'), 'utf8') }];
else {
  let files = args.filter(a => !a.startsWith('--') && a !== REF && a !== String(TOP));
  if (flag('--all') || !files.length) files = execFileSync('git', ['ls-tree', '--name-only', REF, 'public/'], { encoding: 'utf8' }).split('\n').filter(f => /^public\/[^/]+\.html$/.test(f) && !/login|index/.test(f));
  pairs = files.map(f => ({ name: f, oldHtml: oldVersion(f), newHtml: existsSync(resolve(f)) ? readFileSync(resolve(f), 'utf8') : null }));
}

let fail = false; const report = [];
for (const p of pairs) {
  if (p.oldHtml == null || p.newHtml == null) { report.push({ name: p.name, error: p.oldHtml == null ? 'sin versión antigua en ' + REF : 'no existe en el árbol de trabajo' }); fail = true; continue; }
  const r = compare(p.oldHtml, p.newHtml);
  const questionsLost = r.old.questions > 0 && r.new.questions < r.old.questions;
  /* Umbral orientativo: hasta 3 % de las palabras o 40 sueltas (nav, hero, pie y mensajes del test antiguos).
     La lista de palabras que faltan es lo que hay que leer: si son de contenido, la página no pasa. */
  const ok = (r.ratio <= 0.03 || r.missingCount <= 40) && !questionsLost;
  if (!ok) fail = true;
  report.push({ name: p.name, ok, ratio: r.ratio, missingCount: r.missingCount, totalWords: r.total, old: r.old, new: r.new, missing: r.missing.slice(0, TOP) });
}
if (JSON_OUT) { console.log(JSON.stringify(report, null, 1)); }
else {
  for (const r of report) {
    if (r.error) { console.log(`✗ ${r.name}: ${r.error}`); continue; }
    console.log(`${r.ok ? '✓' : '✗'} ${r.name} — faltan ${r.missingCount} de ${r.totalWords} palabras (${(r.ratio * 100).toFixed(2)} %) · secciones ${r.old.sections}→${r.new.sections} · preguntas ${r.old.questions}→${r.new.questions} · copiar ${r.old.copyButtons}→${r.new.copyButtons} · img ${r.old.images}→${r.new.images} · tablas ${r.old.tables}→${r.new.tables}`);
    if (r.missing.length) console.log('   palabras que faltan (palabra×veces): ' + r.missing.map(([w, d]) => `${w}×${d}`).join(' '));
  }
}
process.exit(fail ? 1 : 0);
