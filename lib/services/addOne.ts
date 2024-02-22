type dataObject = {
  [key: string]: any;
};

export async function addOne(model: string, data: dataObject) {
  try {
    const response = await fetch(`${process.env.HOST}api/admin/${model}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log(`Successfully added ${model}`);
    } else {
      console.error("Failed to delete item");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
