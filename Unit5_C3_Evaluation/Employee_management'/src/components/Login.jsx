import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { AuthContext } from "../Contexts/Authcontext";
export const Login = () => {
  const [users, setUser] = useState({
    id: "",
    name: "",
    year: "",
    color: "",
    pantone_value: "",
  });
  //  use reqres to log user in.
  const { handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlechange = (e) => {
    //*const id = e.target.id;
    //*const value = e.target.value;
    //?destructuiring input data
    const { name, value } = e.target;

    setUser({
      ...users,
      [name]: value,
    });

    console.log(e.target.id);

    // setFormData({
    //     ...formdata,
    //     [e.target.id] : e.target.value
    // })
  };

  return (
    <form
      className="loginform"
      onSubmit={() => {
        //?! network request req POST req.in/api/login with email and pass
        // ?! change  stae of ISAUTH. to TRUE
        e.preventDefault();
        const payload = {
          id: users.id,
          name: users.name,
          year: users.year,
          color: users.color,
          pantone_value: users.pantone_value,
        };

        fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        handleAuth(true);
        navigate(-2, { replace: true });
      }}
    >
      <input
        onChange={handlechange}
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        onChange={handlechange}
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input
        onChange={handlechange}
        type="submit"
        value="SIGN IN"
        className="login_submit"
      />
    </form>
  );
};
