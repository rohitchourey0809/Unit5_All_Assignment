import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Product } from "./components/Product";
import { Products } from "./components/Products";

function App() {
  return (
    <div className="App">
      <div className="Navbardiv">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<Products />} />
          </Routes>
        </main>

        <Home />
      </div>
    </div>
  );
}

export default App;
