# Plan de imágenes de las clases

Sale de auditar las 15 clases el 8 de septiembre de 2026 (61 agentes: un diagnóstico por
clase y tres abogados del diablo por diagnóstico). Aquí solo está el plan de imágenes;
la decisión sobre los despieces vive en `docs/plantilla-escena.html`.

## El diagnóstico, en corto

El problema no es que el alumno «solo vea texto»: M1 tiene dos fotos, cinco fórmulas, una
calculadora y un test. El problema es que **ninguna clase enseña una sola pantalla de las
herramientas que nombra**. Eso no se arregla decorando cabeceras: se arregla poniendo la
prueba justo donde la clase hace la promesa.

## ¿Una imagen en la cabecera de cada sección de cada clase?

**No.** Una imagen en la cabecera de cada sección de cada clase son unas 85 imágenes, y como mucho 25 de ellas tendrían algo que enseñar: el resto serían cabeceras de «Seguridad», «Práctica» o «Casos» ilustradas con algo genérico, que es exactamente el slop que este curso enseña a no producir. Un curso que dedica una clase entera a explicar por qué un prompt vago da una imagen de stock no puede ilustrarse con imágenes de stock: la primera cabecera de relleno le quita autoridad a las veinte que sí eran prueba, porque el alumno deja de mirar las imágenes en cuanto aprende que algunas no dicen nada. Y el coste no es hacerlas, es mantenerlas: son capturas de Gemini, Claude, Krea, Freepik y Obsidian, herramientas que rehacen su interfaz cada pocos meses; 85 capturas envejeciendo en silencio es un trabajo que nadie va a hacer, y una captura vieja es peor que ninguna — el alumno abre la herramienta, no reconoce nada y deja de fiarse del resto del curso.

Lo que sí vale la pena, y es sistemático:

1. **Una lámina de apertura por clase** en `.esc-fig`. El componente ya existe pero hoy
   solo lo usa M4·C2. Son 14 aperturas y es el golpe visual que de verdad cambia la
   primera impresión.
2. **Dentro del cuerpo, imagen solo donde la sección describe algo que literalmente se ve**
   o promete un resultado. La lista está abajo.

Total: unas 44 imágenes defendibles una por una, en vez de 85 de las que dos tercios
serían relleno.

## Lo que podemos producir nosotros

### M3·C1 · `apertura` — generada con Magnific

Lámina .esc-fig a ancho completo bajo el titular: el derby de ante gris-taupe generado con el prompt S.C.I.E. de esta misma clase. Pie mono: «Generada · con la fórmula S.C.I.E. de esta clase». Generación nueva: las m4c2-derby-*.jpg salen de otro prompt y decir que son S.C.I.E. sería falso.

```
A pair of men's casual Oxford shoes in light grey-taupe suede with a woven grid-textured vamp panel and thick textured cream rubber soles, resting on a clean off-white studio surface against a plain cream background. Realistic medium close-up photograph, soft studio lighting, sharply focused on the shoes, shallow depth of field.
```

### M3·C1 · `prompts` — generada con Magnific

Serie de cuatro imágenes al final de la sección, una por fórmula, cada una generada con el prompt de ejemplo que ya está impreso encima y sobre el mismo par. Pies: «01 · S.C.I.E.», «02 · P.E.P.A.», «03 · M.E.T.A.», «04 · C.A.P.A.». La prueba es verificable: la imagen sale del prompt que el alumno tiene delante.

```
1 (S.C.I.E.): A pair of men's casual Oxford shoes in light grey-taupe suede with a woven grid-textured vamp panel and thick cream rubber soles on a clean off-white studio surface, plain cream background, realistic medium close-up, soft studio lighting, shallow depth of field. 2 (P.E.P.A.): Derby shoes in pale grey-purple suede with woven vamp panel detail, contrast stitching and a textured cream crepe midsole, on a minimalist creamy-white display surface, eye-level three-quarter shot, soft even softbox lighting. 3 (M.E.T.A.): High-definition photorealistic 3D render conveying calm artisanal elegance, theme of minimalist shoemaking craft; the pair of cool taupe suede shoes with woven vamp panel perfectly centred on a uniform soft cream surface and background, cohesive colour palette. 4 (C.A.P.A.): Close-up shot at shoe level, pair of light grey woven-texture suede shoes statically focused on a clean studio surface, quiet immaculate studio atmosphere, neutral sophisticated tone.
```

### M2 · `operaciones` — diagrama propio en SVG

