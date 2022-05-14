// import logo from './logo.svg';
import './App.css';
import { Userdetail } from './components/Redux/USERDETAILS/Userdetail';

function App() {
  return (
    <div className="App">
      <main className="container">
        <div className="div1">
          <h2>User_Details</h2>
          <div><Userdetail/></div>
        </div>
        <div className="div2"></div>
        <div className="div3"></div>
        <div className="div4"></div>
      </main>
    </div>
  );
}

export default App;
