import Link from "next/link";
import { FcPlus } from "react-icons/fc";
import { cookies } from "next/headers";
import Breadcrumb from "@/components/Breadcrumb";
import { getAll } from "@/lib/actions/getAll";
import CategoryTable from "./categoryTable";
import Pagination from "@/components/Pagination";

export default async function Page() {
  const data = await getAll("admin/categories", 1, 5);
  const totalPages = data.data.length / 5;
  console.log(data.data.length);
  return (
    <>
      <div className="container mx-auto">
        <Breadcrumb />

        <div className="flex items-center my-4 justify-between">
          <h1 className="text-blue-950 font-semibold text-2xl">
            Category List
          </h1>

          <Link
            href="/admin/categories/create"
            className="flex items-center bg-blue-900 text-white py-2 px-3 rounded-md hover:bg-blue-800 transition-colors duration-300"
          >
            <span className="text-2xl mr-2">
              <FcPlus />
            </span>
            Add Category
          </Link>
        </div>

        <CategoryTable categories={data.data} />
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
