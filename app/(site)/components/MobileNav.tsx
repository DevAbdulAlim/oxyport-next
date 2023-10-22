"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 py-4 shadow-lg fixed bottom-0 z-40 w-full md:hidden">
      <ul className="flex justify-evenly w-full space-x-4 text-blue-50">
        <li>
          <Link
            className={`${pathname === "/" ? "text-blue-200" : ""}`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname === "/products" ? "text-blue-200" : ""}`}
            href="/products"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname === "/about" ? "text-blue-200" : ""}`}
            href="/about"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname === "/contact" ? "text-blue-200" : ""}`}
            href="/contact"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
