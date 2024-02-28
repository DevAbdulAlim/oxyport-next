import React from "react";

// Dummy data for categories
const data = {
  categories: [
    {
      id: 1,
      name: "Desktop computer",
      image: "computer.png", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Laptop computer",
      image: "laptop.png", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Mobile Phone",
      image: "phone.png", // Replace with actual image URL
    },
    {
      id: 4,
      name: "Printer",
      image: "printer.png", // Replace with actual image URL
    },
    {
      id: 5,
      name: "Camera",
      image: "camera.png", // Replace with actual image URL
    },
    {
      id: 6,
      name: "Mobile Phone",
      image: "phone.png", // Replace with actual image URL
    },
    {
      id: 7,
      name: "Printer",
      image: "printer.png", // Replace with actual image URL
    },
    {
      id: 8,
      name: "Desktop computer",
      image: "computer.png", // Replace with actual image URL
    },
    {
      id: 9,
      name: "Camera",
      image: "camera.png", // Replace with actual image URL
    },
    {
      id: 10,
      name: "Mobile Phone",
      image: "phone.png", // Replace with actual image URL
    },
  ],
};

export default function CategorySection() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <h2 className="text-4xl font-extrabold mb-8 text-center">
        Explore Featured Categories
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {data.categories.map((item) => (
            <div
              key={item.id}
              className="shadow-md hover:shadow-lg rounded-md bg-white overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="flex justify-center items-center h-32">
                <img
                  src={`images/categories/${item.image}`}
                  alt={item.name}
                  className="h-20 w-20 object-contain"
                />
              </div>
              <div className="p-4 text-center">
                <a
                  href={`/product/search?categories=${item.id}`}
                  className="text-lg font-semibold text-gray-800 hover:text-blue-600"
                >
                  {item.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
