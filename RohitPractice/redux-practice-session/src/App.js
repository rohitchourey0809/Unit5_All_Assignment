// import logo from './logo.svg';
import "./App.css";
import { CounterComponent } from "./components/CounterComponent";
import { Signin } from "./components/Signincomponents";
// import { Signin } from './components/Signincomponents';

function App() {
  return (
    <div className="App">
      <div>
        {" "}
        <CounterComponent />
      </div>
      <div>
        <Signin />
      </div>
    </div>
  );
}

export default App;
