import React from "react";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Logo from "../components/Logo";

function Episodes() {
  return (
    <div>
      <Title text={"Episodes"} />
      <Quote
        quote={'"What?!"'}
        reference={"Barry Berkman, Barry, Season 2: What?!"}
      />
    </div>
  );
}

export default Episodes;
