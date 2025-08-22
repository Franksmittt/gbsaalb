// FILE: src/middleware.ts (REPLACE ENTIRE FILE)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware function is now empty and will not add any headers.
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};