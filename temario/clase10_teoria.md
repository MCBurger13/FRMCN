---
clase: 10
tipo: teórica
audiencia: conjunta
bloque: 3 — Control Visual y Campaña
titulo: "Strategy & Copy — Prompt Mastery con Gems y Deep Research"
duracion: "1.5 horas"
practica_asociada: [clase11_practica.md]
---

# Clase 10 · Teórica · Conjunta
# Strategy & Copy — Prompt Mastery con Gems y Deep Research

> *De escribir prompts a diseñar sistemas. Convierte tus instrucciones sueltas en "empleados empaquetados" reutilizables que trabajan solos.*

**Duración estimada:** 1.5 horas

---

## Navegación de la clase

1. [El Coste Oculto del Prompt Repetitivo](#1-el-coste-oculto-del-prompt-repetitivo)
2. [System Prompts Profesionales](#2-system-prompts-profesionales)
3. [Gems & GPTs — Empleados Empaquetados](#3-gems-y-gpts)
4. [Deep Research — Tu Consultor Estratégico](#4-deep-research)
5. [NotebookLM — Investigación con Grounding](#5-notebooklm)
6. [Gamma — Presentaciones con IA](#6-gamma)
7. [Quiz + PFC](#7-quiz-y-pfc)

---

## Conceptos clave de esta clase

`System Prompt` · `Prompt Template` · `Gem (Google)` · `GPT Custom (OpenAI)` · `Project (Claude)` · `Deep Research` · `NotebookLM` · `Grounding` · `Chain of Thought` · `Gamma` · `Prompt Library` · `Brand Voice`

---

## 1. El Coste Oculto del Prompt Repetitivo

### La trampa del Copy-Paste

Cada vez que un miembro del equipo escribe un prompt desde cero, gasta:
- ⏱️ **3-5 minutos** formulando las instrucciones
- 🔄 **2-3 iteraciones** hasta acertar con el tono/formato
- 📉 **Inconsistencia** porque cada persona escribe diferente
- 💸 **Tokens adicionales** por instrucciones redundantes

**Cálculo real:** Si 5 personas × 10 prompts/día × 5 minutos = **250 minutos/día perdidos** en escribir prompts que podrían estar guardados.

> ⭐ **La solución:** Crear un sistema de prompts reutilizables que funcionen como "empleados"; siempre saben qué hacer, cómo hacerlo y en qué tono responder.

---

## 2. System Prompts Profesionales

### De instrucciones improvisadas a una "descripción de puesto"

Un System Prompt profesional tiene 7 componentes:

| Componente | Función | Ejemplo para nuestra tienda |
|-----------|---------|----------------------------|
| **1. Identidad** | Quién es la IA en esta tarea | "Eres el Director de Comunicación de [MARCA], una firma de zapatos de lujo..." |
| **2. Contexto** | Información de la empresa/marca | Brandbook resumido, público objetivo, competidores |
| **3. Tono de voz** | Cómo debe comunicarse | "Sofisticado pero cercano. Como Hermès, no como un influencer." |
| **4. Restricciones** | Lo que NO debe hacer | "Nunca uses emojis. No uses exclamaciones. No digas 'lo mejor'." |
| **5. Formato** | Estructura del output | "Responde siempre en formato: Headline (max 8 palabras) + Body (max 50) + CTA (max 4)" |
| **6. Ejemplos (Few-Shot)** | 2-3 ejemplos del tono deseado | Copies reales de la marca o de competidores aspiracionales |
| **7. Instrucciones de fallback** | Qué hacer si no tiene info | "Si no tienes datos suficientes, pregunta antes de inventar." |

### Plantilla de System Prompt Universal

```
# IDENTIDAD
Eres [ROL] de [EMPRESA], especializada en [SECTOR].

# CONTEXTO
- Empresa: [NOMBRE] — [DESCRIPCIÓN BREVE]
- Público objetivo: [PERFIL]
- Tono de marca: [ADJETIVOS]
- Competidores de referencia: [3 MARCAS]

# REGLAS DE COMUNICACIÓN
1. Tono: [DESCRIPTORES]
2. Idioma: [IDIOMA PRINCIPAL]
3. Evitar: [LISTA DE PROHIBIDOS]
4. Formato estándar: [ESTRUCTURA]

# EJEMPLOS DE COPY APROBADO
Ejemplo 1: "[COPY REAL DE LA MARCA]"
Ejemplo 2: "[COPY REAL DE LA MARCA]"

# INSTRUCCIONES DE FALLBACK
Si no tienes datos suficientes para responder con precisión, 
pregunta antes de inventar. La precisión es más importante que la rapidez.
```

---

## 3. Gems y GPTs

### "Empleados Empaquetados"

Un **Gem** (Google) o **GPT Custom** (OpenAI) o **Project** (Claude) es un asistente preconfigurado con:
- System Prompt persistente
- Documentos adjuntos (brandbook, catálogo, guía de estilo)
- Instrucciones de formato y tono
- Herramientas activadas (búsqueda web, generación de imagen, etc.)

### Los 6 "Empleados" de Nuestra Tienda

| Gem/GPT | Rol | Documentos adjuntos | Output típico |
|---------|-----|--------------------| --------------|
| 🎨 **Director de Arte** | Genera prompts visuales coherentes con la marca | Brandbook, paleta, lookbook de referencia | Prompts S.C.I.E./P.E.P.A. para generación |
| ✍️ **Copywriter de Lujo** | Redacta copies de producto, posts, CTAs | Guía de tono, copies aprobados, competidores | Copy para RRSS, web, catálogo |
| 📊 **Analista de Mercado** | Investiga competencia, tendencias, precios | Informe sectorial, pricing de competidores | Informes de tendencia, benchmarks |
| 🛒 **Product Manager** | Redacta fichas de producto para e-commerce | Plantilla de ficha, SEO keywords | Fichas completas de producto |
| 📧 **Email Marketer** | Diseña secuencias de email marketing | Secuencias exitosas, tasa de apertura, BD | Flujos de newsletter |
| 🌐 **Community Manager** | Gestiona calendario editorial y respuestas RRSS | Calendario editorial, FAQ, políticas | Posts programados, respuestas a comentarios |

### Crear un Gem en Google

```
1. Gemini → Gem Manager → Crear nuevo Gem
2. Nombre: "Copywriter de Lujo — [MARCA]"
3. Instrucciones (System Prompt):
   [PEGAR TU SYSTEM PROMPT PROFESIONAL]
4. Subir archivos:
   - Brandbook_marca.pdf
   - Ejemplos_copies_aprobados.doc  
   - Guia_tono_de_voz.pdf
5. Guardar → Disponible para todo el equipo
```

> 💡 **Ventaja clave:** Cualquier miembro del equipo puede usar el Gem sin saber nada de prompting. Solo dice "escribe una ficha de producto para un mocasín marrón" y el Gem ya sabe el tono, formato y estilo.

---

## 4. Deep Research

### Tu Consultor Estratégico 24/7

Deep Research (disponible en Gemini Pro y Perplexity Pro) no es una búsqueda web normal. Es un **investigador autónomo** que:

1. Lee tu pregunta → elabora un plan de investigación
2. Busca en 20-50 fuentes simultáneamente
3. Lee, sintetiza y cruza información
4. Identifica lagunas → busca más
5. Redacta un **informe consultoral** con citas

### Casos de uso para la tienda

| Investigación | Prompt de Deep Research | Resultado esperado |
|--------------|------------------------|--------------------|
| **Análisis de mercado** | "Analiza el mercado de zapatos de lujo en España 2025-2026: tamaño, tendencias, players, oportunidades para una nueva marca D2C" | Informe de +3 páginas con datos, gráficos y recomendaciones |
| **Benchmark de precios** | "Compara las estrategias de pricing de Loewe, Santoni y Crockett & Jones para calzado de hombre. Rangos de precio, posicionamiento, materiales" | Tabla comparativa detallada |
| **Tendencias visuales** | "¿Cuáles son las tendencias de diseño de calzado de lujo para otoño/invierno 2026? Colores, materiales, siluetas" | Trend report con referencias visuales |
| **Estudio de e-commerce** | "Best practices de UX/UI para tiendas de zapatos de lujo online. Analiza las webs de Jimmy Choo, Manolo Blahnik y Church's" | Informe de UX con capturas y recomendaciones |

---

## 5. NotebookLM

### Investigación con 100% Grounding — Cero Alucinaciones

🔗 [notebooklm.google.com](https://notebooklm.google.com)

NotebookLM es el modelo de Google que SOLO responde con lo que hay en tus documentos. 0% alucinación porque no inventa: **si no está en tus archivos, dice "no tengo esa información"**.

### Casos de uso profesionales

| Uso | Todo los que subes | Resultado |
|-----|-------------------|-----------|
| **Centro de conocimiento de marca** | Brandbook, catálogos anteriores, guías de estilo | Un asistente que conoce tu marca al 100% |
| **Formación de nuevos empleados** | Manuales, procesos, FAQ internas | Un "tutor" que responde basándose solo en documentos internos |
| **Análisis de competidores** | 10 PDFs de análisis de competidores | Comparativas cruzadas con citas exactas de cada fuente |

### Función Podcast

NotebookLM puede generar un **podcast de audio** donde dos "voces" discuten los temas de tus documentos. Ideal para:
- Briefings ejecutivos en formato audio
- Formación de equipo (escuchar en el coche)
- Presentaciones informales de investigación

---

## 6. Gamma

### Presentaciones con IA a Velocidad de Pensamiento

🔗 [gamma.app](https://gamma.app)

Gamma genera presentaciones, documentos e infografías con diseño profesional a partir de un briefing de texto. No es PowerPoint con IA: es un **diseñador de presentaciones autónomo**.

### Flujo de trabajo

```
1. Prompt: "Crea una presentación de 10 slides para inversores sobre 
   nuestra nueva tienda de zapatos de lujo. Incluye: visión, mercado, 
   producto, pricing, equipo, roadmap y ask"
2. Gamma genera: estructura + diseño + contenido
3. Tú editas: ajustas datos, subes renders, afinas copy
4. Resultado: presentación profesional en 15 minutos (vs 2 horas manual)
```

### Cuándo usar Gamma vs. otras herramientas

| Necesidad | Herramienta |
|-----------|------------|
| Presentación de impacto rápida | ✅ **Gamma** |
| Diseño pixel-perfect de marca | Figma / Keynote |
| Documento largo con investigación | NotebookLM + Docs |
| Infografía de datos | Gamma o Canva |

---

## 7. Quiz y PFC

### 📝 Quiz de Conocimientos (8 preguntas)

**1.** ¿Cuáles son los 7 componentes de un System Prompt profesional?

- a) Título, imagen, enlace, pie, firma, fecha, idioma
- b) ✅ Identidad, Contexto, Tono de voz, Restricciones, Formato, Ejemplos (Few-Shot), Instrucciones de fallback
- c) Input, Proceso, Output, Error, Log, Cache, Return
- d) S, C, I, E, P, A, M

**2.** ¿Qué es un "Gem" de Google?

- a) Una piedra preciosa digital
- b) Un modelo de IA nuevo
- c) ✅ Un asistente preconfigurado con System Prompt persistente, documentos adjuntos y herramientas activadas
- d) Un plugin para Chrome

**3.** ¿Qué hace especial a Deep Research frente a una búsqueda web normal?

- a) Busca más rápido
- b) ✅ Investiga autónomamente en 20-50 fuentes, identifica lagunas, y redacta un informe consultoral con citas
- c) Solo busca en Wikipedia
- d) Genera imágenes de los resultados

