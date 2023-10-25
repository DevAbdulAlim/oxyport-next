import { ListData } from "../components/ListData";
async function getData() {
  const res = await fetch("http://localhost:3000/api/admin/categories", {
    next: { revalidate: 0 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page() {
  const data = await getData(); // Assuming you have a function called getData to fetch your data
  const model = "categories"; // Corrected the model assignment

  console.log(data);

  return (
    <>
      <ListData data={data.data} model={model} />
      {/* Corrected the model prop */}
    </>
  );
}
