'use client'
import React, { useState } from 'react';
import { CategoryListType, CategoryType } from "@/lib/types/CategoryTypes";

interface CategoryFilterProps {
  categories: CategoryListType;
  onChange: (values: number[]) => void;
}

export default function CategoryFilter({ categories, onChange }: CategoryFilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const handleCheckboxChange = (categoryId: number) => {
    const updatedSelection = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId];

    setSelectedCategories(updatedSelection);
    onChange(updatedSelection);
  };

  return (
    <div>
      {categories.map((category: CategoryType) => (
        <div key={category.id} className="flex items-center">
          <input
            type="checkbox"
            id={`category-${category.id}`}
            checked={selectedCategories.includes(category.id)}
            onChange={() => handleCheckboxChange(category.id)}
          />
          <label htmlFor={`category-${category.id}`} className="ml-2">
            {category.name}
          </label>
        </div>
      ))}
    </div>
  );
}
