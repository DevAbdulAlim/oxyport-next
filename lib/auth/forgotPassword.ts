interface userDataProps {
  email: string;
}
export async function forgotPassword(userData: userDataProps) {
  try {
    const response = await fetch(`${process.env.HOST}api/forgot-password`, {
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
