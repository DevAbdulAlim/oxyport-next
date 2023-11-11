import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Home",
  description: "Ecommerce Site",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en">{children}</html>;
}
