---
clase: 8
tipo: teórica
audiencia: conjunta
bloque: 3 — Control Visual y Campaña
titulo: "Control Absoluto — ControlNet, LoRAs y Ecosistemas Híbridos"
duracion: "1.5 - 2 horas"
practica_asociada: [clase09_practica.md]
---

# Clase 8 · Teórica · Conjunta
# Control Absoluto — ControlNet, LoRAs y Ecosistemas Híbridos

> *De la sugerencia al mando. Aprende a dar instrucciones estructurales a la IA: misma pose, misma estructura, control total sobre cada detalle del resultado.*

**Duración estimada:** 1.5 – 2 horas

---

## Navegación de la clase

1. [El Problema del Control](#1-el-problema-del-control)
2. [ControlNet — La Marioneta Virtual](#2-controlnet)
3. [LoRAs — Fine-Tuning Ligero](#3-loras)
4. [Negative Prompt Avanzado](#4-negative-prompt-avanzado)
5. [Stable Diffusion — El Ecosistema Open Source](#5-stable-diffusion)
6. [Leonardo AI — El Centro de Control](#6-leonardo-ai)
7. [Figma + IA — Diseño Colaborativo Híbrido](#7-figma-ia)
8. [Quiz + PFC](#8-quiz-y-pfc)

---

## Conceptos clave de esta clase

`ControlNet` · `LoRA` · `Fine-Tuning` · `Canny Edge` · `Depth Map` · `OpenPose` · `Negative Prompt` · `Stable Diffusion` · `ComfyUI` · `Leonardo AI` · `Blueprints` · `Lienzo` · `Train LoRA` · `Figma AI Plugins`

---

## Herramientas presentadas

| Herramienta | Especialidad |
|-------------|-------------|
| **Leonardo AI** | Control total: ControlNet, LoRAs, Lienzo, Blueprints |
| **Stable Diffusion / ComfyUI** | Ecosistema open source con máxima personalización |
| **Figma** | Diseño UI/UX con plugins IA para generación y edición |
| **Runway** | Pipeline visual con controles avanzados |

---

## 1. El Problema del Control

### Lo que la generación "libre" no puede hacer

Hasta ahora hemos generado imágenes describiendo lo que queremos con texto. Esto funciona para ideación, pero tiene **límites críticos para producción**:

| Problema | Ejemplo en nuestra tienda |
|----------|--------------------------|
| **No mantiene la estructura exacta** | Pides "el mismo zapato de antes" pero la IA genera uno diferente |
| **No respeta poses específicas** | Quieres el zapato a 45° exactos, no "más o menos así" |
| **No replica composiciones** | Necesitas la misma composición del catálogo para 20 productos |
| **No aplica tu estilo de marca** | Cada generación tiene una estética ligeramente diferente |

> 💡 **La solución:** Pasar de dar instrucciones de texto (ambiguas) a dar **instrucciones estructurales** (precisas). Esto es lo que hacen ControlNet y las LoRAs.

### La Pirámide de Control

```
                    🎯 CONTROL MÁXIMO
                   ╱                ╲
                  ╱  ControlNet +    ╲
                 ╱   LoRA Custom      ╲
                ╱─────────────────────╲
               ╱  ControlNet solo      ╲
              ╱   (estructura/pose)     ╲
             ╱─────────────────────────╲
            ╱  Image-to-Image (img2img) ╲
           ╱   (referencia visual)       ╲
          ╱─────────────────────────────╲
         ╱  Prompt Detallado + Seed      ╲
        ╱   (texto descriptivo preciso)   ╲
       ╱─────────────────────────────────╲
      ╱  Prompt Simple                    ╲
     ╱   (descripción básica)              ╲
    ╱──────────────────────────────────────╲
   🎲 CONTROL MÍNIMO (MÁXIMA ALEATORIEDAD)
```

---

## 2. ControlNet

### La "Marioneta Virtual" de la IA

ControlNet es un sistema que permite dar **instrucciones estructurales** a un modelo de generación de imagen. En lugar de describir con palabras, le das un "esqueleto" visual que la IA debe seguir.

### Tipos de ControlNet

| Tipo | Qué detecta | Analogía | Uso en calzado |
|------|-------------|----------|----------------|
| **Canny Edge** | Bordes y contornos | El delineado de un dibujo | Mantener la silueta exacta del zapato |
| **Depth Map** | Profundidad (cerca-lejos) | Un mapa topográfico 3D | Posicionar el zapato en el espacio exacto |
| **OpenPose** | Esqueleto/postura humana | Una marioneta de articulaciones | Poses de modelo con zapatos |
| **Scribble** | Bocetos libres | Un garabato como guía | Sketch to Real con control estructural |
| **Segmentation** | Zonas semánticas | Un mapa de colores por zona | Definir qué es zapato, qué es fondo, qué es suelo |
| **Normal Map** | Superficie y relieve | Las "arrugas" del terreno | Texturas de piel y costuras con volumen exacto |

### Flujo de trabajo con ControlNet

```
1. IMAGEN DE REFERENCIA
   (tu render de zapato de Clase 4)
        ↓
2. EXTRACCIÓN DE CONTROL
   (Canny Edge: extrae los bordes/contornos)
        ↓
3. PROMPT + CONTROLNET
   "Luxury brown leather oxford shoe, studio lighting"
   + Canny Edge del zapato original como guía
        ↓
4. RESULTADO
   Nuevo render que MANTIENE la silueta exacta
   pero con nuevo material, color o iluminación
```

> 🎯 **Caso de uso estrella:** Tienes UN zapato render perfecto. Con ControlNet generas 10 variaciones de color y material **manteniendo la estructura/silueta idéntica**. Imposible con prompt de texto solo.

### Ejemplo práctico

**Sin ControlNet:** "Generate a blue suede version of this shoe" → La IA genera un zapato azul, pero con diferente forma, diferente ángulo, diferente proporción.

**Con ControlNet (Canny Edge):** Extrae los bordes del zapato original → Usa esos bordes como guía → "Blue suede luxury shoe" → El resultado tiene **exactamente la misma silueta** pero en suede azul.

---

## 3. LoRAs

### Fine-Tuning Ligero — Entrenar tu Propio Estilo

Una **LoRA** (Low-Rank Adaptation) es un "módulo de memoria" pequeño que entrenas con tus propias imágenes para que la IA aprenda un concepto, estilo o producto específico.

### ¿Qué puedes entrenar con una LoRA?

| Tipo de LoRA | Qué aprende | Ejemplo para la tienda |
|-------------|-------------|----------------------|
| **Producto** | Tu zapato exacto | 10-20 fotos de tu mocasín → LoRA → genera variaciones perfectas |
| **Estilo** | Tu estética de marca | 15-20 fotos editoriales de referencia → LoRA → todo lo que generes tendrá ese "look" |
| **Persona** | Un rostro/personaje | Fotos del embajador/a de marca → LoRA → consistencia facial en todas las piezas |
| **Material** | Textura específica | Macros de piel Vachetta → LoRA → todas las generaciones tienen esa textura exacta |

### Proceso de entrenamiento

```
1. RECOPILAR DATOS
   - 10-20 imágenes de alta calidad
   - Variedad de ángulos/iluminaciones
   - Fondo limpio preferiblemente

2. ETIQUETAR
   - Describir cada imagen con un "trigger word" (ej: "lottusse_loafer")
   - Tags de estilo, material, ángulo

3. ENTRENAR
   - Plataforma: Leonardo AI, Civitai, Replicate
   - Tiempo: 15-30 minutos
   - Resultado: archivo .safetensors (~50-200 MB)

4. USAR
   - Incluir el trigger word en el prompt
   - "A lottusse_loafer on a marble pedestal, studio lighting"
   - → Genera tu zapato exacto en la escena pedida
```

> ⚠️ **Diferencia clave:** ControlNet controla la **estructura**. LoRA controla el **concepto/estilo**. Usados juntos = control absoluto.

---

## 4. Negative Prompt Avanzado

### De "no quiero X" a control quirúrgico de calidad

El Negative Prompt avanzado no es solo "qué no quieres ver", es una **plantilla de calidad profesional** que elimina los problemas más comunes:

### Plantilla de Negative Prompt para fotografía de producto

```
NEGATIVE PROMPT:

[Calidad]
blurry, low quality, low resolution, pixelated, jpeg artifacts, noise, 
grainy, out of focus, motion blur

[Anatomía / Estructura]
deformed, distorted, disfigured, mutated, extra fingers, extra limbs, 
bad anatomy, bad proportions, asymmetric

[Estilo no deseado]
cartoon, anime, illustration, 3D render, CGI, painting, watercolor, 
sketch, drawing, digital art, artificial look

[Composición]
cropped, cut off, out of frame, watermark, text, logo, signature, 
username, border, vignette

[Calzado específico]
mismatched shoes, wrong number of shoes, floating shoes, melted soles, 
impossible heel angle, stitching errors, uneven laces
```

> 💡 **Tip pro:** Crea tu propia plantilla de Negative Prompt para la marca y reutilízala en TODAS las generaciones. Esto garantiza consistencia de calidad base.

---

## 5. Stable Diffusion

### El Ecosistema Open Source

Stable Diffusion es un modelo de generación de imagen de **código abierto**. A diferencia de Gemini o DALL-E (cerrados), puedes descargarlo, modificarlo y ejecutarlo en tu propio ordenador.

### ¿Por qué importa para las empresas?

| Ventaja | Explicación |
|---------|-------------|
| **Privacidad total** | Las imágenes nunca salen de tu red corporativa |
| **Sin coste por generación** | Pagas el hardware, no por imagen |
| **Personalización extrema** | LoRAs, ControlNets, modelos custom |
| **ComfyUI** | Interfaz visual de nodos para crear pipelines de producción |

### ComfyUI — El "n8n de la imagen"

ComfyUI es la interfaz visual de flujos nodales para Stable Diffusion:

```
[Prompt] → [Modelo SD] → [ControlNet] → [LoRA] → [Upscaling] → [Output]
    ↓            ↓            ↓
 [Negative]  [Sampler]   [Canny Edge]
```

Cada nodo es un paso del pipeline. Puedes crear flujos complejos como:

```
"Para cada color en la lista → cargar ControlNet del zapato → aplicar LoRA 
de mi marca → generar → upscale → guardar en carpeta organizada"
```

> 🏭 **Para producción industrial:** ComfyUI es lo que usaremos en las Clases 17-18 para automatizar la generación masiva del catálogo.

---

## 6. Leonardo AI

### El Centro de Control para Diseñadores

🔗 [leonardo.ai](https://leonardo.ai)

Leonardo AI combina lo mejor de los mundos: interfaz accesible + controles profesionales + LoRAs + ControlNet sin necesidad de instalación local.

### Funciones clave de Leonardo AI

#### Blueprints (Plantillas de Estructura)

Plantillas predefinidas de ControlNet que puedes aplicar con un clic:
- Pose del zapato
- Composición del catálogo
- Ángulo de cámara estándar

#### Train Your LoRA

Entrena un modelo con tus propias imágenes directamente en la plataforma:
1. Sube 10-20 imágenes de tu producto
2. Define el trigger word
3. Leonardo entrena en ~20 minutos
4. Usa tu LoRA en todas las generaciones futuras

#### Lienzo (Canvas)

Editor visual integrado que combina:
- Generación de imagen
- In-painting
- Out-painting
- Texto sobre imagen
- Composición por capas

> 🎨 **Flujo para diseño de catálogo:** Lienzo → generar zapato con LoRA → componer con fondo → añadir tipografía → exportar pieza de catálogo final sin salir de Leonardo.

#### Tipografía AI

Genera texto legible dentro de la imagen — uno de los pocos motores que hace esto bien. Perfecto para:
- Carteles de tienda
- Banners con nombre de marca
- Posts con texto integrado en la imagen

---

## 7. Figma + IA

### Diseño Colaborativo Híbrido

Figma sigue siendo la herramienta estándar de diseño UI/UX. Con plugins de IA, se convierte en un **hub híbrido** donde los renders generados con IA se integran en diseños profesionales.

### Plugins de IA para Figma

| Plugin | Función |
|--------|---------|
| **AI Image Generator** | Genera imágenes dentro de Figma |
| **Magician** | Genera iconos, copies e imágenes con IA |
| **Automator** | Automatiza tareas repetitivas de diseño |
| **Content Reel** | Rellena diseños con contenido realista generado |

### Flujo de trabajo Figma + IA para catálogo

```
1. Diseñar la PLANTILLA del catálogo en Figma (layout, tipografía, grid)
2. Generar los RENDERS de zapatos con Gemini/Leonardo/Freepik
3. IMPORTAR los renders a Figma como smart objects
4. COMPONER las páginas del catálogo con la plantilla
5. EXPORTAR en formato print-ready o web-ready
```

> 🤝 **Ventaja:** El equipo de diseño ya conoce Figma. No necesitan aprender nuevas herramientas de composición — usan IA para la generación y Figma para el diseño final. Lo mejor de ambos mundos.

---

## 8. Quiz y PFC

### 📝 Quiz de Conocimientos (10 preguntas)

**1.** ¿Cuál es la diferencia fundamental entre ControlNet y LoRA?

- a) ✅ ControlNet controla la estructura/pose; LoRA aprende un concepto/estilo específico
- b) ControlNet es de pago y LoRA es gratis
- c) ControlNet genera imágenes; LoRA genera texto
- d) Son la misma cosa con nombres diferentes

**2.** ¿Qué tipo de ControlNet usarías para mantener la silueta exacta de un zapato?

- a) OpenPose
- b) Depth Map
- c) ✅ Canny Edge (bordes y contornos)
- d) Normal Map

**3.** ¿Cuántas imágenes necesitas aproximadamente para entrenar una LoRA de producto?

- a) 1-2 imágenes
- b) ✅ 10-20 imágenes de alta calidad
- c) 500+ imágenes
- d) No se necesitan imágenes

