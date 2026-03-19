import { useLoaderData } from "react-router-dom";

export function MealDetailsPage() {
  const meal = useLoaderData();

  return (
    <div className="meal-details-container">
      <div className="details-holder">
        <div className="details-row1">
          <div className="details-image"></div>
          <div className="details-video"></div>
        </div>
        <div className="details-row2">
          <div className="title"></div>
          <div className="description"></div>
          <div className="instruction">
            <div className="nutrition"></div>
            <div className="main-instruction-btn"></div>
          </div>
          <div className="price"></div>
          <div className="tips"></div>
        </div>
      </div>
    </div>
  );
}
