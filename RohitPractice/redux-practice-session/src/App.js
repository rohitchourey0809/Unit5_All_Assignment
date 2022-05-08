// import logo from './logo.svg';
import "./App.css";
import { Usereducer } from "./USEREDUCER/Usereducer";
// import {UseeffectApi} from "./useEffectApi/UseeffectApi";
import { Useref } from "./UseReff/Useref";
// import { CounterComponent } from "./components/CounterComponent";
// import { Signin } from "./components/Signincomponents";

function App() {
  return (
    <div className="App">
      {/* <div> <CounterComponent /></div>
      <div><Signin /></div> */}
      {/* <div className="apidiv">
       <UseeffectApi/>
      </div> */}
      <div className="useref">
        <Useref />
      </div>
     <div className="userducerdiv">
       Usereducer<Usereducer/>
     </div>
    </div>
  );
}

export default App;
