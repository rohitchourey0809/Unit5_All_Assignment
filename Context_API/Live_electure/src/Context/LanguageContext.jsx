import { useState, createContext } from "react";

export const LangContext = createContext();

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState("eng");

  const handlelang = () => {
    setLang(lang === "eng" ? "hi" : "eng");
  };

  return (
    <LangContext.Provider value={{ lang, handlelang }}>
      {children}
    </LangContext.Provider>
  );
};
