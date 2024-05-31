import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <span> Abhay Raj</span>
      <ul className="navbar">
        <li className="nav-item home">
          <Link to="/"> Home </Link>
        </li>
        <li className="nav-item about">
          <Link className="about-text" to="/about">About</Link>
        </li>
        <li className="nav-item project">
          <Link to='/project'>Project</Link>
        </li>
        <li className="nav-item resume">
          <Link to='/resume'>Resume</Link>
        </li>
        <li className="nav-item contact">
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
