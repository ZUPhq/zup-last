import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-heading-center-2">
      <div className="container-4">
        <div className="hero-wrapper-2">
          <div className="hero-split-2">
            <h1 className="heading-copy">One app. All taxis. Across Romania.</h1>
            <p className="margin-bottom-24px-2">
              The first national taxi dispatch system built for 2025. Fast, transparent, and made for real taxi services — not ridesharing.
            </p>

            <div className="uui-button-row-5">
              <div className="uui-button-wrapper-4">
                <a className="link-block w-inline-block" href="/soon">
                  <img
                    alt="App Store"
                    width="132"
                    loading="lazy"
                    src="/store-badge-apple.png"
                  />
                </a>
              </div>
              <div className="uui-button-wrapper-4">
                <a className="link-block w-inline-block" href="/soon">
                  <img
                    alt="Google Play"
                    width="132"
                    loading="lazy"
                    src="/store-badge-google.png"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-phone-wrapper">
            <img
              src="/mockup-iphone.png"
              loading="lazy"
              alt="Phone App Preview"
              className="phone-mockup"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
