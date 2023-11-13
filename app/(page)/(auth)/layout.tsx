import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth",
  description: "Ecommerce Site",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <body>{children}</body>;
}
