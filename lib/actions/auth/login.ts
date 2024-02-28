"use server";
import { cookies } from "next/headers";
export async function login(email: string, password: string) {
  try {
    const response = await fetch(`${process.env.API_HOST}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();

      cookies().set("token", data.token, {
        maxAge: 3600,
        httpOnly: true,
      });
      return { success: true, message: "Login successful" };
    } else {
      return { success: false, message: "username or password did not match" };
    }
  } catch (error) {
    return { success: false, message: "Internal server error" };
  }
}
