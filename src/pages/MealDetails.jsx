import { useLoaderData } from "react-router-dom";


export function MealDetailsPage() {
  const meal = useLoaderData();

  return (
    <div>

      <h1>Meal Details</h1>
      <h3>{meal.name}</h3>
      <img src={meal.thumbnail_url} alt={meal.name} />

      <h3>Instructions:</h3>
      {meal.instructions?.map((step) => (
        <p key={step.position}>{step.display_text}</p>
      ))}
    </div>
  );
}


export async function MealDetailsLoader({ params }) {
  const response = await fetch(
    `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${params.mealId}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "dfeaf6ba79mshf4a5472af01a80dp1af4aejsnc39c76c478a8",
        "x-rapidapi-host": "tasty.p.rapidapi.com",
      },
    }
  );

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch meal." }), {
      status: 500,
    });
  }

  const data = await response.json();
  return data;
}