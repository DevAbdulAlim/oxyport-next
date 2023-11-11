"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();
  console.log(pathname);
  console.log("hi");
  const items = [
    { title: "Your Orders", link: "/orders" },
    { title: "Settings", link: "/settings" },
    { title: "Address", link: "/address" },
    { title: "Payment Methods", link: "/payment-methods" },
    { title: "Notification", link: "/notification" },
  ];
  return (
    <nav className="h-full hidden md:block col-span-1 px-4 py-6">
      <div className="text-center mb-6">
        <img
          src="https://silicon.createx.studio/assets/img/avatar/18.jpg"
          alt=""
          height="140px"
          width="140px"
          className="rounded-full mx-auto"
        />
        <h2 className="text-xl font-semibold">John Doe</h2>
        <p className="text-gray-600">john@email.com</p>
      </div>
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
