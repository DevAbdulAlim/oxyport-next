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
        <Breadcrumb />

        <div className="flex items-center my-4 justify-between">
          <h1 className="text-blue-950 font-semibold text-2xl">User List</h1>

          <Link
            href="/admin/users/create"
            className="flex items-center bg-blue-900 text-white py-2 px-3 rounded-md hover:bg-blue-800 transition-colors duration-300"
          >
            <span className="text-2xl mr-2">
              <FcPlus />
            </span>
            Add User
          </Link>
        </div>

        <UserTable users={response.data as User[]} />
        <Pagination totalPages={response.totalPages} pageSize={pageSize} />
      </div>
    </>
  );
};

export default Page;
