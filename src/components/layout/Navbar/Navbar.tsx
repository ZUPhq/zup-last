import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-logo-center">
      <div className="navbar-logo-center">
        <div
          className="navbar-logo-center-container shadow-three w-nav"
          role="banner"
        >
          <div className="container-9">
            <div className="navbar-wrapper-three">
              <Link to="/" className="navbar-brand-three w-nav-brand">
                <img
                  src="/logo-zup.png"
                  alt="ZUP Logo"
                  loading="lazy"
                  className="image-3"
                />
              </Link>

              <nav role="navigation" className="nav-menu-wrapper-three w-nav-menu">
                <ul className="nav-menu-two">
                  <li className="list-item">
                    <Link to="/dispatch/about" className="nav-link w-nav-link">
                      About
                    </Link>
                  </li>
                  <li className="list-item">
                    <Link to="/dispatch/terms" className="nav-link w-nav-link">
                      Terms
                    </Link>
                  </li>
                  <li className="list-item">
                    <Link to="/dispatch/privacy" className="nav-link w-nav-link">
                      Privacy
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="menu-button w-nav-button">
                <div className="w-icon-nav-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
