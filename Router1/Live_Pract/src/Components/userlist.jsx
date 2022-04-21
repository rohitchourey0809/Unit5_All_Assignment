import { useEffect, useState } from "react";
import axios from "react";
export const USERLIST = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then(({ data }) => {
      setUser(data.data);
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>
          {user.id}
          {user.id},{user.name}
        </p>
      ))}
    </div>
  );
};
