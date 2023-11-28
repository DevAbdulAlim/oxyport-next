import Link from "next/link";
import Cart from "./Cart";
import CategoryDropdown from "./CategoryDropdown";
import { FcSearch, FcDoughnutChart } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import Account from "./Account";
import { cookies } from "next/headers";
import { authenticate } from "@/lib/authenticate";
import { getAll } from "@/lib/services/getAll";
import Search from "./Search";
import SearchForm from "./SearchForm";

export default async function MainNav() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  let isVerified = false;
  if (token) {
    const { verified } = await authenticate(token.value);
    isVerified = verified;
  }

  const categories = await getAll("categories", 1, 8);

  return (
    <nav className="flex justify-between bg-blue-900 text-white py-2 md:py-4  px-6">
      <Link className="my-1 text-3xl flex items-center" href="/">
        <span className="text-4xl">
          <FcDoughnutChart />
        </span>
        <span className="ml-2 text-xl font-bold">Oxyport</span>
      </Link>

      <CategoryDropdown categories={categories.data} />

     
      <SearchForm />


      <Cart />

      {isVerified ? (
        <Account />
      ) : (
        <Link
          href="/login"
          className="rounded-md px-4 my-2 flex items-center justify-center font-semibold bg-blue-800 hover:bg-blue-700"
        >
          Login
        </Link>
      )}
    </nav>
  );
}
