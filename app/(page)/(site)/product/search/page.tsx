import { getAll } from "@/lib/actions/getAll";
import { genParams } from "@/lib/utils";
import PriceRangeSlider from "./PriceRangeSlider";
import CategoryFilter from "./CategoryFilter";
import RatingFilter from "./RatingFilter";
import ReduxProvider from "@/redux/provider";
import ProductCard, { ProductCardProps } from "../../ProductCard";
import Pagination from "@/components/Pagination";

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
  const fetchedProducts = await getAll(
    "product/search",
    genParams(searchParams)
  );

  const categories = await getAll(
    "product/categories",
    genParams(searchParams)
  );

  if (!fetchedProducts) {
    return <div>Product Not Found</div>;
  }

  return (
    <section className="py-16 px-3 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* TopBar */}
        <div className="text-center md:text-start md:flex md:justify-between p-4 mb-4 bg-white">
          <div>
            <h5>Searching for “mobile phone”</h5>
            <p>{fetchedProducts.products.length} results found</p>
          </div>
          <div className="flex justify-between">
            <form action="#" method="get">
              <select name="Price" aria-label="Select Price Order">
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </form>

            <div className="md:hidden">Filter</div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-8">
          {/* Filters */}
          <div className="p-4 bg-white h-screen lg:col-span-2">
            <h6>Categories</h6>
            <CategoryFilter categories={categories.data} />

            <hr className="my-4" />
            <h6>Price Range</h6>
            <PriceRangeSlider />

            <hr className="my-4" />
            <h6>Rating</h6>
            <RatingFilter />
          </div>

          <div className="lg:col-span-6">
            {/* Products */}

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              <ReduxProvider>
                {fetchedProducts.products.map((item: ProductCardProps) => (
                  <ProductCard key={item.id} {...item} />
                ))}
              </ReduxProvider>
            </div>

            <Pagination
              totalPages={fetchedProducts.totalPages}
              pageSize={fetchedProducts.pageSize}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
