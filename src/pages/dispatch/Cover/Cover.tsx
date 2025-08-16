// src/pages/dispatch/Cover/Cover.tsx
import './Cover.css';

export default function Cover() {
  return (
    <section className="cover-section">
      <div className="section-container cover-container">
        <div className="cover-split-left">
          <img
            src="/cover-animated.gif"
            alt="Animated ZUP route"
            className="cover-image"
          />
        </div>
        <div className="cover-split-right">
          <h2 className="cover-heading">What is ZUP!?</h2>
          <p className="cover-paragraph">
            ZUP! is a modern dispatch platform that connects real taxis with real passengers — no hidden pricing, no outdated systems.
          </p>
          <ul>
            <li>Nationwide dispatch coverage</li>
            <li>Instant booking via app</li>
            <li>Transparent pricing linked to the taximeter</li>
            <li>Fleet management & driver analytics</li>
          </ul>
          <a href="/about" className="cover-link">Learn more →</a>
        </div>
      </div>
    </section>
  );
}