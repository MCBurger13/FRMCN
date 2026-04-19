---
clase: 13
tipo: práctica
audiencia: diseño
bloque: 4 — Vídeo Generativo
titulo: "Lab de Vídeo I — Product Shots y Animaciones de Producto"
duracion: "2 horas"
teoria_previa: clase12_teoria.md
pfc_entregable: "3 vídeos de producto: rotación, hero animation, reel"
---

# Clase 13 · Práctica · 🎨 Diseño
# Lab de Vídeo I — Product Shots y Animaciones de Producto

> *Tus renders cobran vida. Hoy generas los vídeos de producto de tu catálogo — sin cámaras, sin estudio, sin modelos.*

**Duración estimada:** 2 horas  
**Prerrequisito:** Clase 12 (Vídeo IA I)

---

## Objetivos de la sesión

- Convertir renders estáticos en vídeos de producto con Image-to-Video (I2V)
- Dominar Motion Brush y Camera Controls de Runway
- Crear 3 tipos de vídeo: rotación 360°, hero animation y reel social
- Combinar clips para crear contenido de campaña completo

---

## Material necesario

- [ ] 3 renders hero de zapatos en resolución 4K (de clases anteriores)
- [ ] 3 prompts de movimiento escritos (preparados en PFC C12)
- [ ] Cuenta en **Runway**
- [ ] Cuenta alternativa en **Kling AI** o **Luma** (recomendado)

---

## Ejercicio 1: Rotación 360° de Producto — E-commerce
**⏱️ 35 minutos**

### Instrucciones

Crea un vídeo de rotación de producto para la ficha de e-commerce.

#### Paso 1: Preparar la imagen base

Selecciona tu render 4K del modelo principal, preferiblemente:
- Fondo neutro/blanco
- Iluminación de estudio limpia
- Sin elementos distractores

#### Paso 2: Generar en Runway (Image-to-Video)

1. Sube el render a Runway → Image-to-Video
2. Prompt de movimiento:

```
The luxury shoe slowly rotates clockwise on an invisible turntable, 
completing a smooth 180-degree rotation. Consistent studio lighting 
throughout. White background remains static. The leather catches subtle 
highlights as it turns, showing the craftsmanship details. Slow, 
elegant motion. Product advertisement quality.
```

3. **Camera Motion**: Orbit (rotación lenta)
4. **Duración**: 5 segundos (primera generación)
5. Genera 3 variaciones, selecciona la mejor

#### Paso 3: Generar el reverso

Repite con la misma imagen pero prompt contrario:

```
The shoe continues its smooth clockwise rotation, showing the back and 
opposite side. Same lighting, same speed, seamless continuation.
```

#### Paso 4: Concatenar

Une ambos clips (5s + 5s = 10s de rotación parcial) para un vídeo de producto completo.

### Criterios de calidad

- [ ] La rotación es suave y constante (sin sacudidas)
- [ ] La iluminación no cambia durante la rotación
- [ ] El zapato mantiene su forma y proporción (sin deformaciones)
- [ ] Las texturas y detalles permanecen nítidos

> 💡 **Si hay deformaciones:** Prueba reduciendo la velocidad de movimiento en el prompt. Añade "maintain consistent proportions, no morphing" al prompt.

---

## Ejercicio 2: Hero Animation — Web/Campaña
**⏱️ 35 minutos**

### Instrucciones

Crea un vídeo "hero" cinematográfico para la portada de la web o el key visual de la campaña.

#### Paso 1: Elegir el render más dramático

Selecciona tu render con la composición más editorial (escena, iluminación dramática).

#### Paso 2: Generar con Runway (I2V + Motion Brush)

1. Sube el render
2. **Usa Motion Brush** para ser selectivo:
   - 🖌️ **Pintar el zapato**: movimiento sutil (ligera rotación o deslizamiento)
   - 🖌️ **Pintar el fondo/cortina/elementos**: movimiento ambiental suave
   - 🚫 **NO pintar**: superficies sólidas (mesa, mármol) que deben quedar quietas

3. Prompt de movimiento:

```
Cinematic luxury product advertisement. The shoe catches dramatic light 
as a subtle golden gleam sweeps across the leather from left to right. 
Background elements drift gently. Film-quality motion, shallow depth 
of field effect. Premium brand commercial atmosphere. 
Extremely slow, elegant macro-like motion.
```

4. **Camera Motion**: Slow Zoom In (acercamiento dramático lento)

#### Paso 3: Comparar estilos

Genera 3 versiones:
| Versión | Camera | Mood |
|---------|--------|------|
| A | Slow Zoom In | Dramático, revelación |
| B | Slow Pan Right | Narrativo, recorrido |
| C | Static + Motion Brush only | Producto vivo, fondo animado |

