const Header = () => (
  <div className="header-container">
    <a className="header-container-title" href=".">
      Sai
    </a>
    <div className="header-container-navbar">
      <ul className="navbar">
        <li>
          <a className="navbar-element" href="#profile">
            About Me
          </a>
        </li>
        <li>
          <a className="navbar-element" href="#eq">
            Education
          </a>
        </li>
        <li>
          <a className="navbar-element" href="#experience">
            Experience
          </a>
        </li>
        <li>
          <a className="navbar-element" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="navbar-element" href="#contactme">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
