import "./About.css";
import chefImage from "../images/about-chef.webp";
import chefFace from "../images/chef-facee.png";
import deliveryImage from "../images/delivery-bike.png";
import satisfaction from "../images/satisfaction.png";
export function AboutPage() {
  return (
    <>
      <main>
        <section className="main-display">
          <div className="about-title">
            <h1>About Us</h1>
          </div>
          <div className="about-info">
            <h3>Delicious food delivered to you.</h3>
            <p>
              Welcome to our restaurant! We are a team of passionate chefs
              dedicated to providing the best culinary experience possible.
            </p>
          </div>
          <div className="about-image">
            <img src={chefImage} alt="Delicious food" />
          </div>
          <div className="about-hero">
            <div className="hero-content">
              <div className="hero-image">
                <img src={chefFace} alt="Chef Face" />
              </div>
              <div className="hero-title">
                <h3>Meet Our Chef</h3>
              </div>
              <div className="hero-text">
                <p>
                  Our head chef, John Doe, has over 20 years of experience in
                  the culinary industry...
                </p>
              </div>
            </div>

            <div className="hero-content">
              <div className="hero-image">
                <img src={deliveryImage} alt="Delivery Bike" />
              </div>
              <div className="hero-title">
                <h3>Fast & Reliable Delivery</h3>
              </div>
              <div className="hero-text">
                <p>
                  Fast and reliable delivery is our top priority. We ensure that
                  your...
                </p>
              </div>
            </div>

            <div className="hero-content">
              <div className="hero-image">
                <img src={satisfaction} alt="Customer Satisfaction" />
              </div>
              <div className="hero-title">
                <h3>Customer Satisfaction</h3>
              </div>
              <div className="hero-text">
                <p>
                  We are committed to providing excellent customer service and
                  ensuring...
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
