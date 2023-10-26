"use client";
import Link from "next/link";
import { useState } from "react";

export default function page() {
  // const [currentPage, setCurrentPage] = useState(1)
  // // const
  return (
    <section className="py-16">
      <div className="container mx-auto">
        {/* filter */}
        <div className="grid grid-cols-2 p-4 my-8 shadow-sm">
          <div>
            <h5>Searching for “ mobile phone ”</h5>
            <p>48 results found</p>
          </div>
          <div className="flex justify-end">Filter</div>
        </div>

        {/* products */}
        <div className="grid gap-8 lg:grid-cols-8 ">
          <div className="p-4 shadow-md lg:col-span-2">
            <h6>Categories</h6>
            {[...Array(5)].map((_, index) => (
              <p key={index}>Laptop</p>
            ))}

            <hr className="my-4" />
            <h6>Price Range</h6>
            <form action="">
              <div className="flex">
                <input
                  type="number"
                  className="w-full p-1 border"
                  name="minPrice"
                  placeholder="0"
                />
                <span className="self-center mx-2">-</span>
                <input
                  type="number"
                  className="w-full p-1 border"
                  name="maxPrice"
                  placeholder="300"
                />
              </div>
            </form>
            <hr className="my-4" />
            <h6>Brands</h6>
            <form action="">
              {[...Array(5)].map((_, index) => (
                <div className="mb-3" key={index}>
                  <input type="checkbox" id="macc" name="option" value="Macc" />
                  <label htmlFor="macc" className="ms-2">
                    Macc
                  </label>
                </div>
              ))}
            </form>
            <hr className="my-4" />
            <form action="">
              {[...Array(3)].map((_, index) => (
                <div className="mb-3" key={index}>
                  <input type="checkbox" id="macc" name="option" value="Macc" />
                  <label htmlFor="macc" className="ms-2">
                    Macc
                  </label>
                </div>
              ))}
            </form>
            <hr className="my-4" />
            <h6>Rating</h6>
            <form action="">
              {[...Array(5)].map((_, index) => (
                <div className="mb-3" key={index}>
                  <input type="checkbox" id="macc" name="option" value="Macc" />
                  <label htmlFor="macc" className="ms-2">
                    Macc
                  </label>
                </div>
              ))}
            </form>
          </div>
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
              {[...Array(12)].map((_, index) => (
                <div className="shadow-md" key={index}>
                  <div className="p-4">
                    <span className="p-1 text-white bg-orange-400 rounded ">
                      Category
                    </span>
                    <h3 className="text-2xl">Titlte</h3>
                    <p>21514</p>
                    <p>2</p>
                    <p className="mb-4">5</p>
                    <Link
                      className="px-8 py-2 text-white bg-blue-800"
                      href={`/products/5`}
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
