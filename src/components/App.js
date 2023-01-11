import React, { useState, useEffect } from "react";
import "../styles/App.css";
const App = () => {
  const [name, setName] = useState("_____");
  const [input, setInput] = useState("");
  const onButtonClick = (e) => {
    setName(input);
  };
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div id="main">
      <input id="input" onChange={onInputChange}></input>
      <button id="button" onClick={onButtonClick}>
        Click
      </button>
      <p id="text"> Hello my name is {name} and I study at Newton School</p>
    </div>
  );
};

export default App;
