"use server";

export async function register(formData: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    const response = await fetch(`${process.env.API_HOST}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
