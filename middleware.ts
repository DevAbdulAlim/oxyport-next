import { request } from "http";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token");
  if (token) {
    console.log("token", token);
  }
  console.log("hi");

  // return NextResponse.redirect(new URL("/", req.url));
}

export const config = {
  matcher: "/api/:path*",
};
