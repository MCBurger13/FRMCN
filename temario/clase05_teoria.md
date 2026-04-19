---
clase: 5
tipo: teórica
audiencia: conjunta
bloque: 2 — Generación de Imagen
titulo: "Composición Modular y Visualización en Tiempo Real"
duracion: "1.5 horas"
practica_asociada: [clase06_practica.md]
---

# Clase 5 · Teórica · Conjunta
# Composición Modular y Visualización en Tiempo Real

> *De la imagen aislada a la composición inteligente. Mezcla sujetos, escenas y estilos como quien hace un collage con superpoderes.*

**Duración estimada:** 1.5 horas

---

## Navegación de la clase

1. [Composición Modular: La Revolución](#1-composición-modular)
2. [Whisk — Asunto + Escena + Estilo](#2-whisk)
3. [ImageFX — Chips Expresivos](#3-imagefx)
4. [Krea AI — Real-Time y Upscaling](#4-krea-ai)
5. [Stitch y Flow — Composición Colaborativa de Google](#5-stitch-y-flow)
6. [Visualización en Tiempo Real](#6-visualización-en-tiempo-real)
7. [Seedream y la Generación de Alta Fidelidad](#7-seedream)
8. [Quiz + PFC](#8-quiz-y-pfc)

---

## Conceptos clave de esta clase

`Composición Modular` · `Style Transfer` · `Real-Time Generation` · `Upscaling` · `Chips Expresivos` · `Character Reference (--cref)` · `Style Reference (--sref)` · `Gem Director de Arte` · `Collaborative Generation`

---

## Herramientas presentadas

| Herramienta | Especialidad |
|-------------|-------------|
| **Whisk (Google)** | Composición modular: Asunto + Escena + Estilo |
| **ImageFX (Google)** | Variaciones ultrarrápidas con Chips Expresivos |
| **Krea AI** | Generación en Tiempo Real + Upscaling profesional |
| **Stitch (Google)** | Composición visual colaborativa con IA |
| **Flow (Google)** | Flujos creativos asistidos entre equipo y modelo |
| **Seedream** | Generación de alta fidelidad (Google DeepMind) |

---

## 1. Composición Modular

### El concepto: Separar para controlar

En la generación de imagen tradicional, describes TODO en un solo prompt. El problema: si cambias una palabra, cambia toda la imagen.

**Composición Modular** separa la generación en capas independientes que puedes controlar por separado:

| Capa | Qué controla | Ejemplo para zapatos |
|------|-------------|---------------------|
| **Sujeto** | El producto/persona | Tus stilettos negros de piel |
| **Escena** | El entorno/fondo | Escaparate de boutique en París |
| **Estilo** | La estética visual | Fotografía editorial de Condé Nast |
| **Iluminación** | La luz y sombras | Golden hour lateral |
| **Composición** | Encuadre y ángulo | Cenital, 3/4, macro |

> 🧩 **Analogía:** Es como un editor de vídeo con capas. Puedes cambiar el fondo sin tocar al actor, o cambiar la música sin alterar la imagen. Cada capa es independiente.

### ¿Por qué es revolucionario para diseño de producto?

1. **Consistencia de producto**: El zapato es idéntico en 20 escenas diferentes
2. **Velocidad de campaña**: Generas un catálogo seasonal cambiando solo las escenas
3. **Testeo A/B visual**: Mismo producto en 5 escenarios para ver cuál funciona mejor comercialmente
4. **Eficiencia creativa**: No regenatas el zapato cada vez, solo cambias el contexto

---

## 2. Whisk

### El "Collage Inteligente" de Google

🔗 [labs.google/whisk](https://labs.google/whisk)

Whisk permite generar imágenes combinando tres entradas independientes:

| Entrada | Descripción | Ejemplo |
|---------|-------------|---------|
| **Subject (Sujeto)** | La imagen de lo que quieres generar | Foto de tu zapato render |
| **Scene (Escena)** | El entorno o fondo deseado | Foto de una tienda de lujo en Milán |
| **Style (Estilo)** | La estética visual de referencia | Captura de un editorial de Vogue |

### Flujo de trabajo con Whisk

```
1. SUJETO: Sube el render del zapato de la Clase 4
2. ESCENA A: Foto de un escaparate elegante → Genera
3. ESCENA B: Foto de una pasarela de moda → Genera
4. ESCENA C: Foto de una calle empedrada en Italia → Genera
   ↓
Resultado: 3 composiciones con el MISMO zapato en 3 entornos
```

> ⭐ **Potencia real:** Cambias la escena sin regenatar el producto. El zapato mantiene su identidad exacta. Esto es imposible con un prompt de texto convencional.

### Casos de uso profesionales

| Uso | Cómo |
|-----|------|
| **Catálogo multientorno** | 1 zapato × 5 escenas = 5 imágenes de catálogo |
| **Adaptación cultural** | Mismo producto + escenas de distintos mercados (NY, Tokio, Madrid) |
| **Mood testing** | Mismo zapato en mood "verano" vs "invierno" vs "noche" |
| **Consistencia de campaña** | Misma escena + diferentes productos = línea visual coherente |

---

## 3. ImageFX

### Exploración Visual a la Velocidad del Pensamiento

🔗 [aitestkitchen.withgoogle.com/tools/image-fx](https://aitestkitchen.withgoogle.com/tools/image-fx)

ImageFX genera 4 resultados simultáneos y ofrece **Chips Expresivos**: botones debajo del prompt que permiten modificar aspectos específicos con un clic.

### Chips Expresivos

| Tipo de Chip | Qué modifica | Ejemplo |
|-------------|-------------|---------|
| **Lighting** | Iluminación | "studio" → "cinematic" → "natural" → "dramatic" |
| **Material** | Textura/Material | "leather" → "suede" → "canvas" → "patent" |
| **Color** | Paleta cromática | "warm tones" → "cool tones" → "monochrome" |
| **Mood** | Atmósfera general | "luxury" → "casual" → "editorial" → "streetwear" |
| **Angle** | Perspectiva/Encuadre | "top view" → "side view" → "close-up" → "wide shot" |

### Workflow de exploración rápida

```
1. Escribe el prompt base del zapato → Genera 4 resultados
2. Identifica el mejor resultado
3. Modifica un chip (ej: iluminación "studio" → "golden hour")
4. Genera 4 nuevos resultados con esa variación
5. Repite cambiando otro chip (material, color, mood)
   ↓
En 5 minutos: 20+ variaciones del mismo concepto
```

---

## 4. Krea AI

### Generación en Tiempo Real + Upscaling Profesional

🔗 [krea.ai](https://krea.ai)

### Real-Time Generation

La funcionalidad más impactante: ves cambios EN VIVO mientras modificas el prompt o mueves elementos en el canvas. El resultado se actualiza instantáneamente.

**¿Cómo funciona?**
1. Dibujas una forma aproximada (boceto rápido del zapato)
2. Escribes un prompt descriptivo
3. La imagen se genera y actualiza en tiempo real mientras dibujas y ajustas

> 🎯 **Para qué es perfecto:** Iteración ultrarrápida de ideas de diseño. Es como tener un diseñador 3D que dibuja a la velocidad de tu pensamiento.

### Upscaling Profesional

Krea AI ofrece uno de los mejores motores de upscaling del mercado:

| De | A | Resultado |
|----|---|-----------|
| 1024×1024 | 4096×4096 | Sin pérdida de calidad, añade detalles inteligentes |

**Parámetros de Upscaling:**
- **Enhance Prompt**: Describe qué tipo de detalles quieres que añada al ampliar
- **Resemblance**: Cuánto se parece al original (alto = fiel, bajo = reinterpreta)
- **Creativity**: Cuánta libertad tiene para "inventar" detalles nuevos

---

## 5. Stitch y Flow

### Stitch — Composición Visual Colaborativa

Herramienta de Google para crear composiciones multicapa con IA de forma colaborativa:

- **Múltiples capas** de generación en un mismo canvas
- **Colaboración en tiempo real** con otros miembros del equipo
- **Coherencia visual** entre elementos generados por separado
- Ideal para: diseño de campañas visuales donde varios diseñadores trabajan simultáneamente

### Flow — Flujos Creativos Asistidos

Flow lleva la composición un paso más allá:

- **Workflows predefinidos** para tareas creativas comunes
- **Integración directa** con los modelos de generación de Google
- El equipo puede crear **pipelines visuales** (concepto → variaciones → selección → refinamiento)

> 🤝 **Para equipos:** Si el diseñador A genera el producto y el diseñador B genera los fondos, Stitch permite que ambos trabajen en la misma composición final en tiempo real.

---

## 6. Visualización en Tiempo Real

### El Paradigma: Ver Antes de Generar

La visualización en tiempo real cambia fundamentalmente el proceso creativo:

| Antes (Generación Ciega) | Ahora (Real-Time) |
|--------------------------|-------------------|
| Escribes prompt → esperas → ves resultado → ajustas → vuelves a esperar | Dibujas/escribes → ves cambios en vivo → ajustas fluidamente |
| 20-30 segundos por iteración | Cambios instantáneos |
| Proceso lineal y frustrante | Flujo creativo natural |

### Herramientas con Real-Time

| Herramienta | Tipo de Real-Time |
|-------------|-------------------|
| **Krea AI** | Canvas interactivo con generación en vivo |
| **Gemini Canvas** | Dibujo + texto → imagen en tiempo real |
| **Leonardo AI (Realtime)** | Interfaz de generación en tiempo real |

---

## 7. Seedream

### La Generación de Alta Fidelidad de Google DeepMind

Seedream es el modelo de generación de imagen más avanzado de Google, diseñado para:

- **Fidelidad fotográfica extrema**: texturas, materiales, iluminación hiperrealistas
- **Comprensión compositiva avanzada**: entiende relaciones espaciales complejas
- **Consistencia de elementos**: mantiene la coherencia de un producto a lo largo de múltiples generaciones
- **Integración con el ecosistema Google**: funciona dentro de Gemini, Stitch y otras herramientas

> 💎 **Para nuestra tienda de zapatos:** Seedream es el modelo que usaremos cuando necesitemos renders indistinguibles de una fotografía real — perfecto para el catálogo final de e-commerce.

---

## 8. Quiz y PFC

### 📝 Quiz de Conocimientos (8 preguntas)

**1.** ¿Cuál es la ventaja principal de la Composición Modular frente al prompt único?

- a) Es más barato
- b) ✅ Permite cambiar escena/estilo sin regenerar el producto (control por capas)
- c) Genera imágenes más rápido
- d) Solo funciona con fotos reales

**2.** En Whisk, ¿cuáles son las tres entradas que puedes combinar?

- a) Texto, audio y vídeo
- b) ✅ Sujeto, Escena y Estilo
- c) Marca, Producto y Precio
- d) Resolución, Color y Formato

**3.** ¿Qué son los "Chips Expresivos" de ImageFX?

- a) Filtros como los de Instagram
- b) ✅ Botones que modifican aspectos específicos (iluminación, material, color) con un clic
- c) Componentes de hardware para acelerar la generación
- d) Plantillas prediseñadas de estilo

