import './Journey.css';

const milestones = [
  {
    year: "2024",
    title: "The Idea",
    description: "We spotted a broken system and came up with a bold solution: a national taxi dispatch app."
  },
  {
    year: "2024",
    title: "Validated & Awarded",
    description: "Finalists at 3 startup competitions and winners of 2 national prizes, ZUP! gained traction fast."
  },
  {
    year: "2025",
    title: "Building The Product",
    description: "Full in-house development, 100+ drivers pre-registered, and 2 fleets ready in Piatra Neamț."
  },
  {
    year: "2026",
    title: "Launching ZUP!",
    description: "Going live in Piatra Neamț, with national expansion ahead. Romania's taxis are finally unified."
  }
];

export default function Journey() {
  return (
    <section className="journey-section">
      <div className="section-container">
        <div className="journey-title-wrapper">
          <h2 className="journey-heading">Our Journey So Far</h2>
          <p className="journey-subheading">Every ride started with one bold idea. Here's how it evolved.</p>
        </div>
        <div className="timeline">
          {milestones.map((item, index) => (
            <div className="timeline-item" key={index}>
              <p className="timeline-year">{item.year}</p>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}