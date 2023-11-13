import ProductPage from "./ProductPage";

async function getSingleItem(id: number) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/site/products/${id}`,
      {
        next: { revalidate: 0 },
      }
    );

    if (!response.ok) {
      // Handle non-200 HTTP status codes
      throw new Error(
        `Failed to fetch data (${response.status} ${response.statusText})`
      );
    }

    const newData = await response.json();
    return newData;
  } catch (error) {
    // Handle network or parsing errors
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error for the caller to handle, if needed
  }
}

export default async function page({ params }: { params: { id: number } }) {
  const id = params.id;
  console.log(id);

  try {
    const product = await getSingleItem(id);

    return <ProductPage data={product} />;
  } catch (error: any) {
    return (
      <>
        <div>Product ID is: {id}</div>
        <p>Error: {error.message}</p>
      </>
    );
  }
}
