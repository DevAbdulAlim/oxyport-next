import Link from "next/link";
import { ListData } from "../components/ListData";
import { getAll } from "../services/getAll";
import Breadcrumb from "../components/Breadcrumb";
import { FcPlus } from "react-icons/fc";

export default async function Page() {
  const model = "categories";
  const data = await getAll(model, '1', '7');
  return (
    <>
      <div className="container mx-auto">
      <Breadcrumb />
      <div className="flex mt-4 justify-between">
      <h1 className="text-blue-950 font-semibold  text-2xl">Category List</h1>
      <Link href="/admin/categories/new" className="bg-blue-900 flex  text-white py-2 px-3">
      <span className="text-2xl mr-2"><FcPlus /></span>Add Category</Link>
      </div>
      <ListData data={data.data} model={model} />
      </div>
      
    </>
  );
}
