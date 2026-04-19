---
clase: 27
tipo: teórica
audiencia: conjunta
bloque: 7 — Agentes IA
titulo: "Sistemas Multi-Agente — Equipos de IA Colaborativos"
duracion: "1.5 horas"
practica_asociada: [clase28_practica.md]
---

# Clase 27 · Teórica · Conjunta
# Sistemas Multi-Agente — Equipos de IA Colaborativos

> *Un agente es un empleado digital. Múltiples agentes que colaboran son un departamento completo. Aprende a diseñar equipos de IA que se coordinan entre sí.*

**Duración estimada:** 1.5 horas

---

## Navegación de la clase

1. [De Agente Individual a Sistema Multi-Agente](#1-de-agente-a-multi-agente)
2. [Arquitecturas Multi-Agente](#2-arquitecturas)
3. [Orquestación y Comunicación](#3-orquestación)
4. [Sub-Workflows en n8n](#4-sub-workflows)
5. [Caso Práctico: El "Departamento IA" de la Tienda](#5-caso-práctico)
6. [Limitaciones y Consideraciones](#6-limitaciones)
7. [Quiz + PFC](#7-quiz-y-pfc)

---

## Conceptos clave de esta clase

`Multi-Agent System` · `Orchestrator` · `Specialist Agent` · `Delegation` · `Sub-Workflow` · `Agent-to-Agent Communication` · `Consensus` · `Supervisor Pattern` · `Pipeline Pattern` · `Swarm`

---

## 1. De Agente Individual a Sistema Multi-Agente

### ¿Por qué múltiples agentes?

| Agente Individual | Sistema Multi-Agente |
|-------------------|---------------------|
| 1 System Prompt que intenta cubrir todo | Cada agente tiene un prompt especializado y enfocado |
| Se confunde con tareas complejas | Cada agente domina su dominio |
| 1 solo set de tools | Cada agente tiene sus propios tools relevantes |
| Puede ser lento y costoso (prompts más largos) | Más eficiente: cada agente procesa solo lo suyo |

### Analogía: El Equipo de una Revista de Moda

```
REVISTA INDIVIDUAL:                    EQUIPO COMPLETO:
1 persona hace todo                    Director creativo decide la visión
(fotos, texto, diseño,                 Fotógrafo ejecuta las imágenes
 edición, distribución)                Copywriter escribe los textos
                                       Maquetador compone el layout
                                       Editor revisa todo
                                       Social media distribuye
```

---

## 2. Arquitecturas Multi-Agente

### Patrón 1: Pipeline (Cadena)

Cada agente pasa su resultado al siguiente como en una cadena de producción.

```
[Agente 1: Investigador]
    ↓ "He encontrado las tendencias de mercado"
[Agente 2: Strategist]
    ↓ "Propongo esta estrategia basándome en las tendencias"
[Agente 3: Copywriter]
    ↓ "He redactado el copy siguiendo la estrategia"
[Agente 4: Designer]
    ↓ "He generado los prompts visuales para el copy"
[Agente 5: QA]
    → "Todo revisado y aprobado" o "Devolver al agente 3 para reescribir"
```

**Ideal para:** Flujos de producción de contenido donde cada paso alimenta al siguiente.

### Patrón 2: Supervisor (Hub & Spoke)

Un agente orquestador recibe la tarea y delega a especialistas.

```
                    ┌──────────────┐
                    │  SUPERVISOR  │
                    │   (Router)   │
                    └──────┬───────┘
                           │
           ┌───────────────┼───────────────┐
           │               │               │
    ┌──────▼──────┐ ┌──────▼──────┐ ┌──────▼──────┐
    │ Agente      │ │ Agente      │ │ Agente      │
    │ DISEÑO      │ │ MARKETING   │ │ OPERACIONES │
    │             │ │             │ │             │
    │ Tools:      │ │ Tools:      │ │ Tools:      │
    │ - Renders   │ │ - RRSS      │ │ - CRM       │
    │ - Brandbook │ │ - Calendar  │ │ - Inventario│
    │ - Drive     │ │ - Copy      │ │ - Envíos    │
    └─────────────┘ └─────────────┘ └─────────────┘
```

**Ideal para:** Gestión general donde las solicitudes son variadas y el sistema debe saber a quién derivar.

### Patrón 3: Debate / Consenso

Múltiples agentes opinan y se llega a una decisión conjunta.

```
SOLICITUD: "¿Deberíamos lanzar la colección en febrero o en abril?"

[Agente Marketing]: "Febrero — antes de la temporada SS"
[Agente Finanzas]:  "Abril — tenemos mejor cash flow"
[Agente Diseño]:    "Marzo — la producción no estará lista hasta febrero"
[Agente Supervisor]: DECISIÓN: "Marzo. Compromiso entre timing y producción."
```

**Ideal para:** Decisiones estratégicas donde se necesitan múltiples perspectivas.

---

## 3. Orquestación y Comunicación

### Cómo los agentes se pasan información

| Método | Cómo funciona | Cuándo usarlo |
|--------|-------------|---------------|
| **Output → Input** | El resultado de un agente es el input del siguiente | Pipeline lineal |
| **Shared Memory** | Todos los agentes leen/escriben en la misma base de datos | Información compartida del proyecto |
| **Message Bus** | Agentes publican/suscriben a eventos | Sistemas reactivos |
| **Orchestrator Calls** | El supervisor llama a cada agente secuencialmente | Control centralizado |

### En n8n: Sub-Workflows

n8n permite que un workflow llame a otro (como un jefe que delega a empleados):

```
WORKFLOW PRINCIPAL (Supervisor):
    ↓
[Execute Sub-Workflow: "workflow_agente_diseno"]
    ↓
[Execute Sub-Workflow: "workflow_agente_marketing"]
    ↓
[Merge: combinar resultados]
    ↓
[AI Agent Supervisor: "Con estos inputs de diseño y marketing, 
 toma la decisión final"]
```

---

## 4. Sub-Workflows en n8n

### Cómo crear un sistema multi-agente en n8n

#### Paso 1: Crear workflows individuales para cada agente

- **Workflow "Agente Diseño"**: Chat Trigger → AI Agent (con tools de diseño)
- **Workflow "Agente Marketing"**: Chat Trigger → AI Agent (con tools de marketing)
- **Workflow "Agente QA"**: Chat Trigger → AI Agent (con tools de evaluación)

#### Paso 2: Crear workflow Supervisor

```
[Trigger: solicitud del usuario]
    ↓
[AI Agent Supervisor: "Analiza esta solicitud y decide:
    - Si es de diseño → ejecuta sub-workflow diseño
    - Si es de marketing → ejecuta sub-workflow marketing
    - Si es de ambos → ejecuta ambos y combina
    - Si necesita QA → ejecuta sub-workflow QA después"]
    ↓
[Execute Sub-Workflow: según decisión del supervisor]
    ↓
[Output: resultado final al usuario]
```

#### Paso 3: Configurar comunicación entre agentes

Los agentes comparten contexto a través de:
- **Google Sheets**: tabla compartida "Estado del Proyecto"
- **Variables de n8n**: los sub-workflows devuelven datos al principal
- **Memory compartida**: el mismo vector store para todos

---

## 5. Caso Práctico: El "Departamento IA" de la Tienda

### Arquitectura completa del sistema multi-agente

```
┌─────────────────────────────────────────────────────────────┐
│           DEPARTAMENTO IA — [MARCA]                          │
│                                                             │
│  ┌──────────────────┐                                       │
│  │   SUPERVISOR      │  "Recibe solicitudes, clasifica,     │
│  │   (Orquestador)   │   delega y combina resultados"       │
│  └────────┬──────────┘                                      │
│           │                                                  │
│  ┌────────┴────────────────────────────┐                    │
│  │           │           │              │                    │
│  ▼           ▼           ▼              ▼                    │
│ ┌─────┐  ┌─────┐  ┌─────────┐  ┌──────────┐               │
│ │ART  │  │COPY │  │ANALYTICS│  │SOPORTE   │               │
│ │BOT  │  │BOT  │  │BOT      │  │BOT       │               │
│ │     │  │     │  │         │  │          │               │
│ │Genera│  │Copy │  │Métricas │  │Atiende   │               │
│ │prompts│ │ads, │  │informes │  │clientes  │               │
│ │evalúa│  │news │  │análisis │  │registra  │               │
│ │render│  │RRSS │  │trends   │  │escala    │               │
│ └─────┘  └─────┘  └─────────┘  └──────────┘               │
│                                                             │
│  SHARED: Google Sheets (catálogo + CRM + métricas)          │
│  SHARED: Vector Store (brandbook + SOPs + FAQ)              │
└─────────────────────────────────────────────────────────────┘
```

### Flujo ejemplo: "Lanza el modelo Loafer Riviera"

```
USUARIO: "Quiero lanzar el nuevo modelo Loafer Riviera"

SUPERVISOR: "Entendido. Voy a coordinar el lanzamiento."
    ↓
SUPERVISOR → ARTBOT: "Genera 3 prompts de render para el Loafer Riviera"
ARTBOT: "Aquí tienes 3 prompts según el brandbook: [prompts]"
    ↓
SUPERVISOR → COPYBOT: "Genera copy para Instagram, LinkedIn y newsletter 
    para el Loafer Riviera. Material: suede azul navy. Precio: €320"
COPYBOT: "Copy listo para 3 canales: [copies]"
    ↓
SUPERVISOR → ANALYTICSBOT: "¿Cuál es el mejor horario para publicar 
    esta semana según nuestras métricas?"
ANALYTICSBOT: "Martes 11:00 y Jueves 18:00 tienen mejor engagement."
    ↓
SUPERVISOR: "Plan de lanzamiento:
    1. Renders: 3 versiones listas (prompts generados por ArtBot)
    2. Copy: Instagram (martes 11:00), LinkedIn (jueves 18:00), Newsletter (viernes)
    3. ¿Apruebas para proceder?"
```

---

## 6. Limitaciones y Consideraciones

### Cuándo NO usar multi-agente

| Situación | Mejor opción |
|-----------|-------------|
| Tarea simple y directa | Un solo agente o incluso un chatbot |
| Equipo de ≤3 personas | Flujos manuales + 1 agente |
| Datos sensibles | Minimizar agentes con acceso |
| Presupuesto limitado | Cada agente = llamadas API = coste |

### Costes operativos

```
1 agente × 50 consultas/día × $0.03/consulta = $1.50/día = $45/mes
4 agentes × 50 consultas/día × $0.03/consulta = $6.00/día = $180/mes

Comparación: 1 empleado entry-level = ~$2,000/mes
```

> 💡 **Regla práctica:** Los agentes no sustituyen empleados. Los agentes eliminan las tareas repetitivas para que los empleados se enfoquen en trabajo creativo y estratégico.

---

## 7. Quiz y PFC

### 📝 Quiz de Conocimientos (8 preguntas)

**1.** ¿Cuál es la ventaja principal de un sistema multi-agente sobre un agente individual?

- a) Es más barato
- b) ✅ Cada agente está especializado en su dominio, con prompt enfocado y tools relevantes, lo que mejora la precisión
- c) Es más rápido
- d) Necesita menos configuración

**2.** ¿Qué es el patrón "Supervisor"?

- a) Un agente que supervisa las redes sociales
- b) ✅ Un agente orquestador que recibe solicitudes y delega a agentes especialistas adecuados
- c) Un dashboard de monitoreo
- d) Un tipo de test

