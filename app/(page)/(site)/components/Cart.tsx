"use client";
import {
  CartItem,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/reducers/cartSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaShoppingBag, FaShoppingCart, FaWindowClose } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const [menuOpen, setMenuOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement | null>(null);

  // Calculate total amount
  const totalAmount = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate total items
  const totalItems = cart.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeCart = () => {
    setMenuOpen(false);
  };

  const handleIncrease = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id: number, e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Stop the event propagation to prevent closing the cart
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(e.target as Node) &&
        !isRemoveButtonClicked(e.target as Element)
      ) {
        closeCart();
      }
    };

    // Helper function to check if the click occurred on the remove button or its parent
    const isRemoveButtonClicked = (target: Element) => {
      const removeButton = target.closest(".remove-button");
      return removeButton !== null;
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div ref={cartRef} className="m-2 hidden md:block">
      <div
        className={`fixed flex flex-col right-0 w-full sm:w-[420px] bg-white shadow-2xl text-black p-4 inset-y-0 ${
          menuOpen ? "" : "translate-x-full"
        } transition-all duration-500 z-30 ease-in-out `}
      >
        {/* topbar */}
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center text-blue-500">
            <FaShoppingBag className="text-2xl mr-1" />
            Total Items: {totalItems}
          </div>
          <button
            aria-label="Close window"
            onClick={toggleMenu}
            className="flex items-center"
          >
            <FaWindowClose className="text-2xl" />
          </button>
        </div>

        {/* CartItems */}
        <div className="grow overflow-y-auto">
          {cart.items.map((item: CartItem) => (
            <div key={item.id} className="flex items-center border-b p-4">
              {/* Increase and Decrease buttons with quantity */}
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={() => handleDecrease(item.id)}
                  className="text-2xl text-blue-500"
                >
                  -
                </button>
                <span className="text-xl">{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => handleIncrease(item.id)}
                  className="text-2xl text-blue-500"
                >
                  +
                </button>
              </div>

              {/* Image */}
              <img
                src="https://bazaar.ui-lib.com/assets/images/products/Fashion/Clothes/21.YellowCasualSweater.png"
                alt="Product"
                className="w-16 h-16 object-cover rounded-md"
              />

              {/* Data */}
              <div className="flex flex-col ml-4">
                <h6 className="text-blue-800 font-semibold">{item.name}</h6>
                <small className="text-gray-500">
                  ${item.price} x {item.quantity}
                </small>
                <h6 className="text-blue-500 font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </h6>
              </div>

              {/* Close button */}
              <button
                onClick={(e) => handleRemove(item.id, e)}
                className="ml-auto text-2xl text-blue-500 remove-button"
              >
                X
              </button>
            </div>
          ))}
        </div>

        <Link
          href="/checkout"
          className="block py-2 my-2 w-full rounded bg-blue-700 text-white text-center hover:bg-blue-800"
        >
          Checkout Now <span>(${totalAmount.toFixed(2)})</span>
        </Link>
        <Link
          href="/cart"
          className="block py-2 my-2 w-full border rounded border-blue-500 text-blue-500 text-center hover:bg-blue-100"
        >
          View Cart
        </Link>
      </div>

      <button
        onClick={toggleMenu}
        className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none"
      >
        <span className="text-2xl">
          <FaShoppingCart />
        </span>
        <span> {totalItems}</span>
      </button>
    </div>
  );
}
