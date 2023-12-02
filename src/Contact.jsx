import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export function Contact() {
    const { theme } = useContext(ThemeContext);

    return (
      <div>
        <h2>Lista de Temas</h2>
        <ul>
          {theme.map((t, index) => (
            <li key={index}>
              {t.date} - {t.status}
            </li>
          ))}
        </ul>
      </div>
    );
}
