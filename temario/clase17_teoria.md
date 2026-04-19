---
clase: 17
tipo: teórica
audiencia: conjunta
bloque: 5 — Automatización a Escala
titulo: "Batch Processing y Producción Visual a Escala"
duracion: "1.5 horas"
practica_asociada: [clase18_practica.md, clase19_practica.md]
---

# Clase 17 · Teórica · Conjunta
# Batch Processing y Producción Visual a Escala

> *De generar uno en uno a producir cientos. Aprende a diseñar pipelines de generación masiva que mantienen la calidad y la coherencia de marca.*

**Duración estimada:** 1.5 horas

---

## Navegación de la clase

1. [El Problema de la Escala](#1-el-problema-de-la-escala)
2. [APIs de Generación de Imagen](#2-apis-de-generación)
3. [Diseñar un Pipeline de Producción](#3-diseñar-un-pipeline)
4. [n8n + APIs de IA — Flujos Avanzados](#4-n8n-y-apis-de-ia)
5. [Google Sheets como Base de Datos de Catálogo](#5-google-sheets-como-bbdd)
6. [Luma IA Agents — Generación Nodal Autónoma](#6-luma-ia-agents)
7. [Control de Calidad Automatizado](#7-control-de-calidad)
8. [Quiz + PFC](#8-quiz-y-pfc)

---

## Conceptos clave de esta clase

`Batch Processing` · `API` · `Pipeline de Producción` · `Rate Limiting` · `Queue` · `Parallel Processing` · `Error Handling` · `Google Sheets como BBDD` · `Template de Prompt` · `Variables Dinámicas` · `QA Automatizado`

---

## 1. El Problema de la Escala

### 1 producto = fácil. 200 productos = caos (sin automatización)

| Escenario | Manual | Con Pipeline |
|-----------|--------|-------------|
| Generar renders de 50 zapatos × 3 ángulos | 150 prompts escritos a mano, 150 descargas | 1 flujo automatizado, 150 resultados en carpeta |
| Crear fichas de producto de 50 zapatos | 50 sesiones de ChatGPT | 1 ejecución de n8n, 50 fichas en Google Sheets |
| Adaptar 20 banners a 4 plataformas (80 piezas) | 80 redimensionamientos en Canva | 1 flujo: input 20 → output 80 organizadas |

> ⏱️ **Tiempo real:** Tarea manual = **12-20 horas**. Pipeline automatizado = **30 minutos de ejecución** (+ 2-3 horas de configuración inicial que se amortiza para siempre).

---

## 2. APIs de Generación de Imagen

### ¿Qué es una API?

Una **API** (Application Programming Interface) es la forma en que dos programas hablan entre sí. En lugar de usar la web de Gemini/OpenAI con ratón y teclado, tu flujo de n8n le "habla" directamente y le pide que genere.

### APIs disponibles para generación de imagen

| API | Vendor | Coste aproximado | Calidad |
|-----|--------|-----------------|---------|
| **Gemini API (Imagen 3)** | Google | $0.02-0.04 / imagen | ⭐⭐⭐⭐⭐ |
| **DALL-E 3 API** | OpenAI | $0.04-0.08 / imagen | ⭐⭐⭐⭐ |
| **Stable Diffusion API** | Stability AI / Replicate | $0.01-0.03 / imagen | ⭐⭐⭐⭐ |
| **Freepik API** | Freepik | Según plan | ⭐⭐⭐⭐ |
| **Leonardo AI API** | Leonardo | Según tokens | ⭐⭐⭐⭐ |

### Cálculo de coste para catálogo completo

```
50 zapatos × 3 ángulos × 4 variaciones = 600 imágenes
600 imágenes × $0.03/imagen = $18 (~17€)

Comparación: sesión fotográfica de 50 productos = 2.000-5.000€
```

---

## 3. Diseñar un Pipeline de Producción

### Arquitectura del Pipeline de Catálogo

```
┌──────────────┐   ┌───────────────┐   ┌────────────────┐   ┌──────────────┐
│ Google Sheet  │──▶│ n8n: Loop     │──▶│ API Generación │──▶│ Google Drive  │
│ (Catálogo)    │   │ Over Items    │   │ (Gemini/SD)    │   │ (Organizado)  │
│               │   │               │   │                │   │               │
│ Modelo,Color, │   │ Para cada     │   │ Prompt         │   │ /renders/     │
│ Material,     │   │ producto:     │   │ dinámico →     │   │  /modelo1/    │
│ Ángulo,       │   │ construir     │   │ Generar        │   │   frontal.png │
│ Prompt base   │   │ prompt        │   │ imagen         │   │   lateral.png │
└──────────────┘   └───────────────┘   └────────────────┘   └──────────────┘
                                             │
                                        ┌────▼────────┐
                                        │ IA: Generar  │
                                        │ ficha de     │
                                        │ producto     │
                                        └─────────────┘
                                             │
                                        ┌────▼────────┐
                                        │ Sheet:       │
                                        │ Actualizar   │
                                        │ con ficha    │
                                        └─────────────┘
```

### El Sheet de Catálogo (Base de datos)

| ID | Modelo | Tipo | Color | Material | Género | Prompt Base | Ángulo | Status | URL Render |
|----|--------|------|-------|----------|--------|------------|--------|--------|-----------|
| Z001 | Oxford Classico | Oxford | Cognac | Calfskin | Hombre | A pair of luxury... | 3/4 | Pendiente | - |
| Z002 | Stiletto Noire | Stiletto | Negro | Patent | Mujer | Elegant women's... | Lateral | Pendiente | - |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |

### Template de Prompt con Variables

```
A pair of luxury {{tipo}} shoes in {{color}} {{material}} leather,
{{género}}-style, displayed on a marble surface, studio lighting,
{{ángulo}} angle view, product photography, 8K resolution,
consistent with luxury e-commerce catalog aesthetic.

Negative: blurry, low quality, watermark, text, deformed, cartoon
```

n8n sustituye `{{variable}}` por los valores del Sheet automáticamente.

---

## 4. n8n + APIs de IA — Flujos Avanzados

### Flujo 1: Generación masiva de renders

```
[Schedule: cada noche 22:00]
    ↓
[Google Sheets: leer productos con Status="Pendiente"]
    ↓
[Loop Over Items]
    ↓
[Set: construir prompt dinámico con variables del Sheet]
    ↓
[HTTP Request: llamar API de Gemini/DALL-E con el prompt]
    ↓
[Google Drive: guardar imagen en carpeta /renders/{{modelo}}/]
    ↓
[Google Sheets: actualizar Status="Generado" + URL del render]
    ↓
[Gmail: enviar resumen "12 renders nuevos generados esta noche"]
```

### Flujo 2: Generación masiva de fichas de producto

```
[Manual Trigger]
    ↓
[Google Sheets: leer productos con Ficha="Vacía"]
    ↓
[Loop Over Items]
    ↓
[OpenAI: "Genera ficha de producto para {{modelo}} en tono de lujo.
         Material: {{material}}, Color: {{color}}, Tipo: {{tipo}}"]
    ↓
[Set: extraer nombre_modelo, tagline, descripción, specs]
    ↓
[Google Sheets: actualizar filas con la ficha generada]
```

### Flujo 3: Adaptación de imágenes multiplataforma

```
[Google Drive Trigger: nueva imagen en /renders/aprobados/]
    ↓
[HTTP Request: descargar imagen]
    ↓
[Split: generar 4 versiones]
    ├── [Resize 1080x1080] → [Drive: /rrss/instagram/]
    ├── [Resize 1920x600]  → [Drive: /web/banners/]
    ├── [Resize 1200x628]  → [Drive: /rrss/linkedin/]
    └── [Resize 800x800]   → [Drive: /email/thumbnails/]
    ↓
[Slack: "📸 Nuevo modelo adaptado a 4 plataformas"]
```

---

## 5. Google Sheets como Base de Datos de Catálogo

### Por qué Sheets y no una BBDD "real"

| Factor | Google Sheets | Base de datos (Supabase/SQL) |
|--------|-------------|--------------------------|
| **Curva de aprendizaje** | ✅ Todo el mundo sabe usarlo | ⚠️ Requiere conocimientos técnicos |
| **Colaboración en tiempo real** | ✅ Nativo | ⚠️ Necesita interfaz adicional |
| **Integración con n8n** | ✅ Nodo nativo | ✅ Nodo nativo |
| **Escalabilidad** | ⚠️ Hasta ~10.000 filas | ✅ Millones de filas |
| **Para nuestro caso** | ✅ Perfecto (catálogo &lt;500 productos) | ❌ Sobredimensionado |

> 💡 **Regla práctica:** Si tienes menos de 5.000 filas de datos, Google Sheets es tu base de datos ideal. Es gratis, todo el mundo lo entiende, y n8n lo lee/escribe nativamente.

---

## 6. Luma IA Agents — Generación Nodal Autónoma

### Pipeline Visual Autónomo

Luma IA Agents permite crear **flujos de generación de imagen por nodos**, donde cada nodo es una instrucción visual que se ejecuta automáticamente:

```
[Input: Boceto] → [Nodo: Estilo Fotorrealista] → [Nodo: Iluminación Studio] 
→ [Nodo: Material Piel] → [Output: Render Final]
```

### Ventajas para producción a escala

- **Consistencia**: El mismo pipeline produce el mismo estilo siempre
- **Reproducibilidad**: Puedes aplicar el mismo flujo a 100 bocetos
- **Iteración**: Cambias UN nodo y toda la producción se actualiza

### Diferencia con n8n

| | n8n | Luma IA Agents |
|---|---|---|
| **Enfoque** | Automatización de PROCESOS (datos, emails, APIs) | Automatización de GENERACIÓN VISUAL (nodos creativos) |
| **Complementarios** | n8n orquesta el macro-flujo | Luma ejecuta el micro-flujo de generación |

---

## 7. Control de Calidad Automatizado

### QA con IA: Verificación antes de publicar

Un pipeline profesional incluye un paso de control de calidad automático:

```
[Imagen generada]
    ↓
[IA (Gemini Vision): "Analiza esta imagen. ¿Cumple estos criterios?
    1. ¿Es fotorrealista? (Sí/No)
    2. ¿Hay deformaciones visibles? (Sí/No)
    3. ¿Hay texto/watermark? (Sí/No)
    4. ¿El producto está centrado? (Sí/No)
    5. Puntuación de calidad (1-10)"]
    ↓
[IF puntuación >= 7]
    ├── SÍ → [Mover a /aprobados/]
    └── NO → [Mover a /revisión_manual/] + [Slack: "⚠️ Render rechazado: {{modelo}}"]
```

> 🛡️ **Clave:** Nunca dejes que un pipeline publique sin QA. Incluso si el 95% es perfecto, ese 5% de error puede dañar la imagen de marca.

---

## 8. Quiz y PFC

### 📝 Quiz de Conocimientos (8 preguntas)

**1.** ¿Qué es "Batch Processing"?

- a) Procesar un solo archivo muy grande
- b) ✅ Procesar múltiples elementos en lote, ejecutando la misma operación sobre cada uno automáticamente
- c) Un tipo especial de imagen IA
- d) Comprimir archivos en un ZIP

**2.** ¿Cuánto costaría generar un catálogo de 600 imágenes con API a $0.03/imagen?

- a) $600
- b) $60
- c) ✅ $18
- d) Gratis

