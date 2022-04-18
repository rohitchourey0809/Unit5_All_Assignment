// import logo from './logo.svg';
import "./App.css";
// import { useState } from "react"
import { FORM } from "./components/form";
import { ShowData } from "./components/showdata"
function App() {
  // const [counter,setcounter] = useState(50)

  return (
    <div className="App">
      {/* <button>Button</button> */}

      <FORM />

      <div className="showdata">
        <ShowData />
      </div>
    </div>
  );
}

export default App;
