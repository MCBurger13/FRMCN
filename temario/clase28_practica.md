---
clase: 28
tipo: práctica
audiencia: diseño
bloque: 7 — Agentes IA
titulo: "Sistema Multi-Agente Visual — El Departamento de Diseño IA"
duracion: "2 horas"
teoria_previa: clase27_teoria.md
pfc_entregable: "Sistema multi-agente con 3+ agentes y supervisor funcional"
---

# Clase 28 · Práctica · 🎨 Diseño
# Sistema Multi-Agente Visual — El Departamento de Diseño IA

> *Construye tu propio departamento de diseño digital: un ArtBot que genera, un QA-Bot que evalúa, un CatalogBot que organiza, y un Supervisor que coordina. Todos trabajando juntos.*

**Duración estimada:** 2 horas  
**Prerrequisito:** Clases 25 + 27 (Agente individual + Multi-agente)

---

## Objetivos de la sesión

- Construir un sistema de 3 agentes especialistas + 1 supervisor en n8n
- Implementar comunicación entre agentes via sub-workflows
- Crear un flujo de producción visual End-to-End automatizado
- Probar el sistema con un briefing real de lanzamiento de producto

---

## Material necesario

- [ ] **n8n** con el workflow de ArtBot de Clase 25 (reutilizaremos)
- [ ] **Google Sheets** compartido (catálogo + estado del proyecto)
- [ ] **Vector Store** con brandbook indexado (de Clase 25)
- [ ] **System Prompts** de los 3 agentes (preparados en PFC C27)

---

## Ejercicio 1: Crear los Agentes Especialistas
**⏱️ 40 minutos**

### Instrucciones

Crea 3 workflows independientes, uno por agente.

#### Agente 1: ArtBot (reutilizar de Clase 25)

Ya lo tienes. Revisa que funcione y ajusta si es necesario.

#### Agente 2: CatalogBot

Crea un nuevo workflow:

```
[Execute Workflow Trigger] → [AI Agent]
```

System Prompt:

```
# IDENTIDAD
Eres CatalogBot, el gestor del catálogo de [MARCA].

# OBJETIVO
Gestionar el catálogo de productos: añadir, actualizar, consultar y
organizar los datos de producto.

# TOOLS
1. Google Sheets (Read): consultar catálogo
2. Google Sheets (Write): añadir/actualizar productos
3. Calculator: calcular márgenes, descuentos

# PROCESO
- Cuando recibes un nuevo producto: verifica datos, añade al Sheet, 
  confirma ID asignado
- Cuando consultan stock/existencias: busca el product exacto
- Cuando piden informe: genera resumen del catálogo

# RESTRICCIONES
- NUNCA modifiques precios sin confirmación explícita
- Los IDs siguen el formato Z###
- Valida que todos los campos obligatorios estén completos
```

Tools: Google Sheets (Read + Write), Calculator

#### Agente 3: QA-Bot

```
# IDENTIDAD
Eres QA-Bot, el inspector de calidad visual de [MARCA].

# OBJETIVO
Evaluar renders, detectar inconsistencias de marca y garantizar
que solo se publique contenido de máxima calidad.

# TOOLS
1. Vector Store (RAG): consultar estándares del brandbook
2. Google Sheets (Write): registrar evaluaciones

# PROCESO DE EVALUACIÓN
Para cada render, evalúa:
1. Coherencia con la paleta de colores (1-10)
2. Calidad técnica — deformaciones, artefactos (1-10)
3. Iluminación vs estándar del brandbook (1-10)
4. Composición y encuadre (1-10)
5. Puntuación total = media ponderada
6. Veredicto: APROBADO (≥7) / REVISIÓN (5-6) / RECHAZADO (&lt;5)

# FORMATO DE RESPUESTA (JSON)
{
  "modelo": "nombre",
  "puntuacion_total": X.X,
  "desglose": { "color": X, "tecnica": X, "iluminacion": X, "composicion": X },
  "veredicto": "APROBADO/REVISIÓN/RECHAZADO",
  "feedback": "texto",
  "mejoras": ["mejora 1", "mejora 2"]
}

# RESTRICCIONES
- Sé estricto: la calidad es la marca
- Si dudas entre APROBADO y REVISIÓN → REVISIÓN
```

Tools: Vector Store, Google Sheets

---

## Ejercicio 2: Constructor el Supervisor
**⏱️ 30 minutos**

### Instrucciones

Crea el workflow Supervisor que orquesta a los tres agentes.

#### Workflow: Supervisor

```
[Chat Trigger o Webhook]
    ↓
[AI Agent — SUPERVISOR]
    ↓ (según decisión)
[Execute Sub-Workflow: ArtBot / CatalogBot / QA-Bot]
    ↓
[Output al usuario]
```

#### System Prompt del Supervisor

```
# IDENTIDAD
Eres el Director del Departamento de Diseño IA de [MARCA].

# OBJETIVO
Coordinar los agentes especialistas para completar tareas de producción
visual de principio a fin.

# EQUIPO A TU CARGO
1. ArtBot — genera prompts y concepto visual
2. CatalogBot — gestiona el catálogo de productos
3. QA-Bot — evalúa calidad y coherencia de marca

# PROCESO DE DECISIÓN
Ante cada solicitud:
1. Analiza qué se pide
2. Decide qué agente(s) necesitas (uno, varios, o en secuencia)
3. Ejecuta la delegación
4. Combina los resultados
5. Presenta al usuario de forma clara

# REGLAS DE DELEGACIÓN
- "Genera un render" → ArtBot
- "Añade al catálogo" → CatalogBot
- "¿Es este render bueno?" → QA-Bot
- "Lanza un producto nuevo" → ArtBot (prompts) → QA-Bot (evaluar) → CatalogBot (registrar)
- Preguntas sobre catálogo → CatalogBot
- Preguntas sobre estilo → ArtBot

# RESTRICCIONES
- Nunca delegues en un agente que no tiene los tools para la tarea
- Si una tarea requiere múltiples agentes, ejecuta en secuencia lógica
- Siempre informa al usuario de qué agentes están trabajando
```

