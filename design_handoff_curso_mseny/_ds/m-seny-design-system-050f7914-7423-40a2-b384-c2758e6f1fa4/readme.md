# [m].seny — Design System

**[m].seny studio** (www.msenystudio.com) es un estudio de consultoría, formación y desarrollo: inteligencia artificial aplicada a la empresa, al diseño y al marketing; automatización de procesos y software a medida. Opera en ES/CA/EN con el español como copy maestro. La palabra catalana «seny» (sensatez, criterio, juicio sereno) es el corazón de la marca; el gesto tipográfico `[m]` — corchetes lima alrededor de la m — se repite por toda la identidad.

**Cuatro pilares / sub-marcas** (aparecen como muletilla mono junto al logo en cada página de servicio):
- Consultoría → `/studio` · Formación in-company → `/academy` · Automatización con IA → `/labs` · Software a medida → `/forge`

**Fuentes de este design system**
- Codebase: repo GitHub `mseny/mseny-studio-web` (Astro 5 + islas React + Tailwind v4), también montado localmente como `mseny-studio-web/`. Explora el repo para afinar cualquier recreación — la piel entera vive en `src/styles/global.css` (bloque `@theme`) y el copy maestro en `src/i18n/es.ts`.
- La propia web la describe como «dirección de arte provisional hasta cerrar brand code»: estos tokens son la verdad actual, pero re-tematizar = tocar solo los tokens.

## CONTENT FUNDAMENTALS

- **Idioma:** español maestro (catalán e inglés traducidos de él). Tono directo, experto, orientado a beneficio. Regla explícita del proyecto: *prohibido el humo* («revoluciona», «disrupción») y la jerga sin traducir.
- **Tú/vosotros, nosotros:** se tutea siempre al lector («Cuéntanos tu caso», «Entra por donde te duela más») y el estudio habla en primera persona del plural («Aplicamos la IA con criterio»). A empresas se les habla en vosotros cuando toca («¿Qué queréis aprender o resolver?»).
- **Frases cortas, afirmativas, con remate.** Titulares de pocas palabras y punto final: «Formación que se queda.», «Simple, de principio a fin.», «La IA correcta, en el sitio correcto.». Uso frecuente del guión largo para el remate: «— sin compromiso», «— no de la herramienta de moda».
- **Honestidad como recurso:** «Si no lo hay [caso de uso], te lo diremos igual de claro.» «Te decimos qué merece la pena — y qué no.»
- **Nada de emoji.** Los "iconos de texto" son del motivo de marca: `[·]` como viñeta, `[✓]` como check, `→` como flecha de CTA, `[ ]` alrededor de rótulos.
- **Microcopy con ejemplos concretos:** los placeholders son casos reales («P. ej.: cada semana perdemos horas pasando pedidos del email al ERP…»). Errores en humano: «Nos falta tu email.», «Revisa el email — no parece válido.»
- **Rótulos de sección (eyebrows)** en mono mayúsculas dentro de corchetes: `[ QUÉ HACEMOS ]`, `[ CÓMO TRABAJAMOS ]`.

## VISUAL FOUNDATIONS

