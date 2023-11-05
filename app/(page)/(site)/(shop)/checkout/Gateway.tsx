"use client";

import React, { useState } from "react";

const Gateway = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
  };

  return (
    <div className="p-4">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <label className="block">
            <input
              type="radio"
              name="option"
              value="Option 1"
              checked={selectedOption === "Option 1"}
              onChange={() => handleOptionClick("Option 1")}
              className="hidden"
            />
            <label
              htmlFor="option1"
              className={`cursor-pointer ${
                selectedOption === "Option 1"
                  ? "border-2 border-blue-500 p-2"
                  : "p-2"
              }`}
            >
              Option 1
            </label>
          </label>
          <label className="block">
            <input
              type="radio"
              name="option"
              value="Option 2"
              checked={selectedOption === "Option 2"}
              onChange={() => handleOptionClick("Option 2")}
              className="hidden"
            />
            <label
              htmlFor="option2"
              className={`cursor-pointer ${
                selectedOption === "Option 2"
                  ? "border-2 border-blue-500 p-2"
                  : "p-2"
              }`}
            >
              Option 2
            </label>
          </label>
          <label className="block">
            <input
              type="radio"
              name="option"
              value="Option 3"
              checked={selectedOption === "Option 3"}
              onChange={() => handleOptionClick("Option 3")}
              className="hidden"
            />
            <label
              htmlFor="option3"
              className={`cursor-pointer ${
                selectedOption === "Option 3"
                  ? "border-2 border-blue-500 p-2"
                  : "p-2"
              }`}
            >
              Option 3
            </label>
          </label>
        </div>
      </form>
      <p className="mt-4">Selected Option: {selectedOption}</p>
    </div>
  );
};

export default Gateway;
