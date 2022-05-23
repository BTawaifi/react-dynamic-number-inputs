import React, { useState } from "react";
import "./Counter.css";

export default function (props) {
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setCount(Number(e.target.value));
  };

  return (
    <div className="Counter">
      <h2 className="Counter-Title">Number Input {props.num + 1}</h2>
      <input
        className="Counter-Text"
        type="number"
        value={count}
        onChange={handleChange}
      />
    </div>
  );
}
