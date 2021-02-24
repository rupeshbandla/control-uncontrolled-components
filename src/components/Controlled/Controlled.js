import { useState } from "react";

function Controlled() {
  const [input, setInput] = useState("");

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleSubmit() {
    console.log(input);
  }
  return (
    <div className="controlled">
      <h2>Controlled</h2>
      <input type="text" onChange={handleInput} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Controlled;
