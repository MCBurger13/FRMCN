---
clase: 9
tipo: práctica
audiencia: diseño
bloque: 3 — Control Visual y Campaña
titulo: "Control Quirúrgico — ControlNet, LoRA y Catálogo Consistente"
duracion: "2 horas"
teoria_previa: clase08_teoria.md
pfc_entregable: "Línea de 5 zapatos coherente + LoRA de producto entrenada"
---

# Clase 9 · Práctica · 🎨 Diseño
# Control Quirúrgico — ControlNet, LoRA y Catálogo Consistente

> *El mismo zapato, mil versiones. Hoy consigues que la IA replique tu producto con fidelidad absoluta.*

**Duración estimada:** 2 horas  
**Prerrequisito:** Clase 8 (Control Absoluto)

---

## Objetivos de la sesión

- Usar ControlNet (Canny Edge) para mantener la estructura exacta de un zapato en múltiples variaciones
- Entrenar una LoRA de producto con Leonardo AI
- Generar variaciones de color y material con estructura idéntica
- Crear una serie coherente de catálogo (5 zapatos, mismo estilo fotográfico)

---

## Material necesario

- [ ] Cuenta en **Leonardo AI** (activa)
- [ ] Los 3 renders estrella de Clases 4/6
- [ ] Set de 10-15 imágenes para entrenar la LoRA (preparado en PFC C08)
- [ ] Plantilla de Negative Prompt de la Clase 8

---

## Ejercicio 1: ControlNet Canny Edge — Variaciones de Material
**⏱️ 35 minutos**

### Instrucciones

Vamos a generar 5 versiones de tu zapato estrella **manteniendo la silueta exacta** pero cambiando materiales y colores.

#### Paso 1: Subir imagen base a Leonardo AI

1. Entra en Leonardo AI → Lienzo o generación con ControlNet
2. Sube tu mejor render de zapato (fondo limpio)
3. Selecciona **ControlNet: Canny Edge**
4. Ajusta la fuerza del ControlNet a **0.7-0.85** (fuerte pero no rígido)

#### Paso 2: Generar 5 variaciones

| Variación | Prompt | Resultado esperado |
|-----------|--------|--------------------|
| V1 — Piel marrón cognac | "Luxury shoe in cognac brown calfskin leather, hand-burnished patina, studio lighting" | Misma forma, piel clásica |
| V2 — Ante azul marino | "Same shoe silhouette in midnight navy blue Italian suede, soft matte finish" | Misma forma, textura suede |
| V3 — Piel negra brillante | "Luxury shoe in black patent leather, mirror-like shine, elegant formal" | Misma forma, brillo patente |
| V4 — Bicolor | "Two-tone spectator shoe, white and tan leather, broguing details" | Misma estructura, bicolor |
| V5 — Piel exótica | "Luxury shoe in embossed crocodile leather, deep burgundy, exotic texture" | Misma forma, textura cocodrilo |

#### Análisis de fidelidad

Para cada variación, mide:

| Criterio | V1 | V2 | V3 | V4 | V5 |
|----------|----|----|----|----|---- |
| Silueta idéntica al original (%) | | | | | |
| Nuevo material convincente (1-5) | | | | | |
| Integración natural (1-5) | | | | | |

> 💡 **Si la silueta varía demasiado:** Aumenta la fuerza de ControlNet a 0.9. Si queda demasiado rígido: baja a 0.6.

---

## Ejercicio 2: Entrenar tu Primera LoRA
**⏱️ 30 minutos**

### Instrucciones

Entrena una LoRA de tu producto estrella directamente en Leonardo AI.

#### Paso 1: Preparar el dataset

1. Confirma que tienes 10-15 imágenes de tu zapato:
   - Mínimo 3 ángulos diferentes
   - Buena iluminación en todas
   - Fondo limpio

2. Para cada imagen, prepara una descripción:
```
Trigger word: [tu_marca]_[modelo]
Ejemplo: eleganza_oxford

Descripción tipo:
"eleganza_oxford, luxury men's oxford shoe, brown calfskin leather, 
Goodyear-welted sole, hand-stitched details, 3/4 angle view"
```

#### Paso 2: Entrenar en Leonardo AI

1. Ve a **Training** → **Create New Model**
2. Sube tus 10-15 imágenes
3. Define:
   - **Trigger word**: `[tu_marca]_[modelo]` (ej: `eleganza_oxford`)
   - **Categoría**: Product Photography
   - **Tipo**: Subject (Producto)
4. Inicia el entrenamiento (~15-20 minutos)

#### Paso 3: Probar la LoRA

Una vez entrenada, genera con tu trigger word:

```
eleganza_oxford displayed on a marble pedestal in a luxury boutique,
soft studio lighting, product photography, 8K resolution, ultra-detailed
```

Genera 4 variaciones y evalúa:
- [ ] ¿La IA reproduce tu zapato exacto?
- [ ] ¿Los detalles (costura, suela, forma) son correctos?
- [ ] ¿Funciona en diferentes escenas?

---

## Ejercicio 3: Línea de Catálogo Coherente — 5 Modelos
**⏱️ 35 minutos**

### Instrucciones

