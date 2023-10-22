"use client";

import { useState } from "react";
import { FcGrid } from "react-icons/fc";

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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative hidden md:block">
      <div>
        <button
          type="button"
          id="options-menu"
          className="hover:bg-blue-900 p-2 flex rounded-full focus:bg-blue-800"
          onClick={toggleDropdown}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className="text-2xl">
            <FcGrid />
          </span>
          <span>Categories</span>
        </button>
      </div>

      {isOpen && (
        <div className="bg-white text-black mt-4 shadow-2xl p-4 absolute w-56">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {categories.map((item, index) => (
              <a
                className="block hover:bg-gray-100 py-2 px-4 text-gray-700 text-sm"
                href="#"
                key={index}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
