import React from "react";
import heroImg from "../assets/Blackboard.png";
import "./style/hero.css";
export default function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md ">
          <img src={heroImg} className="w-24 md:w-40 lg:w-64 mx-auto" alt="" />

          <h1 className="text-4xl font-bold">
            Unleash the Power of Words with SmartDict
          </h1>
          <p className="py-6">
            Struggling to understand or translate a word? Look no further than
            SmartDict! Our user-friendly website
          </p>
          <button className="btn btn-primary mx-2">Grammar</button>
          <button className="btn btn-primary">Text to Speech</button>
        </div>
      </div>
    </div>
  );
}
