"use server";

import * as jose from "jose";

export async function authenticate(token: string) {
  const secret = process.env.JWT_SECRET;
  const encodedSecret = new TextEncoder().encode(secret);
  const encodedToken = new TextEncoder().encode(token);
  try {
    const { payload } = await jose.jwtVerify(encodedToken, encodedSecret);
    const role: string = payload.role as string;
    return { success: true, role: role.trim() };
  } catch (error) {
    return { success: false, role: null };
  }
}
