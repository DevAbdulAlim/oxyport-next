import { getAll, ValidModelNames } from "@/app/api/services/getAll";
import { NextRequest } from "next/server";

// Define the model
const model: ValidModelNames = "product";

// GET Product
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
