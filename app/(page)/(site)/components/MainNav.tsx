import Link from "next/link";
import Cart from "./Cart";
import CategoryDropdown from "./CategoryDropdown";
import { FcSearch, FcDoughnutChart } from "react-icons/fc";
import Account from "./Account";
import { cookies } from "next/headers";
import { authenticate } from "@/lib/authenticate";

export default async function MainNav() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  let isVerified = false;
  if (token) {
    const { verified } = await authenticate(token.value);
    isVerified = verified;
  }

  return (
    <nav className="flex justify-between">
      <Link className="my-1 text-xl flex" href="/">
        <span className="text-3xl">
          <FcDoughnutChart />
        </span>
        Oxyport
      </Link>

      <CategoryDropdown />

      <form action="" className="relative grow mx-8 flex">
        <input
          className="h-full w-full focus:text-blue-950  rounded-full p-2 focus:outline-none focus:ring focus:ring-blue-800"
          type="text"
          name="search"
          placeholder="Search"
        />
        <button
          className="absolute  right-2 text-black top-2 text-2xl"
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
        <Link href="/login" className=" rounded-md px-2 py-2  font-semibold">
          Login
        </Link>
      )}
    </nav>
  );
}
