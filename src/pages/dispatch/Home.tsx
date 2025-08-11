import '../../styles/dispatch.css'

export default function DispatchHome() {
  return (
    <div className="dispatch-page">
      <h1>Romania’s first national taxi dispatch app</h1>
      <p>Real licensed taxis. Transparent pricing. Instant booking.</p>
      <section>
        <h2>Why Choose ZUP! Dispatch</h2>
        <ul className="dispatch-list">
          <li>Nationwide coverage of licensed taxis</li>
          <li>Instant booking via mobile app</li>
          <li>Fair fares linked to official taximeters (no surge pricing)</li>
          <li>Fleet management &amp; analytics for operators</li>
        </ul>
      </section>
      <section>
        <h2>Features / Smart Ride Options</h2>
        <ul className="dispatch-list">
          <li><strong>ZUP!</strong> – Standard ride from nearest taxi station</li>
          <li><strong>ZIP!</strong> – Premium comfort ride in cars made after 2017</li>
          <li><strong>ZAP!</strong> – Fast pickup from your current location</li>
          <li><strong>ZUP! NOW</strong> – Instant booking by tapping a vehicle on the map</li>
        </ul>
      </section>
      <section>
        <h2>Real‑World Validation</h2>
        <ul className="dispatch-list">
          <li>2nd place at CONAF National Business Competition</li>
          <li>3rd place at Arena Urşilor Pre‑Accelerator</li>
        </ul>
      </section>
      <section>
        <h2>Driver Standards</h2>
        <ul className="dispatch-list">
          <li>Minimum 12 grades, bac diploma, ≥3 years driving experience</li>
          <li>Clean record, background checks, high hygiene standards</li>
        </ul>
      </section>
      <section>
        <h2>Supported Cities</h2>
        <p>
          Live in <strong>Piatra Neamț</strong>, expanding soon to <strong>Iași, Cluj, Brașov, Bucharest</strong>
        </p>
      </section>
      <section>
        <h2>FAQ (Summary)</h2>
        <ul className="dispatch-list">
          <li>What is ZUP?</li>
          <li>How is ZUP different from Uber/Bolt?</li>
          <li>Payment methods (Card, Apple Pay, Google Pay, Cash)</li>
          <li>How to join as a driver or fleet owner</li>
          <li>How ZIP!, ZAP!, ZUP! NOW work</li>
          <li>Supported cities</li>
        </ul>
      </section>
      <section id="newsletter">
        <h2>Stay updated and receive bonuses when we launch!</h2>
        <form className="news-form">
          <input type="email" placeholder="Your email" required />
          <button type="submit">Sign up</button>
        </form>
      </section>
      <footer style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem' }}>
        <a href="/dispatch/terms">Terms</a> | <a href="/dispatch/privacy">Privacy</a> |{' '}
        <a href="/dispatch/privacy#cookies">Cookies</a>
        <div style={{ marginTop: '0.5rem' }}>© 2025 ZUP!</div>
      </footer>
    </div>
  )
}
