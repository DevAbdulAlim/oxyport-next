"use client";
import React, { useState, useEffect } from "react";

type ItemType = {
  id: number;
  name: string;
};

export function ListData({ data }: { data: ItemType[] }) {
  const [items, setItems] = useState<ItemType[]>(data);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/admin/categories/"
      );

      if (response.ok) {
        const newData = await response.json();
        setItems(newData.data);
        console.log(newData);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (itemId: number) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/admin/categories/${itemId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        fetchData(); // Update the state with the new data
      } else {
        console.error("Failed to delete item");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {}, [items]);

  return (
    <div>
      <ul>
        {items.map((item: ItemType) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <button
              className="bg-green-500 text-white"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
