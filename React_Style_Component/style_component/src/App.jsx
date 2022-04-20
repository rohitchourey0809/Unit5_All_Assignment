import { useState } from "react";
import { Button } from "./Components/button"
import "./App.css";

function App() {
  const [theme, settheme] = useState("dark")
  const [theme1, settheme1] = useState("brown")
  const [theme2, settheme2] = useState("potato")
  const [counter, setcounter] = useState(0)

  const handlecounter = () => {

    setcounter(counter + 1);

    if (counter > 10) {
      settheme(theme === "dark" ? "pink" : "purple");
    }
  }


  const handleButtontheme = () => {
    setcounter(counter + 1);

    if (counter > 15) {
      settheme1(theme2 === "dark" ? "orange" : "silver");
    }
  }

  const handletheme = () => {
    setcounter(counter + 1);

    if (counter > 20) {
      settheme2(theme1 === "dark" ? "blue" : "bright");
    }
  }







  return (
    <div className="App">
      <div className="div1"><h1>Div1</h1>
        <h2>Counter:{counter} ,Theme:{theme}</h2>
        <Button onClick={handlecounter}>Change counter Theme </Button>
      </div>
      <div className="div2"><h1>Div2</h1>
        <h2>Counter:{counter} ,Theme:{theme}</h2>
        <Button onClick={handleButtontheme}>Change counter Theme 1</Button>
      </div>

      <div className="div"><h1>Div3</h1>
        <h2>Counter:{counter} ,Theme:{theme}</h2>
        <Button onClick={handletheme}>Change counter Theme 2</Button>
      </div>
    </div>
  );
}

export default App;
