/* ============================================================================
   [m].seny /academy — curso-data.js
   FUENTE DE VERDAD ÚNICA de la estructura del curso: módulos, clases, niveles
   de acceso y helpers puros. La cargan index.html, las páginas de clase
   (window.CURSO) y middleware.js (import). Aquí NO vive contenido lectivo.

   Cómo añadir una clase: añade el objeto en `classes` del módulo, en orden.
   Cómo publicar un módulo vacío: rellena `classes` (visible = tiene clases).
   Cómo cambiar qué ve cada nivel: edita `levels`.
   ========================================================================== */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.CURSO = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var modules = [
    {
      id: 'm1', num: 1, title: 'El Paisaje de los LLMs', short: 'LLMs',
      desc: 'Una inmersión comparativa en los principales modelos de lenguaje. No se trata de usar todos, sino de saber cuál usar para cada tarea específica (codificación, análisis, creatividad).',
      classes: [
        { id: 'm1c1', file: 'modulo1.html', num: 1, kind: 'módulo completo', duration: '1,5–2 h', topic: 'Estrategia de modelos',
          title: 'El Paisaje de los LLMs', short: 'El Paisaje de los LLMs',
          tools: ['Claude', 'Gemini', 'ChatGPT', 'Grok', 'Perplexity', 'Higgsfield AI', 'Freepik AI'] }
      ]
    },
    {
      id: 'm2', num: 2, title: 'Glosario y Fundamentos', short: 'Fundamentos',
      desc: 'Fundamentos esenciales para comunicarse con equipos técnicos y entender las limitaciones reales de la tecnología (alucinaciones, tokens, ventana de contexto).',
      classes: [
        { id: 'm2c1', file: 'modulo2.html', num: 1, kind: 'módulo completo', duration: '1,5 h', topic: 'Glosario ejecutivo',
          title: 'Glosario y Fundamentos', short: 'Glosario y Fundamentos',
          tools: ['Perplexity AI', 'Gemini', 'Gems', 'NotebookLM', 'Google AI Studio', 'ChatGPT', 'GPTs personalizados'] }
      ]
    },
    {
      id: 'm3', num: 3, title: 'Estudio Creativo IA (Imagen)', short: 'Imagen',
      desc: 'Creación de activos visuales profesionales para marketing, prototipado de productos y contenido social sin necesidad de un departamento de diseño externo.',
      classes: [
        { id: 'm3c1', file: 'modulo3-clase1.html', num: 1, kind: 'teórica', duration: '1 h', topic: 'Fotografía y mockups',
          title: 'Estudio creativo IA: los titanes del píxel', short: 'Los titanes del píxel',
          tools: ['Gemini Nano Banana 2', 'ChatGPT Images 2.0', 'Mixboard', 'Gems de Gemini', 'Opal'] },
        { id: 'm3c2', file: 'modulo3-clase2.html', num: 2, kind: 'teórica', duration: '1 h', topic: 'Flujo de trabajo avanzado',
          title: 'Estudio creativo IA: composición y tiempo real', short: 'Composición y tiempo real',
          tools: ['Krea AI', 'Pomelli', 'Genspark', 'Higgsfield'] },
        { id: 'm3c3', file: 'modulo3-clase3.html', num: 3, kind: 'práctica', duration: 'Teoría 45 min · Práctica 60 min', topic: 'Suite de edición',
          title: 'Magnific AI: el ecosistema total', short: 'Magnific AI: el ecosistema total',
          tools: ['Freepik', 'Magnific AI', 'Magnific Spaces', 'Mystic', 'Nano Banana', 'Flux', 'GPT Image', 'Seedream', 'Ideogram', 'Qwen Image', 'Recraft', 'Veo', 'Sora', 'Runway', 'Kling'] },
        { id: 'm3c4', file: 'modulo3-clase4.html', num: 4, kind: 'práctica', duration: '45 min', topic: 'Procesamiento en lote',
          title: 'Freepik Spaces: la anatomía de los nodos', short: 'Freepik Spaces: la anatomía de los nodos',
          tools: ['Freepik Spaces', 'Magnific', 'Mystic', 'Flux', 'Nano Banana', 'Luma', 'Kling', 'Runway', 'MiniMax'] },
        { id: 'm3c5', file: 'modulo3-clase5.html', num: 5, kind: 'teórica', duration: '90 min', topic: 'Fotorrealismo y moda',
          title: 'El prompt como objetivo: fotografía profesional con IA', short: 'El prompt como objetivo',
          tools: ['PromptHero', 'Lexica', 'Midjourney Explore', 'Freepik / Pikaso', 'PromptBase', 'Civitai', 'Magnific'] }
      ]
    },
    { id: 'm4', num: 4, title: 'Estudio Creativo 2 (Vídeo)', short: 'Vídeo', desc: '', classes: [] },
    { id: 'm5', num: 5, title: 'Automatización de Imágenes', short: 'Automatización', desc: '', classes: [] },
    { id: 'm6', num: 6, title: 'Docs Inteligente & Google', short: 'Docs & Google', desc: '', classes: [] },
    { id: 'm7', num: 7, title: 'Programación Web y Scraping', short: 'Web & Scraping', desc: '', classes: [] },
    {
      id: 'm8', num: 8, title: 'Agentes Autónomos', short: 'Agentes',
      desc: 'Introducción a sistemas que no solo responden, sino que ejecutan. IAs capaces de planificar tareas, navegar por la web y realizar secuencias complejas.',
      classes: [
        { id: 'm8c1', file: 'modulo8-clase1.html', num: 1, kind: 'teórica', duration: 'Teoría 40 min · Práctica 50 min', topic: 'Claude como socio de trabajo',
          title: 'Claude: el asistente de IA como socio de trabajo', short: 'Claude: el asistente de IA como socio de trabajo',
          tools: ['claude.ai', 'Claude Cowork', 'Claude Design', 'Claude Code'] },
        { id: 'm8c2', file: 'modulo8-clase2.html', num: 2, kind: 'referencia', duration: '45 min', topic: 'Skills, agentes y hooks',
          title: 'Claude Cowork: guía de referencia', short: 'Claude Cowork: guía de referencia',
          tools: ['Claude Cowork', 'Claude', 'LibreOffice'] },
        { id: 'm8c3', file: 'modulo8-clase3.html', num: 3, kind: 'práctica', duration: 'Teoría 30 min · Práctica 30 min', topic: 'Pipelines multi-agente',
          title: 'Orquestación avanzada: pipelines multi-agente', short: 'Orquestación avanzada: pipelines multi-agente',
          tools: ['Claude Code', 'Claude Cowork', 'MCP', 'Google Drive', 'Slack', 'Notion', 'HubSpot', 'GA4', 'Google Ads', 'Meta Ads'] },
        { id: 'm8c4', file: 'modulo8-clase4.html', num: 4, kind: 'práctica', duration: '50 min', topic: 'Ingesta local a Obsidian',
          title: 'El cerebro local autónomo: ingesta segura a Obsidian', short: 'El cerebro local autónomo',
          tools: ['Obsidian', 'MarkItDown', 'Tesseract OCR', 'Claude Code', 'Python'] },
        { id: 'm8c5', file: 'modulo8-clase5.html', num: 5, kind: 'teórica', duration: '1 h 15 min', topic: 'Agentes, departamentos y plugins',
          title: 'El cerebro de empresa: agentes, departamentos y plugins', short: 'El cerebro de empresa',
          tools: ['Obsidian', 'Git', 'Obsidian Sync', 'Google Drive', 'Dropbox', 'Syncthing'] },
        { id: 'm8c6', file: 'modulo8-clase6.html', num: 6, kind: 'teórica', duration: '45 min', topic: 'Búsqueda semántica y auto-enlaces',
          title: 'El cerebro que se busca y se teje solo', short: 'El cerebro que se busca y se teje solo',
          tools: ['Obsidian', 'Claude Code', 'Smart Connections', 'Graphify', 'bge-m3', 'LanceDB', 'MCP', 'Python'] },
        { id: 'm8c7', file: 'modulo8-clase7.html', num: 7, kind: 'teórica', duration: '1 h 20 min', topic: 'Tu software sobre el cerebro',
          title: 'Tu software propio: el portal de mando', short: 'Tu software propio: el portal de mando',
          tools: ['Claude', 'Claude Code', 'API de Claude', 'Obsidian', 'Next.js', 'Tailwind CSS'] }
      ]
    },
    {
      id: 'm9', num: 9, title: 'MVP Empresarial (PFC)', short: 'PFC Final', locked: true,
      desc: 'Aplicación transversal. Simulación de lanzamiento de una línea de negocio: desde el naming y logo hasta la estrategia de go-to-market.',
      classes: [
        { id: 'm9c1', file: 'pfc-marketing.html', num: 1, kind: 'práctica', duration: '20 min', topic: 'Plan técnico y curricular',
          title: 'AI Decision Hub: plan técnico y curricular', short: 'AI Decision Hub: plan técnico y curricular',
          tools: ['Python', 'FastAPI', 'LangChain', 'Next.js', 'Supabase', 'Redis', 'Google Cloud Run', 'Vercel', 'Claude', 'Gemini', 'GA4', 'Zoho CRM', 'Connectif'] }
      ]
    }
  ];

  /* Niveles de acceso. El nivel del alumno viaja en el JWT de Supabase como
     user_metadata.access_level ('diseno' | 'marketing' | 'finanzas' | 'completo').
     Compatibilidad: si no hay access_level se usa DEFAULT_LEVEL (hoy: completo,
     que equivale al comportamiento anterior; M9 está bloqueado para todos).
     REPARTO PROVISIONAL — pendiente de que Marc confirme qué módulos ve cada nivel. */
  var levels = {
    diseno:    { label: 'Diseño',    modules: ['m1', 'm2', 'm3'] },
    marketing: { label: 'Marketing', modules: ['m1', 'm2', 'm3', 'm8'] },
    finanzas:  { label: 'Finanzas',  modules: ['m1', 'm2', 'm8'] },
    completo:  { label: 'Completo',  modules: '*' }
  };
  var DEFAULT_LEVEL = 'completo';

  /* ── helpers puros (sin DOM) ─────────────────────────────────────────── */
  function published(m) { return m.classes.length > 0; }
  function visibleModules() { return modules.filter(published); }
  function levelFromPayload(payload) {
    var meta = (payload && payload.user_metadata) || {};
    var lv = meta.access_level;
    if (lv && levels[lv]) return lv;
    return DEFAULT_LEVEL;
  }
  function canAccess(level, moduleId) {
    var m = moduleById(moduleId);
    if (!m || m.locked) return false;
    var lv = levels[level] || levels[DEFAULT_LEVEL];
    return lv.modules === '*' || lv.modules.indexOf(moduleId) !== -1;
  }
  function moduleById(id) { for (var i = 0; i < modules.length; i++) if (modules[i].id === id) return modules[i]; return null; }
  function classById(id) {
    for (var i = 0; i < modules.length; i++) for (var j = 0; j < modules[i].classes.length; j++)
      if (modules[i].classes[j].id === id) return withModule(modules[i].classes[j], modules[i]);
    return null;
  }
  function classByFile(file) {
    var f = String(file || '').split('/').pop().split('?')[0].split('#')[0];
    for (var i = 0; i < modules.length; i++) for (var j = 0; j < modules[i].classes.length; j++)
      if (modules[i].classes[j].file === f) return withModule(modules[i].classes[j], modules[i]);
    return null;
  }
  function withModule(c, m) { var o = {}; for (var k in c) o[k] = c[k]; o.module = m; o.total = m.classes.length; return o; }
  /* Todas las clases accesibles para un nivel, en orden de temario */
  function orderedClasses(level) {
    var out = [];
    visibleModules().forEach(function (m) {
      if (!canAccess(level, m.id)) return;
      m.classes.forEach(function (c) { out.push(withModule(c, m)); });
    });
    return out;
  }
  /* Anterior / siguiente dentro de lo accesible (salta módulos sin acceso) */
  function prevNext(classId, level) {
    var list = orderedClasses(level), idx = -1;
    for (var i = 0; i < list.length; i++) if (list[i].id === classId) { idx = i; break; }
    return { prev: idx > 0 ? list[idx - 1] : null, next: idx >= 0 && idx < list.length - 1 ? list[idx + 1] : null, index: idx, list: list };
  }
  /* Módulo al que pertenece un archivo protegido; null si el archivo no es una clase */
  function moduleOfFile(file) { var c = classByFile(file); return c ? c.module : null; }
  function toolsOf(m) {
    var seen = {}, out = [];
    m.classes.forEach(function (c) { (c.tools || []).forEach(function (t) { if (!seen[t]) { seen[t] = 1; out.push(t); } }); });
    return out;
  }

  return {
    modules: modules, levels: levels, DEFAULT_LEVEL: DEFAULT_LEVEL,
    published: published, visibleModules: visibleModules, levelFromPayload: levelFromPayload,
    canAccess: canAccess, moduleById: moduleById, classById: classById, classByFile: classByFile,
    orderedClasses: orderedClasses, prevNext: prevNext, moduleOfFile: moduleOfFile, toolsOf: toolsOf
  };
});
