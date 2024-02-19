import Link from "next/link";
import React from "react";
import { MdAccountCircle } from "react-icons/md";
import Logout from "../../Logout";

export default function Account() {
  return (
    <div className="relative hidden md:block group">
      <button className="flex my-2 hover:text-blue-500">
        <span className="text-2xl mr-1">
          <MdAccountCircle />
        </span>
        Profile
      </button>
      <ul className="hidden group-hover:block text-gray-600 shadow-lg rounded-sm bg-white absolute z-50 right-0 space-y-2">
        {[
          { title: "Orders", link: "/orders" },
          { title: "Settings", link: "settings" },
          { title: "Address", link: "/address" },
          { title: "Payment Methods", link: "/payment-methods" },
          { title: "Notification", link: "/notification" },
        ].map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className="block hover:bg-blue-50 whitespace-nowrap py-3 px-6"
            >
              {item.title}
            </Link>
          </li>
        ))}
        <li>
          <Logout />
        </li>
      </ul>
    </div>
  );
}
