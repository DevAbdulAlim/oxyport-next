"use client";
import React, { useState } from "react";

type CategoryType = {
  id: number;
  name: string;
};

type CategoryListType = {
  categories: CategoryType[];
};

interface CategoryFilterProps extends CategoryListType {
  onChange: (values: number[]) => void;
}

export default function CategoryFilter({
  categories,
  onChange,
}: CategoryFilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const handleCheckboxChange = (categoryId: number) => {
    const updatedSelection = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id) => id !== categoryId)
      : [...selectedCategories, categoryId];

    setSelectedCategories(updatedSelection);
    onChange(updatedSelection);
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
