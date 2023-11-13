import type { Metadata } from "next";
import Navbar from "./components/Navbar";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Ecommerce Site",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <header>
        <Navbar />
      </header>
      <main className="md:ms-56 p-4">{children}</main>
      <footer></footer>
    </body>
  );
}
