import * as jose from "jose";

export async function authenticate(token: string) {
  const secret = process.env.JWT_SECRET;
  const encodedSecret = new TextEncoder().encode(secret);
  const encodedToken = new TextEncoder().encode(token);
  try {
    const { payload } = await jose.jwtVerify(encodedToken, encodedSecret);
    return { verified: true, payload };
  } catch (error) {
    console.error("Token verification failed: ", error);
    return { verified: false, error };
  }
}
