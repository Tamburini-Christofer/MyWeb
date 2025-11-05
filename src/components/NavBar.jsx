/**
 * NavBar.jsx
 * Barra di navigazione principale dell'applicazione
 */

import { NavLink } from "react-router-dom";

// Definizione delle pagine di navigazione con colori dalla Home
const linkPage = [
  { route: "/", label: "Home", color: "#ffffff" },
  { route: "/WebDeveloper", label: "Web Developer", color: "#6654ccff" },
  { route: "/Blender", label: "Blender", color: "#EE9133" },
  { route: "/Photography", label: "Photography", color: "#36b150ff" },
  { route: "/Videodrone", label: "Videodrone", color: "#22afb6ff" },
  { route: "/Stampa", label: "Stampe 3D", color: "#bb13bbff" },
  { route: "/Contact", label: "Contact", color: "#22afb6ff" },
];

const NavBar = () => {
  return (
    <div className="containerHeader">
      <nav>
        <ul>
          {linkPage.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.route}
                className={({ isActive }) => (isActive ? "active" : "")}
                style={({ isActive }) => ({
                  color: isActive ? link.color : undefined,
                  borderBottom: isActive ? `2px solid ${link.color}` : undefined,
                  textShadow: isActive ? `0 0 8px ${link.color}40` : undefined,
                })}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
