"use client";
import Link from "next/link";

// Define a type for the item object
type ItemType = {
  id: number;
  name: string;
};

// Page component to render data
export async function ListData({ data }: { data: ItemType[] }) {
  return (
    <div>
      {/* Mapping over the 'data' array and rendering 'item' elements */}
      <ul>
        {data.map((item: ItemType) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <Link
              className="bg-green-500 text-white"
              href={`/dashboard/categories/remove/${item.id}`}
            >
              Delete
            </Link>
          </li>
        ))}
      </ul>
      {/* Placeholder text for your page */}
      All Categories
    </div>
  );
}
