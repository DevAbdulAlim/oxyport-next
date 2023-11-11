import { editOne } from "@/app/api/services/editOne";
import { getOne, ValidModelNames } from "@/app/api/services/getOne";
import { removeOne } from "@/app/api/services/removeOne";
import { NextRequest, NextResponse } from "next/server";

// Define the model
const model: ValidModelNames = "order";

// GET CATEGORY
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  // Retrieve the ID from the request parameters
  const id: string = params.id;

  // Call the 'getOne' function to retrieve the item based on the model and ID
  return getOne(model, id);
}

// UPDATE CATEGORY
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  // Retrieve the ID from the request parameters
  const id: string = params.id;

  // Retrieve data from the request
  const data = await req.json();

  // Call the 'getOne' function to retrieve the item based on the model and ID
  return editOne(model, id, data);
}

// DELETE CATEGORY
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  // Retrieve the ID from the request parameters
  const id: string = params.id;

  // Call the 'getOne' function to retrieve the item based on the model and ID
  return removeOne(model, id);
}
