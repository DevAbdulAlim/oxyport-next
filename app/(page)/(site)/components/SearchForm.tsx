"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Search from "./Search";

export default function SearchForm() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Search */}
      <form
        action=""
        className="relative hidden grow md:flex items-center bg-white rounded-full px-2 shadow-md"
      >
        <input
          className="h-full w-full focus:text-blue-200 rounded-full p-2 focus:outline-none"
          type="text"
          name="search"
          placeholder="Search"
        />
        <button
          className="absolute right-2 top-3 text-2xl text-gray-500"
          type="submit"
          aria-label="Search"
        >
          <FaSearch />
        </button>
      </form>

      {/* Mobile Search */}
      <div className="flex items-center md:hidden">
        <button
          className="text-xl text-gray-500"
          type="button"
          aria-label="Search"
          onClick={toggleOpen}
        >
          <FaSearch />
        </button>

        {/* Mobile Search Overlay */}
        <Search isOpen={isOpen} onClick={toggleOpen} />
      </div>
    </>
  );
}
