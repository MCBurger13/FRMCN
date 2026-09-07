/* ============================================================================
   palabras.mjs — compara una clase con su versión ANTERIOR a la capa escena,
   en los dos sentidos: qué palabras se han caído y cuáles han aparecido.

   parity.mjs cuenta bolsa de palabras y solo mira las que faltan. Eso deja
   pasar dos cosas: texto nuevo inventado (le pasó a la tira de M4·C2) y, al
   deshacer un despiece, una frase que se cae mientras el SVG la sigue
   repitiendo, de modo que el contador no baja.

   Uso:  node tools/palabras.mjs                    (todas las clases)
         node tools/palabras.mjs modulo1.html ...   (solo esas)
   ========================================================================== */
import { readFileSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

/* La capa escena entró en dos commits: el piloto primero, el resto después.
   Cada archivo se compara con el estado inmediatamente anterior al suyo. */
const BASE_POR_DEFECTO = 'd1f7398^';
const BASE_ESPECIAL = { 'modulo4-clase2.html': '5fe1077^' };

/* Palabras que la propia capa escena introduce por diseño y que no son
   contenido de la clase: rótulos de estructura, no afirmaciones. */
const ESTRUCTURA = new Set(['capa', 'capas', 'paso', 'pasos', 'bloque', 'bloques',
  'clave', 'frase', 'módulo', 'clase', 'min', 'h']);

const texto = (html) => html
  .replace(/<script[\s\S]*?<\/script>/g, ' ')
  .replace(/<style[\s\S]*?<\/style>/g, ' ')
  .replace(/<!--[\s\S]*?-->/g, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ');

/* Normaliza para que «objetivo:» y «objetivo» no cuenten como distintas: lo que
   nos importa es la palabra, no la puntuación que la rodea. */
const bolsa = (s) => new Set(
  texto(s).toLowerCase()
    .split(/[\s.,;:()«»"'¿?¡!—–\-/]+/)
    .filter((w) => w.length > 1 && !/^\d+$/.test(w) && !ESTRUCTURA.has(w))
);

const DIR = 'public';
const pedidos = process.argv.slice(2).map((a) => a.replace(/^public[\\/]/, ''));
const files = (pedidos.length ? pedidos : readdirSync(DIR).filter((f) => f.endsWith('.html') && !f.startsWith('_')))
  .filter((f) => /<body[^>]*data-class=/.test(readFileSync(join(DIR, f), 'utf8')));

let malos = 0;
for (const file of files) {
  const base = BASE_ESPECIAL[file] || BASE_POR_DEFECTO;
  let antes;
  try {
    antes = execFileSync('git', ['show', `${base}:public/${file}`], { encoding: 'utf8', maxBuffer: 1 << 26 });
  } catch {
    console.log(`  ? ${file} — no existía en ${base}, no hay con qué comparar`);
    continue;
  }
  const ahora = readFileSync(join(DIR, file), 'utf8');
  const a = bolsa(antes);
  const b = bolsa(ahora);
  const faltan = [...a].filter((w) => !b.has(w));
  const sobran = [...b].filter((w) => !a.has(w));
  const ok = faltan.length === 0;
  if (!ok) malos += 1;
  console.log(`${ok ? '✓' : '✗'} ${file} — se cayeron ${faltan.length}, aparecieron ${sobran.length} (base ${base})`);
  if (faltan.length) console.log(`    se cayeron: ${faltan.slice(0, 25).join(' · ')}${faltan.length > 25 ? ' …' : ''}`);
  if (sobran.length) console.log(`    aparecieron: ${sobran.slice(0, 25).join(' · ')}${sobran.length > 25 ? ' …' : ''}`);
}
console.log(malos ? `✗ ${malos} clases han perdido texto` : '✓ ninguna clase ha perdido texto');
process.exit(malos ? 1 : 0);
