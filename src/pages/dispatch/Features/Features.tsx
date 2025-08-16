import "./Features.css";

export default function Features() {
  return (
    <section className="f-section-large">
      <div className="f-container-regular">
        <div className="f-margin-bottom-64">
          <div className="f-title-wrapper-center-2">
            <div className="f-margin-bottom-49">
              <h3 className="f-h3-heading-2">WHY CHOOSE ZUP! Dispatch?</h3>
            </div>
            <p className="f-paragraph-large">
              ZUP! is Romania’s first modern taxi dispatch platform — built for speed, safety, and full transparency. We connect real taxis with real people, no ridesharing noise.
            </p>
          </div>
        </div>

        <div className="f-feature-card-row">
          {features.map((feature, index) => (
            <div className="div-block-4" key={index}>
              <div className="f-feature-icon-wrapper">
                <img src={feature.icon} alt={feature.title} className="image-20" />
              </div>
              <h4 className="f-h4-heading">{feature.title}</h4>
              <p className="f-paragraph-small">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: "/icon-dispatch.png",
    title: "Modern Dispatch System",
    description: "Real-time connection between drivers and clients, fully digital and app-based.",
  },
  {
    icon: "/icon-map.png",
    title: "Nationwide Coverage",
    description: "From Iași to Timișoara, we aim to connect all major cities in Romania.",
  },
  {
    icon: "/icon-pricing.png",
    title: "Transparent Pricing",
    description: "No hidden fees. Prices are linked directly to taximeter rates.",
  },
  {
    icon: "/icon-fleet.png",
    title: "Fleet & Driver Tools",
    description: "Analytics, management, and monitoring tools to grow your fleet smart.",
  },
];
