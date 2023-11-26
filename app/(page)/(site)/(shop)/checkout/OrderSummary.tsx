"use client";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface CartItem {
  id: number;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const checkStock = async (cartItems: CartItem[]) => {
  console.log(cartItems);
  try {
    const response = await fetch(`${process.env.HOST}api/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.error("Error in checkStock:", error);
    throw error;
  }
};

export default function OrderSummary() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(30);
  const [tax, setTax] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const cartState = useSelector((state: RootState) => state.cart);

  const getUpdate = async (cartState: CartState) => {
    const simplifiedCartItems = cartState.items.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));

    try {
      // const response = await checkStock(simplifiedCartItems)
      setCartItems(cartState.items);
    } catch (error) {
      console.error("Error in getUpdate:", error);
      throw error;
    }
  };

  useEffect(() => {
    const calculateSubTotal = () => {
      const subTotal = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
      setSubTotal(subTotal);
    };
    calculateSubTotal();

    const calculateDiscount = () => {
      setDiscount(subTotal * 0.1);
    };

    calculateDiscount();

    const calculateTotal = () => {
      const total = subTotal + shipping + tax - discount;
      setTotal(total);
    };
    calculateTotal();

    getUpdate(cartState);
  }, [cartItems, cartState, discount, shipping, subTotal, tax]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Your Order</h2>
        {cartItems.map((item: any) => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <p className="text-sm">
              <span className="font-semibold">{item.quantity}x</span> {item.name}
            </p>
            <p className="text-sm">${(item.quantity * item.price).toFixed(2)}</p>
          </div>
        ))}
      </div>
      <hr className="my-4 border-t" />
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <p>Subtotal:</p>
          <p className="font-bold text-blue-600">${subTotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center mb-3">
          <p className="text-yellow-600">Shipping:</p>
          <p className="font-bold text-yellow-600">+${shipping.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center mb-3">
          <p className="text-yellow-600">Tax:</p>
          <p className="font-bold text-yellow-600">+${tax.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center mb-3">
          <p className="text-green-600">Discount:</p>
          <p className="font-bold text-green-600">-${discount.toFixed(2)}</p>
        </div>
      </div>
      <hr className="my-4 border-t" />
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg">Total:</p>
        <p className="font-bold text-lg text-purple-600">${total.toFixed(2)}</p>
      </div>
    </div>
  );
  
  
  
  
}
