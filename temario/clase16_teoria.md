---
clase: 16
tipo: teórica
audiencia: conjunta
bloque: 5 — Automatización a Escala
titulo: "Automatización IA — De la Tarea Manual al Flujo Inteligente"
duracion: "1.5 - 2 horas"
practica_asociada: [clase18_practica.md, clase19_practica.md]
---

# Clase 16 · Teórica · Conjunta
# Automatización IA — De la Tarea Manual al Flujo Inteligente

> *Deja de hacer cosas que una máquina puede hacer por ti. Aprende a diseñar flujos de trabajo que se ejecutan solos, mientras tú tomas decisiones estratégicas.*

**Duración estimada:** 1.5 – 2 horas

---

## Navegación de la clase

1. [El Coste de lo Manual](#1-el-coste-de-lo-manual)
2. [Pensamiento de Flujos (Flow Thinking)](#2-pensamiento-de-flujos)
3. [n8n — Tu Centro de Operaciones](#3-n8n)
4. [Anatomía de un Flujo de Automatización](#4-anatomía-de-un-flujo)
5. [Los Nodos Esenciales](#5-los-nodos-esenciales)
6. [Integraciones Clave para Diseño y Marketing](#6-integraciones-clave)
7. [Patrones de Automatización](#7-patrones-de-automatización)
8. [Quiz + PFC](#8-quiz-y-pfc)

---

## Conceptos clave de esta clase

`Workflow` · `Trigger` · `Node` · `Webhook` · `Cron` · `Nodo de IA` · `HTTP Request` · `n8n` · `Expresiones` · `Branching (IF/Switch)` · `Loop` · `Error Handling` · `Credenciales` · `API` · `JSON`

---

## 1. El Coste de lo Manual

### Auditoría de tiempo: ¿Dónde pierdes horas?

| Tarea manual repetitiva | Frecuencia | Tiempo/vez | Tiempo/mes | ¿Automatizable? |
|------------------------|-----------|-----------|------------|-----------------|
| Redimensionar imágenes para 4 plataformas RRSS | 5×/semana | 15 min | 5 h | ✅ 100% |
| Crear fichas de producto para el e-commerce | 10×/mes | 20 min | 3.3 h | ✅ 90% |
| Publicar posts en Instagram desde carpeta Drive | 7×/semana | 10 min | 4.7 h | ✅ 100% |
| Generar informe semanal de RRSS | 1×/semana | 45 min | 3 h | ✅ 95% |
| Responder emails de clientes con FAQ | Diario | 30 min | 10 h | ✅ 80% |
| Enviar catálogo actualizado al equipo | 2×/mes | 25 min | 0.8 h | ✅ 100% |
| **TOTAL MENSUAL** | | | **~27 h** | |

> 💰 **Cálculo ROI:** Si automatizas el 80% de estas tareas, recuperas ~22 horas/mes por persona. En un equipo de 5 personas = **110 horas/mes** = casi **3 semanas laborales** recuperadas.

### La regla de las 3R de la automatización

| R | Significado | Pregunta clave |
|---|------------|----------------|
| **Repetitiva** | ¿Se hace más de 2 veces al mes? | Si la respuesta es sí → candidata |
| **Reglada** | ¿Tiene reglas claras (si X entonces Y)? | Si se puede describir con un diagrama → automatizable |
| **Robótica** | ¿Requiere creatividad humana? | Si NO requiere juicio creativo → automatizar sin dudar |

---

## 2. Pensamiento de Flujos (Flow Thinking)

### De "hacer cosas" a "diseñar sistemas"

El salto mental más importante del curso: dejar de pensar en tareas individuales y empezar a pensar en **sistemas que ejecutan tareas por ti**.

```
ANTES (Pensamiento de tarea):
"Tengo que redimensionar esta imagen, subirla a Drive, escribir el copy, 
publicar en Instagram y luego en LinkedIn"

DESPUÉS (Pensamiento de flujo):
"Cuando una imagen nueva aparece en la carpeta de Drive, automáticamente:
1. Se redimensiona a 4 formatos
2. Se genera el copy con mi Gem Copywriter
3. Se publica en Instagram y LinkedIn
4. Se envía un resumen por email"
```

### Diagrama de un flujo típico

```
┌─────────────┐    ┌─────────────┐    ┌──────────────┐    ┌───────────┐
│  TRIGGER     │───▶│ PROCESAR    │───▶│  DECIDIR     │───▶│  ACTUAR   │
│              │    │             │    │              │    │           │
│ "Algo pasa"  │    │ Transformar │    │ IF/Switch    │    │ Enviar    │
│ (nuevo file, │    │ datos,      │    │ ¿Qué tipo    │    │ resultado │
│  hora, email)│    │ llamar IA,  │    │  de archivo? │    │ al destino│
│              │    │ formatear   │    │ ¿Qué canal?  │    │           │
└─────────────┘    └─────────────┘    └──────────────┘    └───────────┘
```

---

## 3. n8n — Tu Centro de Operaciones

### ¿Qué es n8n?

🔗 [n8n.io](https://n8n.io)

n8n es una plataforma de automatización visual de flujos de trabajo (como Zapier o Make, pero más potente y con la opción de ser auto-hospedada para privacidad total).

### ¿Por qué n8n y no Zapier/Make?

| Criterio | n8n | Zapier | Make |
|----------|-----|--------|------|
| **Interfaz visual** | ✅ Nodos y conexiones | ✅ Pasos lineales | ✅ Módulos |
| **Nodos de IA nativos** | ✅ OpenAI, Claude, Gemini | ⚠️ Limitado | ⚠️ Limitado |
| **Self-hosted** (privacidad) | ✅ Puedes instalarlo en tu servidor | ❌ Solo cloud | ❌ Solo cloud |
| **Código custom** | ✅ JavaScript/Python dentro de nodos | ❌ | ⚠️ Limitado |
| **Precio** | ✅ Plan gratis generoso / open source | ❌ Caro a escala | ⚠️ Medio |
| **Complejidad de flujos** | ✅ Branching, loops, sub-workflows | ⚠️ Lineal | ✅ Bueno |

> 🏆 **Veredicto:** n8n es la herramienta elegida para este curso porque combina potencia profesional, interfaz visual intuitiva, nodos de IA nativos y la opción de auto-hospedarlo (dato de privacidad crucial para empresas).

### Interfaz de n8n

```
┌──────────────────────────────────────────────────────────────┐
│  n8n — Workflow Editor                               [▶ Run] │
│──────────────────────────────────────────────────────────────│
│                                                              │
│  ┌──────────┐     ┌──────────┐     ┌──────────┐            │
│  │ Trigger  │────▶│ Node 1   │────▶│ Node 2   │────▶ ...   │
│  │ (Webhook)│     │ (OpenAI) │     │ (Gmail)  │            │
│  └──────────┘     └──────────┘     └──────────┘            │
│                         │                                    │
│                    ┌────▼────┐                               │
│                    │ Node 3  │                               │
│                    │ (Sheets)│                               │
│                    └─────────┘                               │
│                                                              │
│  Panel de propiedades | Input/Output | Ejecución | Logs      │
└──────────────────────────────────────────────────────────────┘
```

---

## 4. Anatomía de un Flujo de Automatización

### Los 5 componentes de todo workflow

| Componente | Función | Ejemplo |
|-----------|---------|---------|
| **1. Trigger** | Lo que inicia el flujo | Nuevo archivo en Drive / Hora programada / Webhook |
| **2. Input** | Datos que entran al flujo | Imagen, texto, email, formulario |
| **3. Procesamiento** | Transformación de datos | Llamar a IA, formatear, calcular |
| **4. Decisión** | Branching condicional | IF imagen > 1MB → comprimir ELSE → continuar |
| **5. Output** | Resultado final + destino | Publicar en RRSS, enviar email, guardar en hoja |

### Ejemplo real: Flujo "Nuevo Zapato → Catálogo Completo"

```
TRIGGER: Nueva imagen aparece en Google Drive /renders/nuevos/

    ↓

NODE 1: Google Drive — Descargar imagen
    ↓
NODE 2: Image Resize — Crear 4 versiones (1080x1080, 1920x600, 1200x628, 800x800)
    ↓
NODE 3: OpenAI (GPT) — Generar ficha de producto
         Prompt: "Describe este zapato para e-commerce en tono de lujo..."
    ↓
NODE 4: Google Sheets — Añadir fila con datos del producto
    ↓
NODE 5: IF — ¿Es hora de publicar? (entre 10:00 y 14:00)
    ↓                    ↓
   SÍ                   NO
    ↓                    ↓
NODE 6a: Instagram    NODE 6b: Programar para
         — Publicar              mañana 10:00
    ↓
NODE 7: Gmail — Enviar resumen al equipo
```

---

## 5. Los Nodos Esenciales

### Triggers (Iniciadores)

| Nodo | Qué hace | Uso típico |
|------|---------|------------|
| **Webhook** | Se activa cuando recibe una llamada HTTP | Formularios web, integraciones externas |
| **Cron / Schedule** | Se ejecuta a horas programadas | Informes diarios, publicaciones programadas |
| **Google Drive Trigger** | Se activa con carpeta cambiada | Detectar nuevos renders subidos por el equipo |
| **Email Trigger (IMAP)** | Se activa con nuevo email | Respuestas automáticas a clientes |
| **Manual** | Se ejecuta manualmente (clic) | Pruebas y ejecuciones puntuales |

### Procesamiento de Datos

| Nodo | Qué hace | Uso típico |
|------|---------|------------|
| **Set** | Asigna o modifica valores | Preparar datos para el siguiente nodo |
| **Code** | Ejecuta JavaScript/Python custom | Transformaciones complejas de datos |
| **IF** | Bifurca el flujo según condición | "Si es imagen → ruta A, si es texto → ruta B" |
| **Switch** | Múltiples bifurcaciones | "Según plataforma: IG, LinkedIn, Twitter, Email" |
| **Merge** | Une dos flujos en uno | Combinar datos de diferentes fuentes |
| **Loop Over Items** | Recorre una lista | Procesar 20 imágenes una por una |
| **HTTP Request** | Llama a cualquier API | Conectar con cualquier servicio web |

### Nodos de IA (el superpoder de n8n)

| Nodo | Qué hace | Uso típico |
|------|---------|------------|
| **OpenAI** | Llama a GPT para texto/imagen | Generar copies, fichas, traducciones |
| **Anthropic (Claude)** | Llama a Claude | Análisis largo, redacción natural |
| **Google Gemini** | Llama a Gemini | Análisis multimodal (imagen + texto) |
| **AI Agent** | Agente con tools | Agente que decide qué hacer según el contexto |
| **Sentiment Analysis** | Analiza sentimiento | Monitorizar menciones de marca (positivo/negativo) |

### Destinos (Outputs)

| Nodo | Qué hace | Uso típico |
|------|---------|------------|
| **Google Sheets** | Lee/escribe en hojas de cálculo | Base de datos de productos, KPIs |
| **Google Drive** | Sube/baja archivos | Almacenar renders procesados |
| **Gmail** | Envía emails | Resúmenes, alertas, newsletters |
| **Slack** | Envía mensajes al equipo | Notificaciones internas |
| **Telegram** | Envía mensajes | Alertas móviles |
| **Notion** | Actualiza bases de datos | Gestión de proyectos |
| **Supabase** | Lee/escribe en BBDD PostgreSQL | Backend de la tienda web |

---

## 6. Integraciones Clave para Diseño y Marketing

### Para el equipo de Diseño

| Flujo | Trigger | Proceso | Output |
|-------|---------|---------|--------|
| **Catálogo automático** | Nuevo render en Drive | IA genera ficha + resize | Sheets + Drive organizado |
| **Revisión de marca** | Upload de imagen | IA verifica coherencia con brandbook | Slack alert si hay inconsistencia |
| **Pipeline de renders** | Lista de modelos en Sheet | n8n llama API de generación en batch | Carpeta de renders organizada |

### Para el equipo de Marketing

| Flujo | Trigger | Proceso | Output |
|-------|---------|---------|--------|
| **Publicación RRSS** | Hora programada (Cron) | Leer post + imagen de Sheet → formatear | Publicar en IG/LinkedIn |
| **Newsletter semanal** | Viernes 9:00 | Recopilar novedades de la semana | Enviar email a suscriptores |
| **Informe de competencia** | Lunes 8:00 | Scraping + análisis IA | Informe en Slack + Sheets |
| **Formulario de contacto** | Webhook desde la web | Clasificar con IA + respuesta auto | Gmail + CRM |

---

## 7. Patrones de Automatización

### Patrón 1: Trigger → Procesar → Notificar

El patrón más simple. Algo sucede, se procesa y se avisa.

```
[Nuevo email de cliente] → [IA clasifica: consulta/queja/pedido] → [Slack: "#soporte: Nueva consulta"]
```

### Patrón 2: Scheduled → Batch → Distribute

Procesamiento masivo programado.

```
[Cada lunes 9:00] → [Leer 20 productos de Sheet] → [Generar 20 copies con IA] → [Guardar en Sheet]
```

### Patrón 3: Input → Branch → Multi-output

Un input, múltiples destinos según condición.

```
[Nueva imagen] → [IF formato=foto → Instagram]
                  [IF formato=banner → Web]
                  [IF formato=story → Instagram Stories]
```

### Patrón 4: Feedback Loop

El output alimenta de vuelta al flujo.

```
[Publicar post] → [Esperar 24h] → [Recoger métricas] → [IA analiza rendimiento] 
→ [Ajustar próximo post según lo aprendido]
```

### Patrón 5: Human-in-the-Loop

Automatización con aprobación humana en un paso crítico.

```
[IA genera copy] → [Enviar a Slack para aprobación] → [Humano aprueba/rechaza] 
→ [Si aprueba → publicar] [Si rechaza → regenerar con feedback]
```

> ⭐ **Recomendación para empresas:** Empieza SIEMPRE con el patrón 5 (human-in-the-loop) para tareas de cara al cliente. La IA propone, el humano dispone. Cuando la confianza sea alta, puedes ir eliminando el paso de aprobación.

---

## 8. Quiz y PFC

### 📝 Quiz de Conocimientos (10 preguntas)

**1.** ¿Cuáles son las 3R de la automatización?

- a) Rápido, Rentable, Resultados
- b) ✅ Repetitiva, Reglada, Robótica
- c) Research, Report, Respond
- d) Run, React, Return

**2.** ¿Qué es un "Trigger" en un workflow?

- a) Un botón de pausa
- b) ✅ El evento que inicia la ejecución del flujo (nuevo archivo, hora, webhook, email)
- c) El resultado final del workflow
- d) Un tipo de error

**3.** ¿Por qué elegimos n8n sobre Zapier para este curso?

- a) Porque es más bonito visualmente
- b) ✅ Nodos de IA nativos, opción self-hosted para privacidad, código custom, flujos complejos (branching/loops)
- c) Porque es el más barato
- d) Porque solo funciona con Google

