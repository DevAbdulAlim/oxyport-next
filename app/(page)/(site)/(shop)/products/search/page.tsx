'use client'
import ProductCard from "@/components/products/ProductCard";
import PriceRangeSlider from "../../../components/PriceRangeSlider";
import Rating from "../../../components/RatingFilter";

// Updated getAll function
const getAllProducts = async (
  categories?: number[],
  ratings?: number[],
  minPrice?: number,
  maxPrice?: number,
  page?: number,
  pageSize?: number
) => {
  try {
    const apiUrl = `http://localhost:3000/api/site/products/search?categories=${
      categories || ""
    }&ratings=${ratings || ""}&minPrice=${minPrice || ""}&maxPrice=${
      maxPrice || ""
    }&page=${page || ""}&pageSize=${pageSize || ""}`;

    const response = await fetch(apiUrl, {
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data (${response.status} ${response.statusText})`
      );
    }

    const newData = await response.json();
    console.log(newData);

    return newData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

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

  const data = await getAllProducts(
    categories,
    ratings,
    minPrice,
    maxPrice,
    page,
    pageSize
  );

  const handleRangeChange = (values: number | number[]) => {
    // console.log(values);
  };
  return (
    <section className="py-16 px-3 bg-blue-50">
      <div className="container mx-auto">
        {/* filter */}
        <div className="text-center md:text-start md:flex md:justify-between p-4 mb-4 bg-white">
          <div>
            <h5>Searching for “ mobile phone ”</h5>
            <p>48 results found</p>
          </div>
          <div className="flex justify-between">
            <form action="your_action_url_here" method="get">
              <select name="Price" aria-label="Select Price Order">
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </form>

            <div className="md:hidden">Filter</div>
          </div>
        </div>

        {/* products */}
        <div className="grid gap-8 lg:grid-cols-8 ">
          <div className="p-4 bg-white lg:col-span-2">
            <h6>Categories</h6>
            {[...Array(5)].map((_, index) => (
              <p key={index}>Laptop</p>
            ))}

            <hr className="my-4" />
            <h6>Price Range</h6>
            <PriceRangeSlider onRangeChange={handleRangeChange} />

            <hr className="my-4" />
            <h6>Rating</h6>
            <Rating />
          </div>
          <div className="lg:col-span-6">
            {data.products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-5">
                {data.products.map((item: any) => (
                  <ProductCard key={item.id} {...item} />
                ))}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center">
                <p className="text-gray-500 text-2xl font-semibold">
                  Oops! No products found.
                </p>
                <p className="text-gray-500 text-lg">
                  Maybe try a different search or check back later.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
