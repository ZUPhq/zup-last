import "./Why.css";

export default function Why() {
  return (
    <section className="f-section-regular">
      <div className="f-container-large">
        <div className="f-margin-bottom-48">
          <div className="f-title-wrapper-center">
            <h3 className="f-h3-heading">Why ZUP! Dispatch makes a difference?</h3>
            <p className="margin-bottom-24px-2">Swipe left to see more</p>
          </div>
        </div>

        <div className="f-testimonial-slider-regular">
          <div className="f-testimonial-mask">
            <div className="f-testimonial-slider-grid-large">
              <div className="f-testimonial-card">
                <div className="f-margin-bottom-16">
                  <img src="/testimonial-1.png" alt="Testimonial 1" className="testimonial-image" />
                </div>
                <p>Modern, reliable dispatching. We switched 30+ cars to ZUP! in under a week.</p>
                <div className="f-testimonial-name-text">Florin I., Taxi Manager</div>
              </div>

              <div className="f-testimonial-card">
                <div className="f-margin-bottom-16">
                  <img src="/testimonial-2.png" alt="Testimonial 2" className="testimonial-image" />
                </div>
                <p>The app connects clients instantly. Much easier than phone calls.</p>
                <div className="f-testimonial-name-text">Maria G., Taxi Driver</div>
              </div>

              <div className="f-testimonial-card">
                <div className="f-margin-bottom-16">
                  <img src="/testimonial-3.png" alt="Testimonial 3" className="testimonial-image" />
                </div>
                <p>We love that it’s made for taxis only. No competition with rideshare apps.</p>
                <div className="f-testimonial-name-text">Dan P., Dispatch Operator</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
