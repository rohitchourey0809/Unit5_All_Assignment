// import { useState } from 'react'
// import logo from './logo.svg'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ABOUT } from "./Components/About";
import { HOME } from "./Components/Home";
import { NAVBAR } from "./Components/Navbar";
import { USERLIST } from "./Components/userlist";
import { Userdetail } from "./Components/Userdetail";
import { PrivateRoute } from "./Components/PrivateComp";
// import { AuthContext } from "./Contest/Authcontest";
import { LOGIN } from "./Components/login";
// import { Error } from "./Components/Error";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NAVBAR />

      <Routes>
        <Route path="/" element={<HOME />}></Route>

        <Route path="/about" element={<ABOUT />}></Route>

        <Route
          path="/users"
          element=
          // {<PrivateRoute>
            {<USERLIST />}
            // </PrivateRoute>}
        ></Route>
        <Route
          path="/users/:id"
          element={
            <PrivateRoute>
              {" "}
              <Userdetail />
            </PrivateRoute>
          }
        ></Route>
        {/* <Route element={<Error />}></Route> */}
        <Route path="/login" element={<LOGIN />} />
      </Routes>
    </div>
  );
}

export default App;
