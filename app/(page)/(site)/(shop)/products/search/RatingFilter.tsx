'use client'
import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface Item {
  id: number;
  name: string;
  rating: number;
}

const items: Item[] = [
  { id: 1, name: 'Item 1', rating: 1 },
  { id: 2, name: 'Item 2', rating: 2 },
  { id: 3, name: 'Item 3', rating: 3 },
  { id: 4, name: 'Item 4', rating: 4 },
  { id: 5, name: 'Item 5', rating: 5 },
  // Add more items as needed
];

interface RatingListProps {
  onRatingChange: (newRating: number) => void;
}

const RatingList: React.FC<RatingListProps> = ({ onRatingChange }: RatingListProps) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleRatingChange = (newRating: number) => {
    setSelectedRating((prevRating) =>
      prevRating === newRating ? null : newRating
    );
    onRatingChange(newRating); // Call the prop function with the new rating
  };

  const handleCheckboxChange = (itemId: number) => {
    // Handle checkbox change logic here if needed
    console.log(`Checkbox for item ${itemId} clicked`);
  };

  const renderStarIcon = (star: number, rating: number) => {
    if (star <= rating) {
      return <FaStar className="text-yellow-500" />;
    } else if (star - 0.5 === rating) {
      return <FaStarHalfAlt className="text-yellow-500" />;
    } else {
      return <FaStar className="text-gray-300" />;
    }
  };

  const filteredItems = selectedRating
    ? items.filter((item) => item.rating === selectedRating)
    : items;

  return (
    <div>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id} className='flex items-center space-x-2'>
            <input
              type="checkbox"
              id={`item${item.id}`}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <label htmlFor={`item${item.id}`} className="flex items-center space-x-2">
              {[...Array(5)].map((_, index) => (
                <span key={index} onClick={() => handleRatingChange(index + 1)}>
                  {renderStarIcon(index + 1, item.rating)}
                </span>
              ))}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingList;
