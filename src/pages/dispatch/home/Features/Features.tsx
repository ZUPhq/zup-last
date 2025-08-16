// src/pages/dispatch/Features/Features.tsx
import './Features.css';

const features = [
  {
    icon: "/icon-medal.png", // Assuming icon paths
    title: "Professional drivers only",
    description: "All ZUP! drivers meet strict standards: certified, experienced, and background-checked for your safety and comfort.",
  },
  {
    icon: "/icon-feedback.png",
    title: "Feedback and driver ranking system",
    description: "Every ride matters. Rate your driver and help us keep the best at the top for a better, smarter taxi experience.",
  },
  {
    icon: "/icon-kinder.png",
    title: "Kinder Drive & Health Care rides",
    description: "Special services for children and seniors, with hand-picked drivers and extra safety layers because care comes first.",
  },
  {
    icon: "/icon-modern.png",
    title: "Modern design, no legacy dispatcher calls",
    description: "No more clunky dispatcher calls. ZUP! offers a clean, intuitive app experience. Just tap, ride, and go.",
  },
];

export default function Features() {
  return (
    <section className="features-section">
      <div className="section-container">
        <div className="features-title-wrapper">
          <h2 className="features-heading">WHY CHOOSE ZUP! Dispatch?</h2>
          <p className="features-subheading">
            ZUP! is Romania’s first modern taxi dispatch platform — built for speed, safety, and full transparency. We connect real taxis with real people, no ridesharing noise.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon-wrapper">
                <img src={feature.icon} alt={feature.title} className="feature-icon" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}