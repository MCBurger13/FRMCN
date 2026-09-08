"""Servidor de vista previa.

http.server no manda Cache-Control, asi que el navegador cachea el CSS por su
cuenta: editabas curso.css, recargabas y seguias viendo la hoja vieja. Parecia
que la pagina estaba rota cuando lo unico roto era la cache. Produccion (Vercel)
ya manda `max-age=0, must-revalidate`; esto pone el local a la misma altura.

    python tools/serve.py <puerto> <directorio>
"""

import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class SinCache(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()


if __name__ == "__main__":
    puerto = int(sys.argv[1])
    directorio = sys.argv[2]
    servidor = ThreadingHTTPServer(("127.0.0.1", puerto), partial(SinCache, directory=directorio))
    print(f"sirviendo {directorio} en http://127.0.0.1:{puerto} (sin cache)")
    servidor.serve_forever()
