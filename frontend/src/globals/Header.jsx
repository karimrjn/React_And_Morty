import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <nav className="navbar">
          <NavLink to={"/"}>
            <div className="rmLogo">
              <img src="images/rm logo.png" alt="rm logo" />
            </div>
          </NavLink>
          <NavLink to={"/contact"}>
            <div className="contactLogo">
              <img src="images/contact icon rm.png" alt="contact icon" />
            </div>
          </NavLink>
        </nav>
      </header>
      <div className="header-bg">
        <div className="fbLogo">
          <img src="images/fb logo.png" alt="fb logo" />
        </div>
      </div>
    </>
  );
}
