"use client";
import { BsCashCoin, BsCreditCard } from "react-icons/bs";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const router = useRouter();
  const handlePaymentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(event.target.value);
  };

  const handleSubmit = async () => {
    console.log("Order Placed");
    try {
      const response = await fetch(`http://localhost:3000/api/payment/stripe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const { session_url } = await response.json();
        if (session_url) {
          console.log(session_url);
          router.push(session_url);
        }
      } else {
        console.error("Failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      {/* Date and time */}
      <div className="shadow-sm rounded-sm bg-white w-full p-8 my-8">
        <h3 className="mb-4 text-2xl">Delivery Date and Time</h3>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <form
            action="/submit"
            method="post"
            className="w-full border-0 outline-0"
          >
            <label htmlFor="deliveryDate">Select Delivery Date: </label>
            <input
              type="date"
              name="deliveryDate"
              id="deliveryDate"
              required
              min="2023-11-08"
              max="2023-11-15"
              placeholder="YYYY-MM-DD"
              pattern="\d{4}-\d{2}-\d{2}"
              title="Please enter a date in YYYY-MM-DD format."
            />
          </form>

          <form action="/submit" method="post">
            <label htmlFor="deliveryTime">Select Delivery Time: </label>
            <input
              type="time"
              name="deliveryTime"
              id="deliveryTime"
              required
              min="08:00"
              max="20:00"
              value="09:00"
              step="1800" /* 30-minute intervals */
              placeholder="HH:MM"
              pattern="[0-9]{2}:[0-9]{2}"
              title="Please enter a time in HH:MM format."
            />
          </form>
        </div>
      </div>

      <div className="shadow-sm rounded-sm bg-white w-full p-8 my-8">
        <h3 className="mb-4 text-2xl">Delivery Address</h3>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="mb-3">
              <input
                type="text"
                className="border py-2 px-4 w-full"
                name="name"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="border py-2 px-4 w-full"
                name="name"
                title="House #123, Block A, Mohammadpur Main Road, Mohammadpur, Dhaka 1207, Bangladesh
                      "
                placeholder="Street Line 1"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="border py-2 px-4 w-full"
                name="name"
                title="House #123, Block A, Mohammadpur Main Road, Mohammadpur, Dhaka 1207, Bangladesh
                      "
                placeholder="Address Line 2"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="border py-2 px-4 w-full"
                name="name"
                title="018xxxxxxxx"
                placeholder="Phone Number"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="border py-2 px-4 w-full"
                name="name"
                placeholder="City"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="border py-2 px-4 w-full"
                name="name"
                placeholder="State"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="border py-2 px-4 w-full"
                name="name"
                placeholder="Zip"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="border py-2 px-4 w-full"
                name="name"
                placeholder="Country"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="shadow-sm rounded-sm bg-white w-full p-8 my-8">
        <form>
          <h3 className="mb-4 text-2xl">Payment Methods</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div
              className={`border  p-2 lg:p-4 relative  ${
                selectedPayment === "CashOnDelivery" ? "border-red-500" : ""
              }`}
            >
              <input
                type="radio"
                id="cashOnDelivery"
                name="paymentMethod"
                value="CashOnDelivery"
                className="opacity-0 absolute h-0 w-0"
                onChange={handlePaymentChange}
              />
              <label htmlFor="cashOnDelivery" className="cursor-pointer">
                <span className="text-center text-2xl flex justify-center items-center">
                  <BsCashCoin />
                </span>
                <p className="text-center">Cash on Delivery</p>
              </label>
            </div>
            <div
              className={`border  p-2 lg:p-4 relative  ${
                selectedPayment === "CreditCard" ? "border-red-500" : ""
              }`}
            >
              <input
                type="radio"
                id="creditCard"
                name="paymentMethod"
                value="CreditCard"
                className="opacity-0 absolute h-0 w-0"
                onChange={handlePaymentChange}
              />
              <label htmlFor="creditCard" className="cursor-pointer">
                <span className="text-center text-2xl flex justify-center items-center">
                  <BsCreditCard />
                </span>
                <p className="text-center">Credit/Debit Card</p>
              </label>
            </div>
            {/* Add more radio button options as needed */}
          </div>
        </form>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="text-white  bg-blue-900 px-4 py-2 rounded-md"
      >
        Place Order
      </button>
    </>
  );
}
