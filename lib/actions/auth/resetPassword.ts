"use server";

interface ResetPasswordProps {
  password: string;
  token: string | null;
}

export async function resetPassword({
  password,
  token,
}: ResetPasswordProps): Promise<boolean> {
  try {
    if (token === null) {
      console.error("Invalid token");
      return false;
    }

    const response = await fetch(
      `${process.env.API_HOST}/api/auth/reset-password?token=${token}`,

      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
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
