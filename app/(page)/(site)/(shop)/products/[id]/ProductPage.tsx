"use client";
import { addToCart } from "@/redux/reducers/cartSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
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
  return (
    <section className="h-full px-3 bg-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F32.iphone7.png&w=640&q=75"
              alt=""
            />
          </div>
          <div className="flex items-center">
            <div>
              <div className="leading-10">
                <h1 className="text-4xl font-semibold">{product.name}</h1>
                <p>
                  Brand:
                  <span className="font-semibold text-gray-700"> Apple</span>
                </p>
                <p>
                  Rated:{" "}
                  <span className="font-semibold text-gray-700">4/5</span>
                </p>
                <p>
                  Stock:{" "}
                  <span className="font-semibold text-gray-700">Available</span>
                </p>
              </div>

              <div className="flex my-6">
                <button
                  type="button"
                  className="border border-blue-300 mr-3 text-blue-500 rounded-md h-7 w-7 hover:border-blue-500"
                >
                  -
                </button>
                <span className="block mr-3 text-left">25</span>
                <button
                  type="button"
                  className="border border-blue-300 text-blue-500 rounded-md h-7 w-7 hover:border-blue-500"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddtoCart}
                className="px-4 py-2 block bg-blue-900 hover:bg-blue-950 text-white rounded-md"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        {/* Descriptoin */}
        <div className="my-12">
          <a
            href="#description"
            className="px-6 mr-2 py-3 shadow-md rounded-md"
          >
            Description
          </a>
          <a href="#reviews" className="px-6 py-3 shadow-md rounded-md">
            Reviews(0)
          </a>

          <div className="shadow-md p-6">
            <h3 className="text-2xl mb-3 font-semibold">Description</h3>
            <h4 className="text-lg mb-3 font-semibold">
              Acer Nitro QG221Q H 100Hz Full HD Monitor
            </h4>
            <p>
              {` The Acer Nitro QG221Q H is a high-performance 21.5-inch Full HD
            monitor designed to provide an exceptional visual experience for
            gamers and professionals alike. With its impressive combination
            of features, this monitor offers a seamless blend of sharpness,
            smoothness, and eye care technologies that make it stand out in
            its class. The monitor boasts a crisp and detailed Full HD
            Resolution (1920x1080), ensuring that every image and video
            displayed on the screen appears vibrant and true to life.
            Whether you're gaming, working, or streaming content, the
            clarity is remarkable. With a 100Hz refresh rate, this monitor
            delivers smooth and fluid motion on-screen. This refresh rate is
            especially beneficial for gamers, as it minimizes motion blur
            and ensures a more immersive gaming experience. The monitor's
            rapid 1ms response time (Virtual Response Boost) ensures that
            fast-paced scenes and action-packed sequences in games or videos
            are displayed with minimal ghosting or motion artifacts. This
            enhances overall visual clarity and reduces motion blur. The
            monitor is equipped with AMD FreeSync technology, which syncs
            the monitor's refresh rate with the graphics card's frame rate,
            effectively reducing screen tearing and stuttering. This feature
            contributes to smoother gameplay and enhanced visual
            consistency. The Acer Display Widget is a user-friendly software
            utility that allows you to conveniently manage various display
            settings. Customizing and optimizing your viewing experience is
            made easy through this intuitive interface. To prioritize user
            comfort, the Acer Nitro QG221Q H incorporates Acer VisionCare
            technology. This suite of features includes BlueLightShield,
            which reduces blue light emissions to minimize eye strain during
            prolonged usage sessions. The monitor comes with a tilt-able
            stand that allows you to adjust the screen's angle according to
            your preferred viewing position. This feature enables you to
            find the most comfortable setup for extended periods of use. For
            those who prefer a clutter-free workspace or a multi-monitor
            setup, the monitor offers VESA wall mount compatibility. This
            feature lets you mount the monitor on a wall or an adjustable
            arm, optimizing your workspace layout. The Acer Nitro QG221Q H
            21.5" 100Hz Full HD Monitor strikes a balance between
            performance and user comfort, making it an excellent choice for
            gamers, content creators, and professionals seeking a versatile
            and visually engaging monitor solution. Its blend of high
            refresh rates, rapid response times, and ergonomic features
            ensure an enjoyable and immersive visual experience across
            various applications.`}
            </p>
          </div>

          <div className="shadow-md p-6">
            <h3 className="text-2xl mb-3 font-semibold">Reviews</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus temporibus necessitatibus nihil deserunt expedita
              asperiores beatae perspiciatis. Ipsum, assumenda! Blanditiis
              quaerat tenetur deserunt accusamus modi aliquid, perspiciatis
              quasi iure officiis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
