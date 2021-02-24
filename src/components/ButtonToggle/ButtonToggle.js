import { useState } from "react";
import ButtonChange from "./ButtonChange";

function ButtonToggle() {
  let [toggle, setToggle] = useState(true);

  function toggleHandle() {
    toggle ? setToggle(false) : setToggle(true);
  }

  return (
    <div className="buttonToggleContainer">
      <button onClick={toggleHandle}>Toggle</button>
      <ButtonChange toggle={toggle} />
    </div>
  );
}

export default ButtonToggle;
