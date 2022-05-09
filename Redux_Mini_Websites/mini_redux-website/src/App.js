import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Product } from "./components/Product";

function App() {
  return (
    <div className="App">
      <div className="Navbardiv">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>

        <Home />
      </div>
    </div>
  );
}

export default App;
