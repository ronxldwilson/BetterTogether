'use client'
import { useState } from "react";

const DropdownInput = ({ options }) => {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOptionClick = (option) => {
    setInputValue(option);
    setShowDropdown(false);
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Input Field */}
      <input
        type="text"
        value={inputValue}
        onClick={() => setShowDropdown(!showDropdown)}
        onChange={(e) => setInputValue(e.target.value)} // Optional: Allows manual input
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type of Query"
        readOnly // Makes the input read-only
      />

      {/* Dropdown Options */}
      {showDropdown && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownInput;
