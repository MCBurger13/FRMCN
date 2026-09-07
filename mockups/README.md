# Mockups · otra manera de contar el curso

Tres exploraciones para salir del look «plantilla de IA» sin salirse del design system [m].seny. **No son producción**: no tocan `public/`, no comparten CSS ni JS con la web y se abren solas.

```bash
python -m http.server 8767 --directory mockups
```

Luego `http://localhost:8767/clase-scroll/index.html`, `/temario-editorial/`, `/kit-didactico/`.

| Carpeta | Qué propone |
|---|---|
| `clase-scroll/` | Una clase (M4·C2, «El prompt como objetivo») como **despiece vivo**: una sola fotografía se queda fija y las siete capas del prompt se explican dibujando encima de ella, mientras el prompt se escribe fragmento a fragmento. Con dial de apertura, interruptor de grano y lupa. |
| `temario-editorial/` | La home como **pieza editorial**: capítulos con lámina visual, progreso medido en centímetros de página en lugar de una barra, y el módulo en curso con la comparación stock ↔ generada partiendo la imagen por la mitad. |
| `kit-didactico/` | Seis **componentes didácticos** reutilizables: comparador arrastrable, anatomía del prompt, hoja de contactos de cuatro seeds, lectura dosificada, dial de apertura y una consulta que responde al instante. |

## Material

`assets/` tiene las fotos reales que usan los tres:

- `zapato-1..4.jpg` — cuatro generaciones del **mismo prompt** de la clase (Derby de ante gris-taupe con panel trenzado y suela de crepé), hechas con Magnific. Sirven para enseñar qué se mantiene y qué se mueve entre generaciones.
- `stock-generico.jpg` — foto de banco de imágenes (Freepik, licencia libre). Es el «antes» de la conversación sobre el fin del stock.

## Reglas que respetan

Tokens, tipografías y motivo `[ ]` del design system; dos fondos por pantalla; lima solo para acción, selección y completado. El movimiento es de `motion.dev` 11.11.13 desde jsDelivr, siempre ligado al scroll o a una interacción, y con `prefers-reduced-motion` el contenido queda entero y quieto. Sin emoji, sin fuentes de iconos: los únicos SVG son diagramas propios (lente, luz, retícula de tercios).

## Si alguno gusta

Lo que se puede llevar a producción por partes, de menos a más coste: los componentes del kit (son autónomos y caben en una clase tal cual), la lámina del módulo en curso del temario, y por último el despiece vivo, que pide fotografía propia por clase y es el más caro de mantener.
