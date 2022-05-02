import { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export const Login = () => {
  const [user, setuser] = useState();
  const [username, setUserName] = useState("");
  const [userpass, setUserPass] = useState("");
  var navigate = useNavigate();

  useEffect(() => {
    uselogin();
  }, []);

  function uselogin() {
    axios.get(`http://localhost:8080/users`).then((e) => {
      console.log(e.data);
      setuser(e.data);
    });
  }

  const logindatas = () => {
    console.log("logindatas");
    user.forEach((ele) => {
      if (ele.username === username && ele.pass === userpass) {
        if (element.role === "admin") {
          navigate("/orders");
          localStorage.setItem("username", ele.username);
        } else {
          navigate("/neworders");
          localStorage.setItem("username", ele.username);
        }
      }
    });
  };

  return (
    <div>
      <input
        onChange={(event) => {
          setUserName(event.target.value);
        }}
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
        onChange={(event) => {
          setUserPass(event.target.value);
        }}
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button onClick={logindatas} className="submit">
        Login
      </button>
    </div>
  );
};