**3.** ¿Para qué sirve un "Template de Prompt con Variables"?

- a) Para que cada imagen sea diferente
- b) ✅ Para generar prompts automáticamente sustituyendo variables (color, material, ángulo) desde una hoja de datos
- c) Para guardar imágenes
- d) Para enviar emails

**4.** ¿Para qué usamos Google Sheets en el pipeline?

- a) Para editar imágenes
- b) ✅ Como base de datos del catálogo de productos (modelo, color, material, prompts, status, URLs)
- c) Para programar publicaciones
- d) Para generar scripts

**5.** ¿Qué nodo de n8n recorre una lista de productos uno a uno?

- a) IF
- b) Switch
- c) ✅ Loop Over Items
- d) Merge

**6.** ¿Qué paso de control de calidad añadirías a un pipeline de generación masiva?

- a) Revisar manualmente cada imagen
- b) ✅ Un nodo de IA con visión (Gemini Vision) que evalúa cada imagen y la aprueba o marca para revisión
- c) No necesitas QA si el prompt es bueno
- d) Subir todo y ver si hay quejas

**7.** ¿Qué es "Rate Limiting" y por qué importa?

- a) Limitar el número de empleados
- b) ✅ Límite de peticiones por minuto que una API acepta; hay que respetar las pausas para no ser bloqueado
- c) El precio máximo que puedes pagar
- d) La velocidad máxima de tu Internet

