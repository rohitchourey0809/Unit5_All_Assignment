import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  return (
    <div className="App">
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Increment is: {count}
      </button>
      <br />
      <button type="button" onClick={() => setCount((count) => count + 2)}>
        Decrement is: {count}
      </button>
      <br />
      <button type="button" onClick={() => setCount((count) => count * 2)}>
        Double: {count}
      </button>
      <br />
      <button type="button" onClick={() => setCount((count) => count * 2)}>
        Double : {count}
      </button>

      <button
        type="button"
        onClick={() =>
          setCount((count) => (count % 2 === 0 ? "style.red" : "style.green"))
        }
      >
        Odd/Even : {count}
      </button>
    </div>
  );
}

export default App;
