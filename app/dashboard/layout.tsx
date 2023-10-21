import type { Metadata } from "next";
import Link from "next/link";
import "../globals.css";

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
          <ul className="flex">
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/dashboard">Categories</Link>
            </li>
          </ul>
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