**4.** ¿Qué nodo usarías para que un flujo se ejecute todos los lunes a las 9:00?

- a) Webhook
- b) Manual Trigger
- c) ✅ Cron / Schedule Trigger
- d) Email Trigger

**5.** ¿Qué hace el nodo "IF" en n8n?

- a) Genera imágenes
- b) ✅ Bifurca el flujo en dos caminos según una condición (verdadero/falso)
- c) Envía emails
- d) Conecta con Google Drive

**6.** ¿Qué es un "Webhook"?

- a) Un sitio web especial
- b) ✅ Una URL que, cuando recibe una llamada HTTP, activa el flujo automáticamente
- c) Un hook de pesca digital
- d) Un navegador web

**7.** ¿Qué patrón de automatización incluye aprobación humana antes de actuar?

- a) Trigger → Procesar → Notificar
- b) Scheduled → Batch → Distribute
- c) Feedback Loop
- d) ✅ Human-in-the-Loop

**8.** Para generar fichas de producto con IA desde n8n, ¿qué nodo usarías?

- a) Google Sheets
- b) HTTP Request
- c) ✅ OpenAI / Claude / Gemini (nodos de IA nativos)
- d) Code

**9.** ¿Cuál es la ventaja principal de self-hosted en n8n?

- a) Es más rápido
- b) Tiene más nodos
- c) ✅ Los datos nunca salen de tu infraestructura — privacidad total para información corporativa
- d) Funciona sin Internet

