const fs = require('fs');
const filepath = 'temario/clase01_teoria.md';
let content = fs.readFileSync(filepath, 'utf8');

// 1. Replace the Quiz text with the <Quiz> component.
const quizStartText = "**1.** ¿Qué diferencia principal existe";
const quizStart = content.indexOf(quizStartText);
const pfcStartText = "## 🚀 Proyecto Fin de Curso (PFC)";
const pfcStart = content.indexOf(pfcStartText);

if (quizStart > -1 && pfcStart > -1) {
  const quizText = content.substring(quizStart, pfcStart);
  
  const quizJson = [
    {
      question: "¿Qué diferencia principal existe entre el software determinista clásico y los LLMs?",
      options: ["El determinismo siempre usa código C++.", "El determinismo se basa en reglas estrictas (A->B), mientras que los LLMs son probabilísticos y aprenden reconociendo patrones.", "Los LLMs solo funcionan con imágenes.", "El determinismo es más rápido en móviles."],
      correctAnswer: 1
    },
    {
      question: "El error número uno en las empresas al usar IA es:",
      options: ["Olvidar poner comillas en los prompts.", "No pagar la suscripción Enterprise el primer día.", "Usar un solo chat continuo para todos los temas como si fuera Google.", "Apagar el modo Deep Think."],
      correctAnswer: 2
    },
    {
      question: "Según el modelo R.C.T.R.F., la 'R' inicial corresponde a:",
      options: ["Reglas (Rules)", "Rol", "Recuento de tokens", "Revisión"],
      correctAnswer: 1
    },
    {
      question: "¿Qué es el RAG (Retrieval-Augmented Generation)?",
      options: ["Una técnica para que la IA escupa código más rápido.", "Un modo de generar imágenes a partir de audio.", "Un sistema que conecta un LLM a los documentos privados de la empresa para que responda con datos corporativos reales.", "Una variante del formato JSON."],
      correctAnswer: 2
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
  ];

  const replacement = '<Quiz questions={'+ JSON.stringify(quizJson) +'} />\n\n---\n\n';
  content = content.replace(quizText, replacement);
} else {
  console.log('Quiz bounds not found', { quizStart, pfcStart });
}

// Replace top level concepts with ConceptCard wrapping.
// We will look for headings starting with "## " followed by a number or specific ones like "Conceptos clave", "Herramientas"
const regex = /^## (.*?)\n([\s\S]*?)(?=(^## |\z))/gm;

// We do NOT want to match the first ones like "## Navegación de la clase", wait, maybe we do, but let's just do it manually for safety.
content = content.replace(/^## 1\. El Cambio de Paradigma/m, '<ConceptCard title="1. El Cambio de Paradigma">');
content = content.replace(/^## 2\. El Mapa del Mercado Actual/m, '</ConceptCard>\n\n<ConceptCard title="2. El Mapa del Mercado Actual">');
content = content.replace(/^## 3\. Precios y Seguridad/m, '</ConceptCard>\n\n<ConceptCard title="3. Precios y Seguridad">');
content = content.replace(/^## 4\. Anatomía de la Interfaz/m, '</ConceptCard>\n\n<ConceptCard title="4. Anatomía de la Interfaz">');
content = content.replace(/^## 5\. El Concepto de "Cerebro"/m, '</ConceptCard>\n\n<ConceptCard title="5. El Concepto de \\"Cerebro\\">');
content = content.replace(/^## 6\. Prompt Engineering/m, '</ConceptCard>\n\n<ConceptCard title="6. Prompt Engineering">');
content = content.replace(/^## 7\. Casos de Uso en Diseño y Marketing/m, '</ConceptCard>\n\n<ConceptCard title="7. Casos de Uso en Diseño y Marketing">');
content = content.replace(/^## 8\. Demo Interactiva \+ Quiz \+ PFC/m, '</ConceptCard>\n\n<ConceptCard title="8. Demo Interactiva + Quiz + PFC">');
content = content.replace(/^## 🚀 Proyecto Fin de Curso \(PFC\)/m, '</ConceptCard>\n\n<ConceptCard title="🚀 Proyecto Fin de Curso (PFC)">');
content = content.replace(/^## 📎 Recursos Adicionales/m, '</ConceptCard>\n\n<ConceptCard title="📎 Recursos Adicionales">');

// Add the final closing tag at the end of the file.
content = content + '\n</ConceptCard>\n';

// Write back
fs.writeFileSync(filepath, content);
console.log('Done!');
