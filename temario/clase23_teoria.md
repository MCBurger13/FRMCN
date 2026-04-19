---
clase: 23
tipo: teórica
audiencia: conjunta
bloque: 7 — Agentes IA
titulo: "Fundamentos de Agentes IA — De Chatbot a Empleado Digital"
duracion: "1.5 horas"
practica_asociada: [clase25_practica.md, clase26_practica.md]
---

# Clase 23 · Teórica · Conjunta
# Fundamentos de Agentes IA — De Chatbot a Empleado Digital

> *El salto final. Un chatbot responde preguntas. Un agente toma decisiones, usa herramientas, y completa tareas de principio a fin sin supervisión constante.*

**Duración estimada:** 1.5 horas

---

## Navegación de la clase

1. [Chatbot vs. Agente — La Diferencia Fundamental](#1-chatbot-vs-agente)
2. [Anatomía de un Agente IA](#2-anatomía-de-un-agente)
3. [Tools (Herramientas del Agente)](#3-tools)
4. [Memory (Memoria del Agente)](#4-memory)
5. [Agentes en n8n — El AI Agent Node](#5-agentes-en-n8n)
6. [Patrones de Agentes para Empresa](#6-patrones-de-agentes)
7. [Quiz + PFC](#7-quiz-y-pfc)

---

## Conceptos clave de esta clase

`Agente IA` · `Tool Calling` · `ReAct (Reason + Act)` · `Memory` · `Conversational Memory` · `Window Buffer` · `Tool` · `Plan-Execute` · `AI Agent Node` · `Sub-Agent` · `Guardrails` · `Human Approval`

---

## 1. Chatbot vs. Agente — La Diferencia Fundamental

| | Chatbot | Agente |
|---|---|---|
| **Comportamiento** | Pasivo: espera tu pregunta, responde, fin | Activo: persigue un objetivo, toma decisiones |
| **Herramientas** | Solo texto (y a veces imagen) | Usa Tools: buscar web, consultar BBDD, enviar emails, ejecutar código |
| **Memoria** | Olvida entre sesiones | Recuerda contexto, historial, preferencias |
| **Autonomía** | 0% — siempre necesita tu input | 20-80% — puede ejecutar pasos intermedios solo |
| **Ejemplo** | "¿Qué materiales usa Gucci?" → respuesta | "Investiga los materiales de las 5 marcas top, compara precios, y genera un informe en Sheets" → ejecuta 4 pasos solo |

### La Escala de Autonomía

```
NIVEL 0: CHATBOT        → Pregunta → Respuesta → Fin
NIVEL 1: ASISTENTE      → Pregunta → Sugiere acción → Tú ejecutas
NIVEL 2: AGENTE GUIADO  → Objetivo → Planifica → Ejecuta con aprobación humana
NIVEL 3: AGENTE AUTÓNOMO → Objetivo → Planifica → Ejecuta → Informa del resultado
NIVEL 4: MULTI-AGENTE   → Objetivo complejo → Varios agentes colaboran → Resultado
```

> 🎯 **En este curso:** Nos moveremos entre el Nivel 2 y el Nivel 3. El Nivel 4 lo veremos en la Clase 27.

---

## 2. Anatomía de un Agente IA

### Los 4 componentes

```
┌───────────────────────────────────────────┐
│              AGENTE IA                     │
│                                           │
│  ┌─────────┐  ┌──────────┐  ┌─────────┐ │
│  │ CEREBRO  │  │ MEMORIA  │  │ TOOLS   │ │
│  │ (LLM)    │  │ (Context)│  │(Actions)│ │
│  │          │  │          │  │         │ │
│  │ Razona,  │  │ Recuerda │  │ Buscar, │ │
│  │ decide,  │  │ contexto,│  │ escribir│ │
│  │ planifica│  │ historial│  │ BBDD,   │ │
│  │          │  │          │  │ email...│ │
│  └─────────┘  └──────────┘  └─────────┘ │
│                                           │
│  ┌────────────────────────────────────┐   │
│  │         GUARDRAILS                 │   │
│  │  Restricciones, límites, reglas    │   │
│  │  de seguridad, aprobación humana   │   │
│  └────────────────────────────────────┘   │
└───────────────────────────────────────────┘
```

| Componente | Función | Ejemplo |
|-----------|---------|---------|
| **Cerebro (LLM)** | Razona, decide qué hacer, interpreta resultados | GPT-4, Claude, Gemini |
| **Memoria** | Mantiene contexto de la conversación y tareas | "Recuerdo que el cliente pidió el modelo Oxford en talla 43" |
| **Tools** | Acciones que el agente puede ejecutar | Buscar en Google, escribir en Sheets, enviar email |
| **Guardrails** | Restricciones de seguridad y límites | "Nunca envíes un email sin aprobación humana" |

---

## 3. Tools (Herramientas del Agente)

### ¿Qué puede "hacer" un agente?

Un agente sin tools es solo un chatbot. Las herramientas son lo que lo convierten en un **actor**:

| Categoría | Tools disponibles en n8n | Ejemplo de uso |
|-----------|------------------------|----------------|
| **Búsqueda** | Google Search, Perplexity API | "Investiga los precios de Santoni en España" |
| **Datos** | Google Sheets, Supabase, Notion | "Añade este producto al catálogo" |
| **Comunicación** | Gmail, Slack, Telegram | "Envía el informe semanal al equipo" |
| **Archivos** | Google Drive, Dropbox | "Descarga el último render y guárdalo en la carpeta" |
| **Generación** | OpenAI (imagen), Stable Diffusion | "Genera 3 variaciones del concepto del zapato" |
| **Código** | JavaScript, Python | "Calcula el margen de beneficio de estos 5 productos" |
| **Web** | HTTP Request | "Consulta el estado del envío en la API de la agencia" |

### Tool Calling: Cómo funciona

```
USUARIO: "Añade el modelo 'Stiletto Midnight' al catálogo con precio €380"

AGENTE (piensa): Necesito usar la herramienta Google Sheets para añadir una fila.
AGENTE (actúa): Llama a Google Sheets → Add Row → {modelo: "Stiletto Midnight", precio: 380}
AGENTE (confirma): "Hecho. He añadido 'Stiletto Midnight' al catálogo con precio €380. 
                    ¿Quieres que genere la ficha de producto?"
```

---

## 4. Memory (Memoria del Agente)

### Tipos de memoria

| Tipo | Qué recuerda | Duración | Ejemplo |
|------|-------------|----------|---------|
| **Window Buffer** | Las últimas N interacciones | Sesión actual | "Hace 3 mensajes me pediste el color azul" |
| **Conversational** | Todo el historial del chat | Sesión completa | "En esta sesión hemos trabajado en 3 modelos" |
| **Persistent** | Información entre sesiones | Permanente | "El cliente Marc prefiere piel de becerro" |
| **Vector Store** | Documentos indexados semánticamente | Permanente | Busca en el brandbook la información relevante |

### En n8n

n8n ofrece nodos de memoria que puedes conectar al AI Agent:
- **Window Buffer Memory**: recuerda las últimas 10 interacciones
- **Postgres Chat Memory**: guarda conversaciones en base de datos
- **Vector Store (Pinecone/Supabase)**: RAG sobre documentos

---

## 5. Agentes en n8n — El AI Agent Node

### El superpoder de n8n: nodos de agente nativos

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Trigger     │────▶│  AI Agent    │────▶│  Output      │
│  (webhook,   │     │              │     │  (Sheets,    │
│   chat, etc) │     │  Cerebro:    │     │   email,     │
│              │     │  GPT-4/Claude│     │   Slack)     │
└──────────────┘     │              │     └──────────────┘
                     │  Tools:      │
                     │  ├─ Sheets   │
                     │  ├─ Gmail    │
                     │  ├─ Search   │
                     │  └─ Code     │
                     │              │
                     │  Memory:     │
                     │  └─ Buffer   │
                     └──────────────┘
```

### Configuración básica de un agente en n8n

1. **Añadir nodo "AI Agent"**
2. **Elegir modelo**: GPT-4, Claude, Gemini
3. **Conectar Tools**: arrastrar y conectar los nodos de herramientas
4. **Configurar System Prompt**: las instrucciones del agente
5. **Añadir Memory** (opcional): para que recuerde el contexto
6. **Definir Guardrails**: restricciones en el System Prompt

---

## 6. Patrones de Agentes para Empresa

### Patrón 1: Agente de Soporte al Cliente

```
System Prompt: "Eres el agente de atención al cliente de [MARCA].
Tools: buscar en catálogo (Sheets), verificar stock (Supabase), enviar email.
Guardrails: nunca inventes precios, si no sabes algo di 'lo consultaré con el equipo'."
```

### Patrón 2: Agente Director de Arte

```
System Prompt: "Eres el director de arte de [MARCA]. Tu trabajo es generar 
prompts visuales coherentes con el brandbook almacenado en tu memoria.
Tools: leer brandbook (Vector Store), generar imagen (DALL-E API), guardar en Drive.
Guardrails: siempre genera en inglés, siempre incluye negative prompt, 
nunca uses estilos que contradigan la guía de marca."
```

### Patrón 3: Agente Analista de RRSS

```
System Prompt: "Eres el analista de RRSS de [MARCA]. 
Tools: leer métricas (Sheets), buscar tendencias (Google Search), escribir informe (Sheets).
Cada viernes: lee las métricas de la semana, compara con la anterior, identifica patterns, 
y genera un informe ejecutivo con recomendaciones."
```

---

## 7. Quiz y PFC

### 📝 Quiz de Conocimientos (8 preguntas)

**1.** ¿Cuál es la diferencia principal entre un chatbot y un agente?

- a) El agente es más caro
- b) ✅ El chatbot responde preguntas pasivamente; el agente persigue objetivos, usa herramientas y ejecuta tareas
- c) El chatbot es más inteligente
- d) No hay diferencia

**2.** ¿Qué son los "Tools" de un agente?

- a) Programas de edición de imagen
- b) ✅ Acciones que el agente puede ejecutar: buscar web, escribir en BBDD, enviar emails, generar imágenes
- c) Los modelos de IA disponibles
- d) Las restricciones del agente

**3.** ¿Qué nivel de autonomía tiene un "Agente Guiado"?

- a) 0% — siempre necesita input
- b) ✅ Planifica y ejecuta, pero con aprobación humana en pasos críticos
- c) 100% — hace todo solo
- d) Solo responde preguntas

**4.** ¿Qué son los "Guardrails"?

- a) Las herramientas del agente
- b) Un tipo de memoria
- c) ✅ Restricciones de seguridad y límites que definen qué puede y qué NO puede hacer el agente
- d) Los pasos de un workflow

**5.** ¿Qué tipo de memoria permite a un agente buscar información en documentos largos?

- a) Window Buffer
- b) Conversational
- c) ✅ Vector Store (RAG sobre documentos)
- d) Persistent simple

**6.** ¿Qué nodo de n8n permite crear un agente con tools y memoria?

- a) OpenAI Node
- b) HTTP Request
- c) ✅ AI Agent Node
- d) Code Node

**7.** Si un agente necesita "Añadir un producto al catálogo", ¿qué componente usa?

- a) Su memoria
- b) Sus guardrails
- c) ✅ Un Tool (Google Sheets o Supabase) para escribir en la base de datos
- d) Su cerebro solo

**8.** ¿Cuál es el patrón ReAct que usan los agentes?

- a) Leer → Escribir → Publicar
- b) ✅ Reason (razonar sobre qué hacer) + Act (ejecutar la acción con un tool) → Observar resultado → Repetir
- c) Read → Edit → Approve → Commit → Test
- d) Input → Process → Output

---

### 🚀 PFC — Preparación para Labs de Agentes (Clases 25-26)

1. **Escribir el System Prompt** del "Agente Director de Arte" con los 7 componentes
2. **Preparar el brandbook en formato texto** para subirlo como memoria del agente
3. **Listar las Tools** que necesitará el agente de tu departamento

> 📦 **Entregable:** System Prompt completo + brandbook en texto + lista de tools.

---

## 📎 Recursos Adicionales

- [n8n AI Agent](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/) — Documentación
- [LangChain](https://langchain.com) — Framework de agentes (referencia)
- [OpenAI Function Calling](https://platform.openai.com/docs/guides/function-calling) — Documentación de tools
