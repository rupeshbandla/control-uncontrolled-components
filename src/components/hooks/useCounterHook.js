import { useState } from "react";

//custom hook
function useCounter(incrementValue, initialValue = 0) {
  let [counter, setCounter] = useState(initialValue);

  function increment() {
    setCounter(counter + incrementValue);
  }
  function decrement() {
    setCounter(
      counter > initialValue ? counter - incrementValue : initialValue
    );
  }
  function reset() {
    setCounter(initialValue);
  }

  return [counter, increment, decrement, reset];
}

export default useCounter;
