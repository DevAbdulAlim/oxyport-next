import type { Metadata } from "next";
import MainNav from "./components/MainNav";
import MobileNav from "./components/MobileNav";
import CustomProvider from "./CustomProvider";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Home",
  description: "Ecommerce Site",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CustomProvider>
      <body className="flex flex-col h-screen ">
        <header className="bg-blue-900 text-white">
          <div className="container mx-auto">
            <MainNav />
          </div>
        </header>
        <main className="grow">{children}</main>
        <Footer />
        <MobileNav />
      </body>
    </CustomProvider>
  );
}
