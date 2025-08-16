// src/pages/dispatch/Hero/Hero.tsx
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-split-left">
          <h1 className="hero-heading">One app. All taxis. Across Romania.</h1>
          <p className="hero-paragraph">
            The first national taxi dispatch system built for 2025. Fast, transparent, and made for real taxi services — not ridesharing.
          </p>
          <div className="hero-buttons">
            <a href="#download-app-store">
              <img src="/store-badge-apple.png" alt="Download on the App Store" />
            </a>
            <a href="#download-google-play">
              <img src="/store-badge-google.png" alt="Get it on Google Play" />
            </a>
          </div>
        </div>
        <div className="hero-split-right">
          <img
            src="/mockup-iphone.png"
            alt="ZUP App on iPhone"
            className="hero-phone-mockup"
          />
        </div>
      </div>
    </section>
  );
}