import { useRef } from "react";

function Uncontrolled() {
  const textRef = useRef(null);

  function handleSubmit() {
    console.log(textRef.current.value);
  }

  return (
    <div className="uncontrolled">
      <h2>Uncontrolled</h2>
      <input type="text" ref={textRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Uncontrolled;
