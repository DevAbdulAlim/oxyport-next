import { ModelNames } from "@/app/api/utils/types";
import { addOne } from "@/app/api/services/addOne";
import { getAll } from "@/app/api/services/getAll";
import { NextRequest } from "next/server";

const model: ModelNames = "category";

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

  return getAll(model, currentPage, itemsPerPage);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  return addOne(model, data);
}
