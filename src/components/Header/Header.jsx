import { Link } from "react-router-dom";
import "./Header.css";

function Header() {

  return (
    <header className="header">
        <Link to="/" className="home-title-link">
          <h1>DUBS NEWS</h1>
      </Link>
      <div>
        <h3>Your home for all Golden State Warriors news</h3>
      </div>
    </header>
  )
}

export default Header;
