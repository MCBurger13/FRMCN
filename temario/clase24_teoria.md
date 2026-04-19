---
clase: 24
tipo: teórica
audiencia: conjunta
bloque: 7 — Agentes IA
titulo: "Desarrollo de Agentes — MCP, RAG y Ecosistemas Conectados"
duracion: "1.5 horas"
practica_asociada: [clase25_practica.md, clase26_practica.md]
---

# Clase 24 · Teórica · Conjunta
# Desarrollo de Agentes — MCP, RAG y Ecosistemas Conectados

> *El protocolo que lo cambia todo. MCP permite que los agentes se conecten con cualquier servicio: tu BBDD, tu Drive, tus APIs. Un agente que habla con el mundo entero.*

**Duración estimada:** 1.5 horas

---

## Navegación de la clase

1. [MCP — Model Context Protocol](#1-mcp)
2. [RAG — Retrieval Augmented Generation](#2-rag)
3. [Construir un Agente Paso a Paso en n8n](#3-construir-agente-n8n)
4. [System Prompts Avanzados para Agentes](#4-system-prompts-avanzados)
5. [Freepik Spaces — Colaboración Visual con IA](#5-freepik-spaces)
6. [Seguridad y Ética de los Agentes](#6-seguridad-y-ética)
7. [Quiz + PFC](#7-quiz-y-pfc)

---

## Conceptos clave de esta clase

`MCP (Model Context Protocol)` · `RAG (Retrieval Augmented Generation)` · `Embedding` · `Vector Database` · `Chunking` · `Context Window` · `System Prompt Avanzado` · `Persona` · `Chain of Thought` · `Few-Shot en System Prompt` · `Freepik Spaces`

---

## 1. MCP — Model Context Protocol

### ¿Qué es MCP?

MCP (Model Context Protocol) es un estándar abierto creado por Anthropic que permite a los modelos de IA **conectarse con fuentes de datos y herramientas externas** de forma estandarizada.

### Analogía

```
Sin MCP: Cada herramienta necesita su propio adaptador personalizado
         (como tener 15 cargadores diferentes para 15 dispositivos)

Con MCP: Un protocolo estándar que conecta cualquier IA con cualquier herramienta
         (como USB-C: un cable para todo)
```

### ¿Cómo funciona?

```
┌──────────┐         ┌──────────┐         ┌──────────────┐
│   LLM    │◄──MCP──▶│  MCP     │◄──API──▶│ Servicios    │
│ (Claude, │         │ Server   │         │              │
│  Gemini) │         │          │         │ · Supabase   │
│          │         │ Traduce  │         │ · GitHub     │
│          │         │ entre IA │         │ · Google     │
│          │         │ y tools  │         │ · Slack      │
└──────────┘         └──────────┘         │ · n8n        │
                                          └──────────────┘
```

### MCP en la práctica: lo que ya conoces

En Clase 5 aprendimos sobre Gemini Gems con grounding. MCP es la evolución profesional:

| Gems (Grounding) | MCP |
|-------------------|-----|
| Subes documentos al modelo | El modelo accede a documentos en tiempo real |
| Datos estáticos, se quedan obsoletos | Datos siempre actualizados |
| Solo funciona en la interfaz de Gemini | Funciona en cualquier aplicación (n8n, IDE, chatbot) |
| Limitado a documentos | Conecta con BBDD, APIs, herramientas |

### Servidores MCP disponibles

| MCP Server | Qué conecta | Ejemplo de uso |
|-----------|-------------|----------------|
| **Supabase MCP** | Tu base de datos PostgreSQL | "¿Cuántos productos tenemos de mujer?" → consulta la BBDD real |
| **GitHub MCP** | Repositorios de código | "¿Cuál es el último cambio en la web?" |
| **Google Drive MCP** | Archivos y carpetas | "Busca el último brandbook" |
| **Slack MCP** | Canales y mensajes | "Resume las decisiones del canal #diseño de esta semana" |
| **n8n MCP** | Workflows de automatización | "Ejecuta el pipeline de renders para el modelo Z005" |

---

## 2. RAG — Retrieval Augmented Generation

### El problema que RAG resuelve

| Sin RAG | Con RAG |
|---------|---------|
| "¿Cuál es la guía de color de nuestra marca?" → "No tengo esa información" | "¿Cuál es la guía de color de nuestra marca?" → "Según vuestro brandbook v3.2, los colores principales son..." |
| El modelo no conoce tus datos internos | El modelo busca en tus documentos y responde con datos reales |

### Cómo funciona RAG

```
FASE 1: INDEXACIÓN (se hace una vez)
┌──────────┐    ┌───────────┐    ┌──────────────┐    ┌──────────────┐
│ Documentos│──▶│ Chunking  │──▶│ Embeddings   │──▶│ Vector Store │
│ (brandbook│    │ (dividir  │    │ (convertir   │    │ (almacenar   │
│  SOPs,    │    │  en trozos│    │  texto en    │    │  vectores)   │
│  catálogo)│    │  de ~500  │    │  vectores    │    │              │
│           │    │  palabras)│    │  numéricos)  │    │ Pinecone /   │
└──────────┘    └───────────┘    └──────────────┘    │ Supabase pgv.│
                                                      └──────────────┘

FASE 2: CONSULTA (cada vez que alguien pregunta)
┌──────────┐    ┌───────────┐    ┌──────────────┐    ┌──────────────┐
│ Pregunta │──▶│ Embedding │──▶│ Búsqueda     │──▶│ LLM + Context│
│ del      │    │ de la     │    │ semántica en │    │              │
│ usuario  │    │ pregunta  │    │ Vector Store │    │ "Según tus   │
│          │    │           │    │              │    │  docs, la    │
│          │    │           │    │ Top 5        │    │  respuesta   │
│          │    │           │    │ fragmentos   │    │  es..."      │
└──────────┘    └───────────┘    │ relevantes   │    └──────────────┘
                                 └──────────────┘
```

### RAG en n8n

n8n ofrece nodos de Vector Store para implementar RAG:
1. **Supabase Vector Store**: usa la extensión pgvector de tu Supabase
2. **Pinecone**: servicio de vector database dedicado
3. **In-Memory Vector Store**: para pruebas rápidas (no persistente)

---

## 3. Construir un Agente Paso a Paso en n8n

### Ejemplo: Agente "Asistente de Catálogo"

Este agente responde preguntas sobre el catálogo y puede modificarlo.

#### Paso 1: Trigger

- Nodo: **Chat Trigger** (interfaz de chat integrada en n8n)
- O: **Webhook** (para conectar desde tu web)

#### Paso 2: AI Agent Node

- Modelo: GPT-4 / Claude
- System Prompt:

```
Eres el Asistente de Catálogo de [MARCA], una marca de zapatos de lujo.

TU ROL:
- Responder preguntas sobre productos del catálogo
- Añadir nuevos productos cuando se te indique
- Generar fichas de producto
- NUNCA inventar datos: si no encuentras un producto, di "No lo encuentro"

TONO: Profesional, conciso, preciso.

FORMATO de ficha:
- Nombre | Tipo | Color | Material | Precio | Descripción
```

#### Paso 3: Conectar Tools

1. **Google Sheets Tool**: leer/escribir en el catálogo
2. **Calculator Tool**: calcular márgenes y descuentos
3. **Google Drive Tool**: buscar imágenes de producto

#### Paso 4: Conectar Memory

- **Window Buffer Memory**: recuerda las últimas 15 interacciones 
- Permite conversaciones como: "Muéstrame los mocasines" → "¿Cuánto cuesta el segundo?" → "Añádele un 15% de descuento"

#### Paso 5: Probar

```
Tú: "¿Cuántos modelos de mujer tenemos?"
Agente: [Usa tool: Google Sheets → leer → filtrar género=Mujer]  
        "Actualmente hay 12 modelos de mujer en el catálogo."

Tú: "Añade un nuevo stiletto rojo en nappa, precio 420€"
Agente: [Usa tool: Google Sheets → añadir fila]
        "Hecho. He añadido 'Stiletto Rojo - Nappa' a €420. ¿Quieres que genere la ficha completa?"
```

---

## 4. System Prompts Avanzados para Agentes

### Estructura profesional de un System Prompt de agente

```
# IDENTIDAD
Eres [nombre del agente], [rol] de [empresa]. 

# OBJETIVO
Tu misión principal es [objetivo claro].

# PERSONALIDAD
- Tono: [profesional/cercano/técnico]
- Idioma: [español, responde siempre en español]
- Estilo: [conciso/detallado]

# TOOLS DISPONIBLES
Tienes acceso a:
1. [Tool 1]: para [uso]. Úsalo cuando [condición].
2. [Tool 2]: para [uso]. Úsalo cuando [condición].

# PROCESO DE TRABAJO
Cuando recibas una solicitud:
1. Analiza qué se te pide
2. Decide qué tool(s) necesitas
3. Ejecuta
4. Verifica el resultado
5. Informa al usuario

# RESTRICCIONES (Guardrails)
- NUNCA [acción peligrosa]
- SIEMPRE [verificación]
- Si no estás seguro, PREGUNTA antes de actuar
- Límite de gasto: máximo [cantidad] por operación

# FORMATO DE RESPUESTA
[Cómo estructurar las respuestas]

# EJEMPLOS (Few-Shot)
Ejemplo 1: 
  Input: "..."
  Tu respuesta: "..."
```

---

## 5. Freepik Spaces — Colaboración Visual con IA

### ¿Qué es Freepik Spaces?

Un entorno de trabajo colaborativo donde equipos pueden:
- Generar imágenes con IA de forma compartida
- Crear y reutilizar estilos consistentes
- Gestionar un banco de imágenes de marca centralizado
- Iterar en tiempo real sobre conceptos visuales

### Integración con el ecosistema de agentes

Un agente puede usar Freepik Spaces para:
- Generar imágenes con estilo de marca consistente
- Buscar en la biblioteca visual de la empresa
- Sugerir imágenes para campañas basándose en el calendario editorial

---

## 6. Seguridad y Ética de los Agentes

### Las 5 Reglas de Oro

| Regla | Por qué | Implementación |
|-------|---------|----------------|
| **1. Human-in-the-Loop para acciones irreversibles** | Un agente puede cometer errores costosos | Aprobación humana antes de enviar emails, publicar, o hacer compras |
| **2. Principio del mínimo privilegio** | Solo acceso a lo estrictamente necesario | No des acceso a la BBDD completa si solo necesita leer el catálogo |
| **3. Logging de todas las acciones** | Trazabilidad y auditoría | Registrar cada tool call del agente en un log |
| **4. Rate limits y presupuestos** | Evitar uso descontrolado | Máximo 100 generaciones/día, máximo €10/día de API calls |
| **5. Transparencia** | El usuario debe saber que habla con IA | Identificar siempre al agente como IA, nunca suplantar humanos |

---

## 7. Quiz y PFC

### 📝 Quiz de Conocimientos (8 preguntas)

**1.** ¿Qué es MCP y para qué sirve?

- a) Un modelo de IA más potente
- b) ✅ Model Context Protocol: un estándar que permite a modelos de IA conectarse con fuentes de datos y herramientas externas de forma estandarizada
- c) Un tipo de memoria
- d) Un lenguaje de programación

**2.** ¿Qué problema resuelve RAG?

- a) Que las imágenes generadas sean borrosas
- b) ✅ Que los modelos de IA puedan responder con información de documentos internos de la empresa, no solo su conocimiento general
- c) Que los agentes sean más rápidos
- d) Que los flujos de n8n no fallen

