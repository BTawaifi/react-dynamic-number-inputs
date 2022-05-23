import "./styles.css";
import React, { useState } from "react";
import Counter from "./Components/Counter";

export default function App() {
  const [inputsCount, setInputsCount] = useState(0);

  const handleChange = (e) => {
    setInputsCount(Number(e.target.value));
  };

  return (
    <div className="App">
      <span>Number Inputs Count </span>
      <input
        type="number"
        value={inputsCount}
        onChange={handleChange}
        tabindex="-1"
      />
      <div className="Counter-Container">
        {inputsCount > 0 &&
          [...Array(inputsCount)].map((_, i) => <Counter key={i} num={i} />)}
      </div>
    </div>
  );
}
