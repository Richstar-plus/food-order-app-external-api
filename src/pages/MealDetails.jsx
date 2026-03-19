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


