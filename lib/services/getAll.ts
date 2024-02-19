export const getAll = async (
  model: string,
  currentPage: number,
  itemsPerPage: number
) => {
  try {
    const apiUrl = `${process.env.HOST}api/site/${model}?currentPage=${currentPage}&itemsPerPage=${itemsPerPage}`;
    const response = await fetch(apiUrl, {
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      // Handle non-200 HTTP status codes
      throw new Error(`Failed to fetch data (${response.status} ${response.statusText}) from ${apiUrl}`);
    }

    const newData = await response.json();
    return newData;
  } catch (error) {
    // Handle network or parsing errors
    console.error("Oh no, an error occurred while fetching data:", error);
    throw error; // Re-throw the error for the caller to handle, if needed
  }
};
