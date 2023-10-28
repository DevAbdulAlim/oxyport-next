export const getAll = async (model: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/admin/${model}`, {
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      // Handle non-200 HTTP status codes
      throw new Error(
        `Failed to fetch data (${response.status} ${response.statusText})`
      );
    }

    const newData = await response.json();
    return newData;
  } catch (error) {
    // Handle network or parsing errors
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error for the caller to handle, if needed
  }
};
