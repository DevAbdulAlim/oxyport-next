export const getAll = async (
  model: string,
  currentPage: number,
  itemsPerPage: number
) => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_HOST}api/site/${model}?currentPage=${currentPage}&itemsPerPage=${itemsPerPage}`;
    const response = await fetch(apiUrl, {
      next: { revalidate: 0 },
    });

    if (response.ok) {
      const newData = await response.json();
      return newData;
    } else {
      console.error("Failed to fetch");
      return null;
    }
  } catch (error) {
    // Handle network or parsing errors
    console.error("Oh no, an error occurred while fetching data:", error);
    return null;
  }
};
