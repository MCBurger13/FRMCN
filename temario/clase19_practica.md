---
clase: 19
tipo: práctica
audiencia: marketing
bloque: 5 — Automatización a Escala
titulo: "Pipeline RRSS — Publicación y Reporting Automatizado"
duracion: "2 horas"
teoria_previa: [clase16_teoria.md, clase17_teoria.md]
pfc_entregable: "Pipeline de publicación RRSS + dashboard de métricas"
---

# Clase 19 · Práctica · 📈 Marketing
# Pipeline RRSS — Publicación y Reporting Automatizado

> *Tu máquina de contenido. Hoy automatizas la cadena completa: del calendario editorial a la publicación, y del engagement al informe semanal.*

**Duración estimada:** 2 horas  
**Prerrequisito:** Clases 16-17 (Automatización + Batch Processing)

---

## Objetivos de la sesión

- Construir un pipeline de publicación en RRSS con n8n
- Automatizar la generación de copies desde un calendario editorial
- Crear un dashboard de métricas en Google Sheets / Looker Studio
- Implementar un flujo de newsletter automatizado

---

## Material necesario

- [ ] Cuenta en **n8n** con credenciales configuradas
- [ ] **Google Sheet** del calendario editorial (de Clase 11)
- [ ] Gem "Copywriter de Lujo" o API key de OpenAI/Claude
- [ ] Cuenta de **Google Drive** conectada
- [ ] Opcional: cuenta de Looker Studio

---

## Ejercicio 1: Pipeline de Generación de Contenido
**⏱️ 35 minutos**

### Instrucciones

Construye un workflow que cada mañana prepare el contenido del día.

#### Workflow: Content Generator

```
Nodo 1: [Schedule Trigger: Lunes a Viernes, 8:00]
    ↓
Nodo 2: [Google Sheets: leer calendario editorial]
         Filtro: fecha = HOY
    ↓
Nodo 3: [IF: ¿Hay publicación programada hoy?]
    ├── NO → [Stop: no hay contenido hoy]
    └── SÍ → continuar
    ↓
Nodo 4: [OpenAI/Claude: generar copy]
         Prompt: "Actúa como copywriter senior de marca de lujo.
         Genera el copy para un post de {{plataforma}}.
         Tema: {{tema}}
         Tono: sofisticado, aspiracional, sin exclamaciones.
         Incluye:
         - Headline (max 8 palabras)
         - Body (max {{max_palabras}} palabras)
         - CTA (max 4 palabras)
         - 5 hashtags relevantes pero no genéricos"
    ↓
Nodo 5: [Google Drive: buscar imagen asociada]
         Carpeta: /renders/aprobados/ + /assets_rrss/
         Nombre contiene: {{asset_visual}}
    ↓
Nodo 6: [Google Sheets: guardar copy + URL imagen en columna "Copy Generado"]
    ↓
Nodo 7: [Slack/Email: "📝 Contenido del día listo para revisión:
         Plataforma: {{plataforma}}
         Copy: {{copy_generado}}
         Imagen: {{url_imagen}}
         ¿Aprobar? Responde OK para publicar"]
```

### Resultado esperado

Cada mañana a las 8:00, el equipo recibe por Slack/email el contenido del día listo para aprobar con un clic.

---

## Ejercicio 2: Dashboard de Métricas
**⏱️ 30 minutos**

### Instrucciones

Crea un Google Sheet que funcione como dashboard de KPIs de RRSS.

#### 2.1. Estructura del Sheet "Dashboard RRSS"

**Hoja 1: Datos Crudos**

| Fecha | Plataforma | Tipo Post | Copy | Likes | Comments | Shares | Saves | Reach | Link Clicks |
|-------|-----------|-----------|------|-------|----------|--------|-------|-------|-------------|

**Hoja 2: Dashboard Semanal**

| Semana | Total Posts | Engagement Rate | Mejor Post | Peor Post | Reach Total | Clicks Total |
|--------|-----------|----------------|-----------|----------|-------------|-------------|

**Hoja 3: Dashboard Mensual**

| Mes | Seguidores Inicio | Seguidores Fin | Crecimiento % | Posts | Avg Engagement | Top 3 Posts |
|-----|-------------------|----------------|--------------|-------|---------------|-------------|

#### 2.2. Workflow de informe semanal

```
Nodo 1: [Schedule: Viernes 17:00]
    ↓
Nodo 2: [Google Sheets: leer datos de la semana]
    ↓
Nodo 3: [Code: calcular métricas]
         - Total posts
         - Engagement rate medio
         - Mejor y peor post
         - Crecimiento vs semana anterior
    ↓
Nodo 4: [OpenAI: "Analiza estos KPIs de RRSS y redacta un informe 
         ejecutivo de 200 palabras con:
         1. Resumen del rendimiento
         2. Qué ha funcionado mejor
         3. Qué mejorar la próxima semana
         4. Recomendación de contenido para lunes
         Datos: {{metricas}}"]
    ↓
Nodo 5: [Google Sheets: guardar informe en hoja Dashboard Semanal]
    ↓
Nodo 6: [Gmail: enviar informe al equipo]
         Asunto: "📊 Informe RRSS Semana {{semana}} — {{marca}}"
```

#### 2.3. Opcional — Looker Studio

Conecta el Google Sheet a **Looker Studio** (gratis) para crear un dashboard visual interactivo:
- Gráficos de engagement por plataforma
- Evolución de seguidores
- Mejor horario de publicación
- Tipos de contenido más efectivos

