import React, { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import axios from "axios";
import { db } from "../firebase_config"; // Assuming you have imported Firebase and initialized it
import { addDoc, collection } from "firebase/firestore";
const WordShow = ({ word, userUID }) => {
  // Pass userUID as a prop
  const [wordInfo, setWordInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://wordsapiv1.p.rapidapi.com/words/${word}`;
        const response = await axios.get(url, {
          headers: {
            "X-RapidAPI-Key": "", // Replace with your actual API key
            "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
          },
        });
        setWordInfo(response.data);
      } catch (error) {
        setError(error);
        console.error(error); // Log the error for debugging
      }
    };

    if (word) fetchData(); // Fetch data only if word exists
  }, [word]); // Re-run effect when `word` prop changes

  const saveWordToFirestore = async () => {
    try {
      if (userUID && wordInfo) {
        const wordRef = collection(db, "myWord");
        const docData = {
          userId: userUID,
          word: wordInfo.word,
          definitions: wordInfo.results[0].definition,
          partOfSpeech: wordInfo.results[0].partOfSpeech,
        };
        await addDoc(wordRef, docData);
        console.log("Word saved to Firestore");
        alert("Word saved to word list.");
      } else {
        console.error("User UID or word information not available");
      }
    } catch (error) {
      console.error("Error saving word to Firestore:", error);
    }
  };

  if (error) {
    return <div>Error fetching definition: {error.message}</div>;
  }

  if (!wordInfo) {
    return <div>Loading definition...</div>;
  }

  return (
    <>
      <div className="card w-100 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-5xl">{wordInfo.word}</h2>
          <h2 className="text-xl">/{wordInfo.pronunciation.all}/</h2>
          <h2 className="text-2xl">Definition</h2>
          {wordInfo.results.map((result, index) => (
            <li key={index}>
              {result.definition} /{result.partOfSpeech}/
            </li>
          ))}
          <h2 className="text-2xl">Synonyms</h2>
          {wordInfo.results.map((result, index) => (
            <p key={index}>{result.synonyms}</p>
          ))}
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={saveWordToFirestore}>
              <AiFillHeart />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WordShow;
