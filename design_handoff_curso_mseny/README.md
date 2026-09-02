# Handoff: Web del curso «IA Generativa» con el design system [m].seny

## Overview
Rediseño completo del área de alumnos del curso (repo **mseny/FRMCN**, desplegado en mseny-cursoia.vercel.app) aplicando el design system [m].seny con la sub-marca **/academy**. Cubre las 3 plantillas de la web: **login**, **home del curso** (panel de alumno con progreso) y **página de clase** (plantilla para las 15+ clases). Sustituye la piel actual (Tailwind CDN, Inter/Merriweather, indigo #4F46E5 / amber #F59E0B) por tinta/papel/lima con Bricolage/Instrument/Chivo Mono.

## About the Design Files
Los HTML de este paquete son **referencias de diseño** (prototipos navegables creados en HTML), no código de producción para copiar tal cual. La tarea es **recrear estos diseños en el entorno existente del repo FRMCN**: páginas HTML estáticas en `public/` con CSS y JS vanilla (sin build). Es un caso directo: el resultado final también es HTML/CSS/JS plano.

- `curso-login.dc.html`, `curso-home.dc.html`, `curso-clase-m3c1.dc.html` — abrir en navegador para ver el diseño vivo (usan `support.js` y `_ds/`, incluidos).
- `_ds/.../tokens/*.css` — los tokens y clases de marca, **reutilizables casi tal cual** como base del nuevo `public/theme.css`.

## Fidelity
**High-fidelity.** Colores, tipografía, espaciados, radios y microcopy son finales. Recrear píxel a píxel. El contenido de curso (textos, prompts de ejemplo, datos de módulos) NO cambia — solo la piel y la estructura de layout descrita aquí.

## Plan de migración recomendado (orden de trabajo)
1. **Infraestructura**: crear `public/theme.css` a partir de `tokens/colors.css` + `typography.css` + `motion.css` + `utilities.css` (concatenar; son ~7 KB). Cargar las 3 fuentes variables desde Fontsource/jsDelivr (ver `tokens/fonts.css`). Eliminar Tailwind CDN y Font Awesome página a página a medida que se migran.
2. **Login** (`public/login.html`): re-skin conservando TODO el comportamiento (Supabase auth, cookie `sb-...-auth-token`, redirect, mensaje de error).
3. **Home** (`public/index.html`): pasar de landing con acordeón a panel de alumno (ver pantalla 2). El gating por `full_access` (JWT) se conserva; el progreso del alumno puede ser localStorage hasta que exista backend.
4. **Clase piloto** (`public/modulo3-clase1.html`): aplicar la plantilla de clase (pantalla 3). Validar contra el prototipo.
5. **Resto de clases** (modulo1, modulo2, modulo3-clase2…5, modulo8-clase1…7, pfc-marketing): replicar el patrón de la piloto. Misma anatomía: top bar → nav de secciones sticky → hero centrado → secciones numeradas → nav inferior.

Prompt inicial sugerido para Claude Code:
> Lee design_handoff_curso_mseny/README.md y abre los 3 prototipos HTML. Crea public/theme.css con los tokens del paquete y migra public/login.html al nuevo diseño sin cambiar comportamiento (Supabase, cookies, redirects). Enséñame el resultado antes de seguir con index.html.

## Screens / Views

### 1 · Login (`curso-login.dc.html`)
- **Purpose**: acceso de alumnos matriculados (usuario + contraseña → Supabase).
- **Layout**: página completa fondo tinta `#0a0a0b`; columna centrada vertical y horizontalmente, gap 28px, padding 48px 20px.
- **Componentes** (de arriba abajo):
  - Wordmark centrado: `[m].seny /academy` — Bricolage 700, 1.6rem, tracking −0.025em; `[m]` y `/academy` en lima `#c8f542`; `/academy` en Chivo Mono 400 a 0.8em.
  - Eyebrow `[ ÁREA DE ALUMNOS ]`: Chivo Mono 400, 12px, caps, tracking 0.1em, lima al 90%.
  - Tarjeta: max-width 400px, fondo `#151517`, borde 1px `#26262a`, radio 24px, padding 36px 32px, gap 18px.
  - Campos: label mono 11px caps color `#a5a5ab`; input radio 14px, borde 1px `#26262a`, fondo `rgba(255,255,255,.05)`, padding 12px 16px, texto 15px `#f7f6f2`; focus → borde lima; placeholder paper al 30%.
  - CTA `Entrar al curso →`: `.btn-accent` (píldora 999px, fondo lima, texto oliva `#253a06`, 600, padding .95rem 1.9rem; hover: translateY(−2px) + glow `0 12px 32px -8px rgb(200 245 66/.55)`), ancho completo.
  - Nota final: mono 10.5px caps `#a5a5ab` — «Acceso exclusivo para alumnos matriculados.»
- **Estado de error** (ver mockup 1b del proyecto): banda radio 14px fondo `#edebe3`, mono 12px teal `#0f766e`: `[ ! ] Usuario o contraseña incorrectos.`

### 2 · Home del curso — panel de alumno (`curso-home.dc.html`)
- **Purpose**: ver progreso, retomar la clase en curso, acceder a los 9 módulos.
- **Layout**: grid `280px 1fr`, min-height 100vh. En ≤820px: 1 columna, el nav de módulos del rail se oculta (la info vive en las cards).
- **Rail izquierdo** (fondo tinta, padding 28px 24px, flex column gap 28px):
  - Wordmark 1.15rem con /academy.
  - Bloque progreso: label mono 10.5px caps mist; cifra Bricolage 30px paper «9 /30 clases» (el «/30» 16px mist); barra track 6px radio 999 fondo `#26262a`, fill lima al % (9/30 = 30%); línea mono 10.5px «30% DEL CURSO».
  - Nav módulos: mono 12px; completado `[✓] M1 · LLMs` en lima; actual `→ M3 · Imagen` con fondo `#151517` radio 10px texto paper; pendientes `[ ] M4 · Vídeo` en mist.
  - Abajo: enlace `Salir →` (13px, mist, subrayado vivo `.link-live`).
- **Main** (fondo papel `#f7f6f2`, padding 40px 44px):
  - Eyebrow `[ HOLA, MARTA ]` teal + H1 Bricolage clamp(1.9rem,4.5vw,2.4rem) «Sigue donde lo dejaste.»
  - Card «continuar»: fondo tinta, radio 24px, padding 28px; eyebrow mono 11px lima «M3 · CLASE 3 — EN CURSO»; título Bricolage 26px paper; sub 14px mist; CTA `.btn-accent` «Continuar →» a la derecha.
  - Grid de 9 cards de módulo: `repeat(auto-fit,minmax(280px,1fr))`, gap 16px, radio 24px, padding 20px. Tres estados:
    - **Completado** (M1, M2): fondo tinta, borde `#26262a`, num mono 11px paper al 55%, título Bricolage 600 19px en **lima**, meta mono 10px mist «2 CLASES · COMPLETADO [✓]», barra inferior 2px llena en lima.
    - **En curso** (M3): fondo papel, **borde teal** `#0f766e`, label mono teal «M3 — EN CURSO», título tinta, meta «6 CLASES · 2/6», barra al 33% en teal. Toda la card es link a la clase.
    - **Pendiente** (M4–M9): fondo papel, borde `#e0ddd3`, num tinta al 45%, meta muted, barra vacía. Hover `.card-live`: borde teal + translateY(−2px).
- **Datos de módulos** (verbatim): M1 El Paisaje de los LLMs · M2 Glosario y Fundamentos · M3 Estudio Creativo IA (Imagen) · M4 Estudio Creativo 2 (Vídeo) · M5 Automatización de Imágenes · M6 Docs Inteligente & Google · M7 Programación Web y Scraping · M8 Agentes Autónomos · M9 MVP Empresarial (PFC, «3 CLASES · 100% PRÁCTICO»).

### 3 · Página de clase (`curso-clase-m3c1.dc.html` — plantilla para todas las clases)
- **Purpose**: contenido lectivo de una clase, navegable por secciones.
- **Anatomía** (de arriba abajo):
  1. **Top bar** tinta (padding 14px 28px): wordmark (link a home) + mono 11px mist «M3 · CLASE 1»; derecha links mono caps «TEMARIO · SALIR». No es sticky.
  2. **Nav de secciones** — sticky top 0, z-50, fondo papel, borde inferior hairline, chips centrados (en móvil `justify-content:flex-start` + scroll horizontal). Chip = mono 10.5px caps; **sección activa: píldora lima con texto oliva**; resto texto muted sin borde. Al hacer clic: scroll suave a la sección (offset −60px). La activa se actualiza con el scroll (umbral: top de sección < 140px).
  3. **Barra de progreso de lectura**: 3px pegada al borde superior de la nav sticky; track tinta al 8%, fill lima = % de scroll del documento.
  4. **Hero centrado** (padding 56px 32px 40px, borde inferior hairline): eyebrow teal `[ MÓDULO 3 · CLASE 1 ]`; H1 Bricolage clamp(2rem,5vw,3.4rem) «Estudio creativo IA: los titanes del píxel.»; sub 17px muted; meta mono caps «1 HORA · FOTOGRAFÍA Y MOCKUPS».
  5. **Contenido centrado**: max-width 780px, margin auto, gap 52px entre secciones. Cada sección: `scroll-margin-top:70px`, encabezado = num mono 14px teal + H2 Bricolage 29px con punto final.
- **Patrones de sección** (reutilizar en todas las clases):
  - **Prosa**: Instrument 16px/1.7 tinta.
  - **Antes/Ahora**: grid auto-fit minmax(260px,1fr); card «antes» fondo `#edebe3` radio 16px label mono muted; card «ahora» fondo tinta, label mono lima, texto paper.
  - **Callout frase clave**: borde hairline, radio 16px, fondo blanco al 50%; label mono teal `[ FRASE CLAVE ]`; cita 17px/500.
  - **Glosario**: filas con hairline inferior; término Bricolage 600 18px (columna 180px) + definición 14px muted.
  - **Stepper de flujo**: grid auto-fit minmax(170px,1fr); pasos papel-dim radio 16px con num mono teal; paso final fondo tinta con `[✓]` y título lima.
  - **Card de fórmula** (S.C.I.E., P.E.P.A., M.E.T.A., C.A.P.A.): fondo tinta radio 24px padding 26px; eyebrow lima con corchetes `[ S.C.I.E. ]` + etiqueta 13px mist; 4 tiles flex-wrap (flex:1 1 150px) fondo `#151517` radio 16px — letra Bricolage 24px lima, label mono 9.5px caps paper, ejemplo 12px mist; bloque «EJEMPLO PRÁCTICO» fondo `rgba(0,0,0,.35)` borde `#26262a` radio 16px con prompt completo 13.5px/1.7 mist y **botón Copiar** (`.btn-ghost` pequeño, esquina superior derecha; al copiar → `[✓] Copiado` 2 s).
  - **Cards de herramienta**: borde hairline radio 24px fondo blanco al 50%; eyebrow mono teal (tagline), título Bricolage 22px, prosa 14.5px, «Mejor uso» 13px, links `.btn-ghost` pequeños con «→».
  - **Quiz «check rápido»**: card hairline radio 24px; opciones = botones full-width radio 16px borde hairline texto muted con prefijo mono `[ ]`; al responder → correcta fondo lima texto oliva `[✓]`, elegida incorrecta borde tinta `[×]`; mensaje mono teal («[Correcto.] …»).
  - **Card PFC**: fondo lima radio 24px texto oliva; label mono caps `[ PFC — MARCA DE ZAPATOS ]`.
  6. **Nav inferior**: hairline superior; `.btn-ghost` «← Volver al temario» · mono «CLASE 1 DE 5» · `.btn-accent` «Siguiente clase →».

## Interactions & Behavior
- Hover global: CTAs y cards levantan −2px con easing `cubic-bezier(0.16,1,0.3,1)` (`--ease-expo`); glow lima bajo `.btn-accent`; bordes de card pasan a teal; links con subrayado que crece 0→100% (`.link-live`).
- Login: Enter en contraseña = submit. Conservar flujo Supabase actual y estados «Entrando…» / error.
- Clase: scroll-spy de la nav (listener `scroll` pasivo), scroll suave al hacer clic (usar `window.scrollTo`, offset −60px), barra de progreso ligada al scroll, copiar al portapapeles con feedback, quiz de una sola respuesta.
- Respeta `prefers-reduced-motion` (los tokens de motion ya lo contemplan).
- Responsive: breakpoints únicos ~820px (home) y ~760px (clase); el resto colapsa solo vía auto-fit/flex-wrap. Móvil: hit targets ≥44px.

## State Management
- **Login**: estados idle / enviando / error (ya existen en el repo).
- **Home**: progreso del alumno (clases vistas 0–30, módulo en curso) — hoy puede derivarse de localStorage; gating `full_access` desde el JWT (lógica existente en index.html).
- **Clase**: sección activa (int), progreso de lectura (0–1), respuesta del quiz (null | índice), feedback de copiado (transitorio).

## Design Tokens
- Colores: tinta `#0a0a0b` · tinta-soft `#151517` · papel `#f7f6f2` · papel-dim `#edebe3` · **lima `#c8f542`** (acento; solo CTAs, selección, estados completados) · teal `#0f766e` (acento sobre claro) · oliva `#253a06` (texto sobre lima) · muted `#5f5f66` · mist `#a5a5ab` · hairline claro `#e0ddd3` / oscuro `#26262a`. `::selection` lima/oliva. Máximo 2 fondos por página (tinta ↔ papel).
- Tipografía: display **Bricolage Grotesque Variable** (640–700, leading 0.98, tracking −0.025em, `text-wrap:balance`; móvil 1.06/−0.015em) · cuerpo **Instrument Sans Variable** 17px/1.6 · mono **Chivo Mono Variable** (eyebrows 13px caps tracking 0.1em, peso 400).
- Radios: píldoras 999px (botones, chips) · cards grandes 24px · cards/campos/callouts 16px · nunca esquinas vivas en interactivos.
- Sombras: solo en hover (glow lima bajo CTA; `shadow-xl` tinta bajo `.btn-ink`).
- Motivo `[ ]`: eyebrows entre corchetes, viñeta `[·]`, check `[✓]`, error `[ ! ]`, flecha `→`. **Sin emoji, sin Font Awesome** — iconos Lucide trazo 1.5 si hacen falta.
- Mapeo desde la web actual: `#4F46E5/#818CF8` (indigo) → tinta o teal según fondo · `#F59E0B` (amber) → lima (solo CTA/acento) · `#0F172A` (slate) → `#0a0a0b` · `#F8FAFC` → `#f7f6f2` · Inter → Instrument Sans (cuerpo) / Bricolage (títulos) · Merriweather → eliminar (nada de serif) · callouts con border-left → cards con label mono entre corchetes.

## Assets
- Fuentes: CDN Fontsource/jsDelivr (ver `_ds/.../tokens/fonts.css`, copiar los `@font-face` a theme.css o mantener el link).
- Sin imágenes propias: cualquier foto va con tratamiento duotono `filter:grayscale(1) contrast(1.15) brightness(0.92)` (clase `.media-duotone`).
- Wordmark siempre tipografiado (nunca imagen): `[m]` lima + `.seny` en Bricolage bold + `/academy` en Chivo Mono lima.
- Los charts de la web vieja (Chart.js) se eliminan del diseño final elegido; si se recuperan, barras CSS planas en teal/lima/tinta.

## Files
- `curso-login.dc.html` — prototipo login (referencia para `public/login.html`)
- `curso-home.dc.html` — prototipo home/panel (referencia para `public/index.html`)
- `curso-clase-m3c1.dc.html` — prototipo plantilla de clase (referencia para `public/modulo*.html` y `pfc-marketing.html`)
- `_ds/m-seny-design-system-050f7914-7423-40a2-b384-c2758e6f1fa4/tokens/*.css` + `styles.css` — tokens y clases de marca (base de theme.css)
- `support.js`, `_ds/.../_ds_bundle.js` — runtime solo para previsualizar los prototipos; **no migrar al repo**
