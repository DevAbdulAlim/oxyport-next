import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token');
  if (token) {
    console.log('token', token);
  }


  const url = new URL(req.url, `http://${req.headers.get('host')}`);
  
  if (url.pathname === '/admin') {
    // Construct an absolute URL for redirection
    const absoluteURL = `http://${req.headers.get('host')}/admin/dashboard`;
    return NextResponse.redirect(absoluteURL);
  }

  return NextResponse.next();
}

export const config = {
  api: {
    bodyParser: false,
    matcher: ['/api/:path*', '/admin'],
  },
};
