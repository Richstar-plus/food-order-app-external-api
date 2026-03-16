import "./Home.css";
import chefImage from "../assets/cheff.png";
import { Meals } from "../components/Meals";
import { useLoaderData } from "react-router-dom";


export function HomePage() {
  const meals = useLoaderData();
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
            <Meals meals={meals} />
          </div>
        </section>
      </main>
    </>
  );
}



export async function TestLoader() {
  const response = await fetch(
    "https://tasty.p.rapidapi.com/recipes/list",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "dfeaf6ba79mshf4a5472af01a80dp1af4aejsnc39c76c478a8",
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        'Content-Type': 'application/json'
      },
    }
  );

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch jobs." }),
      { status: 500 }
    );
  }

  const resData = await response.json();

  return resData.results; // RapidAPI returns jobs inside "hits"
}