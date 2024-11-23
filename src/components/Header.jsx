import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header custom-header shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          {/* Logo */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <span className="logo-text">
              K<span className="highlight">POP</span>
            </span>
          </Link>

          {/* Toggler for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu Items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex align-items-center">
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link text-dark fw-bold">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/information" className="nav-link text-dark fw-bold">
                  Groups
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/idol" className="nav-link text-dark fw-bold">
                  Idols
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/match" className="nav-link text-dark fw-bold">
                  Soulmate
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/about" className="nav-link text-dark fw-bold">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
