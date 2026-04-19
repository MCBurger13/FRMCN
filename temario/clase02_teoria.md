---
clase: 2
tipo: teórica
audiencia: conjunta
bloque: 1 — Fundamentos
titulo: "Glosario y Fundamentos — Alfabetización Técnica"
duracion: "1.5 horas"
modulo_html: modulo2.html
practica_asociada: false
---

# Clase 2 · Teórica · Conjunta
# Glosario y Fundamentos — Alfabetización Técnica

> *Habla el idioma de las máquinas. De usuario pasivo a arquitecto de soluciones de IA.*

**Duración estimada:** 1.5 horas

---

## Navegación de la clase

1. [Desmitificando la "Caja Negra"](#1-desmitificando-la-caja-negra)
2. [Diccionario Ejecutivo (I): Cerebro y Memoria](#2-diccionario-ejecutivo-i-cerebro-y-memoria)
3. [Diccionario Ejecutivo (II): Control de Riesgos](#3-diccionario-ejecutivo-ii-control-de-riesgos)
4. [Diccionario Ejecutivo (III): Operaciones y Herramientas](#4-diccionario-ejecutivo-iii-operaciones-y-herramientas)
5. [Directorio de Plataformas Clave](#5-directorio-de-plataformas-clave)
6. [Quiz de Conocimientos](#6-quiz-de-conocimientos)

---

## Conceptos clave de esta clase

`Token` · `Ventana de Contexto` · `Temperature` · `Multimodalidad` · `Deep Think` · `Alucinación` · `Shadow AI` · `RAG` · `MCP` · `Grounding` · `In-painting` · `Zero-Shot / Few-Shot` · `System Prompt` · `User Prompt` · `Gems / GPTs` · `Deep Research` · `Chatbot vs. Agente`

---

## 1. Desmitificando la "Caja Negra"

En 2026, el analfabetismo técnico en IA no es solo una barrera para la productividad; es una **vulnerabilidad de ciberseguridad corporativa**. Muchos ven a la IA como magia: entra texto y sale resultado. Este módulo abre esa caja. No vamos a aprender a construir un motor, pero sí para qué sirve el acelerador, el freno y cómo conectarle un remolque.

> 💡 **Frase Clave:** "No necesitas ser desarrollador de software para usar IA, pero necesitas fluidez operativa para ser el arquitecto de tus propias soluciones."

### El Ciclo de Iteración (El nuevo proceso de trabajo)

La educación tradicional enseñaba procedimientos lineales (A → B → C). La IA Generativa es probabilística. Debemos interiorizar un **proceso iterativo hombre-máquina**:

| Paso | Fase | Descripción |
|------|------|-------------|
| 1 | **Instrucción** | Diseño del Prompt estructurado (RCTRF, PAIN, etc.) |
| 2 | **Borrador Cero** | Evaluación crítica del primer resultado (**Draft Zero**). Nunca lo uses tal cual. |
| 3 | **Refinamiento** | Ajuste de instrucciones y feedback a la IA ("Más formal", "Quita la intro") |
| 4 | **Resultado Final** | Producto de calidad directiva listo para usar |

> ⭐ **Regla:** El primer resultado de la IA NUNCA es el resultado final. Es un borrador sobre el que iterar, como un briefing de diseño del que salen múltiples versiones.

---

## 2. Diccionario Ejecutivo (I): Cerebro y Memoria

Estos términos explican cómo "piensa", "recuerda" y "percibe" la máquina. Impactan directamente en tu facturación y en la calidad de tu trabajo.

### A. Token *(La Moneda / El Ladrillo)*

La unidad básica de información. La IA no lee palabras, lee fragmentos (Tokens). En español, **1.000 tokens ≈ 750 palabras**. Todo en la IA se cobra y mide en tokens.

> 🧠 **Analogía:** Es el "megabyte" de la era IA. Cuando subes un manual de producto, necesitas saber que pesa 100K tokens para calcular si cabe en la ventana de contexto del modelo.

### B. Ventana de Contexto *(Memoria RAM)*

Cantidad máxima de tokens que la IA mantiene "en mente" en un solo chat. Si la superas, sufre amnesia y olvida las primeras instrucciones.

> 🧠 **Analogía:** Modelos antiguos tenían una "mesa de avión" (1 folio). Gemini 3.1 Pro tiene una "mesa de conferencias" (1.500 páginas a la vez).

**Tabla comparativa de ventanas de contexto (2026):**

| Modelo | Ventana de Contexto | Equivalencia práctica |
|--------|--------------------|-----------------------|
| GPT-4 (antiguo) | 8K tokens | ~6 páginas |
| Claude 4.6 Sonnet | 200K tokens | ~150 páginas |
| ChatGPT-5 | 256K tokens | ~190 páginas |
| Gemini 3.1 Pro | 2M tokens | ~1.500 páginas |

### C. Temperatura *(Termostato Creativo)*

Parámetro (0.0 a 1.0) que controla la aleatoriedad de las respuestas.

| Valor | Comportamiento | Ideal para |
|-------|---------------|------------|
| **0.0** | Lógico, predecible, siempre la misma respuesta | Finanzas, código, datos |
| **0.5** | Equilibrado | Redacción corporativa |
| **1.0** | Creativo, impredecible, puede sorprender | Brainstorming, ideas, marketing creativo |

> 🔥 **Clave:** Baja la temperatura si buscas la verdad; súbela si buscas ideas disruptivas.

### D. Multimodalidad & Deep Think

**Multimodalidad:** Capacidad de procesar texto, imagen, audio y código simultáneamente (como la percepción humana). Ejemplo: subes la foto de un zapato y le pides "¿qué tipo de piel es esta?" → lo analiza visualmente.

**Deep Think:** Modelos (ej. O1, O3) que "pausan" para simular múltiples cadenas lógicas antes de responder. Para matemáticas, lógica compleja o estrategia avanzada.

---

## 3. Diccionario Ejecutivo (II): Control de Riesgos

Para usar la IA en la empresa, hay que asegurar la veracidad de los datos y proteger la propiedad intelectual.

### 🔴 Alucinación

Respuesta **falsa o inventada**, pero redactada con una elocuencia aplastante. Ocurre porque la IA intenta "rellenar huecos" estadísticamente si le falta información real.

> ⚠️ **Peligro real:** En el sector del lujo, una alucinación puede generar una ficha de producto con materiales falsos o precios inventados. Siempre verificar datos críticos.

**Cómo reducir alucinaciones:**
1. Proporcionar contexto específico (adjuntar PDFs, datos reales)
2. Usar RAG (conectar a tu base de datos)
3. Activar búsqueda web (Grounding)
4. Pedir **citas y fuentes** explícitas
5. Usar temperatura baja (0.0-0.3) para datos factuales

### 🔴 Shadow AI (IA en la Sombra)

Uso **no autorizado** de IAs gratuitas por empleados. Riesgo masivo de fuga de datos, ya que estos modelos entrenan con la información que se les da.

> 🛡️ **Ejemplo de riesgo:** Un diseñador sube el próximo catálogo completo a un modelo gratuito para "que le ayude a describir los productos". Esas imágenes y textos ahora alimentan el modelo global que usa tu competencia.

### 🟡 RAG *(Retrieval-Augmented Generation)*

Técnica para **evitar alucinaciones**. Conecta el cerebro genérico de la IA a tu base de datos corporativa. La IA busca primero ahí y responde *solo* con tus datos.

> 🧠 **Analogía:** Hacer un examen a **libro abierto** con tu manual de empresa sobre la mesa, en lugar de tirar de memoria genérica.

### 🟢 MCP *(Model Context Protocol)*

Protocolo universal y seguro (nuevo en 2026). Permite que la IA **"visite" y lea tus herramientas locales** (Slack, Drive, GitHub, Supabase) sin tener que enviarle a la nube toda tu información corporativa.

> 🧠 **Analogía:** Darle a la IA una "tarjeta de visitante" temporal, en lugar de enviarle un camión con todas las carpetas confidenciales.

**¿Por qué MCP cambia las reglas del juego?**
- Antes: Copiar y pegar datos sensibles en el chat → riesgo de filtración
- Ahora: La IA accede a tu Drive/Slack/BBDD directamente, lee lo que necesita, y la información nunca sale de tu infraestructura

---

## 4. Diccionario Ejecutivo (III): Operaciones y Herramientas

Términos del día a día para pedir resultados útiles o crear flujos de trabajo autónomos.

### Zero-Shot vs. Few-Shot

Técnicas de Prompting:

| Técnica | Definición | Cuándo usar |
|---------|-----------|-------------|
| **Zero-shot** | Pedirle algo sin darle ningún ejemplo | Tareas genéricas o simples |
| **Few-shot** | Darle 2-3 ejemplos de tu estilo corporativo para que lo imite | Cuando necesitas que replique un tono, formato o estilo de marca exacto |

> 🧠 **Analogía del Pasante Internacional:** Brillante pero literal. Si no le das ejemplos de tu "cultura corporativa" (Few-shot), escribirá en su estilo, no en el tuyo.

### System Prompt vs. User Prompt

| | System Prompt | User Prompt |
|---|---|---|
| **¿Qué es?** | El "mensaje padre" / configuración base | Lo que tú escribes con tu instrucción |
| **Analogía** | La **descripción del puesto** de trabajo | El **encargo concreto** del día |
| **Cambia?** | Permanece estable | Cambia constantemente |
| **Quien manda?** | Define las reglas intocables | Se somete a las reglas del System Prompt |

### Gems / GPTs Personalizados

"Empleados empaquetados". En vez de hacer un prompt largo cada vez, guardas las instrucciones y archivos en un "Gem" (Google) o "GPT" (OpenAI) que hace siempre esa tarea.

**Ejemplos para la tienda de zapatos:**
- 🎨 Gem "Director de Arte" → genera prompts visuales coherentes con el brandbook
- 📈 GPT "Social Media Manager" → redacta posts en el tono de la marca
- 📊 Gem "Analista de Competencia" → monitoriza precios de 10 competidores

### Deep Research

Investigador autónomo. No da un simple resumen; busca, lee, identifica que le falta por saber, vuelve a buscar y redacta un **informe de grado consultor** con fuentes.

### Grounding (Anclaje)

Proceso técnico mediante el cual vinculamos las respuestas de la IA a **fuentes de verdad verificables** (Google Search, documentos internos) para reducir alucinaciones y aumentar la fiabilidad.

### In-painting

Técnica de edición de imágenes generativa que permite **modificar, añadir o eliminar objetos** dentro de un área seleccionada de una imagen existente, integrando los cambios de forma realista sin alterar el resto.

> 👟 **Ejemplo en nuestra tienda:** Tienes un render de zapato perfecto, pero la suela no convence. Con in-painting seleccionas solo la suela y le dices "suela de goma blanca deportiva". El resto del zapato permanece intacto.

### Chatbot vs. Agente Autónomo

| | Chatbot (Conversacional) | Agente (Acción) |
|---|---|---|
| **Comportamiento** | Pasivo. Espera tus preguntas y responde | Persigue un objetivo activamente |
| **Analogía** | Un **mapa de papel**: tiene mucha info, pero requiere que TÚ tomes decisiones | **Waze**: lee el tráfico, decide cambiar de ruta, te avisa del retraso Y recalcula |
| **Herramientas** | Solo texto (y a veces imagen) | Puede usar Tools: enviar emails, consultar BBDD, ejecutar código |
| **En clase 23-28** | Lo veremos como base | Lo construiremos como agentes funcionales |

---

## 5. Directorio de Plataformas Clave

Tu panel de control de acceso rápido a los ecosistemas líderes del mercado.

### Perplexity AI — *El Motor de Respuestas (Deep Research)*

🔗 [perplexity.ai](https://perplexity.ai)

A diferencia de un buscador tradicional que devuelve un listado de enlaces azules, Perplexity rastrea la web en tiempo real, lee el contenido por ti y redacta un informe consolidado **citando cada fuente** con precisión.

**Herramientas del ecosistema:**
| Herramienta | Descripción |
|-------------|-------------|
| **Nuevo Chat** | Búsqueda rápida en tiempo real con opción "Pro" (Deep Research) |
| **Espacios (Spaces)** | Entornos colaborativos para invitar a tu equipo y subir archivos propios |
| **Comet** | API para desarrolladores para crear flujos de investigación |
| **Computer (Desktop)** | App de escritorio nativa para búsquedas globales desde tu teclado |

---

### Ecosistema Google — *Integración y Multimodalidad*

🔗 [gemini.google.com](https://gemini.google.com)

Suite inigualable por su ventana de contexto masiva y su integración nativa con Workspace (Docs, Sheets, Drive). Permite analizar datos gigantescos sin salir del entorno de trabajo habitual.

**Herramientas del ecosistema:**
| Herramienta | Descripción |
|-------------|-------------|
| **Gemini** | Interfaz principal conversacional con modelos Pro y Flash |
| **Gems** | Asistentes preconfigurados con rol, documentos e instrucciones persistentes |
| **NotebookLM** | Investigador personal con 100% Grounding en tus PDFs + generador de podcasts |
| **Google AI Studio** | Entorno técnico para ajustar temperatura y parámetros avanzados |
| **Stitch** | Composición visual colaborativa con IA |
| **Flow** | Flujos creativos asistidos por IA |
| **Antigravity** | Experimentación creativa con IA generativa |

---

### Ecosistema OpenAI — *Razonamiento y Aplicaciones*

🔗 [chatgpt.com](https://chatgpt.com)

El pionero y estándar de la industria. Destaca por su capacidad lógica deductiva (Deep Think) y el ecosistema de integraciones más maduro del mercado.

**Herramientas del ecosistema:**
| Herramienta | Descripción |
|-------------|-------------|
| **Nuevo Chat (ChatGPT)** | Acceso a modelos estándar y O1/O3 para razonamiento profundo |
| **GPTs Personalizados** | Versiones de ChatGPT configuradas por ti que ejecutan "Acciones" |
| **Aplicaciones (Store)** | Marketplace con GPTs creados por la comunidad y empresas |
| **DALL-E 3** | Generación de imagen integrada directamente en el chat |

---

### Ecosistema Anthropic — *Redacción y Análisis*

🔗 [claude.ai](https://claude.ai)

Rey de la naturalidad escribiendo. Suena más humano, tiene razonamiento ético superior y es brillante analizando documentos gigantescos.

**Herramientas del ecosistema:**
| Herramienta | Descripción |
|-------------|-------------|
| **Claude (Chat)** | Interfaz conversacional con el modelo Sonnet y Opus |
| **Projects** | Espacios con instrucciones + archivos persistentes (como GPTs pero para Claude) |
| **Artifacts** | Documentos interactivos generados en tiempo real (código, textos, diagramas) |
| **MCP** | Protocolo abierto creado por Anthropic para conectar IA con herramientas externas |

---

### Freepik — *Generación Visual para Diseño y Marketing*

🔗 [freepik.com](https://freepik.com)

Plataforma de generación de imagen con modelos propios (Mystic) y herramientas específicas para profesionales creativos.

**Herramientas del ecosistema:**
| Herramienta | Descripción |
|-------------|-------------|
| **Generador de Imagen** | Modelos Mystic para crear imágenes fotorrealistas de producto |
| **Freepik Spaces** | Entornos colaborativos de generación visual |
| **Reimagine** | Variaciones automáticas de una imagen base |
| **Mockup Generator** | Inserción automática de diseños en escenas fotorrealistas |

---

## 6. Quiz de Conocimientos (10 preguntas)

**1.** ¿Cuántas palabras equivalen aproximadamente a 1.000 tokens en español?

- a) 1.000 palabras exactas
- b) 500 palabras
- c) ✅ 750 palabras
- d) 250 palabras

**2.** Si estás redactando un business plan donde las cifras deben ser 100% exactas, ¿qué temperatura deberías pedir?

- a) 1.0 (máxima creatividad)
- b) ✅ 0.0-0.2 (máxima precisión)
- c) 0.5 (equilibrado)
- d) No importa, la IA siempre acierta

**3.** ¿Qué es una "Alucinación" en el contexto de la IA?

- a) Un error técnico que bloquea el sistema
- b) ✅ Una respuesta falsa o inventada, redactada con elocuencia aplastante
- c) Una función especial para generar imágenes surrealistas
- d) Un efecto visual en las herramientas de vídeo