#### Conectar Sub-Workflows

En n8n:
1. Nodo **Execute Sub-Workflow** → apunta al workflow "ArtBot"
2. Nodo **Execute Sub-Workflow** → apunta al workflow "CatalogBot"
3. Nodo **Execute Sub-Workflow** → apunta al workflow "QA-Bot"
4. Usa la decisión del AI Agent Supervisor para elegir cuál ejecutar

---

## Ejercicio 3: Probar el Sistema Completo
**⏱️ 30 minutos**

### Instrucciones

Prueba con estos 4 escenarios de complejidad creciente:

#### Escenario 1: Tarea simple (1 agente)

```
"¿Cuántos modelos de zapato tenemos en el catálogo?"
→ Supervisor delega a CatalogBot → responde
```

#### Escenario 2: Tarea creative (1 agente)

```
"Genera 2 prompts para un nuevo derby color burgundy en calfskin"
→ Supervisor delega a ArtBot → genera prompts según brandbook
```

#### Escenario 3: Tarea secuencial (2 agentes)

```
"El render del Oxford Cognac está listo. Evalúalo y si es bueno, 
 actualiza su status en el catálogo"
→ Supervisor delega a QA-Bot (evalúa) → si aprobado → CatalogBot (actualiza)
```

#### Escenario 4: Flujo completo (3 agentes)

```
"Quiero lanzar un nuevo modelo: 'Chelsea Boot Noir' en nappa negra, €390. 
 Genera los prompts de render, evalúa si el concepto es coherente con 
 nuestra marca, y registra el producto en el catálogo"
→ Supervisor:
    1. ArtBot genera prompts + evalúa concepto visual
    2. QA-Bot verifica coherencia con brandbook
    3. CatalogBot registra el producto
    4. Supervisor presenta resumen
```

### Tabla de resultados

| Escenario | Agentes usados | Delegación correcta | Resultado coherente | Tiempo | Calidad (1-5) |
|-----------|---------------|---------------------|--------------------|---------|----|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |

---

## Ejercicio 4: Pipeline de Lanzamiento Automatizado
**⏱️ 20 minutos**

### Instrucciones

Crea un flujo one-click de lanzamiento de producto:

```
INPUT: "Lanza el modelo Chelsea Boot Noir"

SUPERVISOR detecta "lanzamiento" → activa pipeline completo:

PASO 1 — ArtBot:
  - Genera 3 prompts de render (frontal, lateral, lifestyle)
  - Guarda prompts en Sheet de producción

PASO 2 — QA-Bot:  
  - Lee los prompts y verifica que cumplen el brandbook
  - Da feedback si algo no encaja

PASO 3 — CatalogBot:
  - Registra el nuevo producto
  - Asigna ID (Z-nuevo)
  - Status: "En producción"

PASO 4 — Supervisor:
  - Resume todo al usuario
  - "Producto registrado como Z048. 3 prompts de render listos.
     QA ha aprobado la coherencia visual. ¿Procedo a generar los renders?"
```

---

## 🚀 Entregable PFC — Clase 28

> 📦 **Sistema multi-agente funcional**

### Checklist de entrega

- [ ] **3 workflows de agentes** exportados (ArtBot, CatalogBot, QA-Bot)
- [ ] **1 workflow Supervisor** que orquesta los 3 agentes
- [ ] **4 escenarios probados** con tabla de resultados
- [ ] **Pipeline de lanzamiento** funcional (4 pasos)
- [ ] **System Prompts** de los 4 agentes (archivo separado)

### Formato de entrega

```
PFC_Clase28_[NombreMarca]/
├── n8n/
│   ├── workflow_artbot.json
│   ├── workflow_catalogbot.json
│   ├── workflow_qabot.json
│   ├── workflow_supervisor.json
│   └── workflow_pipeline_lanzamiento.json
├── system_prompts/
│   ├── artbot_prompt.md
│   ├── catalogbot_prompt.md
│   ├── qabot_prompt.md
│   └── supervisor_prompt.md
├── pruebas/
│   ├── tabla_resultados.md
│   └── capturas_escenarios/
└── diagrama_arquitectura.md
```

---

## Criterios de Evaluación

| Criterio | Peso | Excelente (5) | Correcto (3) | Insuficiente (1) |
|----------|------|--------------|--------------|-------------------|
| **Agentes funcionales** | 30% | 3 agentes + supervisor ejecutan correctamente | 2 agentes + supervisor | &lt;2 agentes o supervisor no funciona |
| **Delegación del Supervisor** | 25% | Supervisor delega correctamente en los 4 escenarios | 2-3 escenarios correctos | Delegación incorrecta |
| **Pipeline de lanzamiento** | 25% | 4 pasos ejecutan en secuencia con resultado coherente | Pipeline parcial | Sin pipeline |
| **System Prompts** | 20% | Profesionales, con guardrails y examples | Funcionales | Genéricos o incompletos |

---

## 📎 Recursos de Clase

- [n8n Sub-Workflows](https://docs.n8n.io/workflows/executions/sub-workflows/) — Documentación
- [n8n AI Agent](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/) — Referencia
