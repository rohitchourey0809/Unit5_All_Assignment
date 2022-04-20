import { useState } from "react";

import "./App.css";

function App() {
  const [theme, settheme] = useState("dark")

  const handletheme = () => {
    settheme("green");
  }
  return (
    <div className="App">
      <h3>Theme:{theme}</h3>
      <button onClick={handletheme}>Change Theme</button>
    </div>
  );
}

export default App;
