---
clase: 3
tipo: teórica
audiencia: conjunta
bloque: 2 — Generación de Imagen
titulo: "Estudio Creativo IA (I) — Los Titanes del Píxel"
duracion: "1.5 - 2 horas"
practica_asociada: [clase04_practica.md, clase06_practica.md, clase07_practica.md]
---

# Clase 3 · Teórica · Conjunta
# Estudio Creativo IA (I) — Los Titanes del Píxel

> *El ROI de cada píxel. Domina las herramientas y fórmulas que convierten un prompt de texto en un render fotorrealista de producto.*

**Duración estimada:** 1.5 – 2 horas

---

## Navegación de la clase

1. [El ROI Visual de la IA](#1-el-roi-visual-de-la-ia)
2. [Glosario Visual](#2-glosario-visual)
3. [El Flujo de Trabajo de Generación](#3-el-flujo-de-trabajo-de-generación)
4. [Fórmulas de Prompt Visual](#4-fórmulas-de-prompt-visual)
5. [Los Titanes del Píxel](#5-los-titanes-del-píxel)
6. [Demo: De Prompt a Render](#6-demo-de-prompt-a-render)
7. [Quiz + PFC](#7-quiz-y-pfc)

---

## Conceptos clave de esta clase

`Seed` · `In-painting` · `Out-painting` · `Upscaling` · `ControlNet` · `Aspect Ratio` · `Negative Prompt` · `Fórmula S.C.I.E.` · `Fórmula P.E.P.A.` · `Fórmula M.E.T.A.` · `Fórmula C.A.P.A.` · `Sketch to Real` · `Image-to-Image`

---

## Herramientas presentadas

| Herramienta | Especialidad |
|-------------|-------------|
| **Gemini (NanoBanana 2)** | Generación integrada en ecosistema Google, calidad fotorrealista |
| **Freepik (Mystic)** | Generación orientada a diseño profesional con estilos presets |
| **DALL-E 3** | Integrado en ChatGPT, excelente siguiendo instrucciones de texto |
| **ImageFX** | Chips Expresivos de Google para variaciones rápidas |
| **Midjourney** | Calidad estética premium, estilo fotográfico editorial |

---

## 1. El ROI Visual de la IA

### Antes vs. Después

| Proceso Tradicional | Proceso con IA Generativa |
|---------------------|--------------------------|
| Briefing → Fotógrafo → Estudio → 200 fotos → Selección → Retoque → 2 semanas | Prompt → 20 variaciones → Selección → Refinamiento → 2 horas |
| Render 3D de producto → Modelador → Texturas → Iluminación → 3 días por modelo | Prompt descriptivo + Seed → Render fotorrealista → 30 segundos |
| Campaña visual 50 piezas → Equipo de 4 personas → 3 semanas | Pipeline IA + variaciones automáticas → 1 persona → 2 días |

> 💰 **Dato clave para la dirección:** La generación de imagen con IA reduce hasta un **80% el coste** de producción visual en fases de ideación y prototipado. NO reemplaza la producción final de calidad, pero elimina semanas de iteración.

### ¿Cuándo usar IA vs. producción real?

| Fase | IA Generativa | Producción Tradicional |
|------|--------------|----------------------|
| **Ideación / Concepto** | ✅ Perfecto | ❌ Demasiado costoso para explorar |
| **Prototipado Rápido** | ✅ 20 variaciones en minutos | ❌ Semanas por cada versión |
| **Catálogo de e-commerce** | ⚠️ Posible con control (ControlNet + LoRAs) | ✅ Necesario para fidelidad exacta |
| **Campaña editorial** | ✅ Concepto + mood + storyboard | ✅ Ejecución final |
| **RRSS / Contenido efímero** | ✅ Ideal (volumen alto, vida útil corta) | ❌ Coste desproporcionado |

---

## 2. Glosario Visual

### Términos que necesitas dominar para trabajar con generación de imagen

| Término | Definición | Analogía |
|---------|-----------|----------|
| **Seed** | Número aleatorio que determina el punto de partida de la generación. **Misma seed + mismo prompt = misma imagen.** | El ADN de la imagen. Si guardas la seed, puedes "clonar" el resultado exacto. |
| **In-painting** | Editar/modificar una zona seleccionada de la imagen sin alterar el resto. | Photoshop con IA: seleccionas la suela del zapato y le dices "cámbiala a goma blanca". |
| **Out-painting** | Expandir los bordes de una imagen existente, generando contenido nuevo coherente. | Ampliar el encuadre de una foto como si tuvieras un gran angular virtual. |
| **Upscaling** | Aumentar la resolución de una imagen sin perder calidad (a veces mejorándola). | Pasar de 1080p a 4K, pero la IA "inventa" los detalles que faltan de forma inteligente. |
| **ControlNet** | Sistema para dar instrucciones estructurales a la IA (pose, bordes, profundidad). | Una "marioneta virtual" que controla la estructura de la imagen. |
| **Aspect Ratio** | Proporción de la imagen (1:1 cuadrada, 16:9 panorámica, 9:16 vertical). | El formato del lienzo antes de pintar. |
| **Negative Prompt** | Instrucciones de lo que NO quieres ver en la imagen. | "Prohibido en set": lista de elementos que no deben aparecer (ej: "no watermark, no text, no blurry"). |
| **Sketch to Real** | Convertir un dibujo o boceto a mano en una imagen fotorrealista. | Escaneas un croquis de zapato y la IA lo transforma en un render realista. |
| **Image-to-Image (img2img)** | Usar una imagen existente como base para generar variaciones. | "Coge esta foto de referencia y genera algo similar pero con estos cambios..." |
| **Style Transfer** | Aplicar el estilo visual de una imagen a otra (ej: "haz esta foto como un cuadro al óleo"). | Filtros de Instagram, pero con control profesional. |

---

## 3. El Flujo de Trabajo de Generación

### Las 5 Fases del Proceso Creativo con IA

```
┌─────────────┐    ┌──────────────┐    ┌───────────────┐    ┌──────────────┐    ┌────────────┐
│  1. IDEACIÓN │───▶│  2. SEED     │───▶│ 3. ITERACIÓN  │───▶│ 4. REFINA-   │───▶│ 5. ACABADO │
│              │    │              │    │               │    │    MIENTO     │    │            │
│ - Concepto   │    │ - Prompt     │    │ - Variaciones │    │ - In-painting│    │ - Upscaling│
│ - Referencia │    │   estructu-  │    │ - Seeds       │    │ - Detalles   │    │ - Formato  │
│ - Mood       │    │   rado       │    │ - Aspect      │    │ - Consistenci│    │ - Exportar │
│              │    │ - Herramien- │    │   Ratio       │    │   a de marca │    │            │
│              │    │   ta elegida │    │               │    │              │    │            │
└─────────────┘    └──────────────┘    └───────────────┘    └──────────────┘    └────────────┘
```

> ⭐ **Regla de diseño:** Nunca uses el primer resultado. Genera mínimo 5 variaciones, escoge la mejor seed, y refina desde ahí. La IA te da el 80% en segundos; tú pones el 20% final con tu criterio profesional.

---

## 4. Fórmulas de Prompt Visual

### S.C.I.E. — La Fórmula Fundamental

| Letra | Significado | Ejemplo para zapatos |
|-------|-------------|---------------------|
| **S** | **Sujeto** | "A pair of handcrafted Italian luxury leather loafers" |
| **C** | **Contexto / Escena** | "displayed on a marble pedestal in a minimalist luxury showroom" |
| **I** | **Iluminación** | "soft golden hour side lighting, gentle shadows" |
| **E** | **Estilo / Estética** | "editorial fashion photography, shot on Hasselblad, 85mm lens, shallow depth of field" |

**Prompt completo S.C.I.E.:**
```
A pair of handcrafted Italian luxury leather loafers, cognac brown color with hand-stitched 
details, displayed on a marble pedestal in a minimalist luxury showroom with white walls 
and oak flooring, soft golden hour side lighting with gentle shadows, editorial fashion 
photography style, shot on Hasselblad, 85mm lens, shallow depth of field, 8K resolution
```

### P.E.P.A. — Producto Editorial

| P — Producto | E — Entorno | P — Perspectiva | A — Atmósfera |
|---|---|---|---|
| "Men's oxford shoes in midnight blue suede" | "On a vintage oak desk in a gentleman's study" | "45-degree angle, product-centric composition" | "Warm, sophisticated, autumn mood" |

### M.E.T.A. — Mood Conceptual

| M — Mood | E — Elementos | T — Técnica | A — Acabado |
|---|---|---|---|
| "Timeless elegance meets modern minimalism" | "Single stiletto heel, white orchid, black velvet" | "Macro photography, extreme close-up of leather grain" | "Matte finish, no glare, neutral color grading" |

### C.A.P.A. — Campaña Publicitaria

| C — Concepto | A — Audiencia Visual | P — Plataforma | A — Acción |
|---|---|---|---|
| "Launch campaign: 'Walk in Art'" | "Visual language for 30-45 year old affluent professionals" | "Instagram carousel (1:1), LinkedIn banner (1200x628)" | "Hero image with logo space bottom-right" |

### 🔴 Negative Prompt: Qué NO quieres

Tan importante como lo que pides es **lo que prohíbes**:

```
Negative prompt: blurry, low quality, watermark, text overlay, deformed, distorted 
proportions, ugly, bad anatomy, extra limbs, cropped, out of frame, cartoon, illustration, 
3D render, CGI, stock photo look
```

---

## 5. Los Titanes del Píxel

### Gemini — NanoBanana 2 (Google)

**Fortalezas:**
- Integrado en Google Workspace (puedes generar desde Gmail/Docs)
- Calidad fotorrealista de nueva generación
- Entiende contexto en español de forma nativa
- Integración directa con Stitch y Flow para composición

**Ideal para:** Renders rápidos de producto, variaciones de concepto, iteración desde el escritorio

**Ejemplo de prompt para Gemini:**
```
Genera una imagen fotorrealista de unos zapatos de mujer tipo stiletto en piel negra brillante, 
con tacón de 9cm, sobre una superficie de mármol blanco Calacatta. Iluminación de estudio 
frontal suave. Fondo degradado gris claro. Calidad editorial de revista Vogue.
```

---

### Freepik — Mystic

**Fortalezas:**
- Modelos entrenados específicamente para diseño profesional
- Presets de estilo (editorial, producto, lifestyle)
- Freepik Spaces: generación colaborativa en equipo
- Integración con el banco de imágenes de Freepik para composición

**Ideal para:** Catálogo de producto, mockups, assets de marketing, trabajo en equipo creativo

**Ejemplo de prompt para Freepik:**
```
Luxury men's derby shoes in hand-colored patina leather (brown-to-burgundy gradient), 
displayed at a 3/4 angle on a dark walnut surface. Studio lighting with dramatic side light. 
Clean white background. Product photography for e-commerce catalog.
```

---

### DALL-E 3 (OpenAI)

**Fortalezas:**
- Integrado en ChatGPT (conversación + generación de imagen en el mismo chat)
- Excelente comprendiendo instrucciones complejas en texto
- Buena composición y texto legible dentro de la imagen
- Iteración conversacional natural ("ahora cambia el color a azul marino")

**Ideal para:** Generación rápida dentro de una conversación, prototipado conceptual, imágenes con texto

---

### ImageFX — Chips Expresivos (Google)

**Fortalezas:**
- Interfaz única de "chips" para modificar aspectos de la imagen con un clic
- Exploración visual ultrarrápida de variaciones
- Genera 4 resultados simultáneamente

**Ideal para:** Explorar variaciones de iluminación, color, ángulo en segundos

---

### Midjourney

**Fortalezas:**
- Calidad estética superior (especialmente en estilo editorial/artístico)
- Parámetros avanzados (`--ar`, `--cref`, `--sref`, `--chaos`, `--stylize`)
- Consistencia de personaje con `--cref` (character reference)

**Ideal para:** Campañas editoriales, key visuals, imágenes "hero" de alta calidad

---

## 6. Demo: De Prompt a Render

### Ejercicio en vivo: Tres herramientas, un mismo concepto

**Briefing del cliente (imaginario):**
> "Necesitamos una imagen hero para la home de nuestra tienda online de zapatos de lujo. Debe transmitir elegancia atemporal. Producto: mocasín de hombre en piel marrón cognac."

#### Paso 1: Construir el prompt con S.C.I.E.

```
S: A pair of men's luxury penny loafers in cognac brown calfskin leather
C: Resting on a vintage leather-bound book on a dark mahogany desk, with a whiskey glass 
   and gold pocket watch in soft focus background
I: Warm side lighting simulating late afternoon sun through venetian blinds, creating 
   dramatic shadow patterns
E: Editorial fashion photography, shot on Phase One IQ4, 100mm macro lens, f/2.8, 
   ultra-high detail, 8K
```

#### Paso 2: Lanzar en 3 herramientas simultáneamente

| | Gemini | Freepik | DALL-E 3 |
|---|---|---|---|
| **Tiempo** | ~15 seg | ~20 seg | ~20 seg |
| **Fortaleza visible** | Color y realismo de la piel | Composición editorial | Comprensión del mood |
| **Debilidad típica** | A veces detalles de costura borrosos | Menos control fino en textos | Texturas a veces planas |

#### Paso 3: Seleccionar el mejor resultado y refinar

Elegido el mejor render base, aplico:
1. **In-painting**: Corregir detalle de la costura lateral
2. **Variación de iluminación**: 3 opciones (natural, estudio, dramática)  
3. **Upscaling**: De 1024px a 4096px

> 🎯 **Resultado:** De un briefing a un render editorial listo para la home en menos de 10 minutos.

---

## 7. Quiz y PFC

### 📝 Quiz de Conocimientos (10 preguntas)

**1.** ¿Qué es la "Seed" en generación de imagen?

- a) El nombre del modelo de IA
- b) ✅ Un número aleatorio que determina el punto de partida; misma seed + mismo prompt = misma imagen
- c) La resolución de la imagen
- d) El formato del archivo generado

**2.** ¿Para qué sirve el In-painting?

- a) Para generar imágenes desde cero
- b) Para aumentar la resolución
- c) ✅ Para modificar una zona seleccionada de la imagen sin alterar el resto
- d) Para convertir imagen a vídeo

