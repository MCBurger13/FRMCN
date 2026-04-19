import { NextResponse } from 'next/server';

// This file ensures Next.js App Router registers the `/` route.
// When an authenticated user visits `/`, Next.js renders this page,
// which immediately serves a redirect to `/index.html` (static file in public/).
// The middleware handles authentication before this component runs.
export default function IndexPage() {
  // Render an HTML page that immediately redirects client-side
  // to avoid server-redirect loops with middleware
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/index.html" />
      </head>
      <body>
        <p>Redirecting...</p>
      </body>
    </html>
  );
}

export const dynamic = 'force-dynamic';
