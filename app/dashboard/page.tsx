import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <section>
      <div className="container mx-auto">
        <Link
          className="bg-blue-100 rounded-lg text-blue-900 hover:bg-blue-200 py-2 px-4"
          href="/"
        >
          Visit Site
        </Link>

        <br />
        <br />
        <h1>Welcome to Dashboard</h1>
      </div>
    </section>
  );
}
