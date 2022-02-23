import React, { useState } from "react";

function Joke(props) {
  const [isShown, setIsShown] = useState(false);
  const toggleShown = () => {
    setIsShown((prevShown) => {
      return (prevShown = !prevShown);
    });
  };
  return (
    <div className="joke-section">
      {props.setup && <h1>{props.setup}</h1>}
      {isShown && <p>{props.punchline || "Random"} </p>}
      <button onClick={toggleShown}>
        {isShown ? "Show" : "Hide"} punchline
      </button>
    </div>
  );
}

export default Joke;