---

## Ejercicio 3: Flujo de Newsletter Automatizado
**⏱️ 30 minutos**

### Instrucciones

Crea un pipeline que genere y prepare newsletters automáticamente.

#### Workflow: Newsletter Builder

```
Nodo 1: [Schedule: Jueves 10:00 (preparar newsletter del viernes)]
    ↓
Nodo 2: [Google Sheets: leer productos nuevos de la semana]
    ↓
Nodo 3: [Google Sheets: leer posts más exitosos de la semana]
    ↓
Nodo 4: [OpenAI/Claude: generar newsletter]
         Prompt: "Redacta la newsletter semanal de {{marca}}.
         
         Estructura:
         1. ASUNTO (max 50 chars, crear urgencia elegante)
         2. PREVIEW TEXT (max 90 chars)
         3. SALUDO personalizado
         4. NOVEDADES DE LA SEMANA: {{productos_nuevos}}
         5. LO MÁS POPULAR: {{posts_exitosos}}
         6. CONTENIDO EXCLUSIVO: adelanto o código descuento
         7. CTA PRINCIPAL
         8. DESPEDIDA + firma
         
         Tono: sofisticado, cercano, exclusivo (como recibir una carta 
         de un amigo con muy buen gusto)"
    ↓
Nodo 5: [Google Sheets: guardar newsletter en hoja "Newsletters"]
    ↓
Nodo 6: [Slack: "📧 Newsletter de la semana lista para revisión"]
```

---

## Ejercicio 4: Flujo de Respuesta Automática a Leads
**⏱️ 25 minutos**

### Instrucciones

Automatiza la respuesta a formularios de contacto de la web.

#### Workflow: Lead Response

```
Nodo 1: [Webhook: recibe datos del formulario web]
         Campos: nombre, email, tipo_consulta, mensaje
    ↓
Nodo 2: [OpenAI: clasificar la consulta]
         Prompt: "Clasifica este mensaje de cliente en una categoría:
         - COMPRA (quiere comprar o preguntar por producto)
         - SOPORTE (problema con pedido existente)
         - COLABORACIÓN (propuesta comercial o partnership)
         - PRENSA (medios, entrevistas)
         - OTRO
         
         Mensaje: {{mensaje}}"
    ↓
Nodo 3: [Switch: según categoría]
    ├── COMPRA → [OpenAI: generar respuesta personalizada de venta]
    ├── SOPORTE → [OpenAI: respuesta empática + escalar a humano]
    ├── COLABORACIÓN → [Respuesta estándar: "Gracias, revisaremos..."]
    ├── PRENSA → [Email directo al departamento de comunicación]
    └── OTRO → [Respuesta genérica + notificación al equipo]
    ↓
Nodo 4: [Gmail: enviar respuesta al lead]
    ↓
Nodo 5: [Google Sheets: registrar lead + categoría + respuesta]
    ↓
Nodo 6: [Slack: "🔔 Nuevo lead: {{nombre}} — {{categoría}}"]
```

> ⚠️ **Human-in-the-loop:** Para emails de COMPRA, el flujo prepara la respuesta pero la envía como borrador para revisión humana antes del envío final.

---

## 🚀 Entregable PFC — Clase 19

> 📦 **Pipelines de marketing automatizados + dashboard**

### Checklist de entrega

- [ ] **Pipeline Content Generator** funcional en n8n
  - Genera copy diariamente según calendario editorial
  
- [ ] **Dashboard de métricas** en Google Sheets
  - Estructura completa con datos de ejemplo
  - Opcional: conectado a Looker Studio

- [ ] **Pipeline Newsletter** funcional
  - Genera newsletter semanal automáticamente

- [ ] **Pipeline Lead Response** funcional
  - Clasifica consultas y prepara respuestas

- [ ] **Workflows exportados** (JSON de n8n)

### Formato de entrega

```
PFC_Clase19_[NombreMarca]/
├── n8n/
│   ├── workflow_content_generator.json
│   ├── workflow_newsletter.json
│   └── workflow_lead_response.json
├── dashboard/
│   ├── link_google_sheet.txt
│   └── link_looker_studio.txt (si aplica)
├── capturas/
│   ├── content_generator_ejecucion.png
│   ├── newsletter_ejemplo.png
│   └── lead_response_test.png
└── nota_aprendizaje.md
```

---

## Criterios de Evaluación

| Criterio | Peso | Excelente (5) | Correcto (3) | Insuficiente (1) |
|----------|------|--------------|--------------|-------------------|
| **Pipelines funcionales** | 35% | 3+ pipelines ejecutan sin errores | 2 pipelines funcionales | 1 o ninguno funcional |
| **Calidad del copy generado** | 25% | Copy de marca, tono consistente y persuasivo | Copy genérico pero correcto | Copy amateur |
| **Dashboard de métricas** | 20% | Dashboard completo con análisis automático | Estructura correcta, datos de ejemplo | Sin dashboard |
| **Human-in-the-loop** | 20% | Flujos con paso de aprobación humana implementado | Mencionado pero no implementado | Sin consideración |

---

## 📎 Recursos de Clase

- [n8n](https://n8n.io) — Automatización
- [Looker Studio](https://lookerstudio.google.com) — Dashboard visual (gratis)
- [Google Sheets](https://sheets.google.com) — Base de datos y dashboard
