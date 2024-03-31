import axios from 'axios';
import { useState, useEffect } from 'react';


export default function Trans() {

  const [word, setWord] = useState("");

  const [wordin, setWordIn] = useState("");
  const [result, setResult] = useState("");


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setWord(wordin)
    
    if (wordin == "" ) {
      alert("Enter you word")
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
              "X-RapidAPI-Key": "04dc07cf1dmshba25fae11f332f0p1faed2jsn29e10bd2dae8",
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
    };

  }


  return (
    <>
      <div className="body">
        <div className="Box">
          <h1 className="text-center text-4xl font-bold ">Translate</h1>
          <br />
          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-32 rounded-box place-items-center">
              <div className="mb-3">
                <div className="label">
                  <span className="label-text">English</span>
                </div>
                <div className='inputBox'>
                  <textarea placeholder="Enter English word only" onChange={e => { setWordIn(e.target.value) }} value={wordin} className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
                </div>
              </div>
            </div>
            <div className="divider divider-horizontal"><i class='bx bx-chevrons-right'></i></div>
            <div className="grid flex-grow h-32 card rounded-box place-items-center">
              <div className="mb-3">
                <div className="label">
                  <span className="label-text">Thailand</span>
                </div>
                <div>
                  <div className='inputBox'>
                    <textarea placeholder="" value={result.trans} className="textarea textarea-bordered textarea-md w-200 max-w-xs" ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="text-center">
            <button type="submit" className="btn" onClick={handleFormSubmit} >Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}
