import Link from "next/link";
import { ListData } from "../components/ListData";
import { getAll } from "../services/getAll";
import Breadcrumb from "../components/Breadcrumb";
import { FcPlus } from "react-icons/fc";
import { cookies } from "next/headers";

export default async function Page() {
  const model = "users";
  const cookieStore = cookies()
  const token = cookieStore.get('token');
  if (!token) {
    return (
      <div className="container mx-auto">
        <Breadcrumb />
        <h1 className="text-red-500 text-3xl font-bold mt-8">Oops! Authentication Failed</h1>
      </div>
    );
  }
  const data = await getAll(model, 1, 5, token.value);
  return (
    <>
      <div className="container mx-auto">
        <Breadcrumb />
        <div className="flex mt-4 justify-between">
          <h1 className="text-blue-950 font-semibold text-2xl">User List</h1>
          <Link
            href="/admin/categories/new"
            className="flex items-center bg-blue-900 text-white py-2 px-3 rounded-md hover:bg-blue-800 transition-colors duration-300"
          >
            <span className="text-2xl mr-2">
              <FcPlus />
            </span>
            User Product
          </Link>
        </div>
        <ListData data={data.data} model={model} pages={data.totalPages} token={token.value} />
      </div>
    </>
  );
}
