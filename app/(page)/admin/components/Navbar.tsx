"use client";
import { useEffect, useRef, useState } from "react";
import { SideNav } from "./SideNav";
import { FcSearch, FcManager, FcMenu } from "react-icons/fc";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sideNavRef = useRef<HTMLDivElement | null>(null);
  const navButtonRef = useRef<HTMLButtonElement | null>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (sideNavRef.current) {
        if (
          navButtonRef.current &&
          !navButtonRef.current.contains(e.target as Node)
        ) {
          toggleClose();
        }
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <>
    <SideNav isOpen={isOpen} toggleOpen={toggleOpen} sideNavRef={sideNavRef} />
  
    <nav className="md:ms-56 bg-blue-200 px-4 py-2 flex items-center justify-between shadow-md">
      <button
        className="md:hidden m-2 text-2xl text-white"
        onClick={toggleOpen}
        aria-label="Menu"
        ref={navButtonRef}
      >
        <FcMenu />
      </button>
  
      <form action="" className="relative flex">
        <input
          className="h-full focus:text-blue-900 rounded-full p-2 focus:outline-none focus:ring focus:ring-blue-800"
          type="text"
          name="search"
          placeholder="Search"
        />
        <button
          className="absolute right-2 text-white top-2 text-2xl"
          type="submit"
          aria-label="Search"
        >
          <FcSearch />
        </button>
      </form>
  
      <button className="m-2 flex items-center text-gray-700">
        <span className="text-2xl mr-1">
          <FcManager />
        </span>
        Profile
      </button>
    </nav>
  </>
  
  );
}
