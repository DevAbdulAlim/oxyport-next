export const getAll = async (model: string, currentPage:number, itemsPerPage:number, token:any) => {
  try {
    const response = await fetch(`http://localhost:3000/api/admin/${model}?currentPage=${currentPage}&itemsPerPage=${itemsPerPage}`, {
      next: { revalidate: 0 },
      headers: {
        Cookie: `token=${token.value}`
      }
    });

    if (!response.ok) {
      // Handle non-200 HTTP status codes
      throw new Error(
        `Failed to fetch data `
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
