const fs = require('fs-extra');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

// Custom Renderer matching modulo1.html layout
const renderer = new marked.Renderer();

let headingCounter = 0;
let navLinks = [];

renderer.heading = function({ text, depth }) {
    if (depth === 1) {
        return ''; // Will be rendered in the Hero section instead
    }
    
    if (depth === 2) {
        headingCounter++;
        const id = text.toLowerCase().replace(/[^\w]+/g, '-');
        
        // Strip numbers from nav text if they exist
        const navText = text.replace(/^\d+[\.\-]?\s*/, '');
        // Limit nav link text length
        const shortNavText = navText.length > 25 ? navText.substring(0, 25) + '...' : navText;
        
        navLinks.push({ id, text: shortNavText, number: headingCounter });
        
        const bgColor = headingCounter % 2 === 0 ? 'bg-brand-light border-t border-gray-200' : 'bg-white';
        
        // Remove leading numbers from the heading text itself since we use the styled circle
        const cleanText = text.replace(/^\d+[\.\-]?\s*/, '');
        
        return `
        </div></section> <!-- Close previous section -->
        <section id="${id}" class="py-20 ${bgColor}">
            <div class="max-w-5xl mx-auto px-6">
                <h2 class="text-3xl font-bold text-brand-dark mb-8 flex items-center">
                    <span class="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center mr-4 text-xl shadow-lg shrink-0">${headingCounter}</span>
                    ${cleanText}
                </h2>
        `;
    }
    
    if (depth === 3) {
        return `<h3 class="text-2xl font-bold text-brand-dark mb-6 mt-12">${text}</h3>\n`;
    }
    if (depth === 4) {
        return `<h4 class="text-xl font-bold text-brand-dark mb-4 mt-8"><i class="fa-solid fa-arrow-right text-brand-accent mr-2 text-sm"></i> ${text}</h4>\n`;
    }
    
    return `<h${depth} class="font-bold text-gray-800 mb-4 mt-6 text-lg">${text}</h${depth}>\n`;
};

renderer.paragraph = function({ text }) {
    if (text.startsWith('|||TAG_START_') || text.startsWith('|||TAG_END_')) {
        return `<p>${text}</p>`; // Leave for post-processing
    }
    return `<p class="prose-text text-gray-600 mb-6">${text}</p>\n`;
};

renderer.blockquote = function({ text }) {
    return `
    <div class="callout-analogy p-6 rounded-xl mb-8 shadow-sm border border-amber-100">
        <p class="font-serif text-amber-900 text-lg m-0">
            <i class="fa-solid fa-lightbulb mr-3 text-brand-accent text-xl"></i>
            ${text}
        </p>
    </div>\n`;
};



renderer.strong = function({ text }) {
    return `<strong class="font-bold text-gray-900">${text}</strong>`;
};

renderer.table = function(token) {
    let ht = Object.getPrototypeOf(this).table.call(this, token);
    ht = ht.replace('<table>', '<div class="overflow-x-auto mb-10 mt-6 shadow-sm rounded-xl border border-gray-200"><table class="w-full text-left border-collapse">');
    ht = ht.replace('</table>', '</table></div>');
    ht = ht.replace(/<thead>/g, '<thead>');
    ht = ht.replace(/<th>/g, '<th class="bg-gray-50 border-b border-gray-200 p-4 font-bold text-brand-dark uppercase tracking-wider text-sm">');
    ht = ht.replace(/<tbody>/g, '<tbody class="divide-y divide-gray-100 bg-white">');
    ht = ht.replace(/<td>/g, '<td class="p-4 font-serif text-gray-600 align-top">');
    return ht + '\n';
};

renderer.code = function({ text, lang }) {
    return `
    <div class="mb-8 rounded-xl overflow-hidden shadow-lg">
        <div class="bg-gray-800 px-4 py-2 flex items-center justify-between">
            <span class="text-xs font-mono text-gray-400 font-bold uppercase tracking-widest">${lang || 'CODE'}</span>
            <div class="flex space-x-1.5"><div class="w-3 h-3 rounded-full bg-red-500"></div><div class="w-3 h-3 rounded-full bg-yellow-500"></div><div class="w-3 h-3 rounded-full bg-green-500"></div></div>
        </div>
        <pre class="bg-gray-900 text-gray-100 p-6 overflow-x-auto text-sm font-mono leading-relaxed"><code>${text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
    </div>\n`;
};

renderer.codespan = function({ text }) {
    return `<code class="bg-gray-100 text-brand-primary px-1.5 py-0.5 rounded text-sm font-mono border border-gray-200">${text}</code>`;
};

marked.use({ renderer });

