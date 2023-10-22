"use client";

import { useState } from "react";
import { FcPaid } from "react-icons/fc";

export default function Cart() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    // Off-canvas menu container
    <div className="m-2 hidden md:block">
      <div
        className={`fixed right-0 w-full sm:w-96 bg-blue-900 p-4 inset-y-0 ${
          menuOpen ? "" : "translate-x-full"
        } transition-all duration-500 ease-in-out `}
      >
        <button onClick={toggleMenu}>Close</button>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>

      <button onClick={toggleMenu} className="flex mr-2">
        <span className="text-2xl mr-1">
          <FcPaid />
        </span>
        Cart
      </button>
    </div>
  );
}
