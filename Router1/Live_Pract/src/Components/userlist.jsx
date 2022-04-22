import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export const USERLIST = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then(({ data }) => {
      setUser(data.data);
    });
  }, []);
  console.log(users);

  return (
    <div>
      {users.map((userdata) => (
        <p key={userdata.id}>
          <Link to={`/users/${userdata.id}>`}>
            {" "}
            {userdata.id}::{userdata.first_name}
          </Link>
        </p>
      ))}
    </div>
  );
};
