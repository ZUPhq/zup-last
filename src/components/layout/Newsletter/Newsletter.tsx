import "./Newsletter.css";

export default function Newsletter() {
  return (
    <section className="uui-page-padding-2 newsletter">
      <div className="uui-container-large-2">
        <article className="uui-padding-vertical-xlarge">
          <h1 className="heading-2">Join our newsletter</h1>
          <div className="w-layout-grid uui-footer08_top-wrapper">
            <div className="uui-footer08_right-wrapper">
              <div className="uui-footer08_heading">
                Stay up to date so you can receive bonuses!
              </div>

              <form className="uui-footer08_form">
                <input
                  className="uui-form_input w-input"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="uui-button-2 is-button-small w-button"
                />
              </form>

              <div className="success-message w-form-done">
                <div>Thank you for subscribing! You’ll receive bonuses when we launch 🚀</div>
              </div>
            </div>
          </div>
        </article>

        <div className="newsletter-copyright">
          COPYRIGHT © 2024 ZUP! - ALL RIGHTS RESERVED.
        </div>
      </div>
    </section>
  );
}
