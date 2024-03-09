import { ModelNames } from "@/app/api/utils/types";
import { getAll } from "@/app/api/services/getAll";
import { NextRequest } from "next/server";

const model: ModelNames = "category";

export async function GET(req: NextRequest) {
  const currentPageParams = req.nextUrl.searchParams.get("page");
  const itemsPerPageParams = req.nextUrl.searchParams.get("pageSize");

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
