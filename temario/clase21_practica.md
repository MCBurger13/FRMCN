---
clase: 21
tipo: práctica
audiencia: marketing
bloque: 6 — Documentación, Web y Organización
titulo: "Business Plan, Campañas y Organización del Equipo"
duracion: "2 horas"
teoria_previa: clase20_teoria.md
pfc_entregable: "Business plan IA + workspace organizado + 3 SOPs"
---

# Clase 21 · Práctica · 📈 Marketing
# Business Plan, Campañas y Organización del Equipo

> *Del producto al plan de negocio. Hoy estructuras toda la operación: business plan generado con IA, workspace del equipo y procesos documentados.*

**Duración estimada:** 2 horas  
**Prerrequisito:** Clase 20 (Documentación y Organización)

---

## Objetivos de la sesión

- Generar un business plan completo con Deep Research + IA
- Estructurar el workspace de Notion/Trello para la operación de la tienda
- Crear SOPs operativos para los procesos clave
- Diseñar el dashboard de KPIs de la marca

---

## Ejercicio 1: Business Plan con IA
**⏱️ 40 minutos**

### Instrucciones

Usa Deep Research + Gemini/Claude para generar un business plan de tu tienda.

#### 1.1. Investigación de mercado (Deep Research)

```
Lanza un Deep Research: "Crea un análisis de mercado completo para 
una nueva marca D2C de zapatos de lujo en [España/Europa]:

1. Tamaño del mercado y crecimiento proyectado 2025-2030
2. Segmentación: lujo accesible vs ultra-lujo vs premium
3. Top 10 competidores D2C con pricing, posicionamiento y canales
4. Perfil del cliente ideal (demographics + psychographics)
5. Tendencias de consumo de lujo post-COVID
6. Canales de venta más efectivos para calzado de lujo D2C
7. Barreras de entrada y factores de éxito
8. Estimación de inversión inicial"
```

#### 1.2. Business plan completo (Claude/Gemini)

```
Con la investigación anterior como base, genera un business plan ejecutivo:

SECCIONES:
1. RESUMEN EJECUTIVO (1 página)
2. PROBLEMA Y OPORTUNIDAD
3. SOLUCIÓN — Nuestra Marca
   - Propuesta de valor
   - Diferenciación
   - Los 5 modelos iniciales (con precios)
4. MERCADO OBJETIVO
   - Buyer persona primario y secundario
5. MODELO DE NEGOCIO
   - Revenue streams
   - Pricing strategy (cost + markup)
   - Canales de venta
6. ESTRATEGIA DE MARKETING
   - Funnel de adquisición
   - Calendario del primer trimestre
   - Budget de marketing
7. OPERACIONES
   - Equipo necesario
   - Proveedores y producción
   - Logística y fulfillment
8. FINANZAS
   - Inversión inicial estimada
   - Proyección de ingresos 12 meses
   - Break-even point
   - P&L proyectado
9. ROADMAP — 12 meses
10. RIESGOS Y MITIGACIÓN

Formato: documento ejecutivo, con tablas y datos cuantitativos.
```

---

## Ejercicio 2: Workspace del Equipo en Notion
**⏱️ 30 minutos**

### Instrucciones

Construye el workspace completo de la marca en Notion.

#### Páginas a crear:

1. **Dashboard Principal** — Vista general con enlaces a todo
2. **Wiki de Marca** — brandbook, tono, paleta, tipografía
3. **Catálogo de Producto** — Base de datos con renders, fichas, precios
4. **Calendario Editorial** — Vista por mes con plataforma, tipo, copy
5. **Pipeline de Campañas** — Kanban con fases
6. **SOPs** — Procesos documentados
7. **KPIs** — Enlace al dashboard de Sheets/Looker Studio

#### Para el Catálogo de Producto en Notion:

Crea una base de datos con estas propiedades:

| Propiedad | Tipo | Valores |
|-----------|------|---------|
| Nombre del modelo | Title | Texto libre |
| Imagen | Files | Render del producto |
| Tipo | Select | Oxford, Stiletto, Mocasín, Boot, Sneaker |
| Género | Select | Hombre, Mujer, Unisex |
| Material | Select | Calfskin, Suede, Patent, Nappa |
| Color | Select | Cognac, Negro, Azul, Burgundy, Blanco |
| Precio | Number | € |
| Status | Select | Concept, Render, Ficha, Aprobado, Publicado |
| Temporada | Select | SS26, AW26, Permanente |

