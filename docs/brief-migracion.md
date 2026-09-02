# Brief de migración de una página de clase · [m].seny /academy

Repo: `C:/Users/mc-ms/Desktop/MSENY-STUDIO/curso-ia-lottusse` (web estática Next.js que sirve HTML plano desde `public/`).
Estamos migrando las 15 páginas de clase de la piel antigua (Tailwind CDN + Font Awesome + Inter/Merriweather, indigo/amber) a la piel nueva del design system [m].seny, sub-marca /academy (tinta/papel/lima, Bricolage + Instrument Sans + Chivo Mono, motivo `[ ]`).

## Lee antes de tocar nada (en este orden)
1. `docs/plantilla-clase.html` — esqueleto canónico, reglas y ejemplo de CADA componente con sus clases CSS. Es la especificación.
2. `public/curso.css` — todos los componentes disponibles (busca las clases antes de inventar markup).
3. `public/curso.js` — qué genera automáticamente (top bar, chips, eyebrow y meta del hero, numeración, nav inferior, pie, botón «clase vista», test, copiar, tabs, checklist). NO lo repliques en la página.
4. `public/curso-data.js` — el `id` de la clase que va en `<body data-class="…">`, su `duration`, `topic`, `kind` y `tools` (si al migrar ves que las herramientas reales de la página no coinciden con `tools`, dilo en tu informe; no edites curso-data.js).
5. `design_handoff_curso_mseny/curso-clase-m3c1.dc.html` — prototipo de diseño de la clase piloto: mira cómo se dibujan los patrones (antes/ahora, frase clave, glosario, stepper, fórmula con copiar, tool-card, check, PFC, nav inferior). Ignora su runtime (`support.js`, `{{ }}`, `sc-for`).
6. La página antigua que migras, ENTERA (léela por tramos con offset/limit hasta el final; es larga). Todo el contenido que verás debe sobrevivir.

