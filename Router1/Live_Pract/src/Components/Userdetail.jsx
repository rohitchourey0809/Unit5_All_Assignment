import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import { AuthContext } from "../Contexts/Authcontext";
// import axios from "axios";
export const Userdetail = () => {
  const { id } = useParams();
  const [users, setUser] = useState({});
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then(({ data }) => {
      setUser(data.data);
    });
  }, []);

  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      {/* <div>USER_ID:{id} </div> */}
      <img src={users.avatar} alt="" />
      <div>First_Name : {users.first_name} </div>
      <div>Last_Name : {users.last_name}</div>
    </div>
  );
};