**4.** ¿Qué diferencia hay entre Zero-Shot y Few-Shot?

- a) ✅ Zero-Shot no da ejemplos; Few-Shot da 2-3 ejemplos para que la IA imite tu estilo
- b) Zero-Shot es para texto y Few-Shot es para imágenes
- c) Son dos modelos de IA diferentes
- d) Zero-Shot es gratis y Few-Shot es de pago

**5.** ¿Qué hace el RAG (Retrieval-Augmented Generation)?

- a) Genera imágenes más realistas
- b) ✅ Conecta la IA a tu base de datos para que responda solo con tus datos
- c) Traduce automáticamente a otros idiomas
- d) Aumenta la velocidad de procesamiento

**6.** ¿Qué es el MCP (Model Context Protocol)?

- a) Un nuevo modelo de IA de Meta
- b) Una extensión para navegadores web
- c) ✅ Un protocolo universal que permite a la IA acceder a tus herramientas locales sin enviar datos a la nube
- d) Un método de compresión de tokens

**7.** ¿Cuál es la diferencia principal entre un Chatbot y un Agente?

- a) ✅ El chatbot espera preguntas; el agente persigue objetivos y usa herramientas para actuar
- b) El chatbot es más caro que el agente
- c) El chatbot genera imágenes; el agente genera texto
- d) No hay diferencia, son sinónimos

