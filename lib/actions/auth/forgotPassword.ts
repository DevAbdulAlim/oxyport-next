"use server";

interface userDataProps {
  email: string;
}
export async function forgotPassword(userData: userDataProps) {
  try {
    const response = await fetch(
      `${process.env.API_HOST}/api/auth/forgot-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
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
