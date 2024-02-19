  export async function verifyEmail(token:string): Promise<boolean> {
    try {
        if(token === null) {
            console.error("Invalid token")
            return false;
        }

      const response = await fetch(`http://localhost:3000/api/email-verification?token=${token}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      if (response.ok) {
        console.log('Email verification successful');
        return true;
      } else {
        console.error('Email verification failed');
        return false;
      }
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  }
  