import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState([
    { date: "20/04/2023", status: "canceled" },
    { date: "22/04/2023", status: "approved" },
  ]);

  const addNewTheme = (newThemeObject) => {
    setTheme([...theme, newThemeObject]);
  };

  return (
    <ThemeContext.Provider value={{ theme, addNewTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
