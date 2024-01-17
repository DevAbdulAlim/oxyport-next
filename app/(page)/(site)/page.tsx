import { getHomePageData } from "../../../lib/services/getHomePageData";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import ProductsCardList from "@/components/products/ProductsCardList";
import OfferSection from "./OfferSection";
import ShopByBrandSection from "./ShopByBrandSection";
import CategorySection from "./CategorySection";

type ItemType = {
  [key: string]: any;
};

export default async function Page() {
  const data = await getHomePageData();
  if (data) {
    return (
      <>
        <section className="px-3 bg-blue-950 text-white">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <img
                  src="https://thumbs.dreamstime.com/b/girl-bags-15724562.jpg"
                  className="h-[500px] w-full object-cover"
                  alt="Shopping Bags"
                />
              </div>
              <div className="py-8 md:order-first flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold mb-4">
                  Get 50% Off Your First Purchase
                </h1>
                <p className="text-center mb-6">
                  Elevate your style with our exclusive collection. Limited-time
                  offer! Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
                <PrimaryButton href="/" text="Shop Now" />
              </div>
            </div>
          </div>
        </section>

        <OfferSection />
        <CategorySection />

        <ShopByBrandSection />

        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-center text-3xl mb-6 font-semibold">
              Featured Products
            </h3>
            <ProductsCardList products={data.products} />
            <div className="flex justify-center mt-8">
              <PrimaryButton href="/" text="See More Products" />
            </div>
          </div>
        </section>

        <section className="bg-gray-100 px-6 py-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img
                src="https://freepngimg.com/save/134677-beautiful-bag-girl-shopping-holding/800x600" // Replace with your image URL
                alt="Newsletter Image"
                className="w-full h-auto rounded-md  mb-6 md:mb-0"
              />
            </div>
            <div className="md:w-1/2 md:ml-6">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 mb-8">
                Stay updated with the latest trends, product releases, and
                exclusive offers.
              </p>
              <div className="max-w-3xl w-full">
                <form
                  action="#"
                  method="POST"
                  className="flex flex-col md:flex-row items-center"
                >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email address"
                    className="bg-white w-full md:w-2/3 border border-gray-300 px-4 py-3 rounded-l mb-2 md:mb-0 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-8 py-3 rounded-r hover:bg-blue-600 focus:outline-none"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-gray-600 text-sm mt-3">
                  By subscribing, you agree to our{" "}
                  <a href="#" className="underline">
                    Terms and Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return <div>No Data Found</div>;
  }
}
