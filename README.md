# Curso IA Generativa · [m].seny /academy

Web del alumno del curso «IA Generativa» de [m].seny. Páginas HTML planas en `public/` servidas por Next.js en Vercel, con login por Supabase y un Edge Middleware que protege las clases y aplica el nivel de acceso de cada alumno. Piel: design system [m].seny, sub-marca `/academy` (tinta / papel / lima, Bricolage Grotesque + Instrument Sans + Chivo Mono, motivo `[ ]`).

## Estructura

| Ruta | Qué es |
|---|---|
| `public/index.html` | Home: panel del alumno (progreso, «Continuar», temario con las clases por módulo). |
| `public/login.html` | Acceso con Supabase (usuario → `usuario@cursoia.local`). |
| `public/modulo*.html`, `public/pfc-marketing.html` | Las clases. Cada una es HTML plano con `<body data-class="…">`. |
| `public/theme.css` | Tokens y utilidades del design system (fuentes en `public/fonts/`). No se toca salvo para re-tematizar. |
| `public/curso.css` | Componentes de clase, home y login. |
| `public/curso.js` | Comportamiento común: sesión y nivel desde el JWT, progreso en Supabase con caché local, top bar, chips de secciones con scroll-spy, hero, nav inferior, copiar, test, tabs, checklist, home. |
| `public/curso-data.js` | **Fuente de verdad** de módulos, clases, duraciones, herramientas y niveles de acceso. La usan la home, las clases y `proxy.js`. |
| `proxy.js` | Proxy de Next (antes middleware): exige sesión y aplica `curso-data.js` (nivel de acceso por módulo; M9 bloqueado mientras `locked:true`). |
| `docs/plantilla-clase.html` | Esqueleto canónico de una clase con todos los componentes. |
| `docs/brief-migracion.md` | Reglas para migrar o crear una clase. |
| `tools/parity.mjs` | Test de paridad de contenido entre `git HEAD` y el árbol de trabajo (`node tools/parity.mjs public/x.html`, `--all`). |
| `supabase/migrations/` | SQL de la tabla `academy_progress` (progreso y notas por alumno). Se aplica desde el SQL Editor de Supabase. |
| `design_handoff_curso_mseny/` | Handoff de diseño (prototipos, tokens, plan y mockup del temario). No se sirve. |
| `_archivo/` | Material antiguo fuera de `public/` (ignorado por git). |

## Niveles de acceso

El nivel viaja en el JWT de Supabase como `user_metadata.access_level`: `diseno`, `marketing`, `finanzas` o `completo` (sin valor = `completo`). Se edita en Supabase → Authentication → Users → *User Metadata*. Qué módulos ve cada nivel se define en `levels` dentro de `public/curso-data.js`. M9 está bloqueado para todos (`locked: true` en el módulo).

## Añadir o editar una clase

1. Copia `docs/plantilla-clase.html` a `public/` y sigue `docs/brief-migracion.md`.
2. Da de alta la clase en `public/curso-data.js` (id, archivo, título, duración, herramientas). La home, la top bar, los chips, el «Clase X de Y» y el anterior/siguiente salen de ahí.
3. Comprueba: `node tools/parity.mjs public/<archivo>` si vienes de una versión anterior, y `npx next build`.

## Desarrollo

```bash
npm install
npx next dev        # http://localhost:3000 (con middleware y login reales)
```

Para ver las páginas sin login (solo piel): cualquier servidor estático sobre `public/`, por ejemplo `python -m http.server 8766 --directory public`.

## Variables de entorno (Vercel)

`SUPABASE_PROJECT_REF`, `SUPABASE_URL`, `SUPABASE_ANON_KEY` (todas con valor por defecto en `proxy.js`; la anon key es pública por diseño).
