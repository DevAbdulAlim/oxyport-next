import type { Metadata } from "next";
import MainNav from "./components/MainNav";
import MobileNav from "./components/MobileNav";
import CustomProvider from "./CustomProvider";

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
    <body className="flex flex-col h-screen">
      <header className="bg-blue-950 text-blue-50 py-4">
        <div className="container mx-auto">
          <MainNav />
        </div>
      </header>
      <main className="grow">
        <CustomProvider>{children}</CustomProvider>
      </main>
      <footer className="py-16 bg-blue-900 text-blue-50 text-center">
        <p>&copy; 2023 Abdul Alim | All Rights Reserved</p>
      </footer>
      <MobileNav />
    </body>
  );
}
