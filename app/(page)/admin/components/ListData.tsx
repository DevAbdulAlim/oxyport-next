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
  pages: number;
  token: string;
};

export function ListData({ data, model, pages, token }: ListDataProps) {
  const [items, setItems] = useState<ItemType[]>(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(pages);

  const fetchData = async (page: number) => {
    const fetchedData = await getAll(model, page, itemsPerPage, token);
    setTotalPages(fetchedData.totalPages);
    setItems(fetchedData.data);
  };

  const onPageChange = (page: number) => {
    if (currentPage > totalPages) {
      page = totalPages;
    }
    setCurrentPage(page);
    (async () => {
      await fetchData(page);
    })();
  };

  const handleDelete = async (model: string, item: number) => {
    await removeOne(model, item);
    await fetchData(currentPage);
  };

  useEffect(() => {}, [items]);

  const tableHeaders = Object.keys(items[0]);
  return (
    <>
   
   <div className="my-4 overflow-auto">
  <table className="min-w-full border rounded-md overflow-hidden">
    <thead className="bg-blue-100 text-blue-950">
      <tr className="border-b hover:bg-blue-50">
        {tableHeaders.map((header, index) => (
          <th key={index} className="py-2 px-4 font-semibold text-sm">
            {header.toUpperCase()}
          </th>
        ))}
        <th colSpan={2} className="py-2 px-4 font-semibold text-center text-sm">
          ACTIONS
        </th>
      </tr>
    </thead>
    <tbody>
      {items.map((item, itemIndex) => (
        <tr key={itemIndex} className="border-b hover:bg-blue-50">
          {tableHeaders.map((header, index) => (
            <td key={index} className="py-3 px-4 whitespace-nowrap">
              {item[header] ? (
                item[header].length > 20 ? (
                  <span className="text-sm">
                    {item[header].substring(0, 40)}...
                  </span>
                ) : (
                  item[header]
                )
              ) : (
                <span className="text-gray-500">Undefined</span>
              )}
            </td>
          ))}
          <td className="py-3 px-4 text-center">
            <Link
              href={`${model}/edit/${item.id}`}
              className="text-green-500 hover:underline transition-colors duration-300"
            >
              Edit
            </Link>
          </td>
          <td className="py-3 px-4 text-center">
            <button
              className="text-red-500 hover:underline transition-colors duration-300"
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
