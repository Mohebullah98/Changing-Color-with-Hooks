import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  function changeColor() {
    //change color to opposite
    color === "white" ? setColor("black") : setColor("white");
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={changeColor}
        onMouseOut={changeColor}
        style={{ backgroundColor: color }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
