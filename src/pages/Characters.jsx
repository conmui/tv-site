import React from "react";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Logo from "../components/Logo";

function Characters() {
  return (
    <div>
      <Title text={"Characters"} />
      <Quote
        text={'"You should be able to be the person that you say you are."'}
      />
      <Logo />
    </div>
  );
}

export default Characters;
