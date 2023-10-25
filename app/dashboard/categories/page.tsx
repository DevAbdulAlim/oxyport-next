// Import the necessary functions and types
import { getAll, ValidModelNames } from "@/app/api/services/getAll";
import { ListData } from "./ListData";

// Define the model and client
const model: ValidModelNames = "category";
const client = "web";

// Function to fetch data
export default async function getData() {
  const data = await getAll(model);

  return <>{/* <ListData data={data} /> */}</>;
}
