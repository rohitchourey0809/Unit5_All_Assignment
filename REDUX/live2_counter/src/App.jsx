// import { useState } from "react";

import "./App.css";
import { store } from "./Redux/store";

function App() {
  const state = store.getState();
  console.log(state);
  //? counter:0
  return (
    <div className="App">
      <h3>Counter : 0</h3>
      <button>Add 1</button>
    </div>
  );
}

export default App;
