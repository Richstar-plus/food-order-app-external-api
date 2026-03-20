import { Meals } from "../components/Meals";
import { useLoaderData } from "react-router-dom";
import "./Home.css";

export function MenuPage() {
  const meals = useLoaderData();
  return (
    <>
      <main>
        <section className="main-display">
          <div className="about-title">
            <h1>Our Menu</h1>
          </div>
          <section className="main">
            <div className="meal-container">
              <div className="meals-container">
                {meals.map((meal) => (
                  <Meals key={meal.id} meals={meal} />
                ))}
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
