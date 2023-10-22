import type { Metadata } from "next";
import Link from "next/link";
import "../globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Ecommerce Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main className="md:ms-56 p-4">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
