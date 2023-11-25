interface userDataProps {
  name: string;
  email: string;
  password: string;
}
export async function register(userData: userDataProps) {
  try {
    const response = await fetch(`http://localhost:3000/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      console.log("Registration successful");

      return true;
    } else {
      console.error("Failed to register");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
