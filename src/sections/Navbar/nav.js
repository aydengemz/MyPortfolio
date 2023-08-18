import "./nav.css";

const NavBar = () => {
  return (
    <header className="header center">
      <nav className="center">
        <h3>
          <a className="logo">
            AX
          </a>
        </h3>
        <ul className="navbarCont">
        <li className="navitem">
            <a href="#about" className="link">
              About
            </a>
            <div className="bar"></div>
          </li>
          <li className="navitem">
            <a href="#projects" className="link">
              Projects
            </a>
            <div className="bar"></div>
          </li>

          <li className="navitem">
            <a href="#experiences" className="link">
              Experiences
            </a>
            <div className="bar"></div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
