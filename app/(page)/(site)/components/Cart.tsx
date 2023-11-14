"use client";
import { CartItem, decreaseQuantity, increaseQuantity, removeFromCart } from "@/redux/reducers/cartSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FcPrevious } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart);
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  }

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  }


  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  }


  return (
    // Off-canvas menu container
    <div className="m-2 hidden md:block">
      <div
        className={`fixed flex flex-col right-0 w-full sm:w-96 bg-white shadow-2xl text-black p-4 inset-y-0 ${
          menuOpen ? "" : "translate-x-full"
        } transition-all duration-500 z-30 ease-in-out `}
      >
        <button onClick={toggleMenu} className="flex my-2">
          <span className="text-2xl">
            <FcPrevious />
          </span>
          Back
        </button>

        {/* cartItems */}
        <div className="grow overflow-y-auto">
          {cart.items.map((item: CartItem) => (
            <div
              className="flex h-32 justify-between border-y p-2 items-center"
              key={item.id}
            >
              <div className="mr-2">
                <button
                  type="button"
                  onClick={() => handleIncrease(item.id)}
                  className="border border-red-300 text-red-500 rounded-full h-7 w-7 hover:border-red-500"
                >
                  +
                </button>
                <span className="block text-center my-2">{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => handleDecrease(item.id)}
                  className="border border-red-300  text-red-500  rounded-full h-7 w-7 hover:border-red-500"
                >
                  -
                </button>
              </div>
              <div className="mr-2 border">
                <img
                  src="https://bazaar.ui-lib.com/assets/images/products/Fashion/Clothes/21.YellowCasualSweater.png"
                  alt="Image Not Found"
                  height="40px"
                  width="70px"
                />
              </div>
              <div className="grow">
                <h6>Silver High Neck Sweater</h6>
                <small className="text-gray-500">$100 x 1</small>
                <h6 className="text-red-500">$100</h6>
              </div>
              <button className="hover:bg-red-100 h-7 w-7 rounded-full" onClick={()=>handleRemove(item.id)}>
                X
              </button>
            </div>
          ))}
        </div>

        <Link
          href="/checkout"
          className="block py-2 my-2 w-full rounded bg-red-500 text-white text-center"
        >
          Checkout Now <span>($4494)</span>
        </Link>
        <Link
          href="/cart"
          className="block py-2 my-2 w-full border rounded border-red-500 text-red-500 text-center"
        >
          View Cart
        </Link>
      </div>

      <button onClick={toggleMenu} className="flex mr-2">
        <span className="text-2xl mr-1"></span>
        Cart
      </button>
    </div>
  );
}
