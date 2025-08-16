// src/pages/dispatch/Tabs/Tabs.tsx
import './Tabs.css';

const roles = [
  {
    icon: "/icon-taxi-driver.png",
    title: "Taxi Drivers & Fleet Owners",
    description: "Whether you drive solo or manage 50 cars, ZUP! gives you full control, more clients, and real-time payments. Simple, fair, and powerful.",
  },
  {
    icon: "/icon-passengers.png",
    title: "Urban Passengers",
    description: "Safe, clean, and reliable rides with transparent prices. Book in seconds, ride with confidence.",
  },
  {
    icon: "/icon-tourists.png",
    title: "Tourists & Newcomers",
    description: "Discover the city effortlessly with trusted drivers and curated routes via our 'New in Town' feature.",
  },
];

export default function Tabs() {
  return (
    <section className="who-is-for-section">
      <div className="section-container">
        <div className="who-is-for-title-wrapper">
          <p className="who-is-for-tagline">MADE FOR BOTH SIDES OF THE TAXI MARKET</p>
          <h2 className="who-is-for-heading">WHO IS ZUP! FOR?</h2>
        </div>
        <div className="who-is-for-grid">
          {roles.map((role, index) => (
            <div className="who-is-for-card" key={index}>
              <img src={role.icon} alt="" className="who-is-for-icon" />
              <h3 className="who-is-for-title">{role.title}</h3>
              <p className="who-is-for-description">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}