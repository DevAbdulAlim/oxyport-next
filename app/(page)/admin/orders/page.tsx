import Link from "next/link";
import { FcPlus } from "react-icons/fc";
import Breadcrumb from "@/components/Breadcrumb";
import { getAll } from "@/lib/actions/getAll";
import OrderTable from "./table"; // Updated import
import Pagination from "@/components/Pagination";

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

  // Changed "admin/orders" to "order"
  const response = await getAll("admin/orders", page, pageSize);

  return (
    <>
      <div className="container mx-auto">
        <Breadcrumb />
        <div className="flex items-center my-4 justify-between">
          <h1 className="text-blue-950 font-semibold text-2xl">
            Order List {/* Updated heading */}
          </h1>

          <Link
            href="/admin/orders/create" // Updated href
            className="flex items-center bg-blue-900 text-white py-2 px-3 rounded-md hover:bg-blue-800 transition-colors duration-300"
          >
            <span className="text-2xl mr-2">
              <FcPlus />
            </span>
            Add Order {/* Updated text */}
          </Link>
        </div>
        <OrderTable orders={response.data} /> {/* Updated component */}
        <Pagination totalPages={response.totalPages} pageSize={pageSize} />
      </div>
    </>
  );
}
