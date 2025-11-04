import { NavLink, useNavigate } from "react-router-dom";


const linkPage = [
  { route: "/", label: "Home" },
  { route: "/WebDeveloper", label: "Web Developer" },
  { route: "/Blender", label: "Blender" },
  { route: "/Photography", label: "Photography" },
  { route: "/Videodrone", label: "Videodrone" },
  { route: "/Stampa", label: "Stampe 3D" },
];

const NavBar = () => {
  return (
    <>
      <div className="containerHeader">
        <nav>
          <ul>
            <img
              src="/public/chris_watermark_bianco.png"
              alt="Logo Christofer Tamburini"
            />
            {linkPage.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.route}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
