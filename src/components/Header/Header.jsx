import { NavLink, Link } from "react-router-dom";
import "./Header.css";

function Header() {


  return (
    <header className="header">
      <div className="left-side-header">
      <h1>DUBS NEWS</h1>
      <h3>Your home for all Golden State Warriors news</h3>
      </div>
      {/* <Link to="/" className="home-title-link">
    <h1 className="home-title">DubsNews</h1>
  </Link> */}

      <div className="right-side-header"></div>
    </header>
  )
}

export default Header;