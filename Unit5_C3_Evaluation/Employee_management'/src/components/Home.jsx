import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../Contexts/CartContextApi";
export const Home = () => {
  const { cart } = useContext(CartContext);
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created
  const [users, setUser] = useState([]);

  // const [count, setCounter] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/employee").then(({ data }) => {
      setUser(data);
    });
  }, []);

  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Status</span>
        <div>
          Total Employees:{users.length}
          <span className="totalemp"></span>
        </div>
        <div>
          Total Terminated:
          {users.status === "terminated" ? users.length - 1 : users.length}
          <span className="total_terminated"></span>
        </div>
        <div>
          Total Promoted:
          {users.status === "working" ? users.length - 1 : users.length}{" "}
          <span className="total_promoted"></span>
        </div>
        <div>
          Total New:{users.length} <span className="total_new"></span>
        </div>
      </div>
    </>
  );
};
