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
};

export function ListData({ data, model, pages }: ListDataProps) {
  const [items, setItems] = useState<ItemType[]>(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(pages)

  const fetchData = async (page:number) => {
    const fetchedData = await getAll(model, page, itemsPerPage);
    setTotalPages(fetchedData.totalPages);
    setItems(fetchedData.data);
  };

  const onPageChange = (page:number) => {
    if(currentPage > totalPages) {
      page = totalPages
    }
    setCurrentPage(page);
    (async () => {
      await fetchData(page);
    })();
    
  }

  const handleDelete = async (model: string, item: number) => {
    await removeOne(model, item);
    await fetchData(currentPage);
  };

  useEffect(() => {
  }, [items]);
  

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
                    className="text-green-500 hover:underline text-center"
                  >
                    Edit
                  </Link>
                </td>

                <td>
                  <button
                    className="text-red-500 hover:underline text-center"
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
