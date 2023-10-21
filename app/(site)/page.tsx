"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  inStock: string;
  rating: number;
  createdAt: number;
};

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "/api/products";

    axios
      .get<Product[]>(apiUrl)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
        // You can set an error state here for better error handling
      });
  }, []);

  if (loading) {
    return <p>Loading Products...</p>;
  }

  return (
    <section className="py-8">
      <h3 className="text-center text-4xl">Featured Products</h3>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((item) => (
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
                  className="bg-blue-500 text-white py-2 px-8"
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
