"use server";

export const searchProducts = async (
  categories?: number[],
  ratings?: number[],
  minPrice?: number,
  maxPrice?: number,
  page?: number,
  pageSize?: number
) => {
  try {
    const apiUrl = `${process.env.API_HOST}/api/product/search?categories=${
      categories || ""
    }&ratings=${ratings || ""}&minPrice=${minPrice || ""}&maxPrice=${
      maxPrice || ""
    }&page=${page || ""}&pageSize=${pageSize || ""}`;

    const response = await fetch(apiUrl, {
      next: { revalidate: 0 },
    });

    if (response.ok) {
      const newData = await response.json();
      return newData;
    } else {
      console.error("Failed to search");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
