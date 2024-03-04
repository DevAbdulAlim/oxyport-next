"use client";

import Button from "@/components/ui/button";
import { removeOne } from "@/lib/actions/removeOne";
import { useFormState, useFormStatus } from "react-dom";
import { MdDelete } from "react-icons/md";

const initialState = {
  message: "",
};

function DeleteButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="dangerIcon" isLoading={pending}>
      <MdDelete />
    </Button>
  );
}

export default function DeleteForm({ id, name }: { id: number; name: string }) {
  const [state, formAction] = useFormState(removeOne, initialState);

  return (
    <>
      {state.message && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <div className="bg-blue-500 text-white p-4 rounded-md z-10">
            {state.message}
          </div>
        </div>
      )}

      <form action={formAction}>
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="name" value="categories" />
        <DeleteButton />
      </form>
    </>
  );
}