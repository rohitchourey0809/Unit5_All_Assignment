import React, { useState } from "react";

const ThemeContext = React.createContext(); // line A - creating the context

const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState("light"); // line B - setting the initial theme

  const switchTheme = (theme) => setTheme(theme); // line C - changing the theme

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeStore, ThemeContext };
