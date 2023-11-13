import { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Ecommerce Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="en">{children}</html>;
}
