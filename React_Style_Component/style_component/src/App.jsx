import { useState } from "react";
import { Button } from "./Components/button"
import "./App.css";

function App() {
  const [theme, settheme] = useState("dark")
  const [counter, setcounter] = useState(0)

  const handletheme = () => {
    settheme(theme === "dark" ? "blue" : "black");
  }
  const handleButtontheme = () => {
    // return setcounter(counter > 10 ? theme === "pink" : theme === "purple");
    return settheme(theme === "dark" ? "Green" : "Yellow");
  }



  const handlecounter = () => {

    setcounter(counter + 1);

    if (counter > 10) {
      settheme(theme === "dark" ? "pink" : "purple");
    }

  }
  return (
    <div className="App">
      <div className="div1"><h1>Div1</h1>
        <h2>Counter:{counter} ,Theme:{theme}</h2>
        <Button onClick={handlecounter}>Change counter Theme</Button>
      </div>
    </div>
  );
}

export default App;
