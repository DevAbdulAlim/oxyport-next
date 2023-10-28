"use client";
import React, { useState, useEffect } from "react";
import { getAll } from "../services/getAll";
import { removeOne } from "../services/removeOne";

type ItemType = {
  [key: string]: any;
};

type ListDataProps = {
  data: ItemType[];
  model: string;
};

export function ListData({ data, model }: ListDataProps) {
  const [items, setItems] = useState<ItemType[]>(data);

  const handleDelete = async (model: string, item: number) => {
    await removeOne(model, item);
    const fetchedData = await getAll(model);
    setItems(fetchedData.data);
  };

  useEffect(() => {}, [items]);

  const tableHeaders = Object.keys(items[0]);

  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-4xl">Product List</h1>
        <div className="my-4 shadow-md overflow-auto p-4 md:p-8">
          <table className="min-w-full border">
            <thead className="text-left bg-blue-100 text-blue-950">
              <tr className="border hover:bg-blue-50">
                {tableHeaders.map((header, index) => (
                  <th className="py-2 px-4" key={index}>
                    {header}
                  </th>
                ))}
                <th className="text-center" colSpan={2}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, itemIndex) => (
                <tr key={itemIndex} className="border hover:bg-blue-50">
                  {tableHeaders.map((header, index) => (
                    <td key={index} className="py-2 px-4">
                      {item[header]}
                    </td>
                  ))}
                  <td>
                    <button className="text-green-500 text-center">
                      Update
                    </button>
                  </td>

                  <td>
                    <button
                      className="text-red-500 text-center"
                      onClick={() => handleDelete(model, item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <nav className="flex justify-center my-8">
          <ul className="flex">
            <li className="py-2 px-4 border">1</li>
            <li className="py-2 px-4 border">2</li>
            <li className="py-2 px-4 border">3</li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
