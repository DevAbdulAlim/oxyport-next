import Link from "next/link";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = [
    { title: "Your Orders", link: "/orders" },
    { title: "Settings", link: "/settings" },
    { title: "Address", link: "/address" },
    { title: "Payment Methods", link: "/payment-methods" },
    { title: "Notification", link: "/notification" },
  ];
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <nav className="h-full hidden md:block col-span-1 px-4 py-6">
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="block text-gray-700 px-6 py-3 hover:bg-gray-300  rounded-md"
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

        <div className="p-6 col-span-3 ">{children}</div>
      </div>
    </div>
  );
}
