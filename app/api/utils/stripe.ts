import Stripe from "stripe";
if (!process.env.STRIPE_SECRET) {
  throw new Error(
    "STRIPE SECRET is missing. Please set the environment variable"
  );
}

const stripe = new Stripe(process.env.STRIPE_SECRET);

export default stripe;
