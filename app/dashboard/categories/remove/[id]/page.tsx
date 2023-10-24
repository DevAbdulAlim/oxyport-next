// Import the necessary functions and types
import { removeOne, ValidModelNames } from "@/app/api/services/removeOne";
import Show from "./show";

// Define the model and client
const model: ValidModelNames = "category";
const client = "web";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const data = await removeOne(model, id, client);

  return (
    <>
      <Show />
    </>
  );
}
