"use server";

import { cookies } from "next/headers";

export const Auth = async () => {
  const value = cookies().get("token")?.value;
  if (!value) {
    return { success: false, role: "" };
  }
  try {
    const apiUrl = `${process.env.API_HOST}/api/auth/verify-token`;
    const response = await fetch(apiUrl, {
      next: { revalidate: 0 },
      headers: { token: value },
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, role: data.role };
    } else {
      return { success: false, role: "" };
    }
  } catch (error) {
    return { success: false, role: "" };
  }
};
