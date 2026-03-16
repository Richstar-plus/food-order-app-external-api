import "./Home.css";
import chefImage from "../assets/cheff.png";
import { Meals } from "../components/Meals";

export function HomePage() {
  return (
    <>
      <main>
        <section className="display">
          <div className="ad-message">
            <h1>Quick and Delicious Meals</h1>
            <p>
              Browse our menu, pick your favourite meals, and enjoy fast
              delivery right to your doorstep!
            </p>
            <div className="order-btn">
              <button>Sign up Now</button>
            </div>
          </div>
          <div className="ad-image">
            <img src={chefImage} alt="Chef" />
          </div>
        </section>
        <section className="main">
          <div className="welcome">
            <h2>Our Menu</h2>
            <p>Enjoy the best food in town!</p>
          </div>
          <div className="meal-container">
            <Meals />
          </div>
        </section>
      </main>
    </>
  );
}
