async function getSingleItem(product_id: number) {
  const response = await fetch(
    `http://localhost:3000/api/site/products/${product_id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function page({ params }: { params: { id: number } }) {
  const id = await params.id;
  console.log(id);

  try {
    const product = await getSingleItem(id);

    return (
      <>
        <div>Product ID is: {id}</div>
        <h1>{product.name}</h1>
      </>
    );
  } catch (error: any) {
    return (
      <>
        <div>Product ID is: {id}</div>
        <p>Error: {error.message}</p>
      </>
    );
  }
}
