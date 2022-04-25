import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import { AuthContext } from "../Contexts/Authcontext";

export const EmployeeDetails = () => {
  const { id } = useParams();
  const [users, setUser] = useState({});
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`http://localhost:8080/employee/${id}`).then(({ data }) => {
      setUser(data);
    });
  }, []);

  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="user_details">
      <img src={users.image} alt="" className="user_image" />
      <h4 className="user_name">{users.employee_name}</h4>
      <span className="user_salary">${users.salary}</span>
      <span className="tasks">
        <li className="task">{users.task}</li>
      </span>
      Status: <b className="status">{users.status}</b>
      Title: <b className="title"></b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button
        onClick={(users) => {
          users.employee.status === "working" ? true : "";
        }}
        className="fire"
      >
        Fire Employee
      </button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button
        onClick={(users) => {
          users.employee.status === "terminated" ? true : "";
        }}
        className="promote"
      >
        promote
      </button>
    </div>
  );
};
