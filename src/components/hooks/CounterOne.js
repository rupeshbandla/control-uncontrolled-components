import useCounter from "../hooks/useCounterHook";

function CounterOne() {
  const [counter, increment, decrement, reset] = useCounter(1, 1);
  return (
    <div className="counterContainer">
      <h3>Counter Value: {counter}</h3>
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

export default CounterOne;
