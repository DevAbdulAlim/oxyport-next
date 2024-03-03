import Link from "next/link";
import { FcPlus } from "react-icons/fc";
import Breadcrumb from "@/components/Breadcrumb";
import { getAll } from "@/lib/actions/getAll";
import OrderTable from "./table";
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

  const response = await getAll("admin/orders", page, pageSize);

  if (!response) {
    return <InternalServerError />;
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center my-4 justify-between">
          <h1 className="text-blue-950 font-semibold text-2xl">
            Order List {/* Updated heading */}
          </h1>
        </div>
        <OrderTable orders={response.data} /> {/* Updated component */}
        <Pagination totalPages={response.totalPages} pageSize={pageSize} />
      </div>
    </>
  );
}