**3.** ¿Cómo se comunican los agentes entre sí en n8n?

- a) A través de email
- b) ✅ Sub-workflows (un workflow llama a otros), variables compartidas, y shared memory (Sheets/Vector Store)
- c) Por Slack
- d) No se pueden comunicar

**4.** ¿Qué patrón multi-agente es mejor para producción de contenido?

- a) Debate/Consenso
- b) ✅ Pipeline: Investigador → Strategist → Copywriter → Designer → QA
- c) Supervisor
- d) Todos son iguales

**5.** ¿Cuándo NO deberías usar un sistema multi-agente?

- a) Cuando tienes muchos productos
- b) ✅ Cuando la tarea es simple y directa: un solo agente es suficiente y más eficiente
- c) Cuando tienes acceso a APIs
- d) Nunca, siempre es mejor multi-agente

**6.** ¿Qué es "Shared Memory" en un sistema multi-agente?

- a) La RAM del ordenador
- b) ✅ Una fuente de datos compartida entre todos los agentes (Google Sheets, Vector Store) para mantener coherencia
- c) La memoria del usuario
- d) Un archivo temporal

**7.** En el "Departamento IA" de la tienda, ¿cuántos agentes especialistas tiene?

- a) 2 (diseño y marketing)
- b) 3 (diseño, marketing, soporte)
- c) ✅ 4 (ArtBot, CopyBot, AnalyticsBot, SoporteBot) + 1 Supervisor
- d) 1 solo agente que hace todo

**8.** ¿Los agentes IA sustituyen empleados?

- a) Sí, completamente
- b) ✅ No. Los agentes eliminan tareas repetitivas para que los empleados se enfoquen en trabajo creativo y estratégico
- c) Solo en empresas grandes
- d) Solo los chatbots

---

### 🚀 PFC — Preparación para Clase 28

1. **Diseñar el diagrama** del sistema multi-agente de tu marca (mínimo 3 agentes + supervisor)
2. **Escribir los System Prompts** de cada agente especialista
3. **Definir los "shared resources"**: qué Sheets/datos son compartidos

> 📦 **Entregable:** Diagrama multi-agente + System Prompts de cada agente + mapa de recursos compartidos.

---

## 📎 Recursos Adicionales

- [n8n Sub-Workflows](https://docs.n8n.io/workflows/executions/sub-workflows/) — Documentación
- [LangGraph](https://langchain-ai.github.io/langgraph/) — Framework multi-agente (referencia avanzada)
- [CrewAI](https://crewai.com) — Framework de equipos de agentes (referencia)
