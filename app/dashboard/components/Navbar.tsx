"use client";
import { useState } from "react";
import { SideNav } from "./SideNav";
import Link from "next/link";
import { FcDoughnutChart, FcSearch, FcManager, FcMenu } from "react-icons/fc";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideNav isOpen={isOpen} toggleOpen={toggleOpen} />

      <nav className="md:ms-56 bg-blue-100 px-2 flex py-2 shadow-md justify-between">
        <button
          className="md:hidden m-2 text-2xl"
          onClick={toggleOpen}
          aria-label="Menu"
        >
          <FcMenu />
        </button>

        <form action="" className="relative flex">
          <input
            className="h-full focus:text-blue-950  rounded-full p-2 focus:outline-none focus:ring focus:ring-blue-800"
            type="text"
            name="search"
            placeholder="Search"
          />
          <button
            className="absolute  right-2 text-black top-2 text-2xl"
            type="submit"
            aria-label="Search"
          >
            <FcSearch />
          </button>
        </form>

        <button className=" m-2 flex">
          <span className="text-2xl mr-1">
            <FcManager />
          </span>
          Profile
        </button>
      </nav>
    </>
  );
}
