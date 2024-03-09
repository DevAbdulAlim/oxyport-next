import Link from "next/link";
import { FcPlus } from "react-icons/fc";
import Breadcrumb from "@/components/Breadcrumb";
import { getAll } from "@/lib/actions/getAll";
import ProductTable from "./table"; // Updated import
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

  const response = await getAll(
    "admin/products",
    `page=${page}&pageSize=${pageSize}`
  );

  if (!response) {
    return <InternalServerError />;
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center my-4 justify-between">
          <h1 className="text-blue-950 font-semibold text-2xl">
            Product List {/* Updated heading */}
          </h1>

          <Link
            href="/admin/products/create" // Updated href
            className="flex items-center bg-blue-900 text-white py-2 px-3 rounded-md hover:bg-blue-800 transition-colors duration-300"
          >
            <span className="text-2xl mr-2">
              <FcPlus />
            </span>
            Add Product {/* Updated text */}
          </Link>
        </div>

        <ProductTable products={response.data} />
        <Pagination totalPages={response.totalPages} pageSize={pageSize} />
      </div>
    </>
  );
}
