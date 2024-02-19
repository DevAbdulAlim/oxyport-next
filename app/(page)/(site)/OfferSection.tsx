// PromotionSection.tsx

import React from "react";

interface Promotion {
  title: string;
  description: string;
  imageUrl: string;
  discountInfo: string; // New property for discount information
}

const promotions: Promotion[] = [
  {
    title: "Exclusive Offer",
    description: "Unlock special discounts on our premium products.",
    imageUrl:
      "https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2102-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024",
    discountInfo: "40% off", // Example discount information
  },
  {
    title: "Bundle Deals",
    description: "Save more with our bundled product deals!",
    imageUrl:
      "https://cdn.thewirecutter.com/wp-content/media/2023/09/budgetandroidphones-2048px-6939-2x1-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
    discountInfo: "20% off", // Example discount information
  },
  // Add more promotions as needed
];

const PromotionSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-center">
          Explore Our Latest Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className="bg-cover bg-center bg-no-repeat h-80 rounded-md overflow-hidden transform hover:scale-105 transition-transform shadow-md duration-300 flex flex-col"
              style={{ backgroundImage: `url(${promo.imageUrl})` }}
            >
              <div className="flex-1 p-6 flex flex-col justify-between bg-gradient-to-t from-transparent to-gray-800">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {promo.title}
                  </h3>
                  <p className="text-gray-300 text-lg">{promo.description}</p>
                  <p className="text-gray-300 text-4xl font-bold mt-2">
                    {promo.discountInfo}
                  </p>
                </div>
                <button className="mt-4 bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
