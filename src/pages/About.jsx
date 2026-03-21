import "./About.css";
import chefImage from "../images/about-chef.webp";
import chefFace from "../images/chef-facee.png";
import deliveryImage from "../images/delivery-bike.png";
import satisfaction from "../images/satisfaction.png";
import { HeroCard } from "../components/HeroCard";

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
            <HeroCard
              image={chefFace}
              title="Meet Our Chef"
              text="Our head chef, John Doe, has over 20 years of experience in the culinary industry..."
              textClass="hero-text"
            />

            <HeroCard
              image={deliveryImage}
              title="Fast & Reliable Delivery"
              text="We ensure fast and reliable delivery of your favorite dishes..."
              textClass="hero-text"
            />

            <HeroCard
              image={satisfaction}
              title="Customer Satisfaction"
              text="We are committed to providing excellent customer service and..."
              textClass="hero-text"
            />
          </div>
        </section>
      </main>
    </>
  );
}
