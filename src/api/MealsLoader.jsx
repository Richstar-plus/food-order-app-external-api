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
