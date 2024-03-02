"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

const categorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
});

const categoryParser = (formData: FormData) => {
  return categorySchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });
};

export async function createCategory(
  prevState: { message: string },
  formData: FormData
) {
  const parse = categoryParser(formData);

  if (!parse.success) {
    return {
      message: `Inappropriate information provided: ${parse.error.message}`,
    };
  }

  const data = parse.data;

  try {
    const response = await fetch(
      `${process.env.API_HOST}/api/admin/categories`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      revalidatePath("/admin");
      return { message: "Category created successfully" };
    } else {
      return { message: "Failed to create category" };
    }
  } catch (error) {
    return { message: "Internal Server Error creating category" };
  }
}

export async function updateCategory(
  prevState: { message: string },
  formData: FormData
) {
  const parse = categoryParser(formData);

  if (!parse.success) {
    return {
      message: `Inappropriate information provided: ${parse.error.message}`,
    };
  }

  const data = parse.data;

  try {
    const response = await fetch(
      `${process.env.API_HOST}/api/admin/categories/${formData.get("id")}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      revalidatePath("/admin");
      return { message: "Category updated successfully" };
    } else {
      return { message: "Category update failed" };
    }
  } catch (error) {
    return { message: "Internal Server Error updating category" };
  }
}

export async function deleteCategory(
  prevState: { message: string },
  formData: FormData
) {
  try {
    const response = await fetch(
      `${process.env.API_HOST}/api/admin/categories/${formData.get("id")}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      revalidatePath("/");
      return { message: `Successfully Deleted categories` };
    } else {
      return { message: `Failed to delete item` };
    }
  } catch (error) {
    return { message: `Error deleting item` };
  }
}
