import { NavLink, useNavigate } from "react-router-dom";

const linkPage = [
  { route: "/", label: "Home" },
  { route: "/ChiSono", label: "Chi sono" },
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
