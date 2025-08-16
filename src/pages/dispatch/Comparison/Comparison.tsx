// src/pages/dispatch/Comparison/Comparison.tsx
import './Comparison.css';

const awards = [
  { id: "01", text: "2nd Place @ CONAF 2024" },
  { id: "02", text: "3rd Place Arena Urșilor (Pro Afaceri România)" },
  { id: "03", text: "Finalist @ Early Innovators" },
  { id: "04", text: "Finalist Citi Cluster by Glovo" },
  { id: "05", text: "Validated by Vlad Gliga" },
];

export default function Comparison() {
  return (
    <section className="awards-section">
      <div className="section-container awards-container">
        <div className="awards-split-left">
          <h2 className="awards-heading">Trusted. Awarded. Ready for scale.</h2>
          <ul className="awards-list">
            {awards.map(award => (
              <li key={award.id}>
                <span>{award.id}</span> {award.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="awards-split-right">
          <h3 className="endorsement-heading">Endorsed by one of Romania's top startup leaders</h3>
          <p className="endorsement-paragraph">
            ZUP! received direct validation from Vlad Gliga, a key figure in the Romanian innovation ecosystem, backing our mission and execution.
          </p>
          <img src="/team-photo.jpg" alt="ZUP! Team" className="endorsement-image" />
        </div>
      </div>
    </section>
  );
}