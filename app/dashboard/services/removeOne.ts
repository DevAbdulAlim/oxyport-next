export async function removeOne(model: string, itemId: number) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/admin/${model}/${itemId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      console.log(`Successfully Deleted ${model}`);
    } else {
      console.error("Failed to delete item");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
