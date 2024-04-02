import React from "react";
import Hero from "../components/Hero";
import Word from "../components/Word";

export default function Home(props) {
  const { user } = props;
  return (
    <div className="container">
      <Hero />
      {user ? <Word user={user.uid} /> : <Word />}
    </div>
  );
}
