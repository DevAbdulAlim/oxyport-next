import Link from "next/link";
import Cart from "./Cart";
import CategoryDropdown from "./CategoryDropdown";
import { FcDoughnutChart } from "react-icons/fc";
import Account from "./Account";
import { cookies } from "next/headers";
import { authenticate } from "@/app/api/utils/authenticate";

import SearchForm from "./SearchForm";
import { getAll } from "@/lib/actions/getAll";
import ReduxProvider from "@/redux/provider";

export default async function MainNav() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  let isVerified = false;
  if (token) {
    const { success } = await authenticate(token.value);
    isVerified = success;
  }

  const categories = await getAll("product/categories", `page=1&pageSize=5`);

  return (
    <nav className="flex   justify-between py-2 md:py-4  px-6">
      <Link className="mb-2 mr-4 text-3xl flex items-center" href="/">
        <span className="text-4xl">
          <FcDoughnutChart />
        </span>
        <span className="ml-1 text-xl font-bold">Oxyport</span>
      </Link>

      <CategoryDropdown categories={categories?.data ? categories.data : []} />
      <SearchForm />

      <Cart />

      {isVerified ? (
        <Account />
      ) : (
        <Link
          href="/login"
          className="rounded-md px-4 my-2 flex items-center justify-center font-semibold bg-blue-800 text-white hover:bg-blue-700"
        >
          Login
        </Link>
      )}
    </nav>
  );
}
