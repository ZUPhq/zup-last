// src/components/layout/Navbar/Navbar.tsx
import { Link } from 'react-router-dom';
import './Navbar.css';
import zupLogo from '../../../assets/logos/logo_zup_galben.png';

export default function Navbar() {
  return (
    <header className="navbar-container">
      <div className="navbar-content">
        <nav className="nav-left">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/dispatch/about" className="nav-link">About Us</Link>
        </nav>
        <Link to="/" className="navbar-brand">
          <img src={zupLogo} alt="ZUP! Logo" className="navbar-logo" />
        </Link>
        <nav className="nav-right">
          <a href="#differences" className="nav-link">Differences</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}