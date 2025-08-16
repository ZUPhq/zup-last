import { Link } from 'react-router-dom';
import './Newsletter.css';

export default function Newsletter() {
  return (
    <footer className="footer-section">
      <div className="section-container">
        <div className="newsletter-wrapper">
          <h2 className="newsletter-heading">Join our newsletter</h2>
          <p className="newsletter-subheading">Stay up to date so you can recieve bonuses!</p>
          <form
            className="newsletter-form"
            action="https://formsubmit.co/contact@zup.digital"
            method="POST"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          <div className="footer-socials">
            <a href="#"><img src="/icon-facebook.svg" alt="Facebook" /> Facebook</a>
            <a href="#"><img src="/icon-linkedin.svg" alt="LinkedIn" /> LinkedIn</a>
            <a href="#"><img src="/icon-instagram.svg" alt="Instagram" /> Instagram</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">COPYRIGHT © 2024 ZUP! - ALL RIGHTS RESERVED.</p>
          <div className="footer-links">
            <Link to="/dispatch/terms">Terms</Link>
            <Link to="/dispatch/privacy">Privacy</Link>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}