**4.** ¿Qué hace especial a la generación Real-Time de Krea AI?

- a) Genera a mayor resolución
- b) ✅ Los cambios se visualizan instantáneamente mientras dibujas/escribes
- c) Solo funciona con texto, no con imágenes
- d) Es exclusiva para vídeo

**5.** ¿Para qué sirve el Upscaling de Krea AI?

- a) Para reducir el tamaño del archivo
- b) Para añadir texto a la imagen
- c) ✅ Para aumentar la resolución (ej: 1024px → 4096px) sin perder calidad, añadiendo detalles inteligentes
- d) Para convertir imagen a vídeo

**6.** ¿Cuál es la ventaja principal de Stitch para equipos de diseño?

- a) Es gratuito
- b) ✅ Permite composición colaborativa en tiempo real donde varios diseñadores trabajan en la misma pieza
- c) Tiene mejor calidad que Midjourney
- d) Solo funciona con productos de moda

**7.** Si quieres el mismo zapato en 5 escenarios diferentes para testeo A/B, ¿qué herramienta usarías?

- a) Gemini con prompt largo
- b) ✅ Whisk (mismo sujeto + 5 escenas distintas)
- c) DALL-E 3
- d) In-painting

**8.** ¿Qué rol cumple el "Gem Director de Arte"?

