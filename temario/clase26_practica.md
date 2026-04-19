---
clase: 26
tipo: práctica
audiencia: marketing
bloque: 7 — Agentes IA
titulo: "Landing, CRM y Newsletter — El Stack de Marketing Automatizado"
duracion: "2 horas"
teoria_previa: [clase22_teoria.md, clase23_teoria.md, clase24_teoria.md]
pfc_entregable: "Landing page funcional + CRM básico + agente de soporte"
---

# Clase 26 · Práctica · 📈 Marketing
# Landing, CRM y Newsletter — El Stack de Marketing Automatizado

> *Lanza tu presencia digital completa. Landing page con Lovable, CRM en Supabase, y un agente de soporte que atiende a tus clientes 24/7.*

**Duración estimada:** 2 horas  
**Prerrequisito:** Clases 22-24 (Web + Agentes)

---

## Objetivos de la sesión

- Crear una landing page de lanzamiento con Lovable
- Configurar un mini-CRM en Supabase / Google Sheets
- Construir un agente de soporte al cliente con n8n
- Implementar un flujo de captación de leads completo

---

## Material necesario

- [ ] Cuenta en **Lovable** (lovable.dev)
- [ ] Cuenta en **Supabase** o Google Sheets
- [ ] **n8n** con credenciales configuradas
- [ ] Renders y assets de clases anteriores
- [ ] Copy de la campaña (de Clase 11)

---

## Ejercicio 1: Landing Page de Lanzamiento con Lovable
**⏱️ 35 minutos**

### Instrucciones

Crea la landing page de lanzamiento de tu marca de zapatos.

#### Prompt para Lovable

```
Crea una landing page de lanzamiento para una marca de zapatos de lujo 
llamada [NOMBRE_MARCA].

SECCIONES:
1. HERO: Imagen fullscreen de fondo (placeholder), headline "Redefining 
   Luxury Footwear", sub-headline, botón CTA "Discover the Collection"
2. ABOUT: Historia de la marca en 3 líneas, valores (artesanía, diseño, 
   sostenibilidad)
3. COLECCIÓN: Grid de 5 productos con imagen, nombre, material y precio.
   Hover effect que muestra botón "View Details"
4. CRAFTSMANSHIP: Sección de dos columnas, texto + imagen sobre el proceso 
   artesanal
5. NEWSLETTER: Formulario de suscripción con email + nombre. 
   Headline "Join the Inner Circle" + beneficio de suscripción
6. FOOTER: Links, RRSS, contacto, copyright

DISEÑO:
- Color palette: fondo crema claro (#FDFAF6), acentos dorado (#C5A55A), 
  texto negro (#1A1A1A)
- Tipografía: elegante serif para títulos, sans-serif para body
- Responsive mobile-first
- Animaciones sutiles de scroll
- Minimalista, espaciado amplio, feel premium
```

#### Personalizar con tus assets

1. Sustituye las imágenes placeholder por tus renders de zapatos
2. Actualiza el copy con los textos de tu campaña (Clase 11)
3. Ajusta colores y tipografía al brandbook

#### Conectar el formulario de newsletter

El formulario debe enviar datos a tu CRM (Ejercicio 2):
- Si Lovable lo permite: conectar directamente
- Si no: el formulario envía a un Webhook de n8n

---

## Ejercicio 2: Mini-CRM en Supabase / Sheets
**⏱️ 25 minutos**

### Instrucciones

Crea la base de datos de clientes y leads.

#### Opción A: Google Sheets (simple)

Crea un Sheet "CRM" con 3 hojas:

**Hoja 1: Leads**

| Fecha | Nombre | Email | Fuente | Status | Notas |
|-------|--------|-------|--------|--------|-------|
| | | | Landing/RRSS/Evento | Nuevo/Contactado/Convertido/Perdido | |

**Hoja 2: Clientes**

| ID | Nombre | Email | Teléfono | Primera Compra | Total Gastado | Segmento |
|----|--------|-------|---------|---------------|---------------|----------|

**Hoja 3: Interacciones**

| Fecha | Cliente/Lead | Canal | Tipo | Resumen | Agente |
|-------|-------------|-------|------|---------|--------|

#### Opción B: Supabase (avanzado)

```sql
-- Tabla de leads
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  fuente TEXT DEFAULT 'landing',
  status TEXT DEFAULT 'nuevo',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de interacciones
CREATE TABLE interacciones (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES leads(id),
  canal TEXT,
  tipo TEXT,
  resumen TEXT,
  agente TEXT DEFAULT 'bot',
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Workflow: Lead Capture

```
[Webhook: recibe datos del formulario de la landing]
    ↓
[IF: ¿email ya existe en CRM?]
    ├── SÍ → [Actualizar status / añadir interacción]
    └── NO → [Crear nuevo lead en CRM]
    ↓
[Gmail: enviar email de bienvenida personalizado]
    ↓
[Slack: "🔔 Nuevo lead: {{nombre}} — {{fuente}}"]
```

---

## Ejercicio 3: Agente de Soporte al Cliente
**⏱️ 35 minutos**

### Instrucciones

Construye un agente en n8n que atienda consultas de clientes.

#### System Prompt del Agente de Soporte

```
# IDENTIDAD
Eres el asistente virtual de [MARCA], una marca de zapatos de lujo.

# OBJETIVO
Atender consultas de clientes potenciales y actuales con excelencia,
reflejando los valores de la marca.

