import Image from "next/image";
import Link from "next/link";
import { getAll } from "./services/getAll";
import { addToCart } from '@/redux/reducers/cartSlice';

type ItemType = {
  [key: string]: any;
};

export default async function Page() {
  const products = await getAll("products", 1, 5);
  const categories = await getAll("categories", 1, 5);
  return (
    <>
  <section className="px-3">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="flex justify-center">
          <img src="https://thumbs.dreamstime.com/b/girl-bags-15724562.jpg" className="h-[500px]" alt="" />
        </div>
        <div className="h-full py-8 flex md:order-first flex-col justify-center align-middle">
          <h1 className="text-4xl font-bold text-blue-950">50% Off For Your First Shopping</h1>
          <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.</p>
          <Link href="" className="py-2 px-4 w-32 text-center bg-blue-900 text-white" >Shop Now</Link>
        </div>
      </div>
    </div>
  </section>




    <section className="py-24 px-3 bg-gray-300">
      <h3 className="text-center text-gray-900 text-4xl mb-8">Featured Categories</h3>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5">
          {categories.data.map((item: ItemType) => (
            <div className="shadow-sm hover:shadow-lg rounded-md bg-white  overflow-hidden" key={item.id}>
              <div className="flex py-4 justify-center">
              <img
                  // src={item.image}
                  src="https://th.bing.com/th/id/OIP.OTTWOV-oQ9TbnFDXmBqEzQHaHa?rs=1&pid=ImgDetMain"
                  alt={item.name}
                  className="h-16 w-16"
                />
              </div>
              <div className="p-2  text-center">
                <a href={`/products/search`} className="text-sm">{item.name}</a>
              </div>      
            </div>
          ))}
        </div>
      </div>
    </section>



    <section className="py-12 px-3 bg-blue-50">
      <h3 className="text-center text-4xl mb-8">Featured Products</h3>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.data.map((item: ItemType) => (
            <div className="shadow-lg rounded-md bg-white  overflow-hidden" key={item.id}>
                         <img
                  // src={item.image}
                  src="https://th.bing.com/th/id/OIP.L_IBmQ5JmWqU-k1Ezm9DjgHaFj?rs=1&pid=ImgDetMain"
                  alt={item.name}
                  className="h-60 w-full mb-4"
                />
              <div className="p-2">
                <a href={`/products/${item.id}`} className="text-xl">{item.name}</a>
                <p className="text-red-500 text-xl">${item.price}</p>
                <p className="mb-2">{item.rating}</p>
              
              </div>
              <button type="button"
                  className="bg-blue-400 w-full hover:bg-blue-600 text-white py-2 px-8"
              
                >
                  Add To Cart
                </button>
            </div>
          ))}
        </div>

        <div className="text-center py-8"><Link href="" className="bg-blue-900 py-2 px-5 text-white hover:underline">See more products</Link></div>
      </div>
    </section>


    <section className="bg-blue-200 px-3 py-12">
  <div className="container mx-auto flex flex-col items-center">
  <h2 className="text-4xl font-semibold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
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
}
