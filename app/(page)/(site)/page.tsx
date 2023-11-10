import Image from "next/image";
import Link from "next/link";
import { getAll } from "./services/getAll";

type ItemType = {
  [key: string]: any;
};

export default async function Page() {
  const products = await getAll("products", 1, 5);
  return (
    <section className="py-8">
      <h3 className="text-center text-4xl">Featured Products</h3>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.data.map((item: ItemType) => (
            <div className="shadow-md" key={item.id}>
              <div className="p-4">
                {/* <Image
                src={item.image}
                width={500}
                height={500}
                alt={item.name}
              /> */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-60 w-full mb-4"
                />
                <span className=" p-1 bg-orange-400 text-white rounded ">
                  {item.category}
                </span>
                <h3 className="text-2xl">{item.name}</h3>
                <p>{item.price}</p>
                <p>{item.inStock}</p>
                <p className="mb-4">{item.rating}</p>
                <Link
                  className="bg-blue-800 text-white py-2 px-8"
                  href={`/products/${item.id}`}
                >
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
