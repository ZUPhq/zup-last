import "./Cover.css";

export default function Cover() {
  return (
    <div className="walsh-container-2">
      <div className="walsh-container-4">
        <div className="walsh-rounded-box-banner">
          <div className="walsh-inner-column-left">
            <div className="walsh-quote-image-wrapper">
              <img
                src="/cover-animated.gif"
                alt="Glowing animated path"
                className="walsh-cover-image-2"
                width="500"
                loading="lazy"
              />
            </div>
          </div>

          <div className="walsh-inner-column-center">
            <div className="walsh-flex-tag">
              <div className="walsh-title-tag">What is ZUP!?</div>
            </div>

            <p className="walsh-main-paragraph-2">
              ZUP! is a modern dispatch platform that connects real taxis with real passengers — no hidden pricing, no outdated systems.<br /><br />
              • Nationwide dispatch coverage<br />
              • Instant booking via app<br />
              • Transparent pricing linked to the taximeter<br />
              • Fleet management & driver analytics
            </p>

            <a className="walsh-link-wrapper-2 w-inline-block" href="/about">
              <div className="walsh-text-button">Learn more →</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
