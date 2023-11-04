type dataObject = {
    [key: string]: any;
  };
  
  export async function editOne(model: string, id:number, data: dataObject) {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/${model}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log(`Successfully update ${model}`);
        const newData = await response.json();
        return newData;
      } else {
        console.error("Failed to update item");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  