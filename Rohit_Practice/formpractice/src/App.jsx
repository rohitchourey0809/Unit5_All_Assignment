// import { useState } from "react";
// import logo from "./logo.svg";
import React from "react";
// import "./App.css";
import { Routes, Route } from "react-router-dom";

import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { Nopage } from "./Components/Nopage";
import { Service } from "./Components/Service";
import { Signin } from "./Components/Signin";
import { Signout } from "./Components/Signout";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="service" element={<Service />} />
        <Route path="*" element={<Nopage />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signout" element={<Signout />} />
      </Routes>
    </div>
  );
}

export default App;