**3.** ¿Qué es un "embedding" en el contexto de RAG?

- a) Un tipo de imagen IA
- b) ✅ La representación numérica (vector) de un texto, que permite buscar por significado semántico
- c) Un plugin de n8n
- d) Un tipo de base de datos

**4.** ¿Cuáles son los 4 componentes de un agente IA?

- a) Input, Process, Output, Log
- b) ✅ Cerebro (LLM), Memoria, Tools y Guardrails
- c) Prompt, Modelo, API, Resultado
- d) Frontend, Backend, BBDD, API

**5.** ¿Qué es el "principio del mínimo privilegio" para agentes?

- a) Usar el modelo más barato
- b) ✅ Dar al agente acceso SOLO a lo estrictamente necesario para su tarea, sin permisos excesivos
- c) No usar agentes en producción
- d) Limitar las respuestas a 100 palabras

**6.** ¿Qué ventaja tiene MCP sobre Gemini Gems con grounding?

- a) MCP es gratis
- b) ✅ MCP conecta en tiempo real con BBDD/APIs/tools (datos siempre actualizados); funciona en cualquier aplicación, no solo en Gemini
- c) MCP genera mejores imágenes
- d) No hay ventaja, son iguales

**7.** ¿Qué componente del System Prompt define "qué NO puede hacer el agente"?

- a) Identidad
- b) Objetivo
- c) Tools disponibles
- d) ✅ Restricciones / Guardrails

**8.** ¿Por qué todo agente debería tener logging activado?

- a) Para que funcione más rápido
- b) ✅ Trazabilidad y auditoría: poder revisar qué hizo el agente, cuándo y por qué, para detectar errores
- c) Porque n8n lo requiere
- d) Para generar informes

---

### 🚀 PFC — Preparación para Labs de Agentes (Clases 25-26)

1. **Escribir el System Prompt completo** del agente de tu departamento (usando la estructura de 7 secciones)
2. **Preparar documentos para RAG**: brandbook, SOPs, catálogo (en texto plano o PDF)
3. **Diseñar el diagrama del agente**: qué tools necesita, qué memoria, qué guardrails

> 📦 **Entregable:** System Prompt profesional + documentos para RAG + diagrama del agente.

---

## 📎 Recursos Adicionales

- [MCP Protocol](https://modelcontextprotocol.io) — Documentación oficial
- [n8n AI Agent Docs](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/) — Referencia
- [Freepik Spaces](https://freepik.com/spaces) — Colaboración visual
- [Supabase pgvector](https://supabase.com/docs/guides/ai/vector-columns) — Vector store para RAG
