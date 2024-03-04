"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Rating {
  rating: number;
}

const ratings: Rating[] = [
  { rating: 1 },
  { rating: 1.5 },
  { rating: 2 },
  { rating: 2.5 },
  { rating: 3 },
  { rating: 3.5 },
  { rating: 4 },
  { rating: 4.5 },
  { rating: 5 },
];

const renderRatingIcon = (star: number, rating: number) => {
  if (star <= rating) {
    return <FaStar className="text-yellow-500" />;
  } else if (star - 0.5 === rating) {
    return <FaStarHalfAlt className="text-yellow-500" />;
  } else {
    return <FaStar className="text-gray-300" />;
  }
};

export default function RatingFilter() {
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const toggleRating = (rating: number) => {
    const updatedRatings = selectedRatings.includes(rating)
      ? selectedRatings.filter((item) => item !== rating)
      : [...selectedRatings, rating];
    setSelectedRatings(updatedRatings);

    params.set("ratings", updatedRatings.join(","));
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="space-y-2">
      {ratings.map((rating, index) => (
        <button
          type="button"
          key={index}
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
