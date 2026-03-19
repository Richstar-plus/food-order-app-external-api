import "./MealDetails.css";
import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import play from "../images/play.png";
import thumbnail from "../images/video.avif";
import rating1 from "../images/ratings/3star.png";

export function MealDetailsPage() {
  const meal = useLoaderData();

  return (
    <>
      <div className="meal-details-container">
        <div className="meal-nav">
          <NavLink to="/" className="meal-nav-item">
            Home
          </NavLink>
          <div>/</div>
          <div className="meal-nav-item">Meal Details</div>
        </div>

        <div className="details-holder">
          <div className="details-row1">
            <div className="details-image">
              <img src={meal.thumbnail_url} alt="" className="meal-image" />
            </div>
            <div className="details-video">
              <div className="play-icon">
                <img className="play" src={play} alt="" />
              </div>
              <img src={thumbnail} alt="" className="video-thumbnail" />
              <div className="video-info">Watch Cooking Video</div>
            </div>
          </div>
          <div className="details-row2">
            <div className="meal-title">
              <h1>{meal.name}</h1>
            </div>
            <div className="rating">
              <img src={rating1} alt="" className="rating-image" />
              <div className="rating-value">(12000 Reviews)</div>
            </div>
            <div className="meal-description">
              <p>
                {meal.description}
              </p>
            </div>
            <div className="meal-instruction">
              <div className="meal-nutrition">
                <h4>Nutrition Info</h4>
                <table>
                  <tbody>
                    <tr>
                      <td>Calories</td>
                      <td>12g</td>
                    </tr>
                    <tr>
                      <td>Carbohydrates</td>
                      <td>1g</td>
                    </tr>
                    <tr>
                      <td>Protein</td>
                      <td>12g</td>
                    </tr>
                    <tr>
                      <td>Fat</td>
                      <td>34g</td>
                    </tr>
                  </tbody>

                </table>
              </div>
              <div className="main-instruction-btn"></div>
            </div>
            <div className="meal-price"></div>
            <div className="tips"></div>
          </div>
        </div>
      </div>
    </>
  );
}