Combina ControlNet + tu LoRA (si está lista) para crear una **línea de catálogo de 5 zapatos** con el mismo estilo fotográfico.

#### La Regla de Oro del Catálogo Consistente

Todos los renders deben compartir:
- ✅ Mismo fondo y superficie
- ✅ Misma iluminación y temperatura de color
- ✅ Mismo ángulo de cámara (3/4 view)
- ✅ Mismo estilo de composición
- ✅ Mismo tratamiento de sombras

#### Plantilla de prompt para catálogo

```
[TRIGGER_WORD o descripción del zapato], displayed on [MISMA SUPERFICIE para todos], 
[MISMA ILUMINACIÓN], product photography, 3/4 angle view, consistent catalog style, 
white/neutral background, clean composition, studio quality, 8K

Negative: [TU PLANTILLA DE NEGATIVE PROMPT]
```

#### Los 5 modelos del catálogo

| # | Tipo | Género | Material propuesto |
|---|------|--------|-------------------|
| 1 | Oxford clásico | Hombre | Piel marrón |
| 2 | Stiletto | Mujer | Piel negra |
| 3 | Mocasín | Hombre | Ante azul |
| 4 | Ankle boot | Mujer | Piel burgundy |
| 5 | Sneaker premium | Unisex | Nappa blanca |

Para cada modelo:
1. Genera 3-4 variaciones
2. Selecciona la mejor
3. Asegúrate de que el estilo fotográfico es IDÉNTICO al resto

---

## Ejercicio 4: Composición en Figma — Mockup de Catálogo
**⏱️ 20 minutos**

### Instrucciones

Importa los 5 renders seleccionados a Figma y compón una **página de catálogo digital**.

1. **Crear frame** en Figma (A4 landscape o formato web)
2. **Grid de producto**: disponer los 5 zapatos en una cuadrícula elegante
3. **Añadir tipografía**: nombre del modelo, material, precio
4. **Consistencia**: verificar que la composición general transmite una línea coherente

### Plantilla de layout sugerida

```
┌──────────────────────────────────────────────┐
│ [NOMBRE DE MARCA]           Colección SS26   │
│──────────────────────────────────────────────│
│                                              │
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌───┐│
│  │ Z1  │  │ Z2  │  │ Z3  │  │ Z4  │  │Z5 ││
│  │     │  │     │  │     │  │     │  │   ││
│  └─────┘  └─────┘  └─────┘  └─────┘  └───┘│
│  Oxford    Stiletto  Mocasín  Ankle   Sneaker│
│  €XXX     €XXX      €XXX    €XXX    €XXX   │
│                                              │
└──────────────────────────────────────────────┘
```

---

## 🚀 Entregable PFC — Clase 9

> 📦 **Línea de 5 zapatos coherente + LoRA entrenada**

### Checklist de entrega

- [ ] **5 variaciones de material** con ControlNet (Ejercicio 1) — misma silueta, 5 materiales
- [ ] **LoRA de producto entrenada** (Ejercicio 2)
  - Trigger word: ___________
  - 3+ generaciones de prueba con la LoRA
- [ ] **Catálogo coherente de 5 modelos** (Ejercicio 3)
  - Los 5 renders con estilo fotográfico idéntico
- [ ] **Mockup de catálogo en Figma** (Ejercicio 4)
  - Layout con tipografía y precios

### Formato de entrega

```
PFC_Clase09_[NombreMarca]/
├── controlnet_variaciones/
│   ├── v1_cognac.png
│   ├── v2_suede_navy.png
│   ├── v3_patent_black.png
│   ├── v4_bicolor.png
│   └── v5_croc_burgundy.png
├── lora/
│   ├── dataset/ (10-15 imágenes de entrenamiento)
│   ├── test_gen_01.png
│   ├── test_gen_02.png
│   └── test_gen_03.png
├── catalogo_5_modelos/
│   ├── 01_oxford.png
│   ├── 02_stiletto.png
│   ├── 03_mocasin.png
│   ├── 04_ankle_boot.png
│   └── 05_sneaker.png
└── figma_mockup/
    └── catalogo_pagina_export.png
```

---

## Criterios de Evaluación

| Criterio | Peso | Excelente (5) | Correcto (3) | Insuficiente (1) |
|----------|------|--------------|--------------|-------------------|
| **Fidelidad ControlNet** | 25% | Silueta 95%+ idéntica en 5 variaciones | Silueta reconocible con variaciones menores | Silueta diferente en cada variación |
| **LoRA funcional** | 25% | LoRA reproduce el producto con precisión en nuevas escenas | LoRA genera algo similar pero no exacto | LoRA no funciona o no se entrenó |
| **Coherencia de catálogo** | 30% | Los 5 modelos parecen del mismo catálogo profesional | Mayormente coherente, 1-2 "desencajan" | Cada render parece de una marca diferente |
| **Composición Figma** | 20% | Layout profesional, tipografía elegante, cohesivo | Funcional pero sin pulir | Sin composición |

---

## 📎 Recursos de Clase

- [Leonardo AI](https://leonardo.ai) — ControlNet + Train LoRA
- [Figma](https://figma.com) — Composición de catálogo
- [Civitai](https://civitai.com) — LoRAs de la comunidad para inspiración
