import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";
import { redirect } from "next/dist/server/api-utils";

// encode secret key
const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET;

export async function middleware(req: NextRequest) {
  const tokenData = req.cookies.get("token");

  // check if the user is admin by token
  if (!tokenData) {
    return NextResponse.json(
      { message: "You have to login to access this resource" },
      { status: 401 }
    );
  }

  const secret = new TextEncoder().encode(SECRET_KEY);
  const token = new TextEncoder().encode(tokenData.value);
  const { payload } = await jose.jwtVerify(token, secret);
  if (payload.role !== "admin") {
    return NextResponse.json(
      { message: "You are not authorized to access this resource " },
      { status: 401 }
    );
  }

  const url = new URL(req.url, `http://${req.headers.get("host")}`);
  if (url.pathname === "/admin") {
    // Construct an absolute URL for redirection
    const absoluteURL = `http://${req.headers.get("host")}/admin/dashboard`;
    return NextResponse.redirect(absoluteURL);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // "/api/site/:path*",
    // "/api/admin/:path*",
    // "/api/vendor/:path*",
    // "/admin/:path*",
  ],
};