**4.** ¿Qué ventaja tiene Stable Diffusion frente a modelos cerrados como DALL-E?

- a) Es más rápido siempre
- b) ✅ Código abierto: privacidad total, sin coste por generación, personalización extrema
- c) Las imágenes tienen mejor calidad siempre
- d) No tiene ventajas

**5.** ¿Para qué sirve la función "Lienzo" de Leonardo AI?

- a) Solo para dibujar bocetos
- b) ✅ Editor visual que combina generación, in-painting, out-painting, tipografía y composición por capas
- c) Para entrenar LoRAs
- d) Para generar vídeo

**6.** ¿Qué es ComfyUI?

- a) Una red social para diseñadores
- b) Un modelo de IA más potente que GPT
- c) ✅ Una interfaz visual de nodos para crear pipelines de generación con Stable Diffusion
- d) Un plugin de Photoshop

**7.** ¿Qué es un "trigger word" en el contexto de LoRAs?

- a) La contraseña para acceder al modelo
- b) ✅ La palabra clave que activa tu LoRA entrenada en el prompt (ej: "lottusse_loafer")
- c) Un hashtag para redes sociales
- d) Un comando de voz

**8.** Si necesitas que el zapato mantenga EXACTAMENTE la misma estructura pero cambie de color, ¿qué combinas?

