import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search submission here (e.g., call an API)
    console.log(`Search term: ${searchTerm}`);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        <h1 className="text-5xl font-bold ">Build Your Vocabulary</h1>
      </div>
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center justify-center">
        <form onSubmit={handleSubmit} className="flex items-center w-full ">
          <div className="relative text-gray-600 mx-3 ">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-64 border border-black"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn rounded-full btn-primary">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
