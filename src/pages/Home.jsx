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

export async function MealsLoader() {
  const response = await fetch("https://tasty.p.rapidapi.com/recipes/list", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "dfeaf6ba79mshf4a5472af01a80dp1af4aejsnc39c76c478a8",
      "x-rapidapi-host": "tasty.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch meals." }), {
      status: 500,
    });
  }

  const resData = await response.json();

  return resData.results; // RapidAPI returns recipe inside "results"
}