- a) Es un plugin de Photoshop
- b) ✅ Un asistente IA preconfigurado con el brandbook que genera prompts visuales coherentes con la marca automáticamente
- c) Es un modelo de IA de Google
- d) Es una persona del equipo de diseño

---

### 🚀 PFC — Preparación para Clase 6

> La Clase 6 será la práctica de iteración rápida con Whisk, ImageFX y Krea AI. Prepara:

1. **Seleccionar tu mejor render** de cada modelo de zapato (Clase 4)
2. **Buscar 3 fotos de escena** que representen entornos donde quieres ver tu producto:
   - Escena 1: Tienda/boutique
   - Escena 2: Outdoor/lifestyle
   - Escena 3: Editorial/campaña

3. **Buscar 2 fotos de estilo** (referencia visual de la estética):
   - Referencia de revista/editorial que capture el tono visual de tu marca

> 📦 **Entregable:** Carpeta con los renders de C04 + 3 fotos de escena + 2 fotos de estilo, listos para usar en Whisk.

---

## 📎 Recursos Adicionales

- [Whisk (Google)](https://labs.google/whisk)
- [ImageFX (Google)](https://aitestkitchen.withgoogle.com/tools/image-fx)
- [Krea AI](https://krea.ai)
- [Seedream (Google DeepMind)](https://deepmind.google/technologies/imagen/)
