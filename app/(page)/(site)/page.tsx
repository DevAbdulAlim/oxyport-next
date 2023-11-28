import { getHomePageData } from "../../../lib/services/getHomePageData";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import ProductsCardList from "@/components/products/ProductsCardList";

type ItemType = {
  [key: string]: any;
};

export default async function Page() {
  const data = await getHomePageData();
  if (data) {
    return (
      <>
<section className="px-3 bg-blue-900 text-white">
  <div className="container mx-auto flex flex-col items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="flex justify-center">
        <img
          src="https://thumbs.dreamstime.com/b/girl-bags-15724562.jpg"
          className="h-[500px]  w-full object-cover rounded-md"
          alt="Shopping Bags"
        />
      </div>
      <div className="py-8 md:order-first flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Get 50% Off Your First Purchase</h1>
        <p className="text-center mb-6">
          Elevate your style with our exclusive collection. Limited-time offer! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <PrimaryButton href="/" text="Shop Now" />
      </div>
    </div>
  </div>
</section>


  
  
  
    <section className="py-16 px-4 bg-gray-100">
      <h3 className="text-center text-gray-800 text-4xl mb-8 font-semibold">Explore Featured Categories</h3>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {data.categories.map((item: ItemType) => (
            <div
              key={item.id}
              className="shadow-md hover:shadow-lg rounded-md bg-white overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="flex justify-center items-center h-32">
                <img
                  // src={item.image}
                  src="https://th.bing.com/th/id/OIP.OTTWOV-oQ9TbnFDXmBqEzQHaHa?rs=1&pid=ImgDetMain"
                  alt={item.name}
                  className="h-20 w-20 object-contain"
                />
              </div>
              <div className="p-4 text-center">
                <a href={`/products/search?categories=${item.id}`} className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                  {item.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  
  
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h3 className="text-center text-3xl mb-6 font-semibold">Featured Products</h3>
        <ProductsCardList products={data.products} />
        <div className="flex justify-center mt-8">
          <PrimaryButton href="/" text="See More Products" />
        </div>
      </div>
    </section>
  
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-8">Get exclusive deals and updates on our latest products.</p>

        <div className="max-w-md w-full">
          <form action="#" method="POST" className="flex items-center">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              className="bg-white w-full border border-gray-300 px-4 py-2 rounded-l focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-r hover:bg-blue-600 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  
      
      </>
    );
  } else {
    return <div>No Data Found</div>
  }
 
}
