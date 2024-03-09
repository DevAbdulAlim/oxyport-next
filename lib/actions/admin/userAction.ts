import { revalidatePath } from "next/cache";

export async function deleteUser(
  prevState: { message: string },
  formData: FormData
) {
  try {
    const response = await fetch(
      `${process.env.API_HOST}/api/admin/users/${formData.get("id")}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      revalidatePath("/");
      return { message: `Successfully Deleted user` };
    } else {
      return { message: `Failed to delete user` };
    }
  } catch (error) {
    return { message: `Error deleting user` };
  }
}
