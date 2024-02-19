"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SideNav({isOpen, onClick}: {isOpen?: boolean, onClick?: () => void}) {

  const pathname = usePathname();
  const items = [
    { title: "Your Orders", link: "/orders" },
    { title: "Settings", link: "/settings" },
    { title: "Address", link: "/address" },
    { title: "Payment Methods", link: "/payment-methods" },
    { title: "Notification", link: "/notification" },
  ];

  return (
    <nav  className={`fixed md:static flex flex-col right-0 w-64 md:w-full bg-white  text-black p-4 inset-y-0 ${
      isOpen ? "shadow-2xl" : "translate-x-full md:translate-x-0"
    } transition-all duration-500 z-30 md:z-0 ease-in-out `}>
      <div className="text-center mb-6">
        <img
          src="https://silicon.createx.studio/assets/img/avatar/18.jpg"
          alt=""
          height="140px"
          width="140px"
          className="rounded-full mx-auto"
        />
        <h2 className="text-xl text-gray-600 font-semibold">John Doe</h2>
        <p className="text-gray-600">john@email.com</p>
      </div>
      <button type="button" onClick={onClick} className="absolute top-2 left-2 bg-blue-500 h-8 w-8 rounded-full md:hidden text-white">X</button>
      <hr />
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className={`block  px-6 py-3 ${
                pathname === item.link
                  ? "bg-blue-900 text-white"
                  : "text-gray-700"
              } hover:bg-gray-300  rounded-md`}
            >
              {item.title}
            </Link>
          </li>
        ))}
        <hr />
        <li>
          <Link
            href=""
            className="block text-gray-700 px-6 py-3 hover:text-red-500  rounded-md"
          >
            Log out
          </Link>
        </li>
      </ul>
    </nav>
  );
}
