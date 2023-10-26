import Link from "next/link";
import { ListData } from "../components/ListData";
import { getAll } from "../services/getAll";

export default async function Page() {
  const model = "categories";
  const data = await getAll(model);
  return (
    <>
      <Link href="/dashboard/categories/new">Add Category</Link>
      <ListData data={data.data} model={model} />
      {/* Corrected the model prop */}
    </>
  );
}
