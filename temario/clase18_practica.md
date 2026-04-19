---
clase: 18
tipo: práctica
audiencia: diseño
bloque: 5 — Automatización a Escala
titulo: "Pipeline de Catálogo — Generación Masiva con n8n"
duracion: "2 horas"
teoria_previa: [clase16_teoria.md, clase17_teoria.md]
pfc_entregable: "Pipeline funcional en n8n + 10 renders generados automáticamente"
---

# Clase 18 · Práctica · 🎨 Diseño
# Pipeline de Catálogo — Generación Masiva con n8n

> *Tu primer pipeline de producción. Un Sheet con 10 productos entra, 10 renders organizados salen. Sin tocar el ratón.*

**Duración estimada:** 2 horas  
**Prerrequisito:** Clases 16-17 (Automatización + Batch Processing)

---

## Objetivos de la sesión

- Construir un workflow de n8n desde cero para generación masiva de renders
- Conectar Google Sheets como base de datos de catálogo
- Usar la API de generación de imagen (Gemini/OpenAI) desde n8n
- Implementar control de calidad automatizado con IA
- Generar 10+ renders organizados automáticamente

---

## Material necesario

- [ ] Cuenta en **n8n** (cloud o local)
- [ ] **Google Sheet** de catálogo con 10+ productos (preparado en PFC C17)
- [ ] **API key** de OpenAI o Google Gemini configurada en n8n
- [ ] Cuenta de **Google Drive** para almacenar resultados

---

## Ejercicio 1: Configurar el Workspace de n8n
**⏱️ 20 minutos**

### Instrucciones

#### 1.1. Crear las credenciales

En n8n → Settings → Credentials, configura:

1. **Google Sheets**: Conectar cuenta Google (OAuth2)
2. **Google Drive**: Conectar misma cuenta Google
3. **OpenAI**: Pegar API key
4. **Gmail** (opcional): Para notificaciones

#### 1.2. Crear la estructura de carpetas en Drive

```
Mi Drive/
└── PFC_TiendaZapatos/
    ├── renders/
    │   ├── aprobados/
    │   ├── revision/
    │   └── raw/
    ├── fichas/
    └── assets_rrss/
```

#### 1.3. Preparar el Sheet de catálogo

Verifica que tu Sheet tiene estas columnas:

| A: ID | B: Modelo | C: Tipo | D: Color | E: Material | F: Género | G: Ángulo | H: Prompt Base | I: Status | J: URL Render | K: Ficha |
|-------|-----------|---------|----------|-------------|-----------|-----------|---------------|-----------|--------------|---------|

> 💡 **Si no tienes 10 productos:** Usa la IA ahora mismo para generar 10 líneas de catálogo con variedad de modelos, colores y materiales.

---

## Ejercicio 2: Flujo Principal — Generación de Renders
**⏱️ 40 minutos**

### Instrucciones paso a paso

#### Nodo 1: Manual Trigger

- Tipo: **Manual Trigger**
- Usaremos trigger manual para pruebas. Luego lo cambiaremos a Schedule.

#### Nodo 2: Google Sheets — Leer productos pendientes

- Tipo: **Google Sheets**
- Operación: **Read Rows**
- Spreadsheet: [Tu sheet de catálogo]
- Sheet: Sheet1
- Filtro: Solo filas donde `Status = "Pendiente"`

#### Nodo 3: Loop Over Items

- Tipo: **Split In Batches**
- Batch Size: 1 (procesar de uno en uno para respetar rate limits)

#### Nodo 4: Set — Construir Prompt Dinámico

- Tipo: **Set**
- Campo `prompt`: 

```
A pair of luxury {{ $json.Tipo }} shoes in {{ $json.Color }} {{ $json.Material }} leather,
{{ $json.Género }}-style, displayed on a white marble surface with subtle shadows,
professional studio lighting, {{ $json.Ángulo }} angle view,
high-end product photography for luxury e-commerce catalog, 8K resolution,
clean background, photorealistic quality.

Negative: blurry, low quality, watermark, text, deformed, cartoon, illustration
```

#### Nodo 5: HTTP Request — Llamar API de generación

- Tipo: **HTTP Request**
- Método: POST
- URL: `https://api.openai.com/v1/images/generations` (para DALL-E)
  o URL de Gemini según la API disponible
- Headers: `Authorization: Bearer {{$credentials.openAi.apiKey}}`
- Body (JSON):

```json
{
  "model": "dall-e-3",
  "prompt": "{{ $json.prompt }}",
  "n": 1,
  "size": "1024x1024",
  "quality": "hd"
}
```

#### Nodo 6: Google Drive — Guardar imagen

- Tipo: **Google Drive**
- Operación: **Upload**
- Carpeta: `/PFC_TiendaZapatos/renders/raw/`
- Nombre: `{{ $json.ID }}_{{ $json.Modelo }}_{{ $json.Ángulo }}.png`

#### Nodo 7: Google Sheets — Actualizar status

- Tipo: **Google Sheets**
- Operación: **Update Row**
- Actualizar columna `Status` = "Generado"
- Actualizar columna `URL Render` = URL del archivo en Drive