**3.** En la fórmula S.C.I.E., ¿qué representa la "I"?

- a) Inteligencia del modelo
- b) Instrucciones de formato
- c) ✅ Iluminación
- d) Iteración del prompt

**4.** ¿Cuál es el propósito del Negative Prompt?

- a) Hacer la imagen en blanco y negro
- b) ✅ Indicar lo que NO quieres que aparezca en la imagen
- c) Reducir el tiempo de generación
- d) Generar la versión opuesta del prompt

**5.** Si necesitas 20 variaciones rápidas de un render de zapato explorando distintas iluminaciones, ¿qué herramienta es ideal?

- a) Midjourney
- b) ✅ ImageFX (Chips Expresivos)
- c) DALL-E 3
- d) Photoshop

**6.** ¿Qué es Sketch to Real?

- a) Un estilo de fotografía minimalista
- b) ✅ Convertir un boceto/dibujo a mano en una imagen fotorrealista
- c) Una técnica de marketing para redes sociales
- d) Un modelo de IA para texto

**7.** ¿En qué fase del flujo de trabajo deberías usar el Upscaling?

- a) En la fase 1 (Ideación)
- b) En la fase 2 (Seed)
- c) ✅ En la fase 5 (Acabado), cuando ya tienes el render final seleccionado
- d) En todas las fases por igual