**10.** Si quieres que un flujo procese cada imagen de una lista de 50 imágenes, ¿qué nodo usas?

- a) IF
- b) Merge
- c) ✅ Loop Over Items
- d) Switch

---

### 🚀 PFC — Preparación para las Prácticas (Clases 18-19)

> Las Clases 18 y 19 serán labs de automatización con n8n. Prepara:

1. **Crear cuenta en n8n** (cloud o instalar localmente)
   - Cloud: [app.n8n.cloud](https://app.n8n.cloud)
   - Local: `npx n8n` (requiere Node.js)

2. **Identificar 3 tareas repetitivas** de tu departamento que quieras automatizar
   - Describe cada una con: trigger, proceso, resultado esperado

3. **Preparar credenciales** (accounts API):
   - Google Workspace (Drive, Sheets, Gmail)
   - OpenAI API key (o Gemini/Claude)
   - Opcional: Slack, Notion, Supabase

> 📦 **Entregable:** Cuenta n8n activa + documento con 3 tareas candidatas a automatización.

---

## 📎 Recursos Adicionales

- [n8n](https://n8n.io) — Plataforma de automatización
- [n8n Templates](https://n8n.io/workflows) — Biblioteca de workflows listos para usar
- [n8n Academy](https://n8n.io/academy) — Cursos oficiales gratuitos
- [Zapier](https://zapier.com) — Alternativa (referencia)
- [Make](https://make.com) — Alternativa (referencia)
