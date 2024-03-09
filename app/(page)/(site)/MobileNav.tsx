"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FcHome, FcShop, FcGrid, FcPaid, FcManager } from "react-icons/fc";
import { useState } from "react";
import SideNav from "./user/SideNav";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-100 py-2 shadow-2xl fixed bottom-0 z-40 w-full md:hidden">
      <ul className="flex justify-evenly w-full space-x-4 text-gray-700">
        <li>
          <Link
            className={`${pathname === "/" ? "text-blue-500" : ""}`}
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
            className={`${
              pathname === "/products/search" ? "text-blue-500" : ""
            }`}
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
            className={`${pathname === "/categories" ? "text-blue-500" : ""}`}
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
            className={`${pathname === "/cart" ? "text-blue-500" : ""}`}
            href="/cart"
          >
            <span className="text-2xl flex justify-center">
              <FcPaid />
            </span>
            <span className="text-sm">Cart</span>
          </Link>
        </li>
        <li>
          <button onClick={toggleNav} type="button" aria-label="Profile">
            <span className="text-2xl flex justify-center">
              <FcManager />
            </span>
            <span className="text-sm">Profile</span>
          </button>
          <SideNav isOpen={isOpen} onClick={toggleNav} />
        </li>
      </ul>
    </nav>
  );
}
