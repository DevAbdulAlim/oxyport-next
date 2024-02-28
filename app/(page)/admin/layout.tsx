import type { Metadata } from "next";
import Navbar from "./Navbar";
import { Auth } from "@/lib/actions/auth/Auth";
import { redirect } from "next/navigation";
import { authenticate } from "@/app/api/utils/authenticate";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Ecommerce Site",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { success, role } = await Auth();
  if (!success || role !== "admin") {
    // return redirect("/login");
    return <div>Not Authenticated</div>;
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="md:ms-56 p-4">{children}</main>
      <footer></footer>
    </>
  );
}