#### Nodo 8: Wait (Rate Limiting)

- Tipo: **Wait**
- Duración: 3 segundos (respetar rate limits de la API)
- Conectar de vuelta al **Loop Over Items**

### Probar el flujo

1. Marca los 10 productos como "Pendiente" en el Sheet
2. Ejecuta el workflow manualmente
3. Observa la ejecución nodo a nodo
4. Verifica que los renders aparecen en Drive y el Sheet se actualiza

---

## Ejercicio 3: Control de Calidad con IA
**⏱️ 30 minutos**

### Instrucciones

Añade un paso de QA entre la generación y el guardado final.

#### Nodo QA: OpenAI (GPT-4 Vision) o Gemini Vision

Inserta entre el Nodo 5 y el Nodo 6:

- Tipo: **OpenAI** (con modelo GPT-4 Vision) o **HTTP Request** a Gemini Vision
- Prompt:

```
Analiza esta imagen de producto de calzado y responde en JSON:

{
  "es_fotorrealista": true/false,
  "hay_deformaciones": true/false,
  "hay_watermark_o_texto": true/false,
  "producto_centrado": true/false,
  "calidad_general": 1-10,
  "comentario": "breve descripción de problemas encontrados"
}
```

#### Nodo IF: Decisión de calidad

- Tipo: **IF**
- Condición: `calidad_general >= 7`
- **True**: Continuar al Nodo 6 (guardar en `/aprobados/`)
- **False**: Guardar en `/revision/` + enviar alerta

#### Nodo Alerta: Slack o Gmail

- Tipo: **Gmail** o **Slack**
- Mensaje: `"⚠️ Render de {{ $json.Modelo }} rechazado por QA. Calidad: {{ $json.calidad_general }}/10. Motivo: {{ $json.comentario }}"`

---

## Ejercicio 4: Generación de Fichas de Producto
**⏱️ 30 minutos**

### Instrucciones

Crea un segundo workflow (o extiende el primero) que genere fichas de producto.

#### Workflow de fichas

```
[Manual Trigger]
    ↓
[Google Sheets: leer productos con Status="Generado" y Ficha="Vacía"]
    ↓
[Loop Over Items]
    ↓
[OpenAI/Claude: "Genera ficha de producto para el modelo {{Modelo}}
    en tono de lujo sofisticado.
    Tipo: {{Tipo}}, Color: {{Color}}, Material: {{Material}}, Género: {{Género}}
    
    Formato de respuesta:
    NOMBRE: (nombre sofisticado, max 2 palabras)
    TAGLINE: (max 6 palabras)
    DESCRIPCIÓN_CORTA: (30 palabras para listado)
    DESCRIPCIÓN_LARGA: (100 palabras para ficha completa)
    MATERIALES: (especificaciones técnicas)
    NOTA_DISEÑADOR: (2 frases emocionales)"]
    ↓
[Code: parsear respuesta en campos separados]
    ↓
[Google Sheets: actualizar fila con los 6 campos de la ficha]
    ↓
[Wait: 2 segundos → Loop]
```

---

## 🚀 Entregable PFC — Clase 18

> 📦 **Pipeline funcional + resultados**

### Checklist de entrega

- [ ] **Workflow de n8n exportado** (JSON)
  - Pipeline principal de generación de renders funcional
  
- [ ] **10+ renders generados** automáticamente por el pipeline
  - Organizados en Google Drive
  - Verificar que el Sheet se ha actualizado con URLs

- [ ] **QA implementado** — renders separados en /aprobados/ y /revision/

- [ ] **Fichas de producto** — al menos 5 fichas generadas automáticamente en el Sheet

- [ ] **Capturas de pantalla** del workflow de n8n mostrando ejecución exitosa

### Formato de entrega

```
PFC_Clase18_[NombreMarca]/
├── n8n/
│   ├── workflow_renders.json (exportado de n8n)
│   └── workflow_fichas.json
├── capturas/
│   ├── n8n_ejecucion_exitosa.png
│   ├── sheet_actualizado.png
│   └── drive_organizado.png
└── nota_aprendizaje.md (qué ha funcionado, qué no, lecciones)
```

---

## Criterios de Evaluación

| Criterio | Peso | Excelente (5) | Correcto (3) | Insuficiente (1) |
|----------|------|--------------|--------------|-------------------|
| **Pipeline funcional** | 35% | Workflow ejecuta end-to-end sin errores | Ejecuta con algún ajuste manual | No funciona |
| **Calidad de renders** | 25% | Renders fotorrealistas y coherentes | Calidad aceptable | Renders con defectos graves |
| **QA implementado** | 20% | Sistema de QA automático separa aprobados/rechazados | QA manual pero organizado | Sin control de calidad |
| **Fichas generadas** | 20% | 5+ fichas completas con tono de marca | Fichas generadas pero genéricas | Sin fichas |

---

## 📎 Recursos de Clase

- [n8n](https://n8n.io) — Plataforma de automatización
- [OpenAI API](https://platform.openai.com) — Generación de imagen y texto
- [Google AI Studio](https://aistudio.google.com) — API Gemini
