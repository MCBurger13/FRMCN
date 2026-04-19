---
clase: 25
tipo: práctica
audiencia: diseño
bloque: 7 — Agentes IA
titulo: "Agente Director de Arte — Tu Copiloto Creativo"
duracion: "2 horas"
teoria_previa: [clase23_teoria.md, clase24_teoria.md]
pfc_entregable: "Agente Director de Arte funcional en n8n con RAG sobre brandbook"
---

# Clase 25 · Práctica · 🎨 Diseño
# Agente Director de Arte — Tu Copiloto Creativo

> *Un agente que conoce tu marca de memoria, genera prompts perfectos, evalúa la calidad de los renders y mantiene la coherencia visual. Tu director de arte digital.*

**Duración estimada:** 2 horas  
**Prerrequisito:** Clases 23-24 (Fundamentos + MCP/RAG)

---

## Objetivos de la sesión

- Construir un agente "Director de Arte" en n8n
- Implementar RAG con el brandbook de la marca
- Conectar herramientas de generación y almacenamiento
- Crear un flujo de revisión visual automatizado con el agente

---

## Material necesario

- [ ] **n8n** con credenciales configuradas (OpenAI/Claude, Google Sheets, Google Drive)
- [ ] **Brandbook en texto** (preparado en PFC C24)
- [ ] **System Prompt** del agente (preparado en PFC C24)
- [ ] **Catálogo de productos** en Google Sheets

---

## Ejercicio 1: Configurar RAG con el Brandbook
**⏱️ 30 minutos**

### Instrucciones

Indexa el brandbook de tu marca para que el agente pueda consultarlo.

#### 1.1. Preparar el documento

Crea un documento de texto con toda la identidad visual:

```
# BRANDBOOK — [NOMBRE MARCA]

## Identidad Visual
- Paleta de colores: [hex codes]
- Tipografía: [fuentes]
- Logo: [descripción y usos]

## Estilo Fotográfico
- Iluminación: Studio, cálida, sombras suaves
- Fondos: mármol blanco, madera oscura, textil neutro
- Ángulos: 3/4, frontal, cenital, macro detalle
- Estilo: fotorrealista, editorial, minimalista

## Materiales de Producto
- Calfskin: textura suave, brillo sutil, colores: cognac, negro, burgundy
- Suede: textura mate, tonos tierra
- Patent: alto brillo, solo negro
- Nappa: ultra suave, flexible

## Tono de Marca
- Sofisticado pero accesible
- Nunca agresivo ni urgente
- Referencias: Hermès, Bottega Veneta, COS

## Negative Prompts Estándar
- Siempre incluir: "no text, no watermark, no deformation, no cartoon..."

## Ejemplos de Prompts Aprobados
[3-5 prompts que han generado buenos resultados anteriormente]
```

#### 1.2. Crear el Vector Store en n8n

1. Añade un nodo **"Supabase Vector Store"** (o **In-Memory Vector Store** para pruebas)
2. Conecta un nodo **"Document Loader"** → carga tu brandbook
3. Configura el **"Text Splitter"**:
   - Chunk size: 500 caracteres
   - Overlap: 50 caracteres
4. Ejecuta la indexación

#### 1.3. Verificar la indexación

Pregunta de prueba al vector store:
- "¿Cuáles son los colores de la marca?" → debe devolver el fragmento correcto del brandbook

---

## Ejercicio 2: Construir el Agente Director de Arte
**⏱️ 35 minutos**

### Instrucciones

#### Nodo 1: Chat Trigger

- Tipo: **Chat Trigger** (interfaz de chat de n8n)

#### Nodo 2: AI Agent

- Modelo: **GPT-4** o **Claude 3.5 Sonnet**
- System Prompt:

```
# IDENTIDAD
Eres ArtBot, el Director de Arte de [MARCA], una marca de zapatos de lujo.

# OBJETIVO
Tu misión es asegurar que toda la producción visual sea coherente con 
la identidad de marca y de la máxima calidad.

# PERSONALIDAD
- Tono: creativo pero preciso, como un director de arte senior
- Idioma: español, pero los prompts de generación siempre en inglés
- Opiniones: das feedback honesto y constructivo

# CAPACIDADES
Puedes:
1. GENERAR prompts de imagen basándote en el brandbook
2. EVALUAR renders contra los estándares de marca
3. CONSULTAR el catálogo de productos
4. GUARDAR nuevos prompts aprobados
5. BUSCAR en el brandbook información de estilo

# PROCESO PARA GENERAR PROMPTS
1. Consulta el brandbook (RAG) para el estilo actual
2. Identifica el tipo de producto y su material
3. Construye el prompt en inglés siguiendo la guía de estilo
4. Incluye SIEMPRE el negative prompt estándar
5. Sugiere 2-3 variaciones de composición

# PROCESO PARA EVALUAR RENDERS
1. Verifica coherencia con la paleta de colores de marca
2. Comprueba que el producto no tiene deformaciones
3. Evalúa iluminación vs estándar del brandbook
4. Da puntuación de 1-10 y feedback específico

# RESTRICCIONES
- NUNCA generes prompts que contradigan el brandbook
- NUNCA apruebes un render con deformaciones visibles
- Si no encuentras info en el brandbook, PREGUNTA al usuario
- Todos los prompts DEBEN incluir el negative prompt estándar
```

#### Nodo 3: Conectar Tools

Arrastra y conecta estos nodos como tools del agente:

| Tool | Nodo n8n | Descripción |
|------|----------|-------------|
| **Brandbook Search** | Vector Store Tool | Busca en el brandbook indexado |
| **Catálogo** | Google Sheets Tool | Lee/escribe en el catálogo |
| **Guardar Prompt** | Google Sheets Tool | Guarda prompts aprobados en hoja "Prompts" |
| **Calculator** | Calculator Tool | Calcular dimensiones, ratios |

#### Nodo 4: Conectar Memory

- **Window Buffer Memory**: últimas 20 interacciones
- Permite conversaciones de diseño continuadas

---

## Ejercicio 3: Probar el Agente con Escenarios Reales
**⏱️ 30 minutos**

### Instrucciones

Prueba tu agente con estos 5 escenarios:

#### Escenario 1: Generar prompt para nuevo modelo

```
Tú: "Necesito un prompt para el nuevo modelo 'Loafer Riviera', 
     color azul navy en suede, para hombre. Quiero un shot editorial."

Esperado: El agente consulta el brandbook, genera un prompt detallado en inglés
con el estilo correcto, incluye negative prompt, y sugiere 2-3 variaciones.
```

#### Escenario 2: Evaluar un render

```
Tú: "Evalúa este render del Oxford Classico. [Describe o adjunta imagen]
     ¿Cumple con los estándares de marca?"

Esperado: El agente consulta los estándares del brandbook y da una evaluación
con puntuación y feedback específico.
```

#### Escenario 3: Crear serie de 3 renders coherentes

```
Tú: "Necesito 3 prompts para una serie del Stiletto Noire:
     1) macro de la textura
     2) shot completo en mármol
     3) lifestyle con modelo"

Esperado: 3 prompts coherentes entre sí que mantengan la misma estética.
```

#### Escenario 4: Consulta de catálogo

```
Tú: "¿Cuántos modelos de mujer en patent leather tenemos?"

Esperado: El agente usa el tool de Google Sheets, filtra y responde.
```

#### Escenario 5: Pregunta sobre la marca

```
Tú: "¿Cuáles son nuestros fondos aprobados para fotografía de producto?"

Esperado: El agente consulta el brandbook via RAG y responde con precisión.
```

### Tabla de resultados

| Escenario | ¿Usó el tool correcto? | ¿Respuesta correcta? | ¿Consultó brandbook? | Calidad (1-5) |
|-----------|----------------------|---------------------|--------------------|--------------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

---

## Ejercicio 4: Flujo Automatizado de Revisión Visual
**⏱️ 25 minutos**

### Instrucciones

Crea un workflow que use tu agente como revisor automático de renders.

#### Workflow: Auto-Review Pipeline

```
[Google Drive Trigger: nuevo archivo en /renders/raw/]
    ↓
[AI Agent (ArtBot): "Evalúa este render según nuestro brandbook.
    Archivo: {{nombre_archivo}}
    Tipo de producto: (extracto del nombre de archivo)
    
    Responde en JSON:
    {
      'aprobado': true/false,
      'puntuacion': 1-10,
      'coherencia_marca': 1-10,
      'calidad_tecnica': 1-10,
      'feedback': 'texto',
      'mejoras_sugeridas': ['mejora 1', 'mejora 2']
    }"]
    ↓
[IF: aprobado == true]
    ├── SÍ → [Google Drive: mover a /renders/aprobados/]
    │         [Slack: "✅ Render aprobado: {{nombre}} — {{puntuacion}}/10"]
    └── NO → [Google Drive: mover a /renders/revision/]
              [Slack: "⚠️ Render para revisión: {{nombre}} — {{feedback}}"]
              [Google Sheets: log de revisiones]
```

---

## 🚀 Entregable PFC — Clase 25

> 📦 **Agente Director de Arte funcional**

### Checklist de entrega

- [ ] **Agente ArtBot funcional** en n8n
  - System Prompt completo
  - Mínimo 3 tools conectados
  - Memory configurada

- [ ] **RAG con brandbook** indexado y funcionando
  - Prueba de consulta exitosa

- [ ] **5 escenarios probados** con tabla de resultados

- [ ] **Pipeline de Auto-Review** funcional
  - Nuevo render → evaluación automática → clasificación

- [ ] **Workflow exportado** (JSON de n8n)

### Formato de entrega

```
PFC_Clase25_[NombreMarca]/
├── n8n/
│   ├── workflow_artbot.json
│   └── workflow_auto_review.json
├── brandbook/
│   ├── brandbook_texto.md
│   └── prompts_aprobados.md
├── pruebas/
│   ├── tabla_resultados_escenarios.md
│   └── capturas_conversaciones/ (screenshots del chat)
└── nota_aprendizaje.md
```

---

## Criterios de Evaluación

| Criterio | Peso | Excelente (5) | Correcto (3) | Insuficiente (1) |
|----------|------|--------------|--------------|-------------------|
| **Agente funcional** | 30% | Responde correctamente en los 5 escenarios usando tools adecuados | 3-4 escenarios correctos | &lt;3 escenarios o agente no funciona |
| **RAG configurado** | 25% | Brandbook indexado, consultas precisas | Indexado pero consultas parciales | RAG no funciona |
| **Calidad del System Prompt** | 25% | 7 secciones, con examples y guardrails completos | Funcional pero genérico | Incompleto |
| **Auto-Review Pipeline** | 20% | Pipeline completo con clasificación y notificaciones | Pipeline parcial | Sin pipeline |

---

## 📎 Recursos de Clase

- [n8n AI Agent](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/) — Documentación
- [n8n Vector Store](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/) — Nodos de RAG
- [Supabase pgvector](https://supabase.com/docs/guides/ai) — Vector store
