import { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  //this fn calling every change made by the counter to restrict this we can use [] within the useeffect fn
  //   useEffect(() => {
  //     document.title = `${count} clicked`;
  //   });

  useEffect(() => {
    console.log("use effect called");
    document.title = `${count} clicks`;
  }, [count]);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count > 1 ? count - 1 : 0);
  }
  function reset() {
    setCount(0);
  }
  return (
    <div className="counterContainer">
      <h3>Counter Value: {count}</h3>
      <button className="increment" onClick={increment} name="increment">
        +
      </button>
      <button className="decrement" onClick={decrement} name="decrement">
        -
      </button>
      <button className="reset" onClick={reset} name="reset">
        reset
      </button>
    </div>
  );
}

export default UseEffect;
