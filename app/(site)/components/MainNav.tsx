"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cart from "./Cart";

export default function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between">
      <Link className="m-2" href="/">
        LoGo
      </Link>

      <ul className="hidden md:flex space-x-4">
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

      <Cart />
    </nav>
  );
}