---

## Ejercicio 3: SOPs Operativos
**⏱️ 25 minutos**

### Instrucciones

Genera 3 SOPs completos con IA y publícalos en el workspace.

#### SOP 1: "Publicar un nuevo producto en el e-commerce"

```
Genera un SOP profesional con estos campos:
- Objetivo
- Responsable: Product Manager
- Tiempo estimado: 30 min
- Pasos: desde que el render está aprobado hasta que está live en la web
- QA checklist: 10 puntos a verificar antes de publicar
- Herramientas necesarias: Notion, Shopify/Web, Google Drive
```

#### SOP 2: "Crear y publicar un post en Instagram"

```
- Pasos: desde la idea en el calendario editorial hasta la publicación y medición
- Incluir: cómo usar el Gem Copywriter, formatos, horarios óptimos, hashtags
```

#### SOP 3: "Gestionar una consulta de cliente"

```
- Pasos: desde que llega el formulario hasta el cierre
- Incluir: clasificación (compra/soporte/colaboración), tiempos de respuesta, escalación
```

---

## Ejercicio 4: Dashboard de KPIs
**⏱️ 25 minutos**

### Instrucciones

Diseña el dashboard maestro de la marca en Google Sheets (con opción Looker Studio).

#### Métricas a incluir

**Marketing:**
- Seguidores por plataforma (crecimiento semanal/mensual)
- Engagement rate por plataforma
- Top 5 posts del mes
- CTR de email marketing
- Coste por lead (si hay inversión publicitaria)

**Producto/Diseño:**
- Renders generados este mes
- Productos en catálogo (total y nuevos)
- Pipeline de diseño (concepto → render → aprobado)

**Negocio:**
- Visitas a la web
- Tasa de conversión
- Ticket medio
- Revenue del mes
- Leads en pipeline

#### Template rápido en Sheets

Crea 3 hojas:
1. **Datos** — Input manual o automático (n8n)
2. **Cálculos** — Fórmulas de KPIs
3. **Dashboard** — Gráficos y resumen visual

---

## 🚀 Entregable PFC — Clase 21

> 📦 **Business plan + workspace + SOPs + dashboard**

### Checklist de entrega

- [ ] **Business plan ejecutivo** — Documento completo (10 secciones)
- [ ] **Workspace de Notion** — 7 secciones con contenido real
- [ ] **Base de datos de catálogo** — Mínimo 5 productos con todas las propiedades
- [ ] **3 SOPs operativos** — Publicados en Notion
- [ ] **Dashboard de KPIs** — En Google Sheets con datos de ejemplo

### Formato de entrega

```
PFC_Clase21_[NombreMarca]/
├── business_plan/
│   ├── business_plan_completo.pdf
│   └── investigacion_mercado.pdf
├── workspace/
│   └── link_notion.txt (URL del workspace)
├── sops/
│   ├── sop_nuevo_producto.md
│   ├── sop_publicar_instagram.md
│   └── sop_gestionar_consulta.md
└── dashboard/
    └── link_google_sheet.txt
```

---

## Criterios de Evaluación

| Criterio | Peso | Excelente (5) | Correcto (3) | Insuficiente (1) |
|----------|------|--------------|--------------|-------------------|
| **Business plan** | 30% | Completo, con datos reales de mercado y proyecciones financieras | Estructura correcta pero datos genéricos | Incompleto o superficial |
| **Workspace** | 25% | 7 secciones con contenido real, bases de datos funcionales | Estructura correcta, contenido parcial | Solo estructura vacía |
| **SOPs** | 25% | 3 SOPs detallados, accionables, con QA checklist | SOPs funcionales pero genéricos | Sin SOPs o incompletos |
| **Dashboard** | 20% | Dashboard con métricas reales y gráficos | Estructura con datos de ejemplo | Sin dashboard |

---

## 📎 Recursos de Clase

- [Notion](https://notion.so) — Workspace
- [Google Sheets](https://sheets.google.com) — Dashboard
- [Looker Studio](https://lookerstudio.google.com) — Visualización
- [Claude](https://claude.ai) — Business plan y SOPs
- [Perplexity](https://perplexity.ai) — Deep Research de mercado
