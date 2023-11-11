import { getAll, ValidModelNames } from "@/app/api/services/getAll";
import { addOne } from "@/app/api/services/addOne";
import { NextRequest } from "next/server";

// Define the model
const model: ValidModelNames = "order";

// GET CATEGORY
export async function GET(req: NextRequest) {
  const currentPageParams = req.nextUrl.searchParams.get("currentPage");
  const itemsPerPageParams = req.nextUrl.searchParams.get("itemsPerPage");

  let currentPage: number = 1;
  let itemsPerPage: number = 10;

  if (currentPageParams !== null) {
    currentPage = parseInt(currentPageParams);
  }
  if (itemsPerPageParams !== null) {
    itemsPerPage = parseInt(itemsPerPageParams);
  }

  // Call the 'getAll' function to retrieve all Items
  return getAll(model, currentPage, itemsPerPage);
}

// ADD CATEGORY
export async function POST(req: NextRequest) {
  // Retrieve data from the request
  const data = await req.json();

  // Call the 'addOne' function to retrieve the item based on the model and ID
  return addOne(model, data);
}
