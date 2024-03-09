"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/logout", {
        method: "POST",
      });

      if (response.ok) {
        console.log("Logout Successful");
        router.refresh(); // Redirect to the home page after successful logout
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className="block border-t-2 w-full text-left text-red-500  hover:bg-gray-200 py-3 px-6"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
