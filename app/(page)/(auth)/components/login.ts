export async function login(email: string, password: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Login successful");
    } else {
      console.error("Failed to login");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
