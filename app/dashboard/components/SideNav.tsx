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

type SideNavProps = {
  isOpen: boolean;
  toggleOpen: () => void;
};

export function SideNav({ isOpen, toggleOpen }: SideNavProps) {
  return (
    <div
      className={`fixed left-0 top-0 h-full w-56 bg-blue-950 text-blue-50 ${
        isOpen ? "shadow-2xl" : "-translate-x-full"
      } transition-all duration-300 ease-in-out md:-translate-x-0 z-30  md:shadow-none `}
    >
      <div className="flex p-4 justify-between mb-2">
        <Link href="/dashboard" className="flex text-2xl">
          <span className="text-4xl">
            <FcDoughnutChart />
          </span>
          Oxyport
        </Link>
        <button
          className="text-2xl md:hidden"
          type="button"
          onClick={toggleOpen}
        >
          <FcPrevious />
        </button>
      </div>

      <hr className="mb-3" />

      <ul className="p-2">
        <li className="mb-1">
          <Link className="hover:bg-blue-900 p-2 rounded flex w-full" href="/">
            <span className="text-2xl mr-1">
              <FcHome />
            </span>
            Visit Site
          </Link>
        </li>
        <li className="mb-1">
          <Link className="hover:bg-blue-900 p-2 rounded flex w-full" href="">
            <span className="text-2xl mr-1">
              <FcAreaChart />
            </span>
            Dashboard
          </Link>
        </li>
        <li className="mb-1 hover:bg-blue-900">
          <Link
            className="hover:bg-blue-900 p-2 rounded flex w-full"
            href="categories"
          >
            <span className="text-2xl mr-1">
              <FcGrid />
            </span>
            Categories
          </Link>
        </li>
        <li className="mb-1 hover:bg-blue-900">
          <Link
            className="hover:bg-blue-900 p-2 rounded flex w-full"
            href="/dashboard/products"
          >
            <span className="text-2xl mr-1">
              <FcShop />
            </span>
            Products
          </Link>
        </li>

        <li className="mb-1 hover:bg-blue-900">
          <Link className="hover:bg-blue-900 p-2 rounded flex w-full" href="">
            <span className="text-2xl mr-1">
              <FcShipped />
            </span>
            Orders
          </Link>
        </li>
        <li className="mb-1 hover:bg-blue-900">
          <Link className="hover:bg-blue-900 p-2 rounded flex w-full" href="">
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
