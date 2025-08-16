import "./Logos.css";

export default function Logos() {
  return (
    <section className="cf-logo-section-2">
      <div className="cf-logo-2---wrapper">
        <h3 className="cf-logo-2-heading">
          We’re proud to be supported by trusted public institutions, education platforms, NGOs, and local businesses.
        </h3>

        <div className="cf-logos-2--wrapper">
          <div className="cf-logos-2---image-contain">
            <img
              src="/logos-banner.png"
              alt="Partners and supporters"
              className="cf-logo-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
