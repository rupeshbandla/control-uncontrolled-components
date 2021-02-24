import { useState } from "react";
import Presentational from "../PresentationalComponent/PresentationalComponent";

function ContainerComponent() {
  const [val, setVal] = useState("hello world");
  const [show, setShow] = useState(false);

  function handleInput(event) {
    setVal(event.target.value);
    setShow(false);
  }

  function submitText() {
    setShow(true);
  }

  return (
    <div className="container">
      <input type="text" value={val} onChange={handleInput} />
      <button onClick={submitText}>Change text</button>
      {show && <Presentational text={val} />}
    </div>
  );
}

export default ContainerComponent;
