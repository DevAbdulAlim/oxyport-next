import { getAll, ValidModelNames } from "@/app/api/services/getAll";
import { addOne } from "@/app/api/services/addOne";
import { NextRequest } from "next/server";

// Define the model
const model: ValidModelNames = "category";

// GET CATEGORY
export async function GET(req: NextRequest) {
  // Call the 'getAll' function to retrieve all Items
  return getAll(model);
}

// ADD CATEGORY
export async function POST(req: NextRequest) {
  // Retrieve data from the request
  const data = await req.json();

  // Call the 'addOne' function to retrieve the item based on the model and ID
  return addOne(model, data);
}
