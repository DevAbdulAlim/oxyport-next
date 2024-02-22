export const getHomePageData = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}api/site`, {
      next: { revalidate: 0 },
    });

    if (response.ok) {
      const newData = await response.json();
      return newData;
    } else {
      console.error("Failed to fetch data");
      return null;
    }
  } catch (error) {
    // Handle network or parsing errors
    console.error("Error fetching data:", error);
    return null;
  }
};
