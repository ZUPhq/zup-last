import { useState } from "react";
import "./Tabs.css";

const tabs = [
  {
    id: "drivers",
    title: "Taxi Drivers & Fleet Owners",
    icon: "/tab-icon-drivers.svg",
    description:
      "Get more rides, instant payments, and total control over your business whether you're an independent driver or managing a fleet.",
  },
  {
    id: "passengers",
    title: "Passengers & Clients",
    icon: "/tab-icon-passengers.svg",
    description:
      "Book rides instantly, track your driver, and pay through the app. Transparent pricing and real taxis only.",
  },
  {
    id: "cities",
    title: "City Administrators",
    icon: "/tab-icon-cities.svg",
    description:
      "Gain insights into transportation demand and optimize taxi regulation. Real-time fleet and route data.",
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("drivers");

  return (
    <section className="cf-feature-tabs-section">
      <div className="cf-feature-tabs-wrapper">
        <div className="cf-tabs">
          <div className="cf-tabs-menu-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`cf-tab-link ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="cf-tab-heading-contain">
                  <img src={tab.icon} alt={tab.title} className="cf-tab-icon" />
                  <h3 className="cf-tab-heading">{tab.title}</h3>
                </div>
              </button>
            ))}
          </div>

          <div className="cf-tab-content">
            {tabs.map((tab) =>
              activeTab === tab.id ? (
                <div key={tab.id} className="cf-tab-panel">
                  <p className="cf-tab-description">{tab.description}</p>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