# PERSONALIDAD
- Tono: cálido, sofisticado, servicial (como un personal shopper de lujo)
- Idioma: español por defecto, inglés si el cliente escribe en inglés
- NUNCA uses exclamaciones excesivas ni emojis

# CONOCIMIENTO
Conoces:
- El catálogo completo de productos (via tool de Sheets)
- Las políticas de la marca (via RAG)
- Información de envíos y devoluciones

# TOOLS DISPONIBLES
1. Catálogo (Sheets): buscar productos por tipo, color, material, precio
2. CRM (Sheets/Supabase): registrar interacción
3. FAQ (RAG): buscar en documentación de políticas
4. Email (Gmail): escalar a equipo humano

# PROCESO
1. Saluda cordialmente
2. Identifica la necesidad del cliente
3. Responde usando tus tools si necesitas datos
4. Si la consulta es de COMPRA → proporciona info + link a la web
5. Si la consulta es de SOPORTE → busca en FAQ, si no encuentras → escala
6. Registra SIEMPRE la interacción en el CRM

# RESTRICCIONES
- NUNCA inventes precios, tallas o disponibilidad
- NUNCA prometas descuentos que no existan
- Si no puedes resolver → "Permíteme conectarte con nuestro equipo"
- SIEMPRE registra la conversación en el CRM
- Identifícate como asistente virtual, nunca finjas ser humano
```

#### Conectar Tools al Agente

| Tool | Nodo | Propósito |
|------|------|-----------|
| **Catálogo** | Google Sheets (Read) | Buscar productos |
| **CRM** | Google Sheets (Write) | Registrar interacciones |
| **FAQ** | Vector Store (RAG) | Buscar en políticas (envíos, devoluciones, tallas) |
| **Escalar** | Gmail | Enviar email al equipo cuando no puede resolver |

#### Probar con 4 escenarios

```
1. "¿Tenéis mocasines de hombre en azul?" 
   → Consulta catálogo, responde con producto(s) + precio

2. "Hice un pedido hace 5 días y no he recibido nada"
   → Busca en FAQ (tiempos de envío), da info estándar, ofrece escalar

3. "¿Cuál es vuestra política de devoluciones?"
   → RAG busca en FAQ → responde con la política exacta

4. "Quiero hablar con una persona real"
   → Registra en CRM, envía email al equipo, responde con amabilidad
```

---

## Ejercicio 4: Flujo E2E — Del Lead a la Conversión
**⏱️ 25 minutos**

### Instrucciones

Conecta todos los componentes en un flujo completo:

```
FASE 1: CAPTACIÓN
[Landing Page] → [Formulario newsletter] → [Webhook n8n] 
→ [CRM: nuevo lead] → [Email de bienvenida]

FASE 2: NURTURING
[Schedule: semanal] → [Leer leads nuevos del CRM] 
→ [IA genera email personalizado según perfil]
→ [Gmail: enviar follow-up] → [CRM: actualizar status]

FASE 3: SOPORTE
[Chat/Webhook] → [Agente de Soporte] → [Responde + registra]
→ [IF no resuelto → Escalar a humano]

FASE 4: CONVERSIÓN
[CRM: lead con status "Interesado"] → [Email con oferta exclusiva]
→ [CRM: actualizar a "Convertido" si compra]
```

Implementa al menos las Fases 1 y 3 como workflows funcionales.

---

## 🚀 Entregable PFC — Clase 26

> 📦 **Stack de marketing digital completo**

### Checklist de entrega

- [ ] **Landing page** creada con Lovable
  - Con renders propios, copy de marca, formulario funcional

- [ ] **CRM** funcional (Sheets o Supabase)
  - Tabla de leads con datos de ejemplo
  - Flujo de captación desde la landing

- [ ] **Agente de Soporte** funcional en n8n
  - System Prompt completo
  - 3+ tools conectados
  - 4 escenarios probados

- [ ] **Flujo E2E** — al menos fases 1+3 funcionales

### Formato de entrega

```
PFC_Clase26_[NombreMarca]/
├── landing/
│   ├── url_lovable.txt
│   └── capturas_desktop_mobile/
├── crm/
│   ├── link_sheets_o_supabase.txt
│   └── estructura_bbdd.md
├── n8n/
│   ├── workflow_lead_capture.json
│   ├── workflow_agente_soporte.json
│   └── capturas_pruebas/
└── nota_aprendizaje.md
```

---

## Criterios de Evaluación

| Criterio | Peso | Excelente (5) | Correcto (3) | Insuficiente (1) |
|----------|------|--------------|--------------|-------------------|
| **Landing page** | 25% | Profesional, con assets propios y formulario funcional | Funcional pero con placeholders | No funcional |
| **CRM** | 25% | Estructura completa, flujo de captación automático | Estructura correcta, ingreso manual | Sin CRM |
| **Agente de Soporte** | 30% | 4 escenarios exitosos, RAG + tools + escalación | 2-3 escenarios, tools parciales | Agente no funciona |
| **Flujo E2E** | 20% | Fases 1+3 completamente funcionales | 1 fase funcional | Sin flujo E2E |

---

## 📎 Recursos de Clase

- [Lovable](https://lovable.dev) — Landing pages con IA
- [Supabase](https://supabase.com) — Backend / CRM
- [n8n AI Agent](https://docs.n8n.io) — Agente con tools
