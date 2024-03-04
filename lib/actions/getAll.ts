"use server";

import { cookies } from "next/headers";

export const getAll = async (path: string, params?: string) => {
  const token = cookies().get("token")?.value;
  try {
    const apiUrl = `${process.env.API_HOST}/api/${path}${
      params ? `?${params}` : ""
    }`;

    const response = await fetch(apiUrl, {
      next: { revalidate: 0 },
      headers: {
        token: token || "",
      },
    });

    if (response.ok) {
      const newData = await response.json();
      return newData;
    } else {
      console.error("Failed to fetch");
      return null;
    }
  } catch (error) {
    console.error("Oh no, an error occurred while fetching data:", error);
    return null;
  }
};