- a) Solo un prompt más detallado
- b) LoRA + Upscaling
- c) ✅ ControlNet (Canny Edge para la estructura) + nuevo prompt de color
- d) In-painting manual

**9.** ¿Para qué sirve el Negative Prompt en producción profesional?

- a) ✅ Para eliminar defectos comunes y garantizar calidad base consistente (anti-blur, anti-distorsión, etc.)
- b) Para generar lo opuesto de lo que pides
- c) Para reducir el tiempo de generación
- d) Para hacer las imágenes en blanco y negro

**10.** El flujo ideal de diseño de catálogo con IA es:

- a) Solo Figma
- b) Solo Leonardo AI
- c) ✅ Generar renders con IA (Leonardo/Gemini) + Componer en Figma (layout, tipografía, export)
- d) Photoshop manual sin IA

---

### 🚀 PFC — Preparación para Clase 9

> La Clase 9 será la práctica de control quirúrgico con Leonardo AI y ControlNet. Prepara:

1. **Seleccionar los 3 renders estrella** de tus zapatos (los mejores de C04/C06)
2. **Crear cuenta en Leonardo AI** (si no la tienes) — [leonardo.ai](https://leonardo.ai)
3. **Preparar 10-15 imágenes** de tu mejor modelo para entrenar una LoRA:
   - Mínimo 10 imágenes del mismo zapato
   - Variedad de ángulos (frontal, lateral, 3/4, cenital, trasero)
   - Fondo limpio preferiblemente
   - Si no tienes fotos reales, usa los renders generados como base

> 📦 **Entregable:** Carpeta con los 3 renders estrella + set de 10-15 imágenes para LoRA, listos para la práctica.

---

## 📎 Recursos Adicionales

- [Leonardo AI](https://leonardo.ai) — ControlNet + LoRAs + Lienzo
- [ComfyUI](https://github.com/comfyanonymous/ComfyUI) — Interfaz nodal open source
- [Civitai](https://civitai.com) — Marketplace de LoRAs y modelos
- [Stable Diffusion](https://stability.ai) — Modelo open source
- [Figma](https://figma.com) — Diseño colaborativo
- [Runway](https://runway.ml) — Pipeline visual
