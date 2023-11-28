"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FcHome, FcShop, FcGrid, FcPaid, FcManager } from "react-icons/fc";
import SideNav from "../(account)/SideNav";
import { useState } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname();

    const toggleNav = () => {
    setIsOpen(!isOpen)
    }

  return (
    <nav className="bg-blue-950 py-2 shadow-lg fixed bottom-0 z-40 w-full md:hidden">
      <ul className="flex justify-evenly w-full space-x-4 text-blue-50">
        <li>
          <Link
            className={`${pathname === "/" ? "text-blue-200" : ""}`}
            href="/"
          >
            <span className="text-2xl flex justify-center">
              <FcHome />
            </span>
            <span className="text-sm">Home</span>
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname === "/products/search" ? "text-blue-200" : ""}`}
            href="/products/search"
          >
            <span className="text-2xl flex justify-center">
              <FcShop />
            </span>
            <span className="text-sm">Products</span>
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname === "/categories" ? "text-blue-200" : ""}`}
            href="/categories"
          >
            <span className="text-2xl flex justify-center">
              <FcGrid />
            </span>
            <span className="text-sm">Categories</span>
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname === "/cart" ? "text-blue-200" : ""}`}
            href="/cart"
          >
            <span className="text-2xl flex justify-center">
              <FcPaid />
            </span>
            <span className="text-sm">Cart</span>
          </Link>
        </li>
        <li>
          <button onClick={toggleNav}>
            <span className="text-2xl flex justify-center">
              <FcManager />
            </span>
            <span className="text-sm">Profile</span>
            <SideNav isOpen={isOpen} onClick={toggleNav} />
          </button>
        </li>
      </ul>
    </nav>
  );
}
