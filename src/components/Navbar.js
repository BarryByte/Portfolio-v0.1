import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <span> Abhay Raj</span>
      <ul className="navbar">
        <li className="nav-item ">
          <a href="">Home</a>
        </li>
        <li className="nav-item ">
          <a href="">About</a>
        </li>
        <li className="nav-item ">
          <a href="">Project</a>
        </li>
        <li className="nav-item ">
          <a href="">Resume</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
