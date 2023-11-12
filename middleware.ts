import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authenticate } from "./lib/authenticate";

const adminRoutes = ["/admin", "/api/admin"];
const privateRoutes = ["/orders", "/address"];

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token");
  const pathname = req.nextUrl.pathname;

  // Admin Site & API authentication
  if (adminRoutes.some((route) => pathname.startsWith(route))) {
    if (token) {
      const { verified, payload } = await authenticate(token.value);
      if (!verified) {
        return NextResponse.rewrite(new URL("/not-found", req.url));
      }
      if (payload?.role !== "admin") {
        return NextResponse.rewrite(new URL("/not-found", req.url));
      }
      if (pathname === "/admin") {
        return NextResponse.rewrite(new URL("/admin/dashboard", req.url));
      }
    } else {
      return NextResponse.rewrite(new URL("/not-found", req.url));
    }
  }

  // Site Private route authentication
  if (privateRoutes.some((route) => pathname.startsWith(route))) {
    if (token) {
      const { verified } = await authenticate(token.value);
      if (!verified) {
        return NextResponse.rewrite(new URL("/login", req.url));
      }
    } else {
      return NextResponse.rewrite(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
