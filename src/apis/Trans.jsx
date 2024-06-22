import axios from "axios";
import { useState, useEffect } from "react";

export default function Trans() {
  const [word, setWord] = useState("");
  const [wordin, setWordIn] = useState("");
  const [result, setResult] = useState("");
  const [voice, setVoice] = useState("");
  //   const [text, setText] = useState("");
  const [audioSrc, setAudioSrc] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (wordin == "") {
      alert("Enter you word");
    } else {
      const options = {
        method: "GET",
        url: "https://voicerss-text-to-speech.p.rapidapi.com/",
        params: {
          key: "",
          src: wordin,
          hl: "en-us",
          v: voice,
          r: "0",
          c: "mp3",
          f: "24khz_16bit_stereo",
        },
        headers: {
          "X-RapidAPI-Key": "",
          "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
        },
        responseType: "blob",
      };

      try {
        const response = await axios.request(options);
        const audioUrl = URL.createObjectURL(response.data);
        setAudioSrc(audioUrl);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    // Reset audioSrc when text changes to prevent playing the old audio while new one is loading
    setAudioSrc("");
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setWord(wordin);
    setAudioSrc("");
    if (wordin == "") {
      alert("Enter you word");
    } else {
      //  setResult(word)
      const encodedParams = new URLSearchParams();
      encodedParams.set("from", "en");
      encodedParams.set("to", "th");
      encodedParams.set("text", wordin);

      const options = {
        method: "POST",
        url: "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key": "",
          "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
        },
        data: encodedParams,
      };

      try {
        const response = await axios.request(options);
        setResult(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <>
      <div className="body my-5">
        <div className="Box p-6">
          <h1 className="text-center text-4xl font-bold ">Translate</h1>
          <br />
          <div className="flex flex-col lg:flex-row">
            <div className="grid flex-grow h-32 rounded-box place-items-center">
              <div className="mb-3">
                <div className="label">
                  <span className="label-text">English</span>
                </div>
                <div className="inputBox">
                  <textarea
                    placeholder="Enter English word only"
                    onChange={(e) => {
                      setWordIn(e.target.value);
                    }}
                    value={wordin}
                    className="textarea textarea-bordered textarea-md w-full max-w-xs"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="divider divider-horizontal">
              <i className="bx bx-chevron-right"></i>
            </div>
            <div className="grid flex-grow h-32 card rounded-box place-items-center">
              <div className="mb-3">
                <div className="label">
                  <span className="label-text">Thai</span>
                </div>
                <div>
                  <div className="inputBox">
                    <textarea
                      placeholder=""
                      value={result.trans}
                      className="textarea textarea-bordered textarea-md w-200 max-w-xs"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="text-center mt-12">
            <button type="submit" className="btn" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center">
              <select
                className="select select-bordered w-54 max-w-xs my-3 select-md"
                onChange={(e) => {
                  setVoice(e.target.value);
                }}
              >
                <option disabled selected>
                  Linda Female
                </option>
                {/* <option value="Linda">Linda Female</option> */}
                <option value="Amy">Amy Female</option>
                <option value="Mary">Mary Female</option>
                <option value="John">John Male</option>
                <option value="Mike">Mike Male</option>
              </select>
              <button type="submit" className="btn my-3">
                Pronounce
              </button>
              {audioSrc && (
                <audio controls>
                  <source src={audioSrc} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
