import React, { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import axios from "axios";

const WordShow = ({ word }) => {
  const [wordInfo, setwordInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://wordsapiv1.p.rapidapi.com/words/${word}`;
        const response = await axios.get(url, {
          headers: {
            "X-RapidAPI-Key":
              "04dc07cf1dmshba25fae11f332f0p1faed2jsn29e10bd2dae8", // Replace with your actual API key
            "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
          },
        });
        setwordInfo(response.data);
      } catch (error) {
        setError(error);
        console.error(error); // Log the error for debugging
      }
    };

    if (word) fetchData(); // Fetch data only if word exists
  }, [word]); // Re-run effect when `word` prop changes

  if (error) {
    return <div>Error fetching definition: {error.message}</div>;
  }

  if (!wordInfo) {
    return <div>Loading definition...</div>;
  }

  // Display the definition based on its structure (assuming it's an object)
  return (
    <>
      <div className="card w-100 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-5xl">{wordInfo.word}</h2>
          <h2 className="text-xl">/{wordInfo.pronunciation.all}/</h2>

          {/* <p className="text-lx">{wordInfo.results[1].partOfSpeech}</p> */}
          {/* <p>{wordInfo.results[].definition}</p> */}
          {wordInfo.results.map((result, index) => (
          <li key={index}>{result.definition} /{result.partOfSpeech}/</li>
        ))}
        <h2 className="text-2xl">synonyms</h2>
        {wordInfo.results.map((result, index) => (
          <p key={index}>{result.synonyms}</p>
        ))}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <AiFillHeart />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WordShow;
