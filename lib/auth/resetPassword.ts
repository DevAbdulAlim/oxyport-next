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
      `${process.env.NEXT_PUBLIC_HOST}api/reset-password?token=${token}`,

      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }), // Wrap password in an object
      }
    );

    if (response.ok) {
      console.log("Password reset successful");
      return true;
    } else {
      console.error("Password reset failed");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
