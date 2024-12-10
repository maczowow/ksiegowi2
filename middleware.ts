import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './lib/auth';

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const token = request.cookies.get('adminToken')?.value;
    
    if (!token) {
      return NextResponse.next();
    }

    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};