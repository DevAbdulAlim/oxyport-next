import type { Metadata } from "next";
import "../globals.css";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Home",
  description: "Ecommerce Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <header className="bg-blue-950 text-blue-50 py-4">
          <div className="container mx-auto">
            <Navbar />
          </div>
        </header>
        <main className="grow">{children}</main>
        <footer className="py-16 bg-blue-950 text-blue-50 text-center">
          <p>&copy; 2023 Abdul Alim | All Rights Reserved</p>
        </footer>
      </body>
    </html>
  );
}
