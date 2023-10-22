"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cart from "./Cart";
import CategoryDropdown from "./CategoryDropdown";
import { FcSearch } from "react-icons/fc";

export default function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between">
      <Link className="m-2" href="/">
        LoGo
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
        >
          <FcSearch />
        </button>
      </form>

      <Cart />

      <button className="hidden md:block">Profile</button>
    </nav>
  );
}
