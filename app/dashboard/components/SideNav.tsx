"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FcPrevious,
  FcHome,
  FcDoughnutChart,
  FcAreaChart,
  FcShop,
  FcGrid,
  FcShipped,
  FcAssistant,
  FcSettings,
  FcLock,
} from "react-icons/fc";

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed left-0 top-0 h-full w-56 bg-blue-950 text-blue-50">
      <div className="flex p-4 justify-between mb-2">
        <Link href="/dashboard" className="flex text-2xl">
          <span className="text-4xl">
            <FcDoughnutChart />
          </span>
          Oxyport
        </Link>
        <button className="text-2xl" type="button" onClick={toggleOpen}>
          <FcPrevious />
        </button>
      </div>

      <hr className="mb-3" />

      <ul className="p-2">
        <li className="mb-1">
          <Link className="hover:bg-blue-900 p-2 rounded flex w-full" href="#">
            <span className="text-2xl mr-1">
              <FcHome />
            </span>
            Visit Site
          </Link>
        </li>
        <li className="mb-1">
          <Link className="hover:bg-blue-900 p-2 rounded flex w-full" href="#">
            <span className="text-2xl mr-1">
              <FcAreaChart />
            </span>
            Dashboard
          </Link>
        </li>
        <li className="mb-1 hover:bg-blue-900">
          <Link className="hover:bg-blue-900 p-2 rounded flex w-full" href="#">
            <span className="text-2xl mr-1">
              <FcGrid />
            </span>
            Categories
          </Link>
        </li>
        <li className="mb-1 hover:bg-blue-900">
          <Link className="hover:bg-blue-900 p-2 rounded flex w-full" href="#">
            <span className="text-2xl mr-1">
              <FcShop />
            </span>
            Products
          </Link>
        </li>

        <li className="mb-1 hover:bg-blue-900">
          <Link className="hover:bg-blue-900 p-2 rounded flex w-full" href="#">
            <span className="text-2xl mr-1">
              <FcShipped />
            </span>
            Orders
          </Link>
        </li>
        <li className="mb-1 hover:bg-blue-900">
          <Link className="hover:bg-blue-900 p-2 rounded flex w-full" href="#">
            <span className="text-2xl mr-1">
              <FcAssistant />
            </span>
            Customers
          </Link>
        </li>
        <li className="mb-1 hover:bg-blue-900">
          <Link className="hover:bg-blue-900 p-2 rounded flex w-full" href="">
            <span className="text-2xl mr-1">
              <FcSettings />
            </span>
            Account Settings
          </Link>
        </li>
        <li className="mb-1 hover:bg-blue-900">
          <Link className="hover:bg-blue-900 p-2 rounded flex w-full" href="">
            <span className="text-2xl mr-1">
              <FcLock />
            </span>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}
