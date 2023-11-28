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
      <body className="flex flex-col min-h-screen">
        {/* TopBar */}
        <div className="bg-blue-100 px-3 py-3">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-xl text-blue-700 font-bold">
              Welcome to OxyPort Market!
            </h1>
            <p className="text-gray-600">
              Where coding dreams and shopping carts unite. 💖
            </p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-700">Total Orders: 50 🛒</p>
              <p className="text-gray-700">Happy Customers: 95% 😊</p>
            </div>
          </div>
        </div>

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