Selecciona la que mejor transmita la esencia de tu marca.

---

## Ejercicio 3: Reel de 15 Segundos — Instagram
**⏱️ 30 minutos**

### Instrucciones

Crea un reel de 15 segundos combinando varios clips cortos.

#### Estructura del Reel (3 clips de 5 segundos)

| Clip | Duración | Contenido | Prompt |
|------|----------|-----------|--------|
| **Clip 1** | 5s | Teaser: silueta recortada, zoom out revelando el zapato | "Slow dramatic reveal, shoe emerges from darkness into spotlight" |
| **Clip 2** | 5s | Detalle: macro de la textura de piel/costura | "Extreme close-up of leather texture, camera slowly panning across visible grain and hand-stitching" |
| **Clip 3** | 5s | Hero: composición completa del zapato en escena | "Full product shot, shoe on marble, elegant rotation, luxury commercial" |

#### Proceso

1. Genera cada clip por separado
2. Si es posible, usa **Luma Dream Machine** para crear transiciones suaves entre clips
3. Asegúrate de que los 3 clips tienen coherencia visual (mismo producto, misma paleta)

> 🎶 **Tip:** El reel final se editará con música en un editor de vídeo — aquí solo generamos los clips visuales.

---

## Ejercicio 4: Variaciones y Selección Final
**⏱️ 20 minutos**

### Instrucciones

1. Revisa los ~12-15 clips generados durante la sesión
2. Selecciona los **mejores 5 clips** (sin repetir)
3. Para los 2 mejores, genera una **versión mejorada** con prompt refinado

#### Tabla de selección

| Clip | Herramienta | Tipo | Calidad (1-5) | Seleccionado | Notas |
|------|-------------|------|---------------|-------------|-------|
| 1 | | | | | |
| 2 | | | | | |
| ... | | | | | |

### Comparativa final de herramientas de vídeo

| Criterio | Runway | Kling AI | Luma | Otro |
|----------|--------|----------|------|------|
| Estabilidad del producto | | | | |
| Calidad de movimiento | | | | |
| Fidelidad al prompt | | | | |
| Velocidad de generación | | | | |

---

## 🚀 Entregable PFC — Clase 13

> 📦 **3 vídeos de producto terminados**

### Checklist de entrega

- [ ] **Vídeo 1 — Rotación 360°** (5-10 seg)
  - Para ficha de producto e-commerce
  - Sin deformaciones, rotación suave
  
- [ ] **Vídeo 2 — Hero Animation** (5 seg)
  - Para web hero o key visual de campaña
  - Motion Brush selectivo, cinematográfico

- [ ] **Vídeo 3 — Reel Instagram** (15 seg, 3 clips de 5s)
  - Clip 1: Teaser reveal
  - Clip 2: Macro detalle
  - Clip 3: Hero shot

- [ ] **Tabla comparativa** de herramientas de vídeo rellenada

### Formato de entrega

```
PFC_Clase13_[NombreMarca]/
├── rotacion_360/
│   ├── clip_a_5s.mp4
│   ├── clip_b_5s.mp4
│   └── rotacion_final_10s.mp4
├── hero_animation/
│   ├── version_a_zoom.mp4
│   ├── version_b_pan.mp4
│   ├── version_c_static.mp4
│   └── hero_seleccionado.mp4
├── reel_instagram/
│   ├── clip1_reveal.mp4
│   ├── clip2_macro.mp4
│   ├── clip3_hero.mp4
│   └── reel_compilado_15s.mp4
└── comparativa_herramientas.md
```

---

## Criterios de Evaluación

| Criterio | Peso | Excelente (5) | Correcto (3) | Insuficiente (1) |
|----------|------|--------------|--------------|-------------------|
| **Calidad de movimiento** | 30% | Suave, natural, sin sacudidas ni deformaciones | Movimiento aceptable con defectos menores | Deformaciones visibles, flickering |
| **Fidelidad del producto** | 25% | El zapato es reconocible e idéntico al render original | Reconocible pero con variaciones | Producto deformado o irreconocible |
| **Variedad de contenido** | 25% | 3 tipos de vídeo bien diferenciados y útiles | 2 tipos completados | Solo 1 tipo o repetitivo |
| **Potencial publicitario** | 20% | Vídeos listos para publicar en RRSS/web | Funcionales con algo de edición necesaria | No publicables |

---

## 📎 Recursos de Clase

- [Runway](https://runway.ml) — Gen-3 Alpha I2V
- [Kling AI](https://klingai.com) — Alternativa de vídeo
- [Luma Dream Machine](https://lumalabs.ai) — Transiciones y keyframes
- [Minimax / Hailuo](https://hailuoai.video) — Vídeo accesible
