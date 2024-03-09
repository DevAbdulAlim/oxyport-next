"use client";

import { useFormState, useFormStatus } from "react-dom";
import { updateCategory } from "@/lib/actions/admin/categoryAction";
import Button from "@/components/ui/button";

const initialState = {
  message: "",
};

type CategoryType = {
  id: number;
  name: string;
  description: string;
};

export default function EditForm({ category }: { category: CategoryType }) {
  const [state, formAction] = useFormState(updateCategory, initialState);
  const { pending } = useFormStatus();
  return (
    <section className="relative">
      {state.message && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <div className="bg-blue-500 text-white p-4 rounded-md z-10">
            {state.message}
          </div>
        </div>
      )}
      <form
        action={formAction}
        className="m-4 shadow-md p-8 bg-white rounded-md"
      >
        <input type="hidden" name="id" defaultValue={category.id} />
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Category Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={category.name}
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-semibold mb-2"
          >
            Category Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            defaultValue={category.description}
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <Button isLoading={pending} type="submit">
            Update
          </Button>
        </div>
      </form>
    </section>
  );
}
