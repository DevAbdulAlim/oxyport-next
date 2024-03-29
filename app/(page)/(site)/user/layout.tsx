import SideNav from "./SideNav";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <SideNav />
        <div className="p-6 col-span-3 ">{children}</div>
      </div>
    </div>
  );
}
