import { NavLink, Link } from "react-router-dom";
import "./Header.css";

function Header() {


  return (
    <header className="header">
      <div className="left-side-header">
        <Link to="/" className= "home-title-link">
      <h1>DUBS NEWS</h1>
      </Link>
      <h3>Your home for all Golden State Warriors news</h3>
      </div>
      <div className="right-side-header"></div>
    </header>
  )
}

export default Header;