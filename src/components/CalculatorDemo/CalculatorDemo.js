import { useState } from "react";
import "./CalculatorDemo.css";
import DisplayCalcResult from "./DisplayCalcResult";

function CalculatorDemo() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [total, setTotal] = useState();

  //   const btns = ["Add", "Sub", "Mul", "Reset"];

  function handleAddClickEvent() {
    setTotal(Number(first) + Number(second));
  }
  function handleSubClickEvent() {
    setTotal(Number(first) - Number(second));
  }
  function handleMulClickEvent() {
    setTotal(Number(first) * Number(second));
  }
  function handleDivClickEvent() {
    setTotal(Number(first) / Number(second));
  }

  function handleResetClickEvent(e) {
    setTotal("");
    setFirst("");
    setSecond("");
  }

  return (
    <div className="mainContainer">
      <div>
        <label>First number: </label>
        <input
          type="number"
          placeholder="Enter first number"
          name="first"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          min="0"
        />
      </div>
      <br />
      <div>
        <label>Second number: </label>
        <input
          type="number"
          placeholder="Enter second number"
          name="second"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
          min="0"
        />
      </div>
      <br />
      <div>
        <button onClick={handleAddClickEvent}>Add</button>
        <button onClick={handleSubClickEvent}>Sub</button>
        <button onClick={handleMulClickEvent}>Mul</button>
        <button onClick={handleDivClickEvent}>Div</button>
        <button onClick={handleResetClickEvent}>Reset</button>

        {/* {btns.map((btn) => (
          <button key={btn} onClick={handleClickEvent(btn)}>
            {btn}
          </button>
        ))} */}
      </div>
      <div>
        <DisplayCalcResult total={total} />
      </div>
    </div>
  );
}

export default CalculatorDemo;