**4.** ¿Por qué NotebookLM tiene "cero alucinaciones"?

- a) Porque es más inteligente que otros modelos
- b) ✅ Porque SOLO responde con información de los documentos que tú subes. Si no está ahí, dice que no tiene esa información
- c) Porque no tiene acceso a Internet
- d) Porque usa temperatura 0.0

**5.** ¿Cuál es la ventaja de crear "empleados empaquetados" (Gems/GPTs) para el equipo?

- a) Son gratis
- b) ✅ Cualquier miembro del equipo puede obtener resultados consistentes sin saber prompting avanzado
- c) Generan imágenes más rápido
- d) Reemplazan al equipo humano

**6.** ¿Para qué sirve Gamma?

- a) Solo para editar fotografías
- b) Para programar posts en redes sociales
- c) ✅ Para generar presentaciones, documentos e infografías con diseño profesional a partir de un briefing de texto
- d) Para entrenar LoRAs

**7.** Si quieres que TODA la comunicación de tu marca mantenga el mismo tono, ¿qué debes hacer?

- a) Contratar a un copywriter para cada pieza
- b) ✅ Crear un System Prompt profesional con el Brand Voice y usarlo en un Gem/GPT que todo el equipo comparta
- c) Escribir siempre en el mismo idioma
- d) Usar la misma herramienta de IA siempre

