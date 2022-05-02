// import { useState } from 'react'
// import logo from './logo.svg'
// import { Route, Routes } from "react-router";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/neworders" element={<NewOrder />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Routes>
      <Logout />
    </div>
  );
}

export default App;
