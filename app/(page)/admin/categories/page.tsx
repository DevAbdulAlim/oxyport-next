import Link from "next/link";
import { FcPlus } from "react-icons/fc";
import { cookies } from "next/headers";
import Breadcrumb from "@/components/Breadcrumb";
import { getAll } from "@/lib/actions/getAll";
// import { ListData } from "@/components/ListData";
import CategoryTable from "./categoryTable";
import Pagination from "@/components/Pagination";

export default async function Page() {
  const model = "product/categories";
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return (
      <div className="container mx-auto">
        <Breadcrumb />
        <h1 className="text-red-500 text-3xl font-bold mt-8">
          Oops! Authentication Failed
        </h1>
      </div>
    );
  }
  const data = await getAll(model, 1, 5);
  console.log(data);
  return (
    <>
      <div className="container mx-auto">
        <Breadcrumb />

        <div className="flex items-center my-4 justify-between">
          <h1 className="text-blue-950 font-semibold text-2xl">
            Category List
          </h1>

          <Link
            href="/admin/categories/new"
            className="flex items-center bg-blue-900 text-white py-2 px-3 rounded-md hover:bg-blue-800 transition-colors duration-300"
          >
            <span className="text-2xl mr-2">
              <FcPlus />
            </span>
            Add Category
          </Link>
        </div>

        <CategoryTable categories={data.data} />
        <Pagination totalPages={5} />
      </div>
    </>
  );
}
