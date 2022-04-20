import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import { Button } from "./Components/button"
function App() {
  // const [count, setCount] = useState(0)
  const [theme, setTheme] = useState("dark")

  return (
    <div className="App">
      <h3>Theme:{theme}</h3>
      <Button
        theme={theme}
        variant="hollow"
        onClick={() => {
          alert("Clicked me")
        }}
      >Click me</Button>

      <button onClick={() => {
        setTheme(theme === "light" ? "dark" : "light")
      }}>Color theme</button>



      {/* <========================================================Counter===================> */}
      <div>
        <COUNTER/>
      </div>
    </div>
  )
}

export default App
