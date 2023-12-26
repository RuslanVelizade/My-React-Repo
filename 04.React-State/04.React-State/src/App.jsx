import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  return (
    <>
      <button className="inc" onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{count}</h1>
      <button className="dec" onClick={() => setCount(count - 1)}>Decrement</button>

      <br />
      <hr />
      <br />
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.valueAsNumber)}
      />
      <button onClick={() => setCount(count + inputValue)}>
        Inc by Value
      </button>
    </>
  );
}

export default App;
