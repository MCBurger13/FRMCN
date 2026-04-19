---
clase: 1
tipo: teórica
audiencia: conjunta
bloque: 1 — Fundamentos
titulo: "El Paisaje de los LLMs — El Nuevo Paradigma"
duracion: "1.5 - 2 horas"
modulo_html: modulo1.html
---

# Clase 1 · Teórica · Conjunta
# El Paisaje de los LLMs — El Nuevo Paradigma

> *De la estrategia conceptual a la ejecución técnica. Entendiendo la nueva mesa de operaciones para diseño y marketing.*

**Duración estimada:** 1.5 – 2 horas

---

## Navegación de la clase

1. [El Cambio de Paradigma](#1-el-cambio-de-paradigma)
2. [El Mapa del Mercado Actual](#2-el-mapa-del-mercado-actual)
3. [Precios y Seguridad](#3-precios-y-seguridad)
4. [Anatomía de la Interfaz](#4-anatomía-de-la-interfaz)
5. [El Concepto de "Cerebro"](#5-el-concepto-de-cerebro)
6. [Prompt Engineering](#6-prompt-engineering)
7. [Casos de Uso en Diseño y Marketing](#7-casos-de-uso-en-diseño-y-marketing)
8. [Demo Interactiva + Quiz + PFC](#8-sección-práctica)

---

## Conceptos clave de esta clase

`Tokens` · `Context Window` · `Temperature` · `Multimodalidad` · `Deep Think` · `RAG` · `MCP` · `System vs. User Prompts` · `Gems/GPTs` · `Grounding` · `In-painting` · `Chatbot vs. Agent`

---

## Herramientas presentadas

| Herramienta | Uso principal |
|-------------|---------------|
| **ChatGPT (OpenAI)** | Navaja suiza: texto, voz, visión, agentes (GPTs) |
| **Gemini (Google)** | Suite integrada en Workspace, contexto masivo |
| **Claude (Anthropic)** | Redacción natural, análisis de documentos extensos |
| **Grok (xAI)** | Datos en tiempo real desde X (Twitter, tendencias) |
| **Freepik** | Generación de imagen para diseño y marketing |
| **Midjourney** | Generación de imagen de alta calidad estética |
| **DALL-E 3** | Generación integrada en ChatGPT |
| **Perplexity AI** | Búsqueda con fuentes verificadas |
| **Gamma App** | Presentaciones profesionales desde texto |

---

<ConceptCard title="1. El Cambio de Paradigma">

### De lo Determinista a lo Probabilístico

Antes de abrir una herramienta y escribir, necesitamos entender por qué estamos viviendo la mayor revolución industrial desde la llegada de internet. Para ello, hay que entender cómo han funcionado los ordenadores hasta hoy.

<ComparisonGrid>
  <ComparisonCard title="La Era Determinista" image="https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1000&auto=format&fit=crop">
    <p>El software tradicional se basa en <strong>reglas estrictas</strong>. Si pulsas A, sucede B. Una fórmula en Excel siempre da el mismo resultado. El ordenador no "entiende", sigue instrucciones de un programador.</p>
    <Callout type="analogy">
      Como un tren sobre raíles. Solo puede ir por donde se ha construido la vía. Ante un obstáculo imprevisto, se detiene o da "Error 404".
    </Callout>
  </ComparisonCard>

  <ComparisonCard title="La Era Probabilística" image="https://i.pinimg.com/564x/44/16/e8/4416e8b71c305c4f16ab348f360ee51e.jpg" highlight={true}>
    <p>¿Qué pasa si no podemos escribir reglas para todo? Usamos <strong>Redes Neuronales</strong>: aprenden reconociendo patrones a través de prueba y error masivo.</p>
    <Callout type="phrase">
      "Ya no programamos las reglas; le damos al ordenador los datos y dejamos que él mismo aprenda las reglas."
    </Callout>
  </ComparisonCard>
</ComparisonGrid>

### ¿Qué es una Red Neuronal?

Es un sistema matemático complejo inspirado libremente en las conexiones de nuestro cerebro. Aprende de ejemplos.

<Callout type="analogy">
  Es como enseñarle a un niño lo que es un "gato". No le das reglas geométricas exactas (4 patas, 2 orejas...). Le enseñas 1.000 fotos de gatos. Al final, la red "intuye" y reconoce el patrón.
</Callout>

### ¿Qué es un LLM?

Una red neuronal gigantesca entrenada con **todo el texto público de la humanidad**. Su función: predecir la palabra más probable a continuación.

<Callout type="analogy">
  Un LLM es como el teclado predictivo de WhatsApp, pero con un máster en Harvard, habiendo leído todas las bibliotecas del mundo. Sabe lo que buscas porque ya lo ha leído en otro lugar o contexto.
</Callout>

---

</ConceptCard>

<ConceptCard title="2. El Mapa del Mercado Actual">

Hoy en día no existe "una IA", existen diferentes modelos con "personalidades" y capacidades distintas. Usar el correcto para la tarea adecuada es la clave del éxito.

### Los 4 Grandes

<ModelGrid>
  <ModelCard name="Anthropic (Claude 4.6)" subname="El Redactor Jefe" href="https://claude.ai" brand="claude">
    Rey de la naturalidad escribiendo y programación. Suena más humano, tiene razonamiento ético superior y es brillante analizando documentos gigantes sin perderse.
    <br/><br/>
    <strong>Ideal para:</strong> Copywriting de marca, análisis de brand guidelines, revisión de textos largos, generación de código.
  </ModelCard>

  <ModelCard name="Google (Gemini 3.1 Pro)" subname="El Devorador de Datos" href="https://gemini.google.com" brand="gemini">
    Integrado en Workspace. Su "ventana de contexto infinita" permite subir horas de vídeo o bases de datos enteras de una vez sin olvidar nada.
    <br/><br/>
    <strong>Ideal para:</strong> Análisis de catálogos de producto, integración con Google Sheets/Docs/Slides, trabajo con vídeo y multimedia.
  </ModelCard>

  <ModelCard name="OpenAI (ChatGPT-5)" subname="La Navaja Suiza" href="https://chatgpt.com" brand="chatgpt">
    El pionero y todoterreno. Excelente en lógica deductiva, voz/visión en tiempo real y creación de agentes personalizados (GPTs). A veces suena "robótico".
    <br/><br/>
    <strong>Ideal para:</strong> Agentes personalizados (GPTs), análisis lógico, generación de imágenes con DALL-E 3 integrado.
  </ModelCard>

  <ModelCard name="xAI (Grok 3)" subname="El Periodista" href="https://x.com/i/grok" brand="grok">
    Tiene acceso directo y sin filtros al caudal de datos en tiempo real de X (Twitter). Inigualable para análisis de tendencias de última hora y sentimiento social.
    <br/><br/>
    <strong>Ideal para:</strong> Monitorización de tendencias de moda, análisis de sentimiento sobre marcas, datos en tiempo real.
  </ModelCard>
</ModelGrid>

### ¿Cuál uso para qué?

| Necesidad en Diseño/Marketing | Modelo recomendado |
|-------------------------------|-------------------|
| Redactar copy publicitario natural | Claude |
| Analizar un catálogo de 500 productos en Excel | Gemini |
| Crear un agente de atención al cliente automatizado | ChatGPT (GPTs) |
| Saber qué dice Twitter sobre una tendencia de calzado ahora mismo | Grok |
| Buscar datos con fuentes verificables para un informe | Perplexity AI |

---

</ConceptCard>

<ConceptCard title="3. Precios y Seguridad">

### El Riesgo de lo Gratis

<Callout type="warning">
  <strong>Regla de seguridad:</strong> "Si es gratis, los datos estratégicos de tu empresa son el producto con el que entrenan a la IA mundial."
</Callout>

El modelo "gratuito" (Freemium) cuesta dinero a la empresa en tiempo perdido y riesgos en materia de seguridad. El modelo "Pro" (~20-30€/mes) garantiza acceso a modelos insignia sin cuellos de botella. Solo las licencias "Enterprise" ofrecen total seguridad.

### Licencias Enterprise / Team

Es **obligatorio** el uso corporativo de cuentas de equipo. Garantizan por contrato la "Retención de Datos Cero".

<Callout type="info">
  <strong>El Modo Las Vegas:</strong> Lo que pasa en tu chat de empresa, se queda en tu chat de empresa.
</Callout>

### Tabla de comparativa de niveles

| Nivel | Precio aprox. | Modelos disponibles | Seguridad de datos |
|-------|---------------|--------------------|--------------------|
| **Free** | 0€ | Limitados / antiguos | ❌ Datos usados para entrenar |
| **Pro / Plus** | 20-30€/mes | Modelos insignia | ⚠️ Parcial (opt-out manual) |
| **Team** | 25-30€/usuario/mes | Todos + funciones equipo | ✅ Zero Data Retention |
| **Enterprise** | Negociable | Todos + SLA + SSO | ✅✅ Máxima garantía contractual |

---

</ConceptCard>

<ConceptCard title="4. Anatomía de la Interfaz">

Tu nueva mesa de operaciones. Todas las herramientas comparten este ADN visual.

### Elementos comunes de la interfaz

#### Barra Lateral
Tu archivo de proyectos. Contiene accesos directos ("Mis cosas", "Gems") y el historial de "cerebros" pasados.

#### Selector de Modelo
Arriba a la derecha. Permite cambiar el motor de la IA según la complejidad de la tarea requerida (Ej: Google AI Plus).

#### La Caja de Prompt
El centro de control. Desde aquí se escribe, se adjuntan archivos o se activan funciones especiales como generación de imágenes.

#### Funciones clave de la interfaz

| Función | Qué hace | Dónde está |
|---------|----------|------------|
| **Nuevo Chat** | Crea un "cerebro" nuevo, limpio | Barra lateral |
| **Adjuntar archivos** | Sube PDFs, imágenes, hojas de cálculo | Caja de prompt (clip 📎) |
| **Buscar en la web** | Activa búsqueda en tiempo real | Toggle en la caja de prompt |
| **Generar imagen** | Activa la generación visual dentro del chat | Icono de imagen o texto |
| **Modo Deep Think** | Razonamiento paso a paso más profundo | Selector o toggle específico |

---

</ConceptCard>

<ConceptCard title='5. El Concepto de "Cerebro"'>

<Callout type="warning">
  El error número uno en las empresas es usar un solo chat continuo como si fuera un buscador web. Empezar hablando de facturas y terminar pidiéndole un post para Instagram. La IA se confunde ("alucinación cruzada").
</Callout>

### Limitaciones Técnicas

#### Los "Tokens" (Efecto Pez Dorado)

La IA lee fragmentos de texto (tokens) y tiene un límite de memoria temporal. Si llenas esa memoria chateando meses sobre lo mismo, empieza a olvidar las primeras instrucciones para hacer hueco.

#### Lost in the Middle

Al procesar documentos inmensos, la IA presta total atención al principio y al final, pero suele ignorar matices del medio.

**Solución:** Repite siempre tus directrices vitales al final del prompt.

### Estrategia del Usuario

#### Crear un "Cerebro" Especializado

Un "Nuevo Chat" es un consultor con amnesia. Si lo educas sobre "Campaña Zapatos Verano" (dándole tono de marca, PDFs del catálogo y contexto), ese chat se convierte de forma perenne en tu **Asistente de Campaña**.

#### Evitar la Contaminación

Si en el chat de "Campaña Zapatos" pides un informe financiero, los conceptos colisionarán y la IA "alucinará" inventando datos.

<Callout type="phrase">
  <strong>Regla de Oro:</strong>
  <br/>"Nuevo Proyecto = Nuevo Chat."
  <br/>"Nuevo Departamento = Nuevo Chat."
</Callout>

### Ejemplos para nuestra tienda de zapatos

| Chat / "Cerebro" | Qué le enseñas | Para qué lo usas |
|-------------------|----------------|-------------------|
| 🎨 "Diseño - Catálogo SS26" | Brandbook, paleta colores, fotos referencia | Generar prompts para renders de zapatos |
| 📈 "Marketing - RRSS" | Tono de voz, buyer persona, calendario editorial | Redactar posts, copies publicitarios |
| 📊 "Business Plan Tienda" | Modelo de negocio, datos de mercado | Análisis financiero, pricing |
| 🤖 "Atención al Cliente" | FAQ, catálogo, políticas de devolución | Respuestas automatizadas |

---

</ConceptCard>

<ConceptCard title="6. Prompt Engineering">

<Callout type="analogy">
  Trabajar con IA es como contratar a un becario brillante pero que no sabe NADA de tu empresa. Un prompt no es una búsqueda web, es un <strong>encargo profesional (briefing)</strong> detallado.
</Callout>

### La Fórmula Estrella: R.C.T.R.F.

<FormulaGrid title="Fórmula R.C.T.R.F.">
  <FormulaStep number={1} title="Rol">"Actúa como el director creativo de una marca de zapatos de lujo..."</FormulaStep>
  <FormulaStep number={2} title="Contexto">"Nuestra tienda vende calzado de alta gama, posicionamiento premium, público 30-55 años..."</FormulaStep>
  <FormulaStep number={3} title="Tarea">"Redacta el copy para 3 posts de Instagram de lanzamiento de la colección verano..."</FormulaStep>
  <FormulaStep number={4} title="Restricciones">"Máx 150 palabras por post, sin hashtags genéricos, tono sofisticado..."</FormulaStep>
  <FormulaStep number={5} title="Formato">"Entrégalo en Markdown con emojis sutiles y un CTA."</FormulaStep>
</FormulaGrid>

### Otras Estructuras de Alto Rendimiento

<FormulaGrid title="P.A.I.N. — Resolución de Problemas">
  <FormulaStep number={1} title="Problema">"Las ventas online de zapatos cayeron un 20%..."</FormulaStep>
  <FormulaStep number={2} title="Acción">"Analiza los datos y encuentra la causa..."</FormulaStep>
  <FormulaStep number={3} title="Información">"Adjunto el reporte de GA4 del trimestre..."</FormulaStep>
  <FormulaStep number={4} title="Next Steps">"Proporciona 3 medidas correctivas..."</FormulaStep>
</FormulaGrid>

<FormulaGrid title="P.E.C.R.A. — Claridad y Metas">
  <FormulaStep number={1} title="Propósito">"Preparar un pitch deck para inversores..."</FormulaStep>
  <FormulaStep number={2} title="Expectativa">"10 slides directas y visuales..."</FormulaStep>
  <FormulaStep number={3} title="Contexto">"Marca de calzado de lujo buscando 500K€..."</FormulaStep>
  <FormulaStep number={4} title="Requisición">"Extrae los puntos clave del plan adjunto..."</FormulaStep>
  <FormulaStep number={5} title="Acción">"Redacta el texto que diré en voz alta."</FormulaStep>
</FormulaGrid>

<FormulaGrid title="R.O.S.E.S. — Flujos de Trabajo">
  <FormulaStep number={1} title="Rol">"Social Media Manager Senior..."</FormulaStep>
  <FormulaStep number={2} title="Objetivo">"Lanzar la campaña de verano..."</FormulaStep>
  <FormulaStep number={3} title="Situación">"Tenemos 2 semanas y 2 diseñadores..."</FormulaStep>
  <FormulaStep number={4} title="Expectativa">"Un cronograma ágil en tabla..."</FormulaStep>
  <FormulaStep number={5} title="Steps">"Paso 1: Briefing. Paso 2: Assets..."</FormulaStep>
</FormulaGrid>

<FormulaGrid title="C.R.E.A.T.E. — Copywriting y Contenido">
  <FormulaStep number={1} title="Caracterización">"Copywriter de agencia de lujo..."</FormulaStep>
  <FormulaStep number={2} title="Requisición">"Escribe un artículo para el blog..."</FormulaStep>
  <FormulaStep number={3} title="Ejemplos">"Imita este estilo: [texto adjunto]..."</FormulaStep>
  <FormulaStep number={4} title="Ajustes">"Evita jergas. Frases cortas. Sofisticado..."</FormulaStep>
  <FormulaStep number={5} title="Tipo">"Post educativo de lectura rápida..."</FormulaStep>
  <FormulaStep number={6} title="Extras">"Sugiere 3 posibles títulos hook..."</FormulaStep>
</FormulaGrid>

### El Formato Final Importa: Máquinas vs Humanos

#### Markdown (.md)
El "plato servido". Para copiar directamente a Notion, Word o Slack manteniendo el diseño y la jerarquía intactos.

```markdown
## Resumen de Ventas Q3

**Facturación:** 15.000€
* Cliente principal: Acme Corp
* Producto estrella: Licencia Pro
```

#### JSON (.json)
El "tupperware con etiquetas". Idioma de programación para automatizar e integrar los datos generados con tu ERP o base de datos.

```json
{
  "resumen_ventas_q3": {
    "facturacion_total": 15000,
    "cliente_principal": "Acme Corp",
    "producto_estrella": "Licencia Pro"
  }
}
```

#### CSV (.csv)
La "tabla universal". Estructura los datos en texto separado por comas (o punto y coma). Ideal para copiar y pegar directamente en Excel.

```csv
Categoria;Tecnologia;Impacto
Automatización;Robots Autónomos;-40% errores
Rutas;IA Predictiva;-15% tiempos
```

---

</ConceptCard>

<ConceptCard title="7. Casos de Uso en Diseño y Marketing">

Ejemplos reales de cómo la IA generativa impacta directamente en el ROI y los procesos diarios de un equipo creativo y de marketing.

### Caso 1: Departamento de Diseño de Producto

**El Reto:** Generar 20 variaciones de un nuevo modelo de zapato para presentar al comité de diseño (tiempo manual con renders 3D: 3 días).

| | |
|---|---|
| **Herramienta** | Freepik + Gemini NanoBanana 2 + Fórmula P.E.P.A. |
| **Resultado** | 20 variaciones fotorrealistas en 2 horas |
| **💰 Ahorro** | 2.5 días de trabajo de diseño 3D |

### Caso 2: Equipo de Marketing Digital

**El Reto:** Crear el contenido visual y textual para una campaña de lanzamiento en Instagram, LinkedIn y TikTok (50 posts + banners + copies).

| | |
|---|---|
| **Herramienta** | Claude + Fórmula C.R.E.A.T.E. + Freepik |
| **Resultado** | Campaña completa generada en 4 horas |
| **💰 Ahorro** | 8 horas facturables/semana de la agencia |

### Caso 3: Dirección Creativa

**El Reto:** Mantener la consistencia visual de una marca de calzado de lujo en 50 piezas de comunicación diferentes.

| | |
|---|---|
| **Herramienta** | Gem "Director de Arte" + Pomelli + ControlNet |
| **Resultado** | 100% de las piezas alineadas con el brandbook automáticamente |
| **💰 Ahorro** | Eliminación de iteraciones de corrección por inconsistencia visual |

### Caso 4: Análisis de Competencia

**El Reto:** Monitorizar precios, estilos y tendencias de 10 competidores de calzado de lujo en tiempo real.

| | |
|---|---|
| **Herramienta** | Grok + Perplexity AI + Google Sheets AI |
| **Resultado** | Dashboard de competencia actualizado semanalmente en automático |
| **💰 Ahorro** | Una persona a tiempo completo solo para esta tarea |

---

## 8. Sección Práctica

### 🖥️ Demo Interactiva: La Evolución del Prompt

Observa en pantalla cómo la misma orden inicial cambia de un resultado inútil a inteligencia de negocio real estructurada.

#### Fase 1: El Prompt "Buscador" 🔴 Novato

```
> Escribe un post sobre las tendencias del sector del calzado de lujo para 2026.
```

**Análisis:** Texto plano, aburrido, tipo Wikipedia. Usa "En conclusión...". Inusable para una empresa real.

#### Fase 2: La Fórmula R.C.T.R.F. + MD 🔵 Profesional

```
> Actúa como el Director Creativo de una marca de calzado de lujo. (ROL)
> Nuestro objetivo es atraer clientes premium en Instagram mostrando autoridad y exclusividad. (CONTEXTO)
> Redacta un post sobre las tendencias de diseño en calzado de lujo para 2026. (TAREA)
> Máx 3 párrafos, sin hashtags genéricos ni lenguaje técnico, tono sofisticado pero cercano. (RESTRICCIONES)
> Utiliza formato Markdown, titular en H2 y viñetas. (FORMATO)
```

**Análisis:** Cambio radical. Texto estructurado, listo para publicar. Tono persuasivo con objetivo comercial claro.

#### Fase 3: Deep Research + Archivos 🟡 Experto

```
📎 [Archivo Adjunto: Informe_Calzado_Lujo_Bain_2026.pdf]

> ...Basa este post EXCLUSIVAMENTE en las métricas de crecimiento que aparecen en el
> documento adjunto y activa Búsqueda Web para las últimas noticias de moda de esta semana.
```

**Análisis:** Elimina alucinaciones. Fundamentado en datos exactos, porcentajes reales y fuentes verificables. Pasa de "marketing" a "inteligencia de negocio".

#### Fase 4: La Batalla de Modelos

Lanzamos el Prompt Experto de la Fase 3 simultáneamente en dos líderes de mercado:

**ChatGPT-5 (Razonamiento)**
Estructura la información de forma más aséptica, lógica y deductiva. Directo al grano. Ideal si el público objetivo son perfiles analíticos que buscan el dato crudo.

**Claude 4.6 Sonnet**
Entrega un texto con mayor riqueza léxica, flujo narrativo y "empatía". Conecta mejor a nivel humano y persuasivo. Superior para copywriting de marca de lujo.

#### Fase 5: El Idioma de la IA 🟣 Aplicación

**Ejercicio:** Copia el contenido generado en Markdown y pégalo en un documento Word o Notion. Luego, copia el CSV y pégalo directamente en Excel para ver cómo se estructuran las columnas mágicamente.

---

<Quiz questions={[
  {
    question: "¿Cuál es la diferencia fundamental entre el software tradicional (determinista) y la IA (probabilística)?",
    options: ["El software tradicional es más rápido que la IA.", "En la IA programamos las reglas; en el tradicional le damos datos.", "El software tradicional sigue reglas estrictas fijas; la IA aprende patrones de los datos.", "No hay diferencia real, es solo una estrategia de marketing."],
    correctAnswer: 2
  },
  {
    question: "¿Qué pasa con la información corporativa en las versiones GRATUITAS de los modelos?",
    options: ["Se borra a las 24 horas por defecto.", "Se usa para entrenar y mejorar los modelos de la empresa que lo desarrolla.", "Está protegida por el RGPD europeo automáticamente.", "Es 100% privada siempre que no subas PDFs."],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es la 'Regla de Oro' para evitar que la IA invente datos (alucine)?",
    options: ["Pedirle siempre por favor que no invente datos.", "Usar un solo chat para absolutamente todo para que te conozca mejor.", "Abrir un 'Nuevo Chat' para cada nuevo proyecto o departamento.", "Usar exclusivamente un solo modelo de IA."],
    correctAnswer: 2
  },
  {
    question: "En la estructura de Prompt Profesional (R.C.T.R.F), ¿qué significa la 'R' y la 'C' iniciales?",
    options: ["Resumen y Conclusión.", "Rol y Contexto.", "Revisión y Corrección.", "Razón y Código."],
    correctAnswer: 1
  },
  {
    question: "¿Si necesito estructurar datos de producto para enviarlos automáticamente a mi e-commerce, qué formato debo solicitar?",
    options: ["Formato Markdown (.md).", "Una tabla en formato Word (.docx).", "Formato JSON (.json).", "Texto plano separado por comas."],
    correctAnswer: 2
  },
  {
    question: "¿Qué modelo destaca por su integración con el ecosistema de productividad de Google (Sheets, Docs, Slides)?",
    options: ["Claude 4.6 (Anthropic)", "ChatGPT-5 (OpenAI)", "Gemini 3.1 Pro (Google)", "Grok 3 (xAI)"],
    correctAnswer: 2
  },
  {
    question: "Si necesitas auditar un catálogo de 200 páginas con descripciones de producto, ¿cuál es la mejor opción?",
    options: ["Grok 3", "Claude 4.6 o Gemini 3.1 Pro (ventana de contexto grande)", "ChatGPT Free", "Midjourney"],
    correctAnswer: 1
  },
  {
    question: "¿Qué ocurre cuando sufres el efecto 'Lost in the Middle' al subir un documento gigante?",
    options: ["La IA se bloquea y da un Error 404.", "Presta mucha atención al principio y al final, pero ignora información del medio.", "Pierdes la conexión a internet.", "Traduce mal la parte central del documento."],
    correctAnswer: 1
  },
  {
    question: "Si necesitas analizar las tendencias de calzado de las últimas horas en redes sociales, ¿qué modelo destaca?",
    options: ["Grok 3 (xAI) — acceso en tiempo real a X/Twitter.", "Claude Sonnet", "ChatGPT Free", "Stable Diffusion"],
    correctAnswer: 0
  },
  {
    question: "Para generar el copy publicitario más natural y 'humano' para la tienda de zapatos, ¿qué modelo elegirías?",
    options: ["ChatGPT-5 (razonamiento lógico).", "Claude 4.6 (riqueza léxica y flujo narrativo superior).", "Grok 3 (datos en tiempo real).", "Gemini (integración Workspace)."],
    correctAnswer: 1
  }
]} />

</ConceptCard>

<ConceptCard title="🚀 Proyecto Fin de Curso (PFC)">

### El Gran Proyecto: Tu Tienda de Zapatos de Lujo

> A lo largo de este programa, construirás todos los activos necesarios para **abrir una tienda de zapatos de lujo** — de mujer y de hombre. Al finalizar, tendrás un MVP (Producto Mínimo Viable) completo: desde el catálogo visual hasta las automatizaciones de marketing.

### Tarea del Módulo 1: Definición del Core

Utilizando los LLMs vistos hoy y las estructuras de Prompts de alto rendimiento, cada equipo debe generar:

#### 1. Documento de Concepto de Marca

Usando la fórmula **R.C.T.R.F.**, define:
- **Nombre provisional** de la tienda
- **Público objetivo** (edad, poder adquisitivo, estilo de vida)
- **Posicionamiento**: ¿En qué se diferencia de otras tiendas de calzado de lujo?
- **Propuesta Única de Valor (UVP)**
- **Universo estético**: 3 marcas de referencia que inspiran el tono visual

#### 2. Análisis de Competencia Rápido

Usando **Perplexity AI** o **Grok** para datos en tiempo real:
- Identificar 3 competidores directos de calzado de lujo
- Rango de precios, canales de venta, presencia en RRSS
- Una oportunidad que ellos no estén cubriendo

#### 3. Primer Brainstorming Visual

Usando **Gemini** (generación de imagen):
- Generar 3 imágenes de concepto que transmitan la estética de la marca
- No tienen que ser el producto final — son el "mood" de lo que vendrá

### Entregable PFC Clase 1

> 📦 Un documento (PDF o Markdown) con:
> 1. Concepto de marca (nombre, público, posicionamiento, UVP)
> 2. Análisis de 3 competidores
> 3. 3 imágenes de concepto/mood generadas con IA
>
> **Herramienta recomendada para el documento:** Claude o ChatGPT con fórmula R.C.T.R.F.
> **Herramienta recomendada para competencia:** Perplexity AI o Grok
> **Herramienta recomendada para imágenes:** Gemini

---

</ConceptCard>

<ConceptCard title="📎 Recursos Adicionales">

- [19 Fórmulas de Prompts Completas](https://fvivas.com/es/19-formulas-y-estructuras-de-prompts-para-chatgpt/)
- [Claude AI](https://claude.ai)
- [Gemini](https://gemini.google.com)
- [ChatGPT](https://chatgpt.com)
- [Grok](https://x.com/i/grok)
- [Perplexity AI](https://perplexity.ai)

</ConceptCard>
