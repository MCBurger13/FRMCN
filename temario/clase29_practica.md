---
clase: 29
tipo: práctica
audiencia: diseño
bloque: 8 — PFC Final
titulo: "MVP Final — Integración de Todos los Sistemas"
duracion: "2.5 horas"
pfc_entregable: "MVP completo de la marca de zapatos de lujo"
---

# Clase 29 · Práctica · 🎨 Diseño + 📈 Marketing (separados)
# MVP Final — Integración de Todos los Sistemas

> *El momento de la verdad. Hoy integras todo lo que has construido a lo largo del curso en un MVP (Minimum Viable Product) completo, listo para presentar como si fuera un lanzamiento real.*

**Duración estimada:** 2.5 horas

---

## Objetivos de la sesión

- Integrar todos los entregables del PFC en un sistema coherente
- Verificar que todos los pipelines, agentes y assets funcionan juntos
- Pulir la presentación final del proyecto
- Preparar el pitch de 10 minutos para la Clase 30

---

## El MVP de tu marca: Checklist maestro

### 🎨 Equipo de Diseño — Productos y Producción Visual

| # | Componente | Clase de origen | Status |
|---|-----------|----------------|--------|
| 1 | **Catálogo de 5 modelos** con renders 4K (3 ángulos each) | C4, C6, C9 | [ ] |
| 2 | **LoRA entrenada** con estilo de marca coherente | C9 | [ ] |
| 3 | **Vídeos de producto**: rotación, hero, reels | C13, C15 | [ ] |
| 4 | **Lookbook animado** (45-60 seg) | C15 | [ ] |
| 5 | **Spot de campaña** (30 seg, 3 formatos) | C15 | [ ] |
| 6 | **Pipeline n8n** de generación masiva de renders | C18 | [ ] |
| 7 | **Agente ArtBot** funcional con RAG | C25 | [ ] |
| 8 | **Sistema Multi-Agente** (ArtBot + CatalogBot + QA-Bot) | C28 | [ ] |

### 📈 Equipo de Marketing — Estrategia y Operaciones

| # | Componente | Clase de origen | Status |
|---|-----------|----------------|--------|
| 1 | **Estrategia de marca** + buyer persona | C11, C21 | [ ] |
| 2 | **Calendario editorial** (1 mes) | C11 | [ ] |
| 3 | **Copies para RRSS** (IG, LinkedIn, newsletter) | C7, C11 | [ ] |
| 4 | **Banners y assets** para campañas | C7 | [ ] |
| 5 | **Business plan ejecutivo** | C21 | [ ] |
| 6 | **Pipeline n8n** de publicación RRSS | C19 | [ ] |
| 7 | **Landing page** con Lovable | C26 | [ ] |
| 8 | **CRM + Agente de Soporte** funcional | C26 | [ ] |

### 🤝 Compartido

| # | Componente | Clase de origen | Status |
|---|-----------|----------------|--------|
| 1 | **Brandbook completo** (colores, tono, tipografía) | C25 | [ ] |
| 2 | **Workspace Notion/Trello** organizado | C21 | [ ] |
| 3 | **3 SOPs operativos** | C21 | [ ] |
| 4 | **Dashboard de KPIs** | C21 | [ ] |
| 5 | **Presentación Gamma** del proyecto | C11 | [ ] |

---

## Sesión de Trabajo: Integración

### Bloque 1: Auditoría (30 min)

Revisa cada componente de tu checklist:
- ¿Funciona?
- ¿Está actualizado con la última versión de la marca?
- ¿Los datos son coherentes entre sistemas? (mismos modelos, precios, nombres)

### Bloque 2: Conexiones (45 min)

Verifica que las piezas están conectadas:

```
VERIFICAR:
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│ Google Sheet  │◄───▶│ n8n Pipelines│◄───▶│ Agentes IA   │
│ (catálogo)    │     │ (automation) │     │ (ArtBot etc) │
└──────────────┘     └──────────────┘     └──────────────┘
       │                    │                     │
       ▼                    ▼                     ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│ Landing Page  │     │ Google Drive  │     │ Vector Store │
│ (Lovable)     │     │ (renders)     │     │ (brandbook)  │
└──────────────┘     └──────────────┘     └──────────────┘
```

