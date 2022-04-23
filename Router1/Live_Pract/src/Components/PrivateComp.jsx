import { useContext } from "react";
import { Navigate } from "react-router-dom";
// import { Navigator } from "react-router-dom";
import { AuthContext } from "../Contexts/Authcontext";

// import {AuthContext} from '../../../../../
export const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
};
