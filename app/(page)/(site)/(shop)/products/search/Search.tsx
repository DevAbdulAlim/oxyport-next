"use client";
import ProductCard, {
  ProductCardProps,
} from "@/components/products/ProductCard";
import PriceRangeSlider from "./PriceRangeSlider";
import RatingList from "./RatingFilter";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import CategoryFilter from "./CategoryFilter";
import { searchProducts } from "@/lib/services/searchProducts";
import Processing from "@/components/common/Processing";

interface SearchState {
  categoryFilters: number[];
  ratingFilters: number[];
  minPrice: number;
  maxPrice: number;
  page: number;
  pageSize: number;
  filteredProducts: ProductCardProps[];
  loading: boolean;
  error: string | null;
}

const initialSearchState: SearchState = {
  categoryFilters: [],
  ratingFilters: [],
  minPrice: 0,
  maxPrice: 10000,
  page: 1,
  pageSize: 8,
  filteredProducts: [],
  loading: false,
  error: null,
};

interface SearchProps {
  categories: any;
  products: any;
}

interface SearchResponse {
  products: ProductCardProps[];
}

export default function Search({ categories, products }: SearchProps) {
  const [searchState, setSearchState] =
    useState<SearchState>(initialSearchState);

  const {
    categoryFilters,
    ratingFilters,
    minPrice,
    maxPrice,
    page,
    pageSize,
    filteredProducts,
    loading,
    error,
  } = searchState;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setSearchState((prevState) => ({ ...prevState, loading: true, error: null }));
  
        let response: SearchResponse;
  
        // Check if filters are applied
        if (
          categoryFilters.length > 0 ||
          ratingFilters.length > 0 ||
          minPrice !== 0 ||
          maxPrice !== 10000
        ) {
          // If filters are applied, fetch filtered products
          response = await searchProducts(
            categoryFilters,
            ratingFilters,
            minPrice,
            maxPrice,
            page,
            pageSize
          );
        } else {
          // If no filters, use products from the Search component props
          response = { products };
        }
  
        setSearchState((prevState) => ({
          ...prevState,
          filteredProducts: response.products,
        }));
      } catch (error) {
        console.error("Error fetching products:", error);
        setSearchState((prevState) => ({
          ...prevState,
          error: "Error fetching products. Please try again later.",
        }));
      } finally {
        setSearchState((prevState) => ({ ...prevState, loading: false }));
      }
    };
  
    fetchData();
  }, [categoryFilters, ratingFilters, minPrice, maxPrice, page, pageSize, products]);
  

  const handleCategoryChange = (values: number | number[]) => {
    if (Array.isArray(values)) {
      setSearchState((prevState) => ({
        ...prevState,
        categoryFilters: values,
      }));
    } else {
      // Handle the case where values is a single number
      setSearchState((prevState) => ({
        ...prevState,
        categoryFilters: [values],
      }));
    }
  };

  const handlePriceRangeChange = (values: number | number[]) => {
    if (Array.isArray(values)) {
      setSearchState((prevState) => ({
        ...prevState,
        minPrice: values[0],
        maxPrice: values[1],
      }));
    } else {
      setSearchState((prevState) => ({
        ...prevState,
        minPrice: values,
        maxPrice: values,
      }));
    }
  };

  const handleRatingChange = (values: number | number[]) => {
    if (Array.isArray(values)) {
      setSearchState((prevState) => ({ ...prevState, ratingFilters: values }));
    } else {
      setSearchState((prevState) => ({
        ...prevState,
        ratingFilters: [values],
      }));
    }
  };

  return (
    <section className="py-16 px-3 bg-blue-50">
      <div className="container mx-auto">
        {/* TopBar */}
        <div className="text-center md:text-start md:flex md:justify-between p-4 mb-4 bg-white">
          <div>
            <h5>Searching for “mobile phone”</h5>
            <p>{products.length} results found</p>
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
          <CategoryFilter
            categories={categories}
            onChange={handleCategoryChange}
          />

          <hr className="my-4" />
          <h6>Price Range</h6>
          <PriceRangeSlider onRangeChange={handlePriceRangeChange} />

          <hr className="my-4" />
          <h6>Rating</h6>
          {/* <RatingList onRatingChange={handleRatingChange} /> */}
          <RatingList />
        </div>

        <div className="lg:col-span-6">
        {/* Products */}
        {loading && <Processing />}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredProducts.map((item: ProductCardProps) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center">
            <p className="text-gray-500 text-2xl font-semibold">
              {filteredProducts.length === 0
                ? "Oops! No products found."
                : "Loading..."}
            </p>
            <p className="text-gray-500 text-lg">
              {filteredProducts.length === 0 &&
                "Maybe try a different search or check back later."}
            </p>
          </div>
        )}

        
        </div>

        </div>


      </div>
    </section>
  );
}
