"use server";

export const getHomePageData = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/api`, {
      next: { revalidate: 0 },
    });

    if (response.ok) {
      const newData = await response.json();
      return newData;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