const HTML_TEMPLATE = (frontmatter, content, navLinksHTML) => `<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${frontmatter.titulo || 'Clase'} - [m].seny [labs]</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts: Inter & Merriweather -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&display=swap" rel="stylesheet">

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        serif: ['Merriweather', 'serif'],
                        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
                    },
                    colors: {
                        brand: {
                            dark: '#0F172A',
                            primary: '#4F46E5',
                            accent: '#F59E0B',
                            light: '#F8FAFC'
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body { background-color: #F8FAFC; color: #334155; scroll-behavior: smooth; }
        h1, h2, h3, h4, h5, h6, button, .nav-link { font-family: 'Inter', sans-serif; }
        p, li, .prose-text { font-family: 'Merriweather', serif; line-height: 1.6; font-size: 1.125rem; text-align: left; }
        .callout-analogy { background-color: #FEF3C7; border-left: 4px solid #F59E0B; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f5f9; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
    </style>
</head>

<body class="antialiased">
    <!-- Header -->
    <header class="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div class="flex items-center">
                <a href="../index.html" class="no-underline">
                    <h1 class="text-xl font-bold tracking-tight text-brand-dark hover:text-brand-primary transition-colors cursor-pointer">
                        <span class="text-brand-accent">[m]</span>.seny <span class="text-brand-accent">[labs]</span>
                    </h1>
                </a>
            </div>
            <nav class="hidden lg:flex space-x-5 text-xs font-bold text-gray-500 uppercase tracking-wider overflow-x-auto">
                ${navLinksHTML}
            </nav>
            <a href="/api/logout" class="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-red-500 transition-colors">
                <i class="fa-solid fa-arrow-right-from-bracket"></i> Salir
            </a>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="bg-brand-dark text-white py-24 border-b-8 border-brand-primary">
        <div class="max-w-5xl mx-auto px-6 text-center">
            <span class="inline-block py-1 px-3 bg-brand-primary/20 text-brand-primary font-mono text-sm font-bold uppercase tracking-widest mb-6 rounded">
                CLASE ${frontmatter.clase || ''} · ${frontmatter.bloque || 'Teoría'}
            </span>
            <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
                ${(frontmatter.titulo || 'Clase Teórica').replace(/(.*?)(—|-)(.*)/, '$1$2<span class="text-brand-accent">$3</span>')}
            </h1>
            <div class="mt-10 flex items-center justify-center space-x-6 text-sm text-gray-400 font-mono">
                ${frontmatter.duracion ? `<div><i class="fa-regular fa-clock"></i> <span>Duración: ${frontmatter.duracion}</span></div>` : ''}
                ${frontmatter.audiencia ? `<div><i class="fa-solid fa-users"></i> <span>Audiencia: ${frontmatter.audiencia}</span></div>` : ''}
            </div>
        </div>
    </section>

    <!-- Wrap first section implicitly -->
    <section class="py-20 bg-white">
        <div class="max-w-5xl mx-auto px-6">
            ${content}
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-brand-dark text-white py-12 border-t border-gray-800 mt-12">
        <div class="max-w-6xl mx-auto px-6 text-center">
            <h2 class="text-xl font-bold tracking-tight text-white mb-4">
                <span class="text-brand-accent">[m]</span>.seny <span class="text-brand-accent">[labs]</span>
            </h2>
            <p class="text-gray-500 font-mono text-sm">© 2026 Curso IA Generativa. Todos los derechos reservados.</p>
        </div>
    </footer>
</body>
</html>`;

async function main() {
    const INPUT_DIR = path.join(__dirname, '..', 'temario');
    const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'teoria');
    
    await fs.ensureDir(OUTPUT_DIR);
    
    const files = await fs.readdir(INPUT_DIR);
    const theoryFiles = files.filter(f => f.endsWith('_teoria.md'));
    
    for (const file of theoryFiles) {
        console.log(`Processing ${file}...`);
        const filePath = path.join(INPUT_DIR, file);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        
        const { data, content } = matter(fileContent);
        
        headingCounter = 0;
        navLinks = [];
        
        // 1. Preprocess JSX tags to marked-safe demarcations
        let md = content;
        md = md.replace(/<([A-Z][A-Za-z0-9]*)\s*([^>]*)>/g, '\n\n|||TAG_START_$1|||\n\n');
        md = md.replace(/<\/([A-Z][A-Za-z0-9]*)>/g, '\n\n|||TAG_END_$1|||\n\n');

        // 2. Parse Markdown
        let rawHtml = marked.parse(md);

        // Remove the closing tags from the very first h2 we insert, to prevent an extra </div></section>
        rawHtml = rawHtml.replace('</div></section> <!-- Close previous section -->', '');

        // 3. Post-process tags to Tailwind <div>s (ConceptCard, Callout, etc.)
        rawHtml = rawHtml.replace(/<p>\|\|\|TAG_START_([A-Z][A-Za-z0-9]*)\|\|\|<\/p>/g, 
            '<div class="bg-indigo-50/50 border-l-4 border-brand-primary p-8 rounded-2xl shadow-sm mb-10"><h4 class="font-bold text-brand-primary text-sm uppercase tracking-widest mb-4 flex items-center"><i class="fa-solid fa-cube mr-2"></i> $1</h4><div class="prose-text text-gray-700">');
        rawHtml = rawHtml.replace(/<p>\|\|\|TAG_END_([A-Z][A-Za-z0-9]*)\|\|\|<\/p>/g, 
            '</div></div>');


        // 4. Post-process standard tags
        rawHtml = rawHtml.replace(/<ol>/g, '<ol class="font-serif text-gray-600 text-lg list-decimal list-inside space-y-3 mb-8">');
        rawHtml = rawHtml.replace(/<ul>/g, '<ul class="font-serif text-gray-600 text-lg list-disc list-inside space-y-3 mb-8">');
        rawHtml = rawHtml.replace(/<li>/g, '<li class="pl-2">');

        // Generate Nav HTML from the collected H2 headings
        const navLinksHTML = navLinks.map(n => 
            `<a href="#${n.id}" class="hover:text-brand-primary transition-colors">${n.number}. ${n.text}</a>`
        ).join('\n');

        const finalHtml = HTML_TEMPLATE(data, rawHtml, navLinksHTML);
        
        const outName = file.replace('.md', '.html');
        await fs.writeFile(path.join(OUTPUT_DIR, outName), finalHtml, 'utf-8');
        console.log(`   Saved to ${outName}`);
    }
    
    console.log('Done converting all theoretical classes!');
}

main().catch(console.error);
