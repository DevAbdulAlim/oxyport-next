"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

type CategoryType = {
  id: number;
  name: string;
};

type CategoryListType = {
  categories: CategoryType[];
};

interface CategoryFilterProps extends CategoryListType {}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const handleCheckboxChange = (categoryId: number) => {
    const updatedSelection = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id) => id !== categoryId)
      : [...selectedCategories, categoryId];

    setSelectedCategories(updatedSelection);

    params.set("categories", updatedSelection.join(", "));
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      {categories.map((category: CategoryType) => (
        <button
          type="button"
          key={category.id}
          className="flex items-center"
          onClick={() => handleCheckboxChange(category.id)}
        >
          <span
            className={`h-4 w-4 ${
              selectedCategories.includes(category.id)
                ? "bg-blue-500"
                : "bg-gray-300"
            } rounded-full`}
          ></span>
          <label htmlFor={`category-${category.id}`} className="ml-2">
            {category.name}
          </label>
        </button>
      ))}
    </div>
  );
}
