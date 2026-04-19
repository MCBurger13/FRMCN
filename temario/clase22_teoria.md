---
clase: 22
tipo: teórica
audiencia: conjunta
bloque: 6 — Documentación, Web y Organización
titulo: "Presencia Web con IA — Lovable, Supabase, Vercel y Antigravity"
duracion: "1.5 horas"
practica_asociada: [clase26_practica.md]
---

# Clase 22 · Teórica · Conjunta
# Presencia Web con IA — Lovable, Supabase, Vercel y Antigravity

> *Tu tienda online en un día. Descubre cómo las herramientas no-code e IA te permiten lanzar una web profesional sin escribir una línea de código.*

**Duración estimada:** 1.5 horas

---

## Navegación de la clase

1. [La Web como Eje Central del Negocio](#1-la-web-como-eje-central)
2. [Lovable — Web App con Prompt](#2-lovable)
3. [Supabase — Tu Backend sin Código](#3-supabase)
4. [Vercel — Deploy Instantáneo](#4-vercel)
5. [Antigravity / Figma-to-Code — Del Diseño al Código](#5-antigravity-figma-to-code)
6. [Scraping Inteligente con IA](#6-scraping-inteligente)
7. [Stack Completo: La Arquitectura](#7-stack-completo)
8. [Quiz + PFC](#8-quiz-y-pfc)

---

## Conceptos clave de esta clase

`No-Code` · `Low-Code` · `Full-Stack` · `Frontend` · `Backend` · `Base de Datos` · `API` · `Deploy` · `Hosting` · `CMS` · `Supabase` · `Edge Functions` · `CDN` · `Web Scraping` · `SEO` · `PWA`

---

## 1. La Web como Eje Central del Negocio

### Por qué tu tienda necesita una web propia (no solo Instagram)

| Canal | Control | Datos propios | Conversión | Dependencia |
|-------|---------|---------------|-----------|-------------|
| **Web propia** | ✅ Total | ✅ Todos los analytics | ✅ Optimizable | ❌ No dependes de nadie |
| **Instagram** | ❌ Algoritmo decide | ⚠️ Limitados | ⚠️ Difícil medir | ❌ Cambio de reglas = impacto |
| **Marketplace** | ❌ Sus reglas | ❌ No tuyos | ⚠️ Comisiones 15-30% | ❌ Te pueden expulsar |

> 💡 **Regla D2C:** Tu web es el único canal que controlas al 100%. Las RRSS generan tráfico; la web genera ventas y datos.

---

## 2. Lovable — Web App con Prompt

🔗 [lovable.dev](https://lovable.dev)

### ¿Qué es Lovable?

Lovable es una herramienta que genera aplicaciones web completas a partir de una descripción en lenguaje natural. No necesitas saber programar.

### Flujo de trabajo

```
1. Describe tu web: "Crea una tienda online de zapatos de lujo con..."
2. Lovable genera: diseño + código + funcionalidad
3. Tú editas: ajustas diseño, contenido, funcionalidad
4. Despliegas: con un clic, la web está online
```

### Prompt ejemplo para nuestra tienda

```
Create a luxury shoe e-commerce website with:
- Hero section with full-width video background
- Product catalog with filtering (gender, type, material, color)
- Product detail pages with image gallery, size selector, add to cart
- About Us page with brand story
- Contact form
- Newsletter signup
- Minimal, elegant design with white/cream/gold color palette
- Mobile-first responsive design
- Shopping cart with checkout flow
```

### Limitaciones y cuándo Lovable es suficiente

| Necesidad | ¿Lovable basta? |
|-----------|-----------------|
| Landing page de lanzamiento | ✅ Perfecto |
| Catálogo online sin pago | ✅ Perfecto |
| E-commerce con Stripe/PayPal | ⚠️ Posible pero limitado |
| Web con CRM + BBDD compleja | ❌ Necesitas Supabase + desarrollo |

---

## 3. Supabase — Tu Backend sin Código

🔗 [supabase.com](https://supabase.com)

### ¿Qué es Supabase?

Supabase es una plataforma de backend que proporciona:
- **Base de datos** PostgreSQL (para productos, clientes, pedidos)
- **Autenticación** (login de usuarios)
- **Storage** (almacenar imágenes de producto)
- **Edge Functions** (lógica de servidor)
- **Acceso por API** instantáneo

### Para nuestra tienda de zapatos

```
Supabase como Backend:

Tabla: productos
├── id, nombre, tipo, color, material, precio
├── descripcion_corta, descripcion_larga
├── imagen_url, imagen_gallery[]
├── stock, tallas_disponibles[]
└── created_at, updated_at

Tabla: clientes
├── id, nombre, email, telefono
└── newsletter_subscribed, created_at

Tabla: pedidos
├── id, cliente_id, productos[], total
├── estado (pendiente, pagado, enviado, entregado)
└── created_at, updated_at
```

### Supabase + n8n

Puedes conectar Supabase con n8n para:
- Cuando un nuevo producto se añade a Supabase → generar render con IA → publicar en RRSS
- Cuando un pedido cambia a "enviado" → enviar email de tracking al cliente
- Dashboard en tiempo real de pedidos y stock

---

## 4. Vercel — Deploy Instantáneo

🔗 [vercel.com](https://vercel.com)

### ¿Qué es Vercel?

Vercel es una plataforma de hosting (alojamiento) que pone tu web online en segundos:

1. Conectas tu repositorio de GitHub
2. Vercel detecta tu proyecto automáticamente
3. Cada vez que haces un cambio → se despliega automáticamente
4. Tu web está disponible en una URL pública

### Flujo de desarrollo → producción

```
Lovable genera el código
    ↓
Lo exportas a GitHub
    ↓
Vercel detecta el repositorio
    ↓
Deploy automático en 30 segundos
    ↓
Tu web está live en https://tu-marca.vercel.app
    ↓
Conectas tu dominio custom: www.tumarca.com
```

---

## 5. Antigravity / Figma-to-Code

### Del Diseño al Código sin Programar

Si tu equipo de diseño ya trabaja en Figma, puedes convertir diseños en código funcional:

| Herramienta | Qué hace |
|-------------|----------|
| **Antigravity** | Experimenta con diseños generativos y los convierte en implementaciones web |
| **Locofy** | Convierte diseños de Figma en código React/Next.js |
| **Builder.io** | Visual development platform que conecta diseño con código |

### Flujo Figma → Web

```
1. Diseñas la web en Figma (con renders de zapatos de las clases anteriores)
2. Exportas a código con Locofy/Builder
3. Ajustas la lógica de negocio (catálogo, carrito, pago)
4. Conectas con Supabase (datos) y Stripe (pagos)
5. Despliegas en Vercel
```

---

## 6. Scraping Inteligente con IA

### Monitorizar la competencia automáticamente

Web Scraping = extraer datos de webs públicas de forma automática.

### Casos de uso para la tienda

| Qué scrapear | De dónde | Para qué |
|-------------|---------|---------|
| **Precios de competidores** | Webs de Santoni, Crockett & Jones, etc. | Benchmark de pricing |
| **Tendencias de producto** | Marketplaces de lujo (SSENSE, Net-a-Porter) | Detectar estilos populares |
| **Reviews del sector** | Trustpilot, Google Reviews de competidores | Análisis de sentiment |
| **Contenido RRSS competencia** | Instagram público | Inspiración y benchmark |

### n8n + Scraping

```
[Schedule: cada lunes 7:00]
    ↓
[HTTP Request: acceder a web de competidor]
    ↓
[Code: extraer precios de calzado]
    ↓
[Google Sheets: actualizar tabla de precios competidores]
    ↓
[OpenAI: "Analiza la evolución de precios de {{competidor}} esta semana. 
 ¿Han subido/bajado? ¿Hay ofertas nuevas? ¿Algún producto nuevo?"]
    ↓
[Slack: "📊 Informe semanal de competencia listo"]
```

> ⚠️ **Nota legal:** El scraping de datos públicos es generalmente legal, pero respeta siempre los `robots.txt` y los términos de uso de cada web.

---

## 7. Stack Completo: La Arquitectura

### La Pila Tecnológica de Nuestra Tienda

```
┌─────────────────────────────────────────────────────┐
│                    USUARIOS                          │
│              (web, móvil, RRSS)                      │
└────────────────────┬────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────┐
│              FRONTEND (Lovable/Vercel)               │
│         Web de la tienda — diseño responsive         │
│       Catálogo, ficha producto, carrito, checkout     │
└────────────────────┬────────────────────────────────┘
                     │ API
┌────────────────────▼────────────────────────────────┐
│              BACKEND (Supabase)                      │
│    Base de datos, auth, storage, edge functions       │
└────────────────────┬────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────┐
│           AUTOMATIZACIÓN (n8n)                       │
│  Pipelines: renders, fichas, RRSS, newsletter, CRM   │
└────────────────────┬────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────┐
│                IA (APIs)                             │
│  Gemini, OpenAI, Claude, Freepik, Leonardo, Runway   │
└─────────────────────────────────────────────────────┘
```

---

## 8. Quiz y PFC

### 📝 Quiz de Conocimientos (8 preguntas)

**1.** ¿Qué es Lovable?

- a) Una red social
- b) ✅ Una herramienta que genera aplicaciones web completas a partir de una descripción en lenguaje natural
- c) Un editor de vídeo
- d) Un modelo de IA

**2.** ¿Qué proporciona Supabase?

- a) Solo almacenamiento de archivos
- b) ✅ Base de datos, autenticación, storage y API instantánea (backend completo)
- c) Solo generación de imágenes
- d) Un CMS como WordPress

**3.** ¿Para qué sirve Vercel?

- a) Para diseñar webs
- b) Para generar código
- c) ✅ Para desplegar y alojar webs conectando un repositorio de GitHub con deploy automático
- d) Para editar bases de datos

