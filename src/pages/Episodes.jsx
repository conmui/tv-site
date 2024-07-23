import React from "react";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Logo from "../components/Logo";

function Episodes() {
  return (
    <div>
      <Title text={"Episodes"} />
      <Quote
        quote={'"They don\'t want honest. They want entertainment."'}
        reference={
          "Fuches, Barry, Season 2: Past = Present x Future Over Yesterday"
        }
      />
      <Logo />
    </div>
  );
}

export default Episodes;
