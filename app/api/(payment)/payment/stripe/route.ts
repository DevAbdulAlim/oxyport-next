import { sendJsonResponse } from "@/app/api/utils/sendJsonResponse";
import stripe from "@/app/api/utils/stripe";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const line_items = [
    {
      price_data: {
        currency: "usd",
        unit_amount: 10000, // Price in cents (e.g., $1.00 is 100 cents)
        product_data: {
          name: "Product 1",
        },
      },
      quantity: 2, // Quantity of Product 1
    },
    {
      price_data: {
        currency: "usd",
        unit_amount: 200, // Price in cents (e.g., $2.00 is 200 cents)
        product_data: {
          name: "Product 2",
        },
      },
      quantity: 1, // Quantity of Product 2
    },
    // Add more line items for additional products with their respective quantities
  ];

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_HOST}/success`,
      cancel_url: `${process.env.NEXT_HOST}/failed`,
    });
    if (session.url === null) {
      return sendJsonResponse(500, false, { session_url: session.url });
    }
    return NextResponse.json({ session_url: session.url }, { status: 200 });
  } catch (error) {
    console.error(error);
    return sendJsonResponse(500, false, { message: "Internal Server Error" });
  }
}
