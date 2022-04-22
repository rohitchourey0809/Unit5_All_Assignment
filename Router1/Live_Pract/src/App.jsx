// import { useState } from 'react'
// import logo from './logo.svg'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ABOUT } from "./Components/About";
import { HOME } from "./Components/Home";
import { NAVBAR } from "./Components/Navbar";
import { USERLIST } from "./Components/userlist";
import { Userdetail } from "./Components/Userdetail";
import{PrivateRoute} from "./Components/PriavateComp"
import { AuthContext } from "./Contest/Authcontest";
// import { Error } from "./Components/Error";

export const PrivateRoute =() =>{
  const {isAuth} = useContext(AuthContext)

  if(!isAuth){
    
  }
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NAVBAR />

      <Routes>
        <Route path="/" element={<HOME />}></Route>

        <Route path="/about" element={<ABOUT />}></Route>
        <Route path="/users" element={<USERLIST />}></Route>
        <Route
          path="/users/:id"
          element={
            <PrivateRoute>              <Userdetail />
            </PrivateRoute>
          }
        ></Route>
        {/* <Route element={<Error />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