Tres paneles con la MISMA respuesta corta (tres filas de datos) escrita en .md, .csv y .json. SVG propio, tinta sobre papel, mono. Enseña de un vistazo por qué un ERP necesita etiquetas y sostiene la última pregunta del test.

### M9 · `vision` — diagrama propio en SVG

Diagrama de tres capas con las fuentes reales nombradas: Ingesta (SAP, GA4, Zoho, Connectif, Paid) → Procesamiento AI → Output. Es el único sitio del PFC donde un SVG a medida enseña algo que la prosa no dice.

**Antes de generar nada hace falta el visto bueno de Marc**: el modo ilimitado de la
cuenta no está activo en estas sesiones, así que cada imagen gasta unos 100 créditos de
los ~131.000 disponibles.

### Una propuesta que se descarta

La auditoría proponía reutilizar las cuatro fotos del derby (`m4c2-derby-1..4.jpg`) para
ilustrar las tarjetas «Shot 01–04» de M4·C2. **No.** Esas cuatro fotos son variaciones de
semilla del mismo prompt; las tarjetas hablan de cuatro esquemas de luz distintos
(butterfly, rembrandt, golden hour, rim). Ponerlas ahí sería enseñar como prueba de una
cosa la imagen de otra.

## Lo que solo puedes hacer tú: la lista de capturas

Convención para todas: recorte cerrado a la zona que importa (nada de pantalla completa
con el dock y las pestañas), tema claro si la herramienta lo tiene, sin datos de clientes
reales visibles, y nombre de archivo `mXcY-seccion-que-es.png`. Los pies los escribimos
nosotros con palabras que ya estén en la clase.

### TANDA 1 — las tres que devolverían un despiece a su clase

Las tres clases que la auditoría salvaba «si hubiera captura» se han convertido ya,
porque ninguna conversión dependía de esperar. Con estas tres capturas, M1 y M7·C2
pueden recuperar su despiece, esta vez sobre una pantalla real en vez de un dibujo.

- [ ] Gemini con una conversación abierta, barra lateral con Gems + selector de modelo + caja de prompt visibles en el mismo encuadre [M1]
- [ ] Grafo de Obsidian con Show tags activado, nodos coloreados por area/ y dos clústeres formados, con el panel de filtro abierto [M7·C2]
- [ ] Tira de cuatro recortes al 100% del mismo trozo: original / Creativity al máx / HDR al máx / Resemblance al máx, mismo encuadre y mismo zoom [M4·C1]

### TANDA 2 — la prueba de lo que cada clase promete

- [ ] Lienzo de Freepik Spaces con List Node → Assistant Node → Image Generator y miniaturas colgando [M4·C1]
- [ ] Serie de cuatro entornos Claude: claude.ai con PDF, Cowork pidiendo permiso sobre una carpeta, Design con prototipo y código, Code en terminal dentro de un repo [M6·C1]
- [ ] El mismo prompt del ejercicio 3 respondido en carpeta vacía y en carpeta con CLAUDE.md + SOUL.md [M6·C1]
- [ ] Krea en tiempo real a media sesión [M3·C2]
- [ ] NotebookLM con las citas numeradas y el panel de fuentes abierto [M2]
- [ ] Panel de Temperature de Google AI Studio, recorte cerrado [M2]
- [ ] Panel de Cowork con skills/agents/plugins/conectores instalados [M6·C2]
- [ ] Terminal tras «claude /agents» [M6·C3]

### TANDA 3 — grafos y portal (dependen de que el vault y el portal estén montados)

- [ ] Grafo antes/después del Tejedor, mismo zoom [M7·C3]
- [ ] Grafo antes/después de enlazar, huérfanos vs clusters [M7·C1]
- [ ] Panel de mando dentro de Obsidian [M7·C2]
- [ ] Panel terminado del portal en el navegador [M8·C1]
- [ ] Kanban con tarjeta en Hecho + la misma nota en Obsidian con estado: hecho [M8·C1]

### TANDA 4 — detalle, cuando haya tiempo

- [ ] /compact antes y después [M6·C1]
- [ ] consola de API keys con límite de gasto [M8·C1]
- [ ] explorador con dos carpetas de proyecto idénticas [M7·C2]
- [ ] Excel → Markdown de MarkItDown [M7·C1]
- [ ] upscaler de Krea 1:1 [M3·C2]
- [ ] Mixboard [M3·C1]
- [ ] Magnific Spaces cableado [M3·C3]
- [ ] editor de Gems [M2]
- [ ] List Node con Add Row y Video Generator con Start/End Frame [M4·C1]
- [ ] Cowork Plugin Create [M6·C3]
- [ ] salida en terminal del Tejedor [M7·C3]
- [ ] ficha de Community plugins [M7·C2]
- [ ] nota .md con frontmatter y wikilink [M7·C3]
## Tabla completa, por prioridad

