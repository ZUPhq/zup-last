import './AboutHero.css';

export default function AboutHero() {
  return (
    <section className="about-hero-section">
      <div className="section-container about-hero-container">
        <div className="about-hero-left">
          <h1 className="about-hero-heading">A smarter way to move Romania.</h1>
          <p className="about-hero-subheading">
            We're building the first national taxi dispatch platform designed, coded, and tested in-house by real people, not corporations.
          </p>
          <button className="about-hero-button">See our story</button>
        </div>
        <div className="about-hero-right">
          <img src="/about-hero-team.jpg" alt="The ZUP! Team" className="about-hero-image" />
        </div>
      </div>
    </section>
  );
}