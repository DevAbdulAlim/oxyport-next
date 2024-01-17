import type { Metadata } from "next";
import MainNav from "./components/MainNav";
import MobileNav from "./components/MobileNav";
import CustomProvider from "./CustomProvider";
import Footer from "./Footer";
import TopNavbar from "./components/TopNavbar";

export const metadata: Metadata = {
  title: "Home",
  description: "Ecommerce Site",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CustomProvider>
      <body className="flex flex-col min-h-screen">
        <TopNavbar />

        {/* Header */}
        <header className="bg-blue-100 sticky top-0 z-30">
          <div className="max-w-7xl mx-auto text-gray-700">
            <MainNav />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <Footer />

        {/* MobileNav */}
        <MobileNav />
      </body>
    </CustomProvider>
  );
}
