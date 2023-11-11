import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";
import { redirect } from "next/dist/server/api-utils";

// encode secret key
const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET;

export async function middleware(req: NextRequest) {
  const tokenData = req.cookies.get("token");
  const secret = new TextEncoder().encode(SECRET_KEY);

  if (req.nextUrl.pathname === "/dashboard") {
    return NextResponse.rewrite(new URL("/admin/dashboard", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (!tokenData) {
      return NextResponse.rewrite(new URL("/not-found", req.url));
    }
    const token = new TextEncoder().encode(tokenData.value);
    const { payload } = await jose.jwtVerify(token, secret);
    if (payload.role !== "admin") {
      return NextResponse.rewrite(new URL("/not-found", req.url));
    }
    return NextResponse.rewrite(new URL("/admin/dashboard", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/orders")) {
    if (!tokenData) {
      // return NextResponse.redirect("/login", req.url);
      return NextResponse.rewrite(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // "/api/site/:path*",
    // "/api/admin/:path*",
    // "/api/vendor/:path*",
    // "/admin/:path*",
    "/:path*",
  ],
};
