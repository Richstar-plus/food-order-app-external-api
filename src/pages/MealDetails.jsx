import "./MealDetails.css";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Modal } from "../components/Modal";
import rating1 from "../images/ratings/1star.png";
import rating2 from "../images/ratings/2star.png";
import rating3 from "../images/ratings/3star.png";
import rating4 from "../images/ratings/4star.png";
import rating5 from "../images/ratings/5star.png";
import { Button } from "../components/UI/Button";
import { currencyFormatter } from "../util/formatter.js";
import { VideoBox } from "../components/UI/VideoPlayer.jsx";

export function MealDetailsPage() {
  const meal = useLoaderData();
  const [showModal, setShowModal] = useState(false);

  function handleCheckout() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  const rating = Math.round(meal.user_ratings.score * 5);
  const reviews = meal.user_ratings.count_positive + meal.user_ratings.count_negative;

  return (
    <>
      <Modal
        className="meal-details-modal"
        open={showModal}
        onClose={handleCloseModal}
      >
        <div className="modal-content">
          <h2>Cooking Instructions</h2>
          <ol>
            {meal.instructions?.map((instruction) => (
              <li key={instruction.id}>{instruction.display_text}</li>
            )) || <p>No instructions available.</p>}
          </ol>
        </div>

        <Button onClick={handleCloseModal}>Close</Button>
      </Modal>

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
              <VideoBox url={meal.video_url} />
              <div className="video-info">Watch Cooking Video</div>
            </div>
          </div>
          <div className="details-row2">
            <div className="meal-title">
              <h1>{meal.name}</h1>
            </div>
            <div className="rating">
              {
                rating === 5 ? <img src={rating5} alt="" className="rating-image" /> :
                rating >= 4 ? <img src={rating4} alt="" className="rating-image" /> :
                rating >= 3 ? <img src={rating3} alt="" className="rating-image" /> :
                rating >= 2 ? <img src={rating2} alt="" className="rating-image" /> :
                <img src={rating1} alt="" className="rating-image" />
              }
              <div className="rating-value">({reviews} Reviews)</div>
            </div>
            <div className="meal-description">
              <p>{meal.description}</p>
            </div>
            <div className="meal-instruction">
              <div className="meal-nutrition">
                <h4>Nutrition Info</h4>
                <table>
                  <tbody>
                    <tr>
                      <td>Colaries</td>
                      <td>%{meal.nutrition?.calories / 100 || "N/A"}</td>
                    </tr>
                    <tr>
                      <td>Carbohydrates</td>
                      <td>%{meal.nutrition?.carbohydrates / 100 || "N/A"}</td>
                    </tr>
                    <tr>
                      <td>Protein</td>
                      <td>%{meal.nutrition?.protein / 100 || "N/A"}</td>
                    </tr>
                    <tr>
                      <td>Fat</td>
                      <td>%{meal.nutrition?.fat / 100 || "N/A"}</td>
                    </tr>
                    <tr>
                      <td>Sugar</td>
                      <td>%{meal.nutrition?.sugar / 100 || "N/A"}</td>
                    </tr>
                    <tr>
                      <td>Fiber</td>
                      <td>%{meal.nutrition?.fiber / 100 || "N/A"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="main-instruction-btn">
                <button onClick={handleCheckout}>
                  View Cooking Instructions{" "}
                </button>
              </div>
            </div>
            <div className="meal-price">
              <h4>Pricing Breakdown</h4>
              <table>
                <tbody>
                  <tr>
                    <td>Consumption Portion:</td>
                    <td>
                      {currencyFormatter.format(
                        meal.price?.consumption_portion / 100,
                      ) || "N/A"}
                    </td>
                  </tr>
                  <tr>
                    <td>Consumption Total:</td>
                    <td>
                      {currencyFormatter.format(
                        meal.price?.consumption_total / 100,
                      ) || "N/A"}
                    </td>
                  </tr>
                  <tr>
                    <td>Portion:</td>
                    <td>
                      {currencyFormatter.format(meal.price?.portion / 100) ||
                        "N/A"}
                    </td>
                  </tr>
                  <tr>
                    <td className="total-tag">Total:</td>
                    <td className="total-tag-amount">
                      {currencyFormatter.format(meal.price?.total / 100) ||
                        "N/A"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="tips">
              <div className="tip-tag">
                <h5>Chef's Tips</h5>
              </div>
              <ul>
                <li>{meal.tips_summary?.content || "No tips available."}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