- [ ] El catálogo de Sheets refleja los renders de Drive
- [ ] El pipeline de n8n lee correctamente del Sheet
- [ ] Los agentes acceden al brandbook via RAG
- [ ] La landing page muestra los productos del catálogo
- [ ] El CRM registra leads del formulario de la landing

### Bloque 3: Pulir (45 min)

- Unifica la estética visual de todos los assets
- Completa cualquier componente pendiente
- Genera assets extra si hay tiempo (renders adicionales, copies extra)

### Bloque 4: Preparar la Presentación (30 min)

Prepara un pitch de 10 minutos con esta estructura:

```
ESTRUCTURA DE LA PRESENTACIÓN (10 min):

1. LA MARCA (1 min)
   - Nombre, propuesta de valor, diferenciación
   
2. EL PRODUCTO (2 min)
   - Los 5 modelos, demo de un render generado con IA
   - Mostrar lookbook animado (fragmento de 15 seg)

3. LA ESTRATEGIA (2 min)
   - Buyer persona, posicionamiento
   - Calendario editorial, canales

4. LA TECNOLOGÍA (3 min)
   - Demo live: ejecutar un pipeline de n8n
   - Demo live: preguntarle algo al agente ArtBot o SoporteBot  
   - Mostrar la landing page

5. LOS NÚMEROS (1 min)
   - Inversión estimada
   - ROI de la automatización (horas ahorradas)
   - Proyección de ingresos

6. CIERRE (1 min)
   - Visión a 12 meses
   - Qué falta para lanzamiento real
```

---

## 🚀 Entregable PFC — Clase 29

> 📦 **MVP completo organizado**

### Estructura de entrega

```
PFC_FINAL_[NombreMarca]/
│
├── 01_marca/
│   ├── brandbook.pdf
│   ├── logo/ (variaciones)
│   └── paleta_tipografia.md
│
├── 02_producto/
│   ├── catalogo_sheet_link.txt
│   ├── renders/
│   │   ├── modelo1/ (3 ángulos × 4K)
│   │   ├── modelo2/
│   │   ├── modelo3/
│   │   ├── modelo4/
│   │   └── modelo5/
│   └── fichas_producto.md
│
├── 03_video/
│   ├── rotaciones/ (5 modelos)
│   ├── lookbook_animado.mp4
│   └── spot_campana/ (3 formatos)
│
├── 04_marketing/
│   ├── estrategia_marca.pdf
│   ├── business_plan.pdf
│   ├── calendario_editorial.xlsx
│   ├── copies_rrss/
│   └── banners_assets/
│
├── 05_tech/
│   ├── n8n_workflows/ (JSONs exportados)
│   ├── agentes_system_prompts/
│   ├── landing_url.txt
│   ├── crm_link.txt
│   └── dashboard_kpis_link.txt
│
├── 06_organizacion/
│   ├── notion_workspace_link.txt
│   ├── sops/
│   └── diagrama_arquitectura.md
│
└── 07_presentacion/
    ├── presentacion_gamma_link.txt
    ├── guion_pitch_10min.md
    └── demo_screenshots/
```

---

## Criterios de Evaluación Final (Clase 30)

| Criterio | Peso | Descripción |
|----------|------|-------------|
| **Calidad Visual** | 20% | Renders, vídeos y lookbook de calidad profesional |
| **Estrategia de Marketing** | 15% | Buyer persona, posicionamiento, calendario editorial coherente |
| **Automatización** | 20% | Pipelines funcionales que demuestran ahorro de tiempo real |
| **Agentes IA** | 15% | Agente(s) funcional(es) con RAG y tools relevantes |
| **Integración** | 15% | Las piezas funcionan juntas como sistema coherente |
| **Presentación** | 15% | Pitch claro, profesional y convincente |

---

## 📎 Recursos de Clase

- [Gamma](https://gamma.app) — Presentaciones con IA
- [Canva](https://canva.com) — Complementar presentación si necesario
- Todos los recursos de clases anteriores