**8.** ¿En qué se diferencia un "Project" de Claude de un "Gem" de Google?

- a) Son incompatibles
- b) Son exactamente iguales
- c) ✅ Concepto similar (System Prompt + documentos), pero cada plataforma tiene su interfaz y funciones propias (Artifacts en Claude, integración Workspace en Gemini)
- d) Projects es gratis y Gems es de pago

---

### 🚀 PFC — Entregable de Clase 10

> Prepara los System Prompts y Gems que usará tu equipo durante el resto del curso.

#### Entregables

1. **Crear 2 Gems/GPTs funcionales:**
   - 🎨 **Gem "Director de Arte"**: System Prompt + brandbook adjunto + 3 generaciones de prueba
   - ✍️ **Gem "Copywriter de Lujo"**: System Prompt + guía de tono + 3 copies de prueba

2. **Deep Research — Informe de mercado:**
   - Lanzar un Deep Research sobre el mercado de zapatos de lujo en tu región/país
   - Guardar el informe generado como base estratégica del PFC

3. **NotebookLM — Centro de conocimiento:**
   - Subir todos los documentos de marca generados hasta ahora (brandbook, renders, copies)
   - Probar 3 preguntas al asistente para verificar el Grounding

> 📦 **Entregable:** Los 2 Gems/GPTs funcionales + Informe Deep Research + 3 capturas de NotebookLM respondiendo correctamente.

---

## 📎 Recursos Adicionales

- [Gemini Gems](https://gemini.google.com) — Crear asistentes preconfigurados
- [ChatGPT GPTs](https://chatgpt.com/gpts) — Marketplace de GPTs personalizados
- [Claude Projects](https://claude.ai) — Espacios con instrucciones persistentes
- [NotebookLM](https://notebooklm.google.com) — Investigación con Grounding
- [Gamma](https://gamma.app) — Presentaciones con IA
- [Perplexity](https://perplexity.ai) — Deep Research alternativo