## Reglas duras
- **El contenido no cambia.** Mismos textos, mismo orden de secciones, mismos ids de sección, mismos ejemplos, prompts, ejercicios, cards, definiciones, enlaces externos y **todas** las preguntas del test con sus opciones y su respuesta correcta, literales. Si el contenido vive en un array JS (quizData, agentsCode, compInfo, semNotes…), se conserva íntegro.
- Correcciones PERMITIDAS (y solo estas): wordmark `[labs]` → `/academy`; `<title>`/meta/hero con módulo y clase correctos según curso-data.js; enlaces rotos (`href="#"`) pasan a texto sin enlace; erratas evidentes de una palabra («correciones» → «correcciones», «Quen» → «Qwen», «e ejecución» → «y ejecución»); asteriscos de markdown sin renderizar → `<em>`; backticks literales → `<code>`; comentarios HTML duplicados; contadores incoherentes con lo que la propia página muestra («Tres workspaces» con cuatro cards → «Cuatro»; «tus 4 pantallas» con tres → «tus 3 pantallas»). Cualquier otra corrección: NO la hagas, anótala en el informe.
- **Sin** Tailwind, Font Awesome, `<i class="fa-…">`, emoji, `alert()`, `execCommand`, colores hardcodeados, `fade-in-on-scroll`, `.progress-bar`, `::-webkit-scrollbar`, header/nav/footer propios, blobs decorativos, gradientes de texto, `text-align:justify`, `<h1>` en el wordmark. Los iconos se sustituyen por etiquetas mono entre corchetes, números mono (`01`), `[·]`, `[✓]`, `[×]`, `→`.
- Un solo `<h1>` (el hero). Cada sección: `<section class="sec" id="mismo-id-que-antes" data-label="Etiqueta corta para el chip"><div class="sec-head"><span class="sec-num"></span><h2 class="display">Título con punto final.</h2></div>…</section>`. Los `<h3>` que antes hacían de título de sección pasan a `<h2>`. Las secciones que antes no tenían número ahora sí (curso.js numera en orden). Si una sección no debe salir en los chips: `data-toc="none"`.
- La ÚLTIMA sección de contenido (Práctica / PFC / test / reto) lleva `class="sec sec-dark"` (banda tinta). Solo una por página. Si la página no tiene sección práctica, ninguna.
- Etiqueta del bloque PFC según el contenido: `[ PFC — Marca de zapatos ]` si habla de la marca/calzado; `[ PFC — Transversal ]` si es un encargo genérico de «tu producto/tu proyecto»; `[ Reto de la clase ]` para los retos de Obsidian/cerebro. Estructura: `.pfc` con `.k`, `h3`, `p` y `.steps` para los sub-pasos.
- Test: `<div class="quiz" data-quiz="quizData" data-title="Test de conocimientos"></div>` dentro de la sección práctica + `<script>const quizData = [ { q, opts:[…], a, why? } … ];</script>` al final del body (después de curso.js). `a` = índice de la opción correcta, tal como estaba. Si el test antiguo tenía mensajes de feedback por tramos, no hace falta migrarlos (curso.js trae los suyos); si tenía explicación por pregunta, va en `why`.
- Copiar: `.code` con cabecera `.ch` (`<span class="k">[ ETIQUETA ]</span>` + `<button type="button" class="btn-ghost" data-copy>Copiar</button>`) y `<pre>`. Etiquetas: `[ Terminal ]`, `[ Prompt ]`, `[ Prompt · nombre ]`, `[ Archivo · CLAUDE.md ]`, `[ Markdown ]`, `[ JSON ]`, `[ CSV ]`, `[ YAML ]`, `[ Ejemplo práctico ]`. Si el original limpiaba chevrones `> ` al copiar: `data-copy-mode="strip-chevron"`; si convertía `;` a tabuladores (CSV): `data-copy-mode="csv-tabs"`; si copiaba una versión limpia oculta: `data-copy-source="#id"`. Dentro del `<pre>` escapa `<` y `>` (`&lt;` `&gt;`) y `&`.
- Resaltado de código: como mucho `<span class="hl">` (destacado, papel), `<span class="cm">` (comentario, atenuado) y `<span class="ac">` (lima). Nunca 7 colores.
- Tablas: `<div class="table-wrap"><table>…</table></div>`. Diagramas de flujo: `.flow` con `.node` y `<span class="arrow">→</span>`; árboles ASCII: `.code` con `<pre class="tree">`. Grids de cards: `.grid-cards` + `.card` (variantes `.dim`, `.ink`, `.link`). Listas con check/cruz: `ul.list-mono` (`li.check` / `li.cross`). Ejercicios: `ol.exercises`. Callouts: `.callout.analogia|.nota|.aviso|.regla|.ok|.clave` con `<span class="k">[ … ]</span>`. Glosario: `.glossary .row` con `.term` y `.def`. Stepper: `.stepper` (o `.stepper.vertical` si los pasos son largos, con `.step.final` para el último). Fórmulas: `.formula`. Herramientas: `.tools > .tool.card-live`. Cifras: `.stats > .stat`. Chips: `.chips > .chip`. Tabs: `.tabs` con `role=tablist/tab/tabpanel`. Checklist: `ul.checklist` con `<input type="checkbox" id>` + `<label for>`. Imagen: `<figure class="figure"><img class="media-duotone" loading="lazy" alt><figcaption>[ Captura ] …</figcaption></figure>`.
- Widgets propios (calculadora, mapa SVG, maqueta clicable, tabs de agentes): conserva su lógica JS íntegra dentro de un `<script>` de la página, reescribe solo el markup/estilos para que usen las clases y los tokens (`var(--color-…)`) y sustituye cualquier clase Tailwind/FA que el JS inyecte por texto mono (`[✓]`, `[×]`, `→`). Sin colores en el JS: usa `var(--color-accent)`, `var(--color-accent-deep)`, `var(--color-ink)`, `var(--color-mist)`.
- Enlaces internos de navegación (Volver / Siguiente / Anterior / Finalizar / logout) desaparecen: los genera curso.js. El wordmark también.
- Sin fondos alternos entre secciones (todo papel salvo la banda tinta). Sin `max-w-6xl`: el contenido vive en `.content` (780 px).
- Cabecera del documento exactamente así:
  ```html
  <!DOCTYPE html>
  <html lang="es">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>M3 · Clase 1 — Los titanes del píxel · [m].seny /academy</title>
  <meta name="description" content="…subtítulo del hero…">
  <link rel="stylesheet" href="/theme.css">
  <link rel="stylesheet" href="/curso.css">
  </head>
  <body data-class="m3c1">
  <main>
    <header class="hero"><h1 class="display">Título de la clase.</h1><p class="sub">Subtítulo.</p></header>
    <div class="content"> …secciones… </div>
  </main>
  <script src="/curso-data.js"></script>
  <script src="/curso.js"></script>
  <script> const quizData = […]; /* + widgets propios */ </script>
  </body>
  </html>
  ```

