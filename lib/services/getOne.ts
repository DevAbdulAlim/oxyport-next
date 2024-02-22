export default async function addOne(model: string, id: number) {
  try {
    const response = await fetch(
      `${process.env.HOST}/api/admin/${model}/${id}`,
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
