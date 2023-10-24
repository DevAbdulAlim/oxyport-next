"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Show() {
  const router = useRouter();

  useEffect(() => {
    // Show the HTML content for 5 seconds
    setTimeout(() => {
      // Redirect the user to another page
      router.push("/dashboard/categories");
    }, 1000);
  }, []);

  return (
    <div className="flex justify-center items-center ">
      {/* HTML content goes here */}
      <button className="animate-pulse bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        Success
      </button>
    </div>
  );
}