**8.** ¿Cuál es la diferencia entre n8n y Luma IA Agents en un pipeline de producción?

- a) Hacen lo mismo
- b) ✅ n8n orquesta el proceso completo (datos, APIs, destinos); Luma ejecuta la generación visual con nodos creativos
- c) n8n es gratis y Luma es de pago
- d) Luma es más potente siempre

---

### 🚀 PFC — Preparación para Clases 18-19

> Las clases 18 y 19 son los labs de automatización.

1. **Completar el Google Sheet de catálogo** con mínimo 10 productos:
   - Columnas: ID, Modelo, Tipo, Color, Material, Género, Prompt Base, Ángulo, Status
   
2. **Obtener API key de OpenAI o Gemini** para usar en n8n

3. **Diseñar (en papel) el flujo que quieres automatizar:**
   - Diseño: Pipeline de generación de renders
   - Marketing: Pipeline de publicación en RRSS

> 📦 **Entregable:** Sheet de catálogo con 10+ productos + API key configurada en n8n + diagrama de flujo en papel.

---

## 📎 Recursos Adicionales

- [n8n Workflows Library](https://n8n.io/workflows) — Templates listos
- [OpenAI API Docs](https://platform.openai.com/docs) — Documentación de la API
- [Google AI Studio](https://aistudio.google.com) — API key de Gemini
- [Replicate](https://replicate.com) — APIs de Stable Diffusion
