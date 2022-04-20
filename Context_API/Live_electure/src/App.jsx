// import { useState } from 'react'
// import logo from './logo.svg'
import "./App.css";
import { NAVBAR } from "./Components/Navbar";
import { CARD } from "./Body/Card";
import { useContext } from "react";
import { LangContext } from "./Context/LanguageContext";
function App() {
  // const [count, setCount] = useState(0)
  const { handlelang } = useContext(LangContext);

  return (
    <div className="App">
      <button
        onClick={() => {
          handlelang(1);
        }}
      >
        Change Language
      </button>
      <NAVBAR />
      <CARD />
    </div>
  );
}

export default App;

//?Intialise the value
//?Get the value
//?Update the value
