import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authenticate } from "./app/api/utils/authenticate";

const adminRoutes = ["/api/admin"];
const privateRoutes = ["/orders", "/address"];

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const token = req.cookies.get("token")?.value || req.headers.get("token");

  // Admin Site & API authentication
  if (adminRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.next();
    }

    const { success, role } = await authenticate(token);
    if (!success) {
      return NextResponse.rewrite(new URL("/not-found", req.url));
    }

    if (role !== "admin") {
      return NextResponse.rewrite(new URL("/not-found", req.url));
    }

    if (pathname === "/admin") {
      return NextResponse.rewrite(new URL("/admin/dashboard", req.url));
    }
  }

  // Site Private route authentication
  if (privateRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.next();
    }

    const { success } = await authenticate(token);
    if (!success) {
      return NextResponse.rewrite(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
