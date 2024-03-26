import { useState, useEffect, useHistory } from "react";
import WordDefinition from "../apis/WordShow";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useParams } from "react-router-dom";
import axios from "axios"; // Import Axios
import "./style/word.css";
function Word() {
  
  const [wordData, setWordData] = useState(null); // State to store word data
  const [searchTerm, setSearchTerm] = useState("link");
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    setSearchTerm(inputValue); // Update searchTerm on submit
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update input value only
  };
  return (
    <>
        {/* <div className="text-5xl text-center font-bold mt-3">Service</div>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-84 card  rounded-box place-items-center justify-center">
         
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow h-84 card  rounded-box place-items-center">
          
        </div>
      </div> */}
      <div className="text-5xl text-center font-bold my-3">Find some word</div>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="grid flex-grow h-84 card  rounded-box place-items-center justify-center">
        <form onSubmit={handleSubmit} className="flex items-center w-full">
            <div className="relative text-gray-600 mx-3">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-64 border border-black"
                value={inputValue} // Use inputValue for input value
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" onClick={handleSubmit} className="btn rounded-full btn-primary">
              Search
            </button>
          </form>
        </div>
        <div className="divider"></div>
        <div className="ggrid flex-grow h-84 card  rounded-box place-items-center justify-center">
        <WordDefinition word={searchTerm} />
        </div>
      </div>
    </>
  );
}

export default Word;
