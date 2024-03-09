"use server";

export default async function getOne(model: string, id: number) {
  try {
    const response = await fetch(
      `${process.env.API_HOST}/api/admin/${model}/${id}`,
      {
        next: { revalidate: 0 },
      }
    );

    if (response.ok) {
      const newData = await response.json();
      return newData;
    } else {
      console.error("Error fetch");
      return null;
    }
  } catch (error) {
    // Handle network or parsing errors
    console.error("Error fetching data:", error);
    return null;
  }
}
