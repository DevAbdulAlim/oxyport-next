import React from "react";
import Link from "next/link";
import { FcPlus } from "react-icons/fc";
import Breadcrumb from "@/components/Breadcrumb";
import { getAll } from "@/lib/actions/getAll";
import UserTable from "./table";
import Pagination from "@/components/Pagination";
import { User } from "@/lib/prismaTypes";

interface PageProps {
  searchParams?: {
    page?: number;
    pageSize?: number;
  };
}

const Page: React.FC<PageProps> = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const pageSize = searchParams?.pageSize || 10;
  const response = await getAll("admin/users", page, pageSize);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center my-4 justify-between">
          <h1 className="text-blue-950 font-semibold text-2xl">User List</h1>
        </div>

        <UserTable users={response.data as User[]} />
        <Pagination totalPages={response.totalPages} pageSize={pageSize} />
      </div>
    </>
  );
};

export default Page;
