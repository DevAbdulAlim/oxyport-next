import { getAll, ValidModelNames } from "@/app/api/services/getAll";
import { NextRequest } from "next/server";

// Define the model
const model: ValidModelNames = "product";

// GET CATEGORY
export async function GET(req: NextRequest) {
  // Call the 'getAll' function to retrieve all Items
  return getAll(model);
}
