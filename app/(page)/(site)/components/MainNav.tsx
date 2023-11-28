import Link from "next/link";
import Cart from "./Cart";
import CategoryDropdown from "./CategoryDropdown";
import { FcSearch, FcDoughnutChart } from "react-icons/fc";
import Account from "./Account";
import { cookies } from "next/headers";
import { authenticate } from "@/lib/authenticate";
import { getAll } from "@/lib/services/getAll";

export default async function MainNav() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  let isVerified = false;
  if (token) {
    const { verified } = await authenticate(token.value);
    isVerified = verified;
  }

  const categories = await getAll('categories', 1, 8);

  return (
    <nav className="flex justify-between bg-blue-900 text-white py-4 px-6">
    <Link className="my-1 text-3xl flex items-center" href="/">
      <span className="text-4xl">
        <FcDoughnutChart />
      </span>
      <span className="ml-2 text-xl font-bold">Oxyport</span>
    </Link>
  
    <CategoryDropdown categories={categories.data} />
  
    <form action="" className="relative flex items-center">
      <input
        className="h-full w-full focus:text-blue-200 rounded-full p-2 focus:outline-none focus:ring focus:ring-blue-800"
        type="text"
        name="search"
        placeholder="Search"
      />
      <button
        className="absolute right-2 text-white top-2 text-2xl"
        type="submit"
        aria-label="Search"
      >
        <FcSearch />
      </button>
    </form>
  
    <Cart />
  
    {isVerified ? (
      <Account />
    ) : (
      <Link href="/login" className="rounded-md px-4 my-2 flex items-center justify-center font-semibold bg-blue-800 hover:bg-blue-700">
      Login
    </Link>
    
    
    )}
  </nav>
  
  );
}
