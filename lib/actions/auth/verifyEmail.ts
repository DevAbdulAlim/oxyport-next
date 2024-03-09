"use server";

export async function verifyEmail(token: string): Promise<boolean> {
  try {
    if (token === null) {
      console.error("Invalid token");
      return false;
    }

    const response = await fetch(
      `${process.env.API_HOST}/api/auth/email-verification?token=${token}`,

      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
