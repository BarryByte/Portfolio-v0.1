import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <span> Abhay Raj</span>
      <ul className="navbar">
        <li className="nav-item home">
          <a href="">Home</a>
        </li>
        <li className="nav-item about">
          <a className="about-text" href="">About</a>
        </li>
        <li className="nav-item project">
          <a href="">Project</a>
        </li>
        <li className="nav-item resume">
          <a href="">Resume</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
