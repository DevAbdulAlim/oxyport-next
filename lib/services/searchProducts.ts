export const searchProducts = async (
    categories?: number[],
    ratings?: number[],
    minPrice?: number,
    maxPrice?: number,
    page?: number,
    pageSize?: number
  ) => {
    try {
      const apiUrl = `http://localhost:3000/api/site/products/search?categories=${
        categories || ""
      }&ratings=${ratings || ""}&minPrice=${minPrice || ""}&maxPrice=${
        maxPrice || ""
      }&page=${page || ""}&pageSize=${pageSize || ""}`;
  
      const response = await fetch(apiUrl, {
        next: { revalidate: 0 },
      });
  
      if (!response.ok) {
        throw new Error(
          `Failed to fetch data (${response.status} ${response.statusText})`
        );
      }
  
      const newData = await response.json();
  
      return newData;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };