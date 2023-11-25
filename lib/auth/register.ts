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
        const data = await response.json();
        return {success: true, message: "Register successful"};
      } else {
        const errorData = await response.json();
        return {success: false, message: errorData.data.message};
      }
    } catch (error) {
      return {success: false, message: "Failed to Register"};
    }
  }
  