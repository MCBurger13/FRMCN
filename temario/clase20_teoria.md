---
clase: 20
tipo: teórica
audiencia: conjunta
bloque: 6 — Documentación, Web y Organización
titulo: "Documentación y Organización con IA — Trello, Notion y Jira"
duracion: "1.5 horas"
practica_asociada: [clase21_practica.md]
---

# Clase 20 · Teórica · Conjunta
# Documentación y Organización con IA — Trello, Notion y Jira

> *Equipos organizados producen el doble. Aprende a usar IA para documentar, planificar y coordinar campañas y procesos creativos.*

**Duración estimada:** 1.5 horas

---

## Navegación de la clase

1. [El Caos Organizativo y su Coste](#1-el-caos-organizativo)
2. [Notion + IA — El Segundo Cerebro del Equipo](#2-notion-ia)
3. [Trello + IA — Gestión Visual de Proyectos](#3-trello-ia)
4. [Jira + IA — Para Equipos Técnicos](#4-jira-ia)
5. [Documentación Inteligente con IA](#5-documentación-inteligente)
6. [Dashboards Personalizados con Looker Studio + Sheets](#6-dashboards)
7. [Quiz + PFC](#7-quiz-y-pfc)

---

## Conceptos clave de esta clase

`Knowledge Base` · `Wiki Corporativa` · `Kanban` · `Sprint` · `Backlog` · `Template de Proyecto` · `SOPs (Standard Operating Procedures)` · `Dashboard` · `KPI` · `OKR` · `Documentación Viva`

---

## 1. El Caos Organizativo y su Coste

### Síntomas del equipo desorganizado

| Síntoma | Coste oculto |
|---------|-------------|
| "¿Dónde está la última versión del brandbook?" | 20 min buscando × 3 personas × 5 veces/mes = **5 horas/mes** |
| "¿Quién tiene que aprobar este diseño?" | Retrasos de 1-3 días por falta de proceso claro |
| "No sabía que Marketing ya había cambiado los copies" | Trabajo duplicado |
| "¿Qué acordamos en la reunión de ayer?" | Decisiones perdidas, mismas discusiones repetidas |

> 💰 **Dato:** Según McKinsey, los empleados pasan un **19% de su jornada buscando información** interna. Con IA + herramientas de organización → se reduce a un 3%.

---

## 2. Notion + IA — El Segundo Cerebro del Equipo

🔗 [notion.so](https://notion.so)

### ¿Por qué Notion?

Notion combina: wiki + base de datos + gestión de proyectos + documentos + IA nativo. Todo en una sola herramienta.

### Estructura para la tienda de zapatos

```
📂 Workspace: [NOMBRE_MARCA]
├── 📋 Dashboard Principal
├── 📖 Wiki de Marca
│   ├── Brandbook
│   ├── Guía de tono de voz
│   ├── Paleta de colores y tipografía
│   └── SOPs (procesos estándar)
├── 📅 Calendario Editorial
│   └── Vista por mes / semana / plataforma
├── 📦 Catálogo de Producto
│   └── Base de datos con renders, fichas, precios
├── 🎯 Campañas
│   ├── Campaña Lanzamiento
│   ├── Campaña SS26
│   └── Template de campaña
└── 📊 KPIs y Reporting
    └── Dashboard de métricas RRSS
```

### Notion AI — Funciones clave

| Función | Uso |
|---------|-----|
| **Resumir** | Resume actas de reunión, informes, documentos largos |
| **Traducir** | Traduce documentos a cualquier idioma |
| **Mejorar escritura** | Mejora tono, corrige, simplifica textos |
| **Generar contenido** | Crea borradores, llena tablas, genera ideas |
| **Q&A sobre workspace** | Pregunta sobre TODO tu workspace y responde con contexto |

> ⭐ **La función estrella:** Notion Q&A. Puedes preguntar "¿Cuántos modelos tenemos en el catálogo de mujer?" y Notion busca en TODAS tus bases de datos y responde con precisión.

---

## 3. Trello + IA — Gestión Visual de Proyectos

🔗 [trello.com](https://trello.com)

### Tablero Kanban para Producción de Contenido

```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│   BACKLOG    │ │  PRODUCCIÓN  │ │  REVISIÓN    │ │  APROBADO    │ │  PUBLICADO   │
│              │ │              │ │              │ │              │ │              │
│ • Post IG    │ │ • Banner     │ │ • Reel 15s   │ │ • Post IG    │ │ • Post IG    │
│   Modelo 4   │ │   web hero   │ │   colección  │ │   Modelo 2   │ │   Modelo 1   │
│ • Reel       │ │ • Newsletter │ │              │ │ • Email      │ │ • Story      │
│   BTS        │ │   Semana 3   │ │              │ │   launch     │ │   launch     │
│ • Email      │ │              │ │              │ │              │ │              │
│   VIP        │ │              │ │              │ │              │ │              │
└──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘
```

### Automatizaciones de Trello (Butler)

| Regla | Acción automática |
|-------|-------------------|
| Tarjeta movida a "Aprobado" | Asignar fecha de publicación + notificar equipo |
| Fecha de publicación = hoy | Mover a "Publicado" + enviar recordatorio |
| Nueva tarjeta creada con etiqueta "Urgente" | Notificar al responsable por email |
| Tarjeta en "Revisión" > 2 días | Alerta al aprobador |

### Trello + n8n

Puedes conectar Trello con n8n para flujos más complejos:
```
[Trello: tarjeta movida a "Aprobado"] → [n8n: descargar assets] 
→ [n8n: publicar en RRSS] → [Trello: mover a "Publicado"]
```

---

## 4. Jira + IA — Para Equipos Técnicos

🔗 [atlassian.com/software/jira](https://www.atlassian.com/software/jira)

### Cuándo usar Jira vs Trello vs Notion

| Factor | Notion | Trello | Jira |
|--------|--------|--------|------|
| **Ideal para** | Equipos creativos, documentación | Gestión visual simple | Equipos técnicos, desarrollo |
| **Complejidad** | Media | Baja | Alta |
| **Sprints/Roadmaps** | Manual | No nativo | ✅ Nativo |
| **Para nuestro caso** | ✅ Wiki + catálogo | ✅ Calendario editorial | ⚠️ Si hay equipo técnico |

### Atlassian Intelligence

Jira incorpora IA para:
- Resumir tickets largos
- Sugerir asignaciones basadas en histórico
- Detectar tickets duplicados
- Generar user stories desde descripciones vagas

---

## 5. Documentación Inteligente con IA

### SOPs (Standard Operating Procedures) generados con IA

Un SOP es un documento que describe exactamente cómo hacer una tarea. Con IA, generas SOPs en minutos:

```
Prompt para generar un SOP:

"Crea un SOP (Standard Operating Procedure) para el proceso de:
'Publicar un nuevo modelo de zapato en el e-commerce'

Incluye:
1. Objetivo del proceso
2. Responsable
3. Requisitos previos (checklist)
4. Pasos numerados con capturas sugeridas
5. Criterios de calidad (QA)
6. Problemas frecuentes y soluciones
7. Tiempo estimado
8. Aprobador final

Formato: documento profesional con headers, bullet points y tablas"
```

### Documentación viva con NotebookLM

Sube todos tus SOPs, brandbook y procesos a NotebookLM:
- El equipo pregunta "¿cómo subo un producto nuevo?" → responde con el SOP exacto
- Nunca más "está en un documento que no encuentro"

---

## 6. Dashboards Personalizados

### Google Sheets + Looker Studio

| Herramienta | Rol |
|-------------|-----|
| **Google Sheets** | Almacén de datos (inputs desde n8n, manual, APIs) |
| **Looker Studio** | Visualización interactiva (gráficos, filtros, compartir) |

### Dashboard de operaciones de la tienda

```
┌────────────────────────────────────────────────────┐
│ 📊 DASHBOARD OPERATIVO — [MARCA] — Abril 2026     │
│────────────────────────────────────────────────────│
│                                                    │
│ 📦 Catálogo         📈 RRSS           💰 Ventas   │
│ ┌────────────┐     ┌────────────┐   ┌──────────┐ │
│ │ 47 modelos │     │ 12.4K      │   │ €24,800  │ │
│ │ activos    │     │ seguidores │   │ este mes │ │
│ │ +5 nuevos  │     │ +1.2K new  │   │ +18% MoM │ │
│ └────────────┘     └────────────┘   └──────────┘ │
│                                                    │
│ 📉 Engagement Rate    📧 Newsletter    🎯 Leads   │
│ ┌──────────────┐     ┌──────────┐   ┌──────────┐ │
│ │    4.7%      │     │ 2,340    │   │ 89 nuevos│ │
│ │ ▲ vs 3.9%   │     │ subs     │   │ 34 conv. │ │
│ └──────────────┘     └──────────┘   └──────────┘ │
└────────────────────────────────────────────────────┘
```

---

## 7. Quiz y PFC

### 📝 Quiz de Conocimientos (8 preguntas)

**1.** ¿Qué porcentaje de la jornada laboral se pierde buscando información interna según McKinsey?

- a) 5%
- b) ✅ 19%
- c) 50%
- d) 1%

**2.** ¿Qué es un SOP?

- a) Un tipo de base de datos
- b) ✅ Standard Operating Procedure: documento que describe exactamente cómo hacer una tarea paso a paso
- c) Un software de diseño
- d) Un modelo de IA

**3.** ¿Cuál es la función estrella de Notion AI para equipos?

- a) Generar imágenes
- b) ✅ Q&A sobre todo el workspace: puedes preguntar sobre cualquier dato y responde con contexto de todas tus bases de datos
- c) Editar vídeo
- d) Enviar emails

