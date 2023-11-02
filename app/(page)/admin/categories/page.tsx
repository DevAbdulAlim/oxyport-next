import Link from "next/link";
import { ListData } from "../components/ListData";
import { getAll } from "../services/getAll";
import Breadcrumb from "../components/Breadcrumb";

export default async function Page() {
  const model = "categories";
  const data = await getAll(model);
  return (
    <>
     <Breadcrumb />
      <Link href="/admin/categories/new">Add Category</Link>
      <ListData data={data.data} model={model} />
      {/* Corrected the model prop */}
    </>
  );
}
