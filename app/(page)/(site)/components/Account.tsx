import Link from "next/link";
import React from "react";
import { FcManager } from "react-icons/fc";

export default function Account() {
  return (
    <div className="relative hidden md:block group">
      <button className="flex m-2 hover:text-blue-500">
        <span className="text-2xl mr-1">
          <FcManager />
        </span>
        Profile
      </button>
      <ul className="hidden group-hover:block text-gray-600 shadow-lg rounded-sm bg-white absolute  right-0 space-y-2">
        {[
          { title: "Orders", link: "/orders" },
          { title: "Settings", link: "/Settings" },
          { title: "Address", link: "/address" },
          { title: "Payment Methods", link: "/payment-methods" },
          { title: "Notification", link: "/notification" },
        ].map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className="block hover:bg-gray-200 whitespace-nowrap py-3 px-6"
            >
              {item.title}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href=""
            className="block border-t-2  hover:bg-gray-200 py-3 px-6"
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}
