"use client";
import { useFormState, useFormStatus } from "react-dom";
import { createProduct } from "@/lib/actions/admin/productAction";
import Button from "@/components/ui/button";

const initialState = {
  message: "",
};

export default function ProductCreateForm() {
  const [state, formAction] = useFormState(createProduct, initialState);
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
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-semibold mb-2"
          >
            Product Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-semibold mb-2">
            Product Price
          </label>
          <input
            type="text"
            name="price"
            id="price"
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-semibold mb-2">
            Product Image URL
          </label>
          <input
            type="text"
            name="image"
            id="image"
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="stock" className="block text-sm font-semibold mb-2">
            Product Stock
          </label>
          <input
            type="text"
            name="stock"
            id="stock"
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="categoryId"
            className="block text-sm font-semibold mb-2"
          >
            Category ID
          </label>
          <input
            type="text"
            name="categoryId"
            id="categoryId"
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="userId" className="block text-sm font-semibold mb-2">
            User ID
          </label>
          <input
            type="text"
            name="userId"
            id="userId"
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <Button isLoading={pending} type="submit">
            Create
          </Button>
        </div>
      </form>
    </section>
  );
}
