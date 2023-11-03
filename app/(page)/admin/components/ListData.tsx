"use client";
import React, { useState, useEffect } from "react";
import { getAll } from "../services/getAll";
import { removeOne } from "../services/removeOne";
import Link from "next/link";
import Pagination from "./Pagination";

type ItemType = {
  [key: string]: any;
};

type ListDataProps = {
  data: ItemType[];
  model: string;
};

export function ListData({ data, model }: ListDataProps) {
  const [items, setItems] = useState<ItemType[]>(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(20)

  const onPageChange = (page:number) => {
    setCurrentPage(page);
  }

  const handleDelete = async (model: string, item: number) => {
    await removeOne(model, item);
    const fetchedData = await getAll(model, "1", "7");
    setItems(fetchedData.data);
  };

  useEffect(() => {}, [items]);

  const tableHeaders = Object.keys(items[0]);
  return (
    <>
      <div className="my-4  overflow-auto">
        <table className="min-w-full border">
          <thead className="text-left bg-blue-100 text-blue-950">
            <tr className="border hover:bg-blue-50">
              {tableHeaders.map((header, index) => (
                <th className="py-2 px-4" key={index}>
                  {header.toUpperCase()}
                </th>
              ))}
              <th className="text-center" colSpan={2}>
                ACTIONS
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
                  <Link
                    href={`${model}/edit/${item.id}`}
                    className="text-green-500 text-center"
                  >
                    Edit
                  </Link>
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

     <Pagination
     currentPage={currentPage}
     totalPages={totalPages}
     onPageChange={onPageChange}
      />
    </>
  );
}
