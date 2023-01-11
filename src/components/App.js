import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [nameToDisplay, setNameToDisplay] = useState("");

  const handleButtonClick = () => {
    setNameToDisplay(inputValue);
  };

  //code here
  return (
    <div id="main">
      <input
        id="input"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      ></input>
      <button id="button" onClick={handleButtonClick}>
        Click
      </button>
      <p id="text">
        Hello my name is {nameToDisplay} and I study at Newton School
      </p>
    </div>
  );
};

export default App;
