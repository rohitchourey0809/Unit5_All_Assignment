import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { AuthContext } from "../Contexts/Authcontext";

export const LOGIN = () => {
  const { handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      <input type="text" placeholder="Enter Email" />
      <input type="text" placeholder="Enter Password" />
      <button
        onClick={() => {
          //?! network request req POST req.in/api/login with email and pass
          // ?! change  stae of ISAUTH. to TRUE

          handleAuth(true);
          navigate(-2, { replace: true });
        }}
      >
        Submit
      </button>
    </div>
  );
};
