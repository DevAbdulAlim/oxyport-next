import Footer from "./Footer";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import TopNavbar from "./TopNavbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNavbar />

      {/* Header */}
      <header className="bg-blue-200 sticky shadow-md top-0 z-30">
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
    </div>
  );
}
