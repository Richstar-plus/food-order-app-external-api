import "./Home.css";
import chefImage from "../assets/cheff.png";
import { Meals } from "../components/Meals";
import { useLoaderData } from "react-router-dom";
import { Hero } from "../components/Hero";

export function HomePage() {
  const meals = useLoaderData();
  return (
    <>
      <main>
        <Hero chefImage={chefImage} />
        <section className="main">
          <div className="welcome">
            <h2>Our Menu</h2>
            <p>Enjoy the best food in town!</p>
          </div>
          <div className="meal-container">
            <div className="meals-container">
              {meals.map((meal) => (
                <Meals key={meal.id} meals={meal} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