| Prioridad | Clase | Sección | Origen | Qué muestra |
|---|---|---|---|---|
| alta | M1 | `interfaz` | captura-real | Captura real de Gemini con una conversación abierta, para anotar con 01 sobre la barra lateral (con «Gems» y el historial visibles), 02 sobre el selec |
| alta | M2 | `apertura` | captura-real | Recorte cerrado del panel de parámetros de Google AI Studio: el deslizador Temperature con su valor numérico y, debajo, Top-P y la longitud de salida. |
| alta | M2 | `riesgos` | captura-real | Respuesta de NotebookLM sobre un documento propio, con los números de cita pegados a cada frase y el panel de fuentes abierto mostrando el PDF del que |
| alta | M3·C1 | `apertura` | generada | Lámina .esc-fig a ancho completo bajo el titular: el derby de ante gris-taupe generado con el prompt S.C.I.E. de esta misma clase. Pie mono: «Generada |
| alta | M3·C1 | `prompts` | generada | Serie de cuatro imágenes al final de la sección, una por fórmula, cada una generada con el prompt de ejemplo que ya está impreso encima y sobre el mis |
| alta | M3·C2 | `apertura` | captura-real | Lienzo de tiempo real de Krea AI a media sesión: a la izquierda el boceto y el prompt en curso, a la derecha el render formándose sin haber pulsado na |
| alta | M4·C1 | `upscaler` | captura-real | Tira de cuatro recortes al 100% del mismo trozo de imagen (textura de piel o de tejido, coherente con Lottusse): original, Creativity al máximo, HDR a |
| alta | M4·C1 | `apertura` | captura-real | Lienzo de Freepik Spaces con un pipeline pequeño montado y los cables visibles: List Node → Assistant Node → Image Generator, con dos o tres miniatura |
| alta | M4·C2 | `consistencia` | ya-existe | Las cuatro fotos del derby (m4c2-derby-1 a -4) donde hoy hay cuatro tarjetas de texto tituladas «Shot 01-04». Coste cero: los archivos ya están en pub |
| alta | M6·C1 | `intro` | captura-real | Serie de cuatro capturas, una por entorno y en el orden de las tarjetas: claude.ai con un PDF subido; Claude Cowork pidiendo permiso sobre una carpeta |
| alta | M6·C1 | `practica` | captura-real | La misma instrucción del ejercicio 3 respondida dos veces, lado a lado: en una carpeta vacía y en la carpeta con CLAUDE.md y SOUL.md puestos. Es el re |
| alta | M6·C2 | `apertura` | captura-real | Panel de configuración de Claude Cowork con la lista real de skills, agents, plugins y conectores instalados. La clase enumera nueve componentes sin e |
| alta | M6·C3 | `creacion` | captura-real | Terminal justo después de ejecutar «claude /agents»: el asistente pidiendo nombre, descripción, modelo y herramientas permitidas. La clase da el coman |
| alta | M7·C1 | `seguridad` | captura-real | Dos capturas del grafo del mismo vault: tras volcar cientos de archivos de golpe (anillo de puntos sin líneas) y después de enlazar y crear índices (c |
| alta | M7·C2 | `estructura` | captura-real | Vista de grafo de Obsidian en un vault de empresa: nodos coloreados por etiqueta area/ (ventas, marketing, técnico), «Show tags» activado, dos clúster |
| alta | M7·C2 | `plugins` | captura-real | Panel de mando dentro de Obsidian: estado de dos o tres proyectos, indicadores por departamento y el grafo embebido a un lado. Va antes de la rejilla  |
| alta | M7·C3 | `tejedor` | captura-real | Grafo del mismo vault en dos estados, mismo zoom y encuadre: antes del Tejedor, con una docena de puntos sueltos en los bordes; después, con esos punt |
| alta | M8·C1 | `panel` | captura-real | El Panel terminado en el navegador, tal como sale del prompt de la sección: navbar Panel/Tablero/Ingesta, fila de tres KPI cards, lista de objetivos y |
| alta | M8·C1 | `tablero` | captura-real | Par de capturas: el kanban del portal con una tarjeta recién soltada en «Hecho» y, al lado, esa misma nota abierta en Obsidian con «estado: hecho» en  |
| media | M2 | `practica` | captura-real | Editor de Gems de Gemini a medio rellenar: el campo de instrucciones (el System Prompt) con texto dentro y la zona de conocimiento con un PDF cargado. |
| media | M2 | `operaciones` | diagrama | Tres paneles con la MISMA respuesta corta (tres filas de datos) escrita en .md, .csv y .json. SVG propio, tinta sobre papel, mono. Enseña de un vistaz |
| media | M3·C1 | `titanes` | captura-real | Lienzo de Mixboard con un moodboard de marca a medio montar. De las tres herramientas de la sección es la única cuyo valor es espacial y la única que  |
| media | M3·C2 | `herramientas` | captura-real | Dos recortes al 100% de la misma zona, al mismo tamaño en pantalla: original de baja resolución y resultado del Upscaler de Krea. Sin el 1:1, la prome |
| media | M3·C3 | `spaces` | captura-real | Lienzo de Magnific Spaces con tres nodos cableados (Generate, Edit, Upscale), cada uno con su miniatura y los cables uniendo salida con entrada. La se |
| media | M4·C1 | `logica` | captura-real | Recorte del List Node con tres filas escritas a mano, el botón «Add Row» visible y el cable saliendo hacia el nodo siguiente. Es el único nodo de la c |
| media | M4·C1 | `gen-img-vid` | captura-real | Recorte del nodo Video Generator con los dos puertos rotulados «Start Frame» y «End Frame» y un cable conectado. «Conectores físicos» no significa nad |
| media | M6·C1 | `memoria` | captura-real | Antes y después de /compact en la misma sesión: el indicador de contexto casi agotado y, a la derecha, el resumen que Claude se deja a sí mismo con el |
| media | M6·C3 | `creacion` | captura-real | Cowork: el asistente Plugin Create en pleno chat, o el Workspace con un .plugin ya desplegado y sus subagentes listados. Es la mitad de la sección que |
| media | M7·C1 | `pilares` | captura-real | Antes/después de MarkItDown: hoja de Excel real a la izquierda, el mismo contenido como tabla Markdown en texto plano a la derecha. El bloque de códig |
| media | M7·C2 | `estructura` | captura-real | Explorador de archivos del vault con dos carpetas de proyecto abiertas a la vez, enseñando dentro las mismas nueve subcarpetas en el mismo orden. Va d |
| media | M7·C3 | `tejedor` | captura-real | Salida en terminal del Tejedor: la lista de enlaces propuestos «nota A ↔ nota B — 87 %», dos o tres marcadas como huérfanas rescatadas, y la pregunta  |
| media | M8·C1 | `motor` | captura-real | Consola de desarrollador de Anthropic: pantalla de API keys con la clave enmascarada y el límite de gasto mensual configurado. Es la sección más larga |
| media | M9 | `vision` | diagrama | Diagrama de tres capas con las fuentes reales nombradas: Ingesta (SAP, GA4, Zoho, Connectif, Paid) → Procesamiento AI → Output. Es el único sitio del  |
| baja | M7·C2 | `plugins` | captura-real | Panel «Community plugins» de Obsidian con la ficha de un plugin abierta: autor, descargas, enlace al repo y botón de instalar. El texto manda revisar  |
| baja | M7·C3 | `vault` | captura-real | Una nota del vault abierta en modo código: frontmatter entre guiones, el texto debajo y un [[enlace a otra nota]] visible. Una sola nota, sin barras l |

## Avisos

- Si Marc no hace las capturas de la tanda 1, tres clases se quedan sin la pieza que justifica su despiece. Plan B escrito por clase: M1 → #cerebro convertido y sin despiece; M7·C2 → sección entera a rejilla con el SVG recortado como figura; M4·C2 → se queda igual con las reparaciones. Ninguna conversión depende de una captura, así que el trabajo puede empezar hoy.
- M8·C1 no se puede ilustrar hasta que el portal exista: sus tres imágenes son capturas del software que la clase enseña a construir. Es la clase más árida (4.625 palabras, cero <img>) y va a seguir siéndolo un tiempo.
- Hay que actualizar docs/plantilla-escena.html con la regla nueva, o el próximo despiece repite el error: el despiece solo se usa cuando la pieza es una imagen real (fotografía o captura) con detalle que señalar. Si la pieza hay que dibujarla y su contenido es texto, es una figura, no un despiece. Y cae también la regla implícita de «una clase, un despiece»: quedan tres en quince y está bien así.
