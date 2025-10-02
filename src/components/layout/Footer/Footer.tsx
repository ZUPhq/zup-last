import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p className="footer-copyright">
          COPYRIGHT © {new Date().getFullYear()} ZUP! - ALL RIGHTS RESERVED.
        </p>
        <div className="footer-links">
          <Link to="/dispatch/terms">Terms</Link>
          <Link to="/dispatch/privacy">Privacy</Link>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}