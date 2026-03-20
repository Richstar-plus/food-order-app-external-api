import chefContact from "../images/chef-contact.png";
import callImage from "../images/call.avif";
import emailImage from "../images/email.avif";
import locationImage from "../images/location.png";

export function ContactPage() {
  return (
    <>
      <main>
        <section className="main-display">
          <div className="about-title">
            <h1>Contact Us</h1>
          </div>
          <div className="about-info">
            <h3>Get in Touch.</h3>
            <p>
              We are here to help you with any questions or concerns you may
              have. Please feel free to reach out to us through the following
              contact information:
            </p>
          </div>
          <div className="about-image">
            <img src={chefContact} alt="Delicious food" />
          </div>
          <div className="about-hero">
            <div className="hero-content">
              <div className="hero-image">
                <img src={callImage} alt="Chef Face" />
              </div>
              <div className="hero-title">
                <h3>Call Us</h3>
              </div>
              <div className="hero-text">
                <p>(+123) 456-7890-009</p>
              </div>
            </div>

            <div className="hero-content">
              <div className="hero-image">
                <img src={emailImage} alt="Delivery Bike" />
              </div>
              <div className="hero-title">
                <h3>Email Us</h3>
              </div>
              <div className="hero-text">
                <p>info@richstarfood.com</p>
              </div>
            </div>

            <div className="hero-content">
              <div className="hero-image">
                <img src={locationImage} alt="Customer Satisfaction" />
              </div>
              <div className="hero-title">
                <h3>Visit Our Location</h3>
              </div>
              <div className="hero-text">
                <p>123 Main Street, Port Harcourt, Rivers, Nigeria</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="subject">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
