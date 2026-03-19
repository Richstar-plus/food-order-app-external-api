import "./MealDetails.css";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import play from "../images/play.png";
import thumbnail from "../images/video.avif";
import { Modal } from "../components/Modal";
import rating1 from "../images/ratings/3star.png";
import { Button } from "../components/UI/Button";

export function MealDetailsPage() {
  const meal = useLoaderData();
  const [showModal, setShowModal] = useState(false);

  function handleCheckout() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

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
            <li>Preheat the oven to 375°F (190°C).</li>
            <li>In a large bowl, mix the ingredients together.</li>
            <li>Transfer the mixture to a baking dish.</li>
            <li>Bake for 25-30 minutes or until golden brown.</li>
            <li>
              Remove from the oven and let it cool for a few minutes before
              serving.
            </li>

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
              <p>{meal.description}</p>
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
                    <td>20.5</td>
                  </tr>
                  <tr>
                    <td>Consumption Total:</td>
                    <td>12.0</td>
                  </tr>
                  <tr>
                    <td>Portion:</td>
                    <td>12.5</td>
                  </tr>
                  <tr>
                    <td className="total-tag">Total:</td>
                    <td className="total-tag-amount">34.9</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="tips">
              <div className="tip-tag">
                <h5>Chef's Tips</h5>
              </div>
              <ul>
                <li>Use fresh ingredients for better flavor.</li>
                <li>Don't overcook the meat to keep it tender.</li>
                <li>Experiment with different spices to enhance the taste.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
