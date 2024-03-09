import { revalidatePath } from "next/cache";
import { z } from "zod";

const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  price: z.number().positive("Price must be a positive number"),
  image: z.string(),
  stock: z.number().int().positive("Stock must be a positive integer"),
  categoryId: z
    .number()
    .int()
    .positive("Category ID must be a positive integer"),
  userId: z.number().int().positive("User ID must be a positive integer"),
});

const productParser = (formData: FormData) => {
  return productSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
    image: formData.get("image"),
    stock: formData.get("stock"),
    categoryId: formData.get("categoryId"),
    userId: formData.get("userId"),
  });
};

export async function createProduct(
  prevState: { message: string },
  formData: FormData
) {
  const parse = productParser(formData);

  if (!parse.success) {
    return {
      message: `Inappropriate information provided: ${parse.error?.message}`,
    };
  }

  const data = parse.data;

  try {
    const response = await fetch(`${process.env.API_HOST}/api/admin/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      revalidatePath("/admin");
      return { message: "Product created successfully" };
    } else {
      return { message: "Failed to create product" };
    }
  } catch (error) {
    return { message: "Internal Server Error creating product" };
  }
}

export async function updateProduct(
  prevState: { message: string },
  formData: FormData
) {
  const parse = productParser(formData);

  if (!parse.success) {
    return {
      message: `Inappropriate information provided: ${parse.error?.message}`,
    };
  }

  const data = parse.data;

  try {
    const response = await fetch(
      `${process.env.API_HOST}/api/admin/products/${formData.get("id")}`,
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
      return { message: "Product updated successfully" };
    } else {
      return { message: "Product update failed" };
    }
  } catch (error) {
    return { message: "Internal Server Error updating product" };
  }
}

export async function deleteProduct(
  prevState: { message: string },
  formData: FormData
) {
  try {
    const response = await fetch(
      `${process.env.API_HOST}/api/admin/products/${formData.get("id")}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      revalidatePath("/");
      return { message: `Successfully Deleted product` };
    } else {
      return { message: `Failed to delete product` };
    }
  } catch (error) {
    return { message: `Error deleting product` };
  }
}
