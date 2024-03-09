"use client";
import { useFormState, useFormStatus } from "react-dom";
import { updateProduct } from "@/lib/actions/admin/productAction";
import Button from "@/components/ui/button";
import { Product } from "@/lib/prismaTypes";

const initialState = {
  message: "",
};

export default function ProductCreateForm({ product }: { product: Product }) {
  const [state, formAction] = useFormState(updateProduct, initialState);
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
            defaultValue={product.name}
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
            defaultValue={product.description || ""}
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
            defaultValue={product.price}
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
            defaultValue={product.image}
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
            defaultValue={product.stock}
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
            defaultValue={product.categoryId}
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
            defaultValue={product.userId}
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
