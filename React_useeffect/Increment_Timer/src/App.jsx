// import { useState } from "react";
// import logo from "./logo.svg";
{/* <img src={logo} className="App-logo" alt="logo" /> */ }
import "./App.css";
import { Counter } from "./Components/Counter"
import { TIMER } from "./Components/Timer"

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="counterdiver">
        <button>Button</button>
        <Counter />
        <TIMER />
      </div>
      <div className="Timerdiver">

      </div>
    </div>
  );
}

export default App;
