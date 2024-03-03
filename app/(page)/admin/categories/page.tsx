import { FcPlus } from "react-icons/fc";
import Breadcrumb from "@/components/Breadcrumb";
import { getAll } from "@/lib/actions/getAll";
import CategoryTable from "./table";
import Pagination from "@/components/Pagination";
import InternalServerError from "@/components/error500";
import Link from "@/components/ui/link";

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
        <div className="flex items-center my-4 justify-between">
          <h1 className="text-blue-950 font-semibold text-2xl">
            Category List
          </h1>

          <Link to="/admin/categories/create">
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