## Aprendido en la clase piloto (M3·C1, ya migrada: `public/modulo3-clase1.html` es la referencia real; léela)
- Los ejercicios (`ol.exercises`) y los sub-pasos del PFC (`.pfc .steps .n`) ya numeran: quita el «1.», «2.» del texto original para no duplicar.
- Un eyebrow de sección («Ejercicios», «Validación de conceptos») va como `<p class="sec-eyebrow">[ Ejercicios ]</p>` justo antes del `.sec-head`.
- Un `h4` suelto dentro de `.pfc` → `<p><strong>…</strong></p>`.
- El título del test antiguo («Cuestionario de Evaluación (Clase 1)») va en `data-title` del `.quiz`; los mensajes de feedback por tramos del test antiguo NO se migran (curso.js trae los suyos).
- Cabeceras de fórmula tipo «1. Estructura S.C.I.E. (Fotografía Realista)» → `[ S.C.I.E. ]` + «Estructura 1 · Fotografía realista».
- `const quizData` funciona (curso.js resuelve globales léxicos); `var` también.
- Tipografía del DS: comillas «», puntos suspensivos «…», títulos de sección en frase y con punto final (sin cambiar palabras).
- El test de paridad lista palabras que faltan: las de nav/hero/pie/test antiguos (roi, visual, cuestionario, evaluación, hora, excelente, dominas, repasar, selectanswer, idx…) son normales; cualquier palabra de contenido (un término, una herramienta, un dato) no.

## Verificación obligatoria antes de dar por terminada la página
1. `node tools/parity.mjs public/<archivo>.html` debe dar ✓ (faltan ≤ 0,5 % de palabras y ninguna pregunta). Si lista palabras que faltan y son de contenido, recupéralas. Si son de interfaz antigua (nav, footer, botones), ignóralas y dilo.
2. `grep -c -i -E "tailwindcss|font-awesome|fa-solid|fa-regular|fa-brands|alert\(|execCommand|fade-in-on-scroll|\[labs\]|hidden md:flex|hidden lg:flex|text-brand|bg-brand|rounded-|class=\"w-" public/<archivo>.html` debe dar 0.
3. `node -e` con una comprobación de que `quizData` tiene el mismo número de preguntas que el original y que cada `a` está dentro de `opts`.
4. Estructura: un `<h1>`, todas las `<section class="sec" id>` originales presentes en el mismo orden, la última con `sec-dark`, `<body data-class>` correcto, los dos `<script src>` presentes.
5. No dejes archivos temporales en el repo. No toques ningún otro archivo de `public/` salvo el que migras (y, si es M3·C4, la imagen que se te indique).

## Informe final (devuélvelo como resultado)
- Archivo migrado y tamaño antes/después.
- Resultado literal de parity.mjs y del grep.
- Número de preguntas del test antes/después.
- Herramientas que la página presenta de verdad (nombres exactos, en orden de aparición).
- Correcciones aplicadas (de la lista permitida) y correcciones NO aplicadas que convendría revisar.
- Patrones que no encajaban en ningún componente y cómo los resolviste.
