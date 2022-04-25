import { useContext } from "react";
import { Navigate } from "react-router-dom";
// import { Navigator } from "react-router-dom";
import { AuthContext } from "../Contexts/Authcontext.jsx";

// import {AuthContext} from '../../../../../
export const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
};
