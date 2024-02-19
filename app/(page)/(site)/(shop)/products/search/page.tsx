import { getAll } from "@/lib/services/getAll";
import Search from "./Search";
import { searchProducts } from "@/lib/services/searchProducts";



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

  const data = await searchProducts(
    categories,
    ratings,
    minPrice,
    maxPrice,
    page,
    pageSize
  );


  const fetchedCategories = await getAll('categories', 1, 8)

  return (
  <div>
    <Search categories={fetchedCategories.data} products={data.products} />
    </div>
    )
}
