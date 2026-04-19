import { redirect } from 'next/navigation';

// The middleware handles authentication checks before this runs.
// Authenticated users arriving at / are sent to /index.html (static file in public/).
export default function IndexPage() {
  redirect('/index.html');
}

export const dynamic = 'force-dynamic';
