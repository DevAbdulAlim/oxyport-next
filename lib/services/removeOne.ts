export async function removeOne(model: string, itemId: number) {
  try {
    const response = await fetch(
      `${process.env.HOST}/api/admin/${model}/${itemId}`,
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
