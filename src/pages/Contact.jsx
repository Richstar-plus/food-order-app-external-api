import chefContact from "../images/chef-contact.png";
import callImage from "../images/call.avif";
import emailImage from "../images/email.avif";
import locationImage from "../images/location.png";
import "./Contact.css";
import { HeroCard } from "../components/HeroCard";

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
            <HeroCard
              image={callImage}
              title="Call Us"
              text="(+123) 9039-014-066"
              textClass="hero-text"
            />

            <HeroCard
              image={emailImage}
              title="Email Us"
              text="richardsunday0812@gmail.com"
              textClass="contact-email"
            />

            <HeroCard
              image={locationImage}
              title="Visit Our Location"
              text="123 Main Street, Port Harcourt, Rivers, Nigeria"
              textClass="hero-text"
            />
          </div>

          <div className="contact-form">
            <h4>Send Us a Message</h4>
            <form>
              <div className="form-group-container">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="subject">
                <input
                  type="text"
                  placeholder="Subject"
                  id="subject"
                  name="subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your message here..."
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
