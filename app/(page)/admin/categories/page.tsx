import Link from "next/link";
import { FcPlus } from "react-icons/fc";
import Breadcrumb from "@/components/Breadcrumb";
import { getAll } from "@/lib/actions/getAll";
import CategoryTable from "./table";
import Pagination from "@/components/Pagination";
import InternalServerError from "@/components/error500";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: number;
    pageSize?: number;
  };
}) {
  const page = searchParams?.page || 1;
  const pageSize = searchParams?.pageSize || 10;
  const response = await getAll("admin/categories", page, pageSize);

  if (!response) {
    return <InternalServerError />;
  }
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

        <CategoryTable categories={response.data} />
        <Pagination totalPages={response.totalPages} pageSize={pageSize} />
      </div>
    </>
  );
}
