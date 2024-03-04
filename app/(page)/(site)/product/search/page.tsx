import { searchProducts } from "@/lib/actions/searchProducts";
import Search from "./Search";
import { getAll } from "@/lib/actions/getAll";

export default async function page({
  searchParams,
}: {
  searchParams: {
    categories?: number[];
    ratings?: number[];
    minPrice?: number;
    maxPrice?: number;
    page?: number;
    pageSize?: number;
  };
}) {
  const { categories, ratings, minPrice, maxPrice, page, pageSize } =
    searchParams;

  console.log(ratings);

  const data = await searchProducts(
    categories,
    ratings,
    minPrice,
    maxPrice,
    page,
    pageSize
  );

  const fetchedCategories = await getAll("product/categories", 1, 8);

  return (
    <div>
      <Search categories={fetchedCategories.data} products={data.products} />
    </div>
  );
}
