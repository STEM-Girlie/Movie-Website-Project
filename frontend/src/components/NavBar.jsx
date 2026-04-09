import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  return (
    <nav className="navbar glass rounded-full flex items-center gap-0.5">
      <div className="navbar-brand font-family-sans-serif font-bold spacing-wide text-2xl glow-text ">
        <Link to="/">
          {" "}
          📺{" "}
          <span className="quattrocento-italic text-sm font-light italic !text-white/80">
            the
          </span>
          Watchlist
        </Link>
      </div>
      <div className="navbar-links flex gap-1">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/Favourites" className="nav-link gap-0.5  ">
          Favourites
        </Link>
      </div>
    </nav>
  );
}
export default NavBar;
