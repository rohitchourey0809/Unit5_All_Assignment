import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export const EmployeeList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/employee").then(({ data }) => {
      setUser(data);
    });
  }, []);
  console.log(users);
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {users.map((e) => (
        <div className="employee_card">
          <img src={e.image} className="employee_image" />
          <span className="employee_name">
            <Link to={`/empoyee/${e.id}`}>{e.id}:{e.employee_name}</Link>
          </span>
          <span className="employee_title">{e.title}</span>
        </div>
      ))}
    </div>
  );
};
