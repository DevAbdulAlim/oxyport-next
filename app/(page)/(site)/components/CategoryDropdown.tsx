"use client";

import { useEffect, useRef, useState } from "react";
import { FcGrid } from "react-icons/fc";
import Link from "next/link";

const categories = [
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
  "Category 6",
  "Category 7",
];

export default function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="relative hidden md:block" ref={dropdownRef}>
      <div>
        <button
          type="button"
          id="options-menu"
          className="hover:bg-blue-900 p-2 mx-2 flex rounded-full focus:bg-blue-800"
          onClick={toggleDropdown}
          aria-haspopup="listbox"
          aria-label="Category"
        >
          <span className="text-2xl">
            <FcGrid />
          </span>
          <span>Categories</span>
        </button>
      </div>

      {isOpen && (
        <div className="bg-white text-black mt-4 z-30 shadow-2xl p-4 absolute w-56">
          <div className="py-1">
            {categories.map((item, index) => (
              <Link
                className="block hover:bg-gray-100 py-2 px-4 text-gray-700 text-sm"
                href="/products"
                key={index}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
