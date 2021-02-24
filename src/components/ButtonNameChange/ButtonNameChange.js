import { useState } from "react";
import "./ButtonNameChange.css";
import ButtonNameChangeResult from "./ButtonNameChangeResult";

function ButtonNameChange() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [total, setTotal] = useState("");
  const [btnName, setBtnName] = useState("Submit");

  function resetBtnHandle() {
    setFirst("");
    setSecond("");
    setBtnName("Submit");
    setTotal("");
  }
  function selectionOption(e) {
    setBtnName(e.target.value);
  }
  function submitBtnHandle() {
    if (first !== "" && second !== "") {
      if (btnName === "Add") {
        setTotal(Number(first) + Number(second));
      } else if (btnName === "Sub") {
        setTotal(Number(first) - Number(second));
      } else if (btnName === "Mul") {
        setTotal(Number(first) * Number(second));
      } else if (btnName === "Div") {
        setTotal(Number(first) / Number(second));
      } else {
        alert("Please choose an operation");
      }
    } else {
      alert("please enter values");
    }
  }

  return (
    <div className="mainContainer">
      <div>
        <label>First Value:</label>
        <input
          type="number"
          name={first}
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          min="0"
        />
        {first === "" ? <p>Please enter the value</p> : null}
      </div>
      <div>
        <label>Second Value:</label>
        <input
          type="number"
          name={second}
          value={second}
          onChange={(e) => setSecond(e.target.value)}
          min="0"
        />
        {second === "" ? <p>Please enter the value</p> : null}
      </div>
      <div>
        <label>Choose Option:</label>
        <select
          id="operations"
          onChange={selectionOption.bind(this)}
          value={btnName}
        >
          <option readOnly>Choose an Op</option>
          <option name="Add" value="Add">
            1
          </option>
          <option name="Sub" value="Sub">
            2
          </option>
          <option name="Mul" value="Mul">
            3
          </option>
          <option name="Div" value="Div">
            4
          </option>
        </select>
      </div>
      <div className="btns">
        <button
          className="submit"
          name={btnName}
          onClick={submitBtnHandle.bind(btnName)}
        >
          {btnName}
        </button>
        <button className="reset" name="reset" onClick={resetBtnHandle}>
          Reset
        </button>
      </div>
      <ButtonNameChangeResult total={total} />
    </div>
  );
}

export default ButtonNameChange;