- **Paleta:** tinta `#0a0a0b` + papel cálido `#f7f6f2` como base bicolor; **lima `#c8f542`** es EL color de marca (corchetes, CTAs, selección, bandas de conversión). Sobre fondos claros el acento baja a **teal profundo `#0f766e`** (iconos, brackets-ink, barras); el texto sobre lima es oliva oscuro `#253a06`. Secundarios: muted `#5f5f66` (sobre papel), mist `#a5a5ab` (sobre tinta). Hairlines: `#e0ddd3` claro / `#26262a` oscuro. Máximo 2 fondos por página: secciones alternan tinta ↔ papel/papel-dim, con lima solo en bandas de CTA.
- **Tipografía:** display **Bricolage Grotesque Variable** (peso 640, interlineado 0.98, tracking −0.025em, `text-wrap:balance`; en móvil 1.06/−0.015em); cuerpo **Instrument Sans Variable** 17px/1.6; mono **Chivo Mono Variable** para eyebrows (13px, caps, tracking 0.1em, peso 400 — nunca seminegrita) y la muletilla de sub-marca. Titulares con `clamp()`: hero `clamp(2.35rem,8vw,6.75rem)`, secciones `clamp(2.2rem,5.5vw,4.25rem)`, sub-secciones `clamp(1.9rem,4.5vw,3rem)`.
- **Motivo `[ ]`:** los corchetes del logo se repiten en eyebrows, viñetas `[·]`, checks `[✓]` y el estado de éxito `[Recibido.]`. Es el gesto identitario número uno.
- **Layout:** contenedor `max-width:72rem` (6xl) con padding 1.25rem/2rem; secciones muy aireadas (`py` 4–10rem); navbar fija que se vuelve tinta sólida al hacer scroll; footer tinta.
- **Radios:** píldoras 999px (todos los botones), cards grandes 24px (`rounded-3xl`), cards/campos 16px (`rounded-2xl`), cards relacionadas 16px, chips FAQ círculo. Nunca esquinas vivas en interactivos.
- **Bordes y sombras:** hairlines 1px por todas partes (border-t entre filas de lista); sombra solo en hover (glow lima `0 12px 32px -8px rgb(200 245 66/.55)` bajo el CTA, `shadow-xl` tinta bajo btn-ink) y en cards seleccionadas.
- **Hover:** levantar −2px + easing `cubic-bezier(0.16,1,0.3,1)` (--ease-expo); enlaces con subrayado vivo que crece 0→100%; bordes pasan a teal; iconos escalan 1.1. Press: vuelve a translateY(0).
- **Animación:** GSAP + Lenis en la web real; reveals al entrar en pantalla, morph «amb seny»→«[m].seny» en hero y manifiesto, cards de proceso que se completan (barra se llena, card pasa papel→tinta en 0.7s), marquee CSS de 28s que pausa en hover. Todo respeta `prefers-reduced-motion`. Sin JS, el estado por defecto es el bueno (cards completadas).
- **Imagen:** SIN fotografía propia todavía — stock Pexels con tratamiento **duotono** (`grayscale(1) contrast(1.15) brightness(0.92)`) a ~35% de opacidad bajo degradados de tinta, para no romper la paleta. Grano SVG sutil (opacity .05, overlay) sobre toda la página en escritorio.
- **Fondos:** tinta con foto duotono + degradado (hero, manifiesto), papel liso, papel-dim, lima (solo CTA), glow radial lima al 12% como acento decorativo. Nunca degradados azul-violeta.

## ICONOGRAPHY

- **Sistema:** Lucide (ISC), trazo 1.5, puntas redondas, `currentColor`. Los cuatro iconos de pilar están inlineados en el codebase y recreados en `components/content/PillarIcon.jsx`: compass (consultoría), graduation-cap (formación), workflow (automatización), square-terminal (software). Se usan a 44/56px en listas, 36px en cards relacionadas y gigantes (26rem, teal al 5%) como marca de agua de sección. Si necesitas más iconos, usa Lucide del CDN al mismo trazo 1.5.
- **Iconos de texto:** el motivo `[ ]` hace de sistema de iconos unicode: `[·]` viñeta, `[✓]` check, `→` flecha, `+`→`×` (rotación 45°) en FAQ. Sin emoji, nunca.
- **Logos:** wordmark `[m].seny` SIEMPRE tipografiado (Bricolage bold, `[m]` en lima) — no existe un archivo de logo del estudio más allá de `assets/favicon.svg`. Logos de clientes en `assets/logos/` (SVG de trazo blanco, solo sobre tinta; ver LogoMarquee).

## Index

- `styles.css` → `tokens/` (fonts, colors, typography, motion, utilities — clases de marca `.display`, `.eyebrow`, `.brackets`, `.btn-accent`, `.btn-ghost`, `.btn-ink`, `.link-live`, `.card-live`, `.media-duotone`, `.grain-overlay`, marquee)
- `assets/` — favicon, og.png, `logos/` de clientes (blancos)
- `guidelines/` — specimen cards (colores, tipo, marca, motion, radios)
- `components/core/` — **Logo**, **Eyebrow**, **Button**, **LinkLive**
- `components/content/` — **PillarIcon**, **ProcessCard**, **CtaBand**, **FaqItem**, **LogoMarquee**
- `components/forms/` — **OptionCard**, **TextField**, **SelectField**, **StepProgress**
- `ui_kits/website/` — recreación interactiva de msenystudio.com (home + contacto)
- `SKILL.md`, `github.md`

**Intentional additions:** ninguna — el inventario sale del codebase. `btn-ink` se ha nombrado como variante (en la web es un estilo inline repetido sobre bandas lima).

**Caveats:** las fuentes se sirven desde el CDN de Fontsource/jsDelivr (mismos binarios variable que carga la web vía `@fontsource-variable`); no hay TTF/WOFF locales en el repo. La fotografía de la web es stock Pexels hotlinkeado — no se ha copiado; usa el tratamiento duotono sobre cualquier placeholder.
