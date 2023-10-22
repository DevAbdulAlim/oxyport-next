"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cart from "./Cart";
import CategoryDropdown from "./CategoryDropdown";

export default function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between">
      <Link className="m-2" href="/">
        LoGo
      </Link>

      <CategoryDropdown />

      <form action="" className="grow mx-8 flex">
        <input
          className="h-full w-full rounded-full p-2"
          type="text"
          name="search"
          placeholder="Search"
        />
        <button type="submit">Search</button>
      </form>

      <Cart />

      <button className="hidden md:block">Profile</button>
    </nav>
  );
}
