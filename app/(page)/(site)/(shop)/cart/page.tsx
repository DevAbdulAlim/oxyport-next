"use client";
import { CartItem } from "@/redux/reducers/cartSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function Page() {
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <section className="h-full px-3 bg-blue-50">
      <div className="container mx-auto py-12">
        <h1 className="text-center mb-8 text-4xl font-semibold">
          Shopping Cart
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="grid grid-cols-1 gap-6">
              {cart.items.map((item: CartItem) => (
                <div
                  className="shadow-md bg-white rounded-md flex flex-col md:flex-row w-full relative"
                  key={item.id}
                >
                  <img
                    src="https://bazaar.ui-lib.com/assets/images/products/Fashion/Clothes/21.YellowCasualSweater.png"
                    alt=""
                    height="140px"
                    width="140px"
                  />
                  <div className="flex justify-between p-4 w-full flex-col">
                    <h3 className="text-lg">Silver High Neck Sweater</h3>
                    <p>
                      <span className="text-gray-600">$210.00 x 1 </span>
                      <span className="text-red-500">$210.00</span>
                    </p>
                    <div className="flex mt-2">
                      <button
                        type="button"
                        className="border border-red-300 text-red-500 rounded-md h-7 w-7 hover:border-red-500"
                      >
                        -
                      </button>
                      <span className="block text-center mx-3">25</span>
                      <button
                        type="button"
                        className="border border-red-300 text-red-500 rounded-md h-7 w-7 hover:border-red-500"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button className="absolute top-2 text-white bg-red-500 h-7 w-7 rounded-md hover:bg-red-700 right-2">
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="shadow-md bg-white rounded-md p-6">
              <ul>
                <li className="flex px-6 py-4 border-b justify-between">
                  <span>Subtotal</span>
                  <span>$89.00</span>
                </li>
                <li className="flex px-6 py-4 border-b justify-between">
                  <span>Tax</span>
                  <span>$89.00</span>
                </li>
                <li className="flex text-lg font-semibold px-6 py-4 border-b justify-between">
                  <span>Total</span>
                  <span>$89.00</span>
                </li>
                <li className="text-center text-red-300 my-4">
                  Shipping cost calculated at Checkout *
                </li>
              </ul>
              <button className="px-4 py-2 w-full bg-blue-900  hover:bg-blue-950 rounded-md text-white ">
                Proceed to Checkout
              </button>
              <Link
                href=""
                className="block my-3 text-blue-900 hover:underline text-center"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
