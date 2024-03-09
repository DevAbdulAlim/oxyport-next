"use client";
import { addToCart } from "@/redux/slices/cartSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function ProductPage({ data }: { data: any }) {
  const [product, setProduct] = useState<any>(data);
  console.log(data);
  const dispatch = useDispatch();

  const handleAddtoCart = () => {
    if (product) {
      const { id, name, price } = product;
      dispatch(addToCart({ id, name, price, quantity: 1 }));
    }
  };

  const productInCart = useSelector((state: any) =>
    state.cart.items.find((item: any) => item.id === product.id)
  );
  return (
    <section className="h-full px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F32.iphone7.png&w=640&q=75"
              alt="Product Image"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Awesome Product Title</h1>
              <p className="text-gray-600 mb-4">
                Brand: <span className="font-semibold">XYZ</span>
              </p>
              <p className="text-gray-600 mb-4">
                Rating: <span className="font-semibold">4.5/5</span>
              </p>
              <p className="text-gray-600 mb-4">
                Availability: <span className="font-semibold">In Stock</span>
              </p>
            </div>

            {productInCart && (
              <div className="flex my-6">
                <button
                  type="button"
                  className="border border-blue-300 mr-3 text-blue-500 rounded-md h-7 w-7 hover:border-blue-500"
                >
                  -
                </button>
                <span className="block mr-3 text-left">
                  {productInCart.quantity}
                </span>
                <button
                  type="button"
                  className="border border-blue-300 text-blue-500 rounded-md h-7 w-7 hover:border-blue-500"
                >
                  +
                </button>
              </div>
            )}

            <button
              onClick={handleAddtoCart}
              className="px-4 py-2 block bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Add To Cart
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="my-12">
          <a
            href="#description"
            className="px-6 mr-2 py-3 shadow-md rounded-md"
          >
            Description
          </a>
          <a href="#reviews" className="px-6 py-3 shadow-md rounded-md">
            Reviews(10)
          </a>

          <div className="shadow-md p-6 mt-4 bg-white rounded-lg">
            <h2 className="text-2xl font-semibold mb-3">Product Description</h2>
            <p className="text-gray-700">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at purus risus. Proin bibendum vel urna ac malesuada. Integer non nisi ut ex scelerisque posuere. Vivamus convallis semper sapien, ac rhoncus odio malesuada id. In hac habitasse platea dictumst. Integer eget congue justo. Ut non enim sit amet ligula sollicitudin aliquet. Nulla facilisi. Sed vitae diam nec nulla dignissim ullamcorper. Praesent pharetra justo in ultrices fermentum. Vivamus ullamcorper augue non leo fermentum, sit amet luctus metus malesuada.`}
            </p>
          </div>

          <div className="shadow-md p-6 mt-4 bg-white rounded-lg">
            <h2 className="text-2xl font-semibold mb-3">Customer Reviews</h2>
            <p className="text-gray-700">
              {`Curabitur a ex vitae ex commodo fermentum vel non ligula. Nulla facilisi. Vestibulum at nulla eget purus tincidunt vestibulum ut nec justo. Nunc nec neque vitae felis eleifend dictum. Vestibulum rhoncus dolor nec ligula efficitur, vel fermentum elit venenatis. Nullam sit amet dui a odio tempus rhoncus. Phasellus in consectetur mauris. Aliquam euismod justo a justo iaculis scelerisque.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
