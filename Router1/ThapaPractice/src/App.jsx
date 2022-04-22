import { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Home } from "./Components/Home";
import { Error } from "./Components/Error";
function App() {
  return (
    <div className="App">
      <h2>Router Practice</h2>
      <h3>WELCOME</h3>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
