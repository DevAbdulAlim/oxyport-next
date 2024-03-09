"use client";

import { useEffect, useRef, useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import Link from "next/link";

type CategoryType = {
  id: number;
  name: string;
};
type CategoryListType = {
  categories: CategoryType[];
};

export default function CategoryDropdown({ categories }: CategoryListType) {
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
          className="hover:bg-blue-50 p-2 mx-2 flex rounded-full focus:bg-blue-200"
          onClick={toggleDropdown}
          aria-haspopup="listbox"
          aria-label="Category"
        >
          <span className="text-2xl">
            <BiSolidCategory />
          </span>
          <span>Categories</span>
        </button>
      </div>

      {isOpen && (
        <div className="bg-white text-black mt-4 z-30 shadow-2xl p-4 absolute w-56">
          <div className="py-1">
            {categories.map((item: CategoryType) => (
              <Link
                className="block hover:bg-gray-100 py-2 px-4 text-gray-700 text-sm"
                href={`/product/search?categories=${item.id}`}
                key={item.id}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
