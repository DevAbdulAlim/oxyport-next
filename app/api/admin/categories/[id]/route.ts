import { ModelNames } from "@/app/api/utils/types";
import { editOne } from "@/app/api/services/editOne";
import { getOne } from "@/app/api/services/getOne";
import { removeOne } from "@/app/api/services/removeOne";
import { NextRequest } from "next/server";

const model: ModelNames = "category";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id: string = params.id;

  return getOne(model, id);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id: string = params.id;

  const data = await req.json();

  return editOne(model, id, data);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id: string = params.id;

  return removeOne(model, id);
}
