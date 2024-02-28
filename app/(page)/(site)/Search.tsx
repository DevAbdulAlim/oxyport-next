'use client'
import React from "react";
import { MdClose } from "react-icons/md";

export default function Search({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`${
        isOpen
          ? "fixed left-0 top-0 h-screen overflow-hidden w-screen z-50 bg-white text-gray-500"
          : "hidden"
      }`}
    >
      <div className="flex flex-col h-screen">
        <div className="p-8 flex items-center justify-between">
          {/* Heading on the left */}
          <h1 className="mr-auto">Search to Oxiport</h1>

          {/* Close button on the right */}
          <button
            className="text-gray-500 hover:text-gray-700 text-2xl"
            onClick={onClick}
            aria-label="Close Search"
          >
            <MdClose />
          </button>
        </div>

        {/* Search form */}
        <form className="p-8">
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your search query"
              className="border p-2 rounded-l-md flex-1"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
            >
              Search
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