**8.** ¿Para qué sirve el In-painting?

- a) Para crear imágenes desde cero
- b) ✅ Para modificar una parte específica de una imagen existente sin alterar el resto
- c) Para añadir subtítulos a un vídeo
- d) Para traducir texto dentro de una imagen

**9.** ¿Cuál es el riesgo de "Shadow AI" en una empresa?

- a) Que la IA funcione más lento
- b) ✅ Que empleados usen IAs gratuitas sin autorización, filtrando datos de la empresa para entrenar modelos ajenos
- c) Que las fotos salgan con sombras incorrectas
- d) Que la competencia copie tu web

**10.** Si necesitas que Claude escriba copies de producto imitando exactamente el tono de tu marca de lujo, ¿qué técnica usas?

- a) Zero-Shot con temperatura alta
- b) ✅ Few-Shot: le das 2-3 ejemplos reales de copies de tu marca para que imite el estilo
- c) RAG con búsqueda web activada
- d) Cambiar al modelo Gemini

---

## 🚀 PFC — Tarea de Glosario

> Esta clase es puramente teórica y no tiene práctica independiente. Los conceptos aprendidos aquí se aplicarán directamente en la **Clase 3 (Estudio Creativo I)** y en la **Clase 4 (Lab Visual — Primeros Renders)**.
>
> **Tarea de lectura:** Revisar el glosario y confirmar que se comprenden todos los términos. Estos términos se usarán constantemente durante el resto del curso.

### Checklist de conceptos dominados

- [ ] Sé qué es un Token y puedo calcular cuántos tokens pesa un documento
- [ ] Entiendo la Ventana de Contexto y por qué no debo mezclar proyectos en un mismo chat
- [ ] Sé la diferencia entre Temperature 0.0 y 1.0 y cuándo usar cada una
- [ ] Entiendo qué es una Alucinación y las 5 formas de reducirla
- [ ] Sé qué es Shadow AI y por qué es un riesgo de seguridad
- [ ] Entiendo RAG, MCP y Grounding
- [ ] Distingo entre System Prompt y User Prompt
- [ ] Sé qué son los Gems/GPTs y puedo imaginar 3 usos para la tienda de zapatos
- [ ] Entiendo la diferencia entre Chatbot y Agente
- [ ] Sé usar In-painting conceptualmente

---

## 📎 Recursos Adicionales

- [Perplexity AI](https://perplexity.ai)
- [Gemini](https://gemini.google.com)
- [ChatGPT](https://chatgpt.com)
- [Claude](https://claude.ai)
- [Freepik](https://freepik.com)
- [NotebookLM](https://notebooklm.google.com)
- [Google AI Studio](https://aistudio.google.com)
