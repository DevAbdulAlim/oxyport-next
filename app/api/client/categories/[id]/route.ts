import { getOne, ValidModelNames } from "@/app/api/services/getOne";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  // Define the item (model) you want to retrieve
  const itemToRetrieve: ValidModelNames = "category";

  // Retrieve the ID from the request parameters
  const idToRetrieve: string = params.id;

  // Call the 'getOne' function to retrieve the item based on the model and ID
  return getOne(itemToRetrieve, idToRetrieve);
}
