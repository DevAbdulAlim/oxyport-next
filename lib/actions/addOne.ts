"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
});

export async function addOne(
  prevState: { message: string },
  formData: FormData
) {
  const model = formData.get("model");

  try {
    const response = await fetch(`${process.env.API_HOST}/api/admin/${model}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    if (response.ok) {
      console.log(`Successfully added ${model}`);
    } else {
      console.error("Failed to delete item");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
