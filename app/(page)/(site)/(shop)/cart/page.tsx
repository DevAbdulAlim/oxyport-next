"use client";
import { CartItem, decreaseQuantity, increaseQuantity, removeFromCart } from "@/redux/reducers/cartSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const [total, setTotal] = useState(0)
  const [subTotal, setSubTotal] = useState(0)
  const [tax, setTax] = useState(0)

  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart);

  const handleIncrease = (id:number) => {
    dispatch(increaseQuantity(id));
  }

  const handleDecrease = (id:number) => {
    dispatch(decreaseQuantity(id));
  }


  const handleRemove = (id:number) => {
    dispatch(removeFromCart(id));
  }

  useEffect(() => {

    const calculateSubTotal = () => {
      const subTotal = cart.items.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
      setSubTotal(subTotal);
    };
    calculateSubTotal();

    const calculateTotal = () => {
      const total = subTotal + tax;
      setTotal(total);
    };
    calculateTotal();

  }, [cart.items, subTotal, tax])

  return (
    <section className="h-full px-4 bg-gray-100">
    <div className="container mx-auto py-12">
      <h1 className="text-center mb-8 text-4xl font-semibold text-gray-800">
        Your Shopping Cart
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 gap-6">
            {cart.items.map((item) => (
              <div
                className="shadow-md bg-white rounded-md flex flex-col md:flex-row w-full mb-6 relative"
                key={item.id}
              >
                <img
                  src="https://bazaar.ui-lib.com/assets/images/products/Fashion/Clothes/21.YellowCasualSweater.png"  // Replace with the actual image source
                  alt={item.name}
                  className="w-36 h-36 object-cover md:w-48 md:h-full rounded-md"
                />
                <div className="flex flex-col justify-between p-4 w-full">
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      <span>${item.price.toFixed(2)} x {item.quantity} </span>
                      <span className="text-blue-500">${(item.price * item.quantity).toFixed(2)}</span>
                    </p>
                  </div>
                  <div className="flex mt-2 items-center">
                    <button
                      type="button"
                      onClick={() => handleDecrease(item.id)}
                      className="border border-blue-300 text-blue-500 rounded-md h-7 w-7 hover:border-blue-500"
                    >
                      -
                    </button>
                    <span className="block text-center mx-3">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => handleIncrease(item.id)}
                      className="border border-blue-300 text-blue-500 rounded-md h-7 w-7 hover:border-blue-500"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="absolute top-2 text-white bg-blue-500 h-7 w-7 rounded-md hover:bg-blue-700 right-2"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="shadow-md bg-white rounded-md p-6">
            <ul>
              <li className="flex px-6 py-4 border-b justify-between">
                <span>Subtotal</span>
                <span>${subTotal.toFixed(2)}</span>
              </li>
              <li className="flex px-6 py-4 border-b justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </li>
              <li className="flex text-lg font-semibold px-6 py-4 border-b justify-between">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </li>
              <li className="text-center text-blue-300 my-4">
                Shipping cost calculated at Checkout *
              </li>
            </ul>
            <Link href="/checkout" className="px-4 block text-center py-2 w-full bg-blue-500 hover:bg-blue-600 rounded-md text-white">
              Proceed to Checkout
            </Link>
            <Link href="/" className="block my-3 text-blue-500 hover:underline text-center">
                Continue Shopping
    
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
