"use server";

import { revalidatePath } from "next/cache";

export async function removeOne(
  prevState: { message: string },
  formData: FormData
) {
  const itemId = formData.get("id");
  const model = formData.get("name");
  try {
    const response = await fetch(
      `${process.env.API_HOST}/api/admin/${model}/${itemId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      revalidatePath("/");
      return { success: true, message: `Successfully Deleted ${model}` };
    } else {
      return { success: false, message: `Failed to delete item` };
    }
  } catch (error) {
    return { success: false, message: `Error deleting item` };
  }
}
