import { ListData } from "./ListData";
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
  const data = await getData();

  console.log(data);

  return (
    <>
      <ListData data={data.data} />
    </>
  );
}
