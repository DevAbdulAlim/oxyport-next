export async function login(email: string, password: string) {
  try {
    const response = await fetch(`${process.env.HOST}api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Login successful");
      return true;
    } else {
      console.error("Failed to login");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
