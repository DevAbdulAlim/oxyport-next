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
    <div className="flex container mx-auto">
      <nav className="mr-6 h-full  w-80 px-4 py-6">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="block text-gray-700 px-6 py-3 hover:bg-gray-300  rounded-md"
              >
                {item.title}
              </a>
            </li>
          ))}
          <hr />
          <li>
            <a
              href=""
              className="block text-gray-700 px-6 py-3 hover:text-red-500  rounded-md"
            >
              Log out
            </a>
          </li>
        </ul>
      </nav>

      <div className="border-l-2 p-6">{children}</div>
    </div>
  );
}