**8.** ¿Qué herramienta ofrece "Freepik Spaces" para trabajo creativo?

- a) Un portfolio online personal
- b) ✅ Entornos colaborativos de generación visual en equipo
- c) Almacenamiento en la nube gratuito
- d) Un editor de vídeo

**9.** Según la regla de diseño con IA, ¿cuántas variaciones mínimas debes generar antes de elegir?

- a) 1 (la primera siempre es la mejor)
- b) 2
- c) ✅ Mínimo 5 variaciones
- d) 100

**10.** Para una campaña de Instagram (formato 1:1), ¿qué fórmula usarías?

- a) S.C.I.E. (solo)
- b) P.E.P.A.
- c) ✅ C.A.P.A. (tiene en cuenta plataforma y formato de destino)
- d) M.E.T.A.

---

### 🚀 PFC — Entregable de Clase 3

> Esta es la última clase teórica antes de tu primer laboratorio visual (Clase 4). Prepara lo siguiente:

#### Preparación para el Lab Visual (Clase 4)

1. **Definir la estética visual de tu marca de zapatos** (si no lo hiciste en C01):
   - Paleta de colores principal (3-5 colores)
   - 3 marcas de referencia visual (ej: Loewe, Crockett & Jones, Santoni)
   - Tono visual: ¿minimalista? ¿opulento? ¿contemporáneo? ¿clásico?

2. **Preparar los primeros 3 modelos de zapatos a generar:**
   - Modelo 1 (mujer): tipo de zapato, material, color
   - Modelo 2 (hombre): tipo de zapato, material, color
   - Modelo 3 (unisex o segundo modelo): tipo de zapato, material, color

3. **Escribir el prompt S.C.I.E. para cada modelo** (en inglés):
   - No lo ejecutes aún — lo haremos en la Clase 4

> 📦 **Entregable:** Documento con la definición estética (paleta, referencias, tono) + 3 prompts S.C.I.E. escritos y listos para ejecutar en la Clase 4.

---

## 📎 Recursos Adicionales

- [Gemini (Google)](https://gemini.google.com)
- [Freepik](https://freepik.com)
- [ChatGPT + DALL-E](https://chatgpt.com)
- [ImageFX](https://aitestkitchen.withgoogle.com/tools/image-fx)
- [Midjourney](https://midjourney.com)
- [Prompt Engineering for Image Generation - OpenAI Guide](https://platform.openai.com/docs/guides/images)