**4.** ¿Para qué sirve Looker Studio en nuestro contexto?

- a) Para generar renders
- b) Para programar posts
- c) ✅ Para crear dashboards visuales interactivos conectados a Google Sheets
- d) Para chatear con IA

**5.** ¿Qué diferencia a Trello de Notion?

- a) Trello es gratis y Notion es de pago
- b) ✅ Trello es gestión visual simple (Kanban); Notion combina wiki + BBDD + gestión + documentación
- c) Notion no tiene IA
- d) Son lo mismo

**6.** ¿Cómo conectarías Trello con el pipeline de publicación en RRSS?

- a) Manualmente copiando datos
- b) ✅ Con n8n: cuando una tarjeta pasa a "Aprobado" en Trello, n8n ejecuta la publicación automática
- c) Trello publica directamente en Instagram
- d) No se pueden conectar

**7.** ¿Qué ventaja tiene usar NotebookLM para documentación del equipo?

- a) Es más barato
- b) ✅ Los empleados preguntan en lenguaje natural y reciben respuestas basadas SOLO en documentos internos (cero alucinaciones)
- c) Genera documentos automáticamente
- d) Solo funciona con PDFs

**8.** Un tablero Kanban con 5 columnas para producción de contenido debería ser:

- a) Idea, Diseño, Código, Test, Deploy
- b) ✅ Backlog, Producción, Revisión, Aprobado, Publicado
- c) Lunes, Martes, Miércoles, Jueves, Viernes
- d) Instagram, LinkedIn, Web, Email, TikTok

---

### 🚀 PFC — Preparación para Clase 21

1. **Crear workspace base en Notion** (o Trello si se prefiere):
   - Dashboard principal
   - Sección de catálogo
   - Calendario editorial
   
2. **Generar 3 SOPs con IA** para los procesos más importantes de tu marca:
   - SOP 1: Subir un nuevo producto al e-commerce
   - SOP 2: Publicar contenido en RRSS
   - SOP 3: Responder a un lead/consulta

> 📦 **Entregable:** Workspace en Notion/Trello + 3 SOPs generados con IA.

---

## 📎 Recursos Adicionales

- [Notion](https://notion.so) — Workspace todo-en-uno
- [Trello](https://trello.com) — Gestión visual Kanban
- [Jira](https://www.atlassian.com/software/jira) — Gestión de proyectos técnicos
- [Looker Studio](https://lookerstudio.google.com) — Dashboards gratuitos
- [NotebookLM](https://notebooklm.google.com) — Documentación con Grounding
