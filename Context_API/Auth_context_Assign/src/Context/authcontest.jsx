//?Step1 init createContext 
import { createContext } from "react";

//take a Empty bag

export const AuthContext = createContext();

// //?Step2 rendering part

export const AuthContextProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
