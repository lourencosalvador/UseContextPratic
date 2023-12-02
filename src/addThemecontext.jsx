import { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";

export const AddThemeComponent = () => {
  const { addNewTheme } = useContext(ThemeContext);
  const [newTheme, setNewTheme] = useState({ date: "", status: "" });

  const handleAddTheme = () => {
    addNewTheme(newTheme);
    setNewTheme({ date: "", status: "" });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite a data"
        value={newTheme.date}
        onChange={(e) => setNewTheme({ ...newTheme, date: e.target.value })}
      />
      <input
        type="text"
        placeholder="Digite o status"
        value={newTheme.status}
        onChange={(e) => setNewTheme({ ...newTheme, status: e.target.value })}
      />
      <button onClick={handleAddTheme}>Adicionar Tema</button>
    </div>
  );
};
