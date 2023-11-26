'use client'
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
interface CartItemProps {
    cartItems: {
        productId: number;
        quantity: number;
    }
}

const checkStock = async (cartData: CartItemProps) => {
    try {
      const response = await fetch(
        `${process.env.HOST}api/checkout`,
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(cartData),
          }
      );
  
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
    const cartData = useSelector((state:RootState) => state.cart)
    console.log(cartData);
    // const result = await checkStock()
  return (
    <div>
         <p className="text-xl font-semibold">Your order</p>
            {[...Array(3)].map((_, index) => (
              <div className="flex justify-between" key={index}>
                <p className="text-sm">
                  <span className="font-bold">1</span>x Silver Hight Neck
                  Sweater
                </p>
                <p className="">$210.00</p>
              </div>
            ))}
            <hr />
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal:</p>
              <p className="font-bold">$210.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Shipping:</p>
              <p className="font-bold">$210.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Tax:</p>
              <p className="font-bold">$210.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Discount:</p>
              <p className="font-bold">$210.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Total:</p>
              <p className="font-bold">$210.00</p>
            </div>
    </div>
  )
}
