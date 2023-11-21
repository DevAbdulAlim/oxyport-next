"use client";
import Link from "next/link";
import { useState } from "react";
import PriceRangeSlider from "../../../components/PriceRangeSlider";
import Rating from "../../../components/RatingFilter";

export default function page() {
  // const [currentPage, setCurrentPage] = useState(1)

  const handleRangeChange = (values: number | number[]) => {};
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
          <form action="">
              <select name="" id="">
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
              {[...Array(12)].map((_, index) => (
                <div
                  className="shadow-lg  bg-white  overflow-hidden"
                  key={index}
                >
                  <div className="overflow-hidden">
                  <img
                    // src={item.image}
                    src="https://th.bing.com/th/id/OIP.L_IBmQ5JmWqU-k1Ezm9DjgHaFj?rs=1&pid=ImgDetMain"
                    alt=""
                    className="h-60 w-full transform transition-transform duration-1000 ease-in-out hover:scale-125"
                  />
                  </div>
                  <div className="p-2">
                    <a href={`/products/${index}`} className="text-xl">
                      Demo Product
                    </a>
                    <p className="text-red-500 text-xl">$$555</p>
                  </div>
                  <button
                    type="button"
                    className="bg-gray-100 w-full hover:bg-gray-200 text-gray-500 hover:text-gray-700  py-2 px-8"
                  >
                    Add To Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
