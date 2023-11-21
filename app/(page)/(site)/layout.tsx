import type { Metadata } from "next";
import MainNav from "./components/MainNav";
import MobileNav from "./components/MobileNav";
import CustomProvider from "./CustomProvider";

export const metadata: Metadata = {
  title: "Home",
  description: "Ecommerce Site",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CustomProvider>
      <body className="flex flex-col h-screen">
        <header className="bg-blue-950 text-blue-50 py-4">
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


// Footer
const Footer = () => {
  const about_us_links = [
    { title: "Careers", link: "/careers" },
    { title: "Our Stories", link: "/our-stories" },
    { title: "Our Cares", link: "/our-cares" },
    { title: "Terms & Conditions", link: "/terms-and-conditions" },
    { title: "Privacy Policy", link: "/privacy-policy" },
  ];

  const customer_care_links = [
    { title: "Help Center", link: "/help-center" },
    { title: "How to Buy", link: "/how-to-buy" },
    { title: "Track Your Order", link: "/track-your-order" },
    {
      title: "Corporate & Bulk Purchasing",
      link: "/corporate-and-bulk-purchasing",
    },
    { title: "Returns & Refunds", link: "/returns-and-refunds" },
  ];

  return (
    <footer className=" bg-gray-800 px-3 text-blue-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
          </div>

          <div>
            <h3 className="text-2xl">About Us</h3>
            <ul>
              {about_us_links.map((item, index) => (
                <li key={index}>
                  <a className="hover:underline text-gray-200" href="">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl">Customer Care</h3>
            <ul>
              {customer_care_links.map((item, index) => (
                <li key={index}>
                  <a className="hover:underline text-gray-200" href="">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl">Contact Us</h3>
            <p className="text-gray-200">
              70 Washington Square South, New York, <br />
              NY 10012, United States <br />
              Email: uilib.help@gmail.com <br />
              Phone: +1 1123 456 780
            </p>
          </div>
        </div>

        {/* copyright */}
        <div className="text-center mb-16 md:mb-0 py-5">
          <p>&copy; 2023 Abdul Alim | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
