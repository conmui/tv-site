import React from "react";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Logo from "../components/Logo";

function Characters() {
  return (
    <div>
      <Title text={"Characters"} />
      <Quote
        quote={'"You should be able to be the person that you say you are."'}
        reference={"Barry Berkman, Barry, Season 2: What?!"}
      />
      <Logo />
    </div>
  );
}

export default Characters;
