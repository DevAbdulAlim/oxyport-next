"use client";
import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Rating {
  id: number;
  name: string;
  rating: number;
}

const ratings: Rating[] = [
  { id: 1, name: "Item 1", rating: 1 },
  { id: 2, name: "Item 2", rating: 2 },
  { id: 3, name: "Item 3", rating: 3 },
  { id: 4, name: "Item 4", rating: 4 },
  { id: 5, name: "Item 5", rating: 5 },
];

const renderRatingIcon = (star: number, rating: number) => {
  if (star <= rating) {
    return <FaStar className="text-yellow-500" />;
  } else if (star - 0.5 === rating) {
    return <FaStar className="text-yellow-500" />;
  } else {
    return <FaStar className="text-gray-300" />;
  }
};

export default function RatingFilter() {
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const toggleRating = (rating: number) => {
    const updatedRatings = selectedRatings.includes(rating)
      ? selectedRatings.filter((item) => item !== rating)
      : [...selectedRatings, rating];
    setSelectedRatings(updatedRatings);
  };

  return (
    <div className="space-y-2">
      {ratings.map((rating) => (
        <button
          type="button"
          key={rating.id}
          className="flex items-center space-x-2"
          onClick={() => toggleRating(rating.rating)}
        >
          <span
            className={`h-4 w-4 ${
              selectedRatings.includes(rating.rating)
                ? "bg-yellow-500"
                : "bg-gray-300"
            } rounded-full`}
          ></span>
          <div className="flex items-center justify-center space-x-2">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                {renderRatingIcon(index + 1, rating.rating)}
              </span>
            ))}
          </div>
        </button>
      ))}
    </div>
  );
}