**4.** ¿Por qué es importante tener una web propia y no depender solo de Instagram?

- a) Porque Instagram es de pago
- b) ✅ Porque la web es el único canal que controlas al 100%: datos propios, sin dependencia de algoritmos ni riesgo de cambio de reglas
- c) Porque las webs cargan más rápido
- d) Porque Instagram no permite vender

**5.** ¿Qué es web scraping?

- a) Diseñar webs con IA
- b) ✅ Extraer datos de webs públicas de forma automática (precios de competidores, tendencias, reviews)
- c) Borrar contenido de Internet
- d) Optimizar el SEO

**6.** El stack tecnológico de nuestra tienda tiene 4 capas. ¿Cuáles son?

- a) HTML, CSS, JavaScript, Python
- b) ✅ Frontend (Lovable/Vercel) + Backend (Supabase) + Automatización (n8n) + IA (APIs)
- c) Instagram, LinkedIn, TikTok, Email
- d) Diseño, Marketing, Ventas, Logística

**7.** ¿Cómo conectarías Supabase con n8n?

- a) No se pueden conectar
- b) ✅ n8n tiene nodo nativo de Supabase: puede leer/escribir en la BBDD, trigger por nuevos registros, etc.
- c) Solo con código Python
- d) A través de Zapier

**8.** Si tu equipo de diseño ya trabaja en Figma, ¿cómo puedes convertir esos diseños en web?

- a) Reimplementar todo manualmente
- b) ✅ Usar herramientas como Locofy o Builder.io que convierten diseños Figma en código funcional
- c) Capturas de pantalla del diseño
- d) Figma ya es una web

---

### 🚀 PFC — Preparación para Bloques 7-8

1. **Crear cuentas** en Lovable y Vercel (si no las tienes)
2. **Generar una landing page básica** con Lovable usando el prompt de ejemplo
3. **Explorar Supabase** — crear un proyecto y una tabla "productos"

> 📦 **Entregable:** Landing page generada con Lovable + tabla de productos en Supabase.

---

## 📎 Recursos Adicionales

- [Lovable](https://lovable.dev) — Web apps con IA
- [Supabase](https://supabase.com) — Backend as a Service
- [Vercel](https://vercel.com) — Deploy y hosting
- [Locofy](https://locofy.ai) — Figma to Code
- [Builder.io](https://builder.io) — Visual development
