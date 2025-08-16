import { useState } from "react";
import "./Comparison.css";

const tabs = [
  {
    id: "conaf",
    image: "/award-conaf.svg",
    label: "2nd Place @ CONAF 2024",
  },
  {
    id: "rubikhub",
    image: "/award-rubikhub.svg",
    label: "RubikEDU Top Startup",
  },
  {
    id: "startarium",
    image: "/award-startarium.svg",
    label: "Finalist Startarium 2024",
  },
];

export default function Comparison() {
  const [activeTab, setActiveTab] = useState("conaf");

  return (
    <section className="cf-different-section">
      <div className="cf-wrapper-1160 different-flex">
        <div className="cf-different-upper-container">
          <h2 className="cf-h2-heading-56px">Trusted. Awarded. Ready for scale.</h2>
        </div>

        <div className="cf-different-bottom-container">
          <div className="cf-different-menu">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`cf-different-tab-link ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <img src={tab.image} alt={tab.label} className="cf-different-tab-image" />
                <div>{tab.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
