import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatter.js";
import { Button } from "./UI/Button.jsx";

export function Meals({ meals }) {
  const cartContext = useContext(CartContext);

  function handleMealItemAddToCart() {
    cartContext.addItemToCartHandler(meals);
  }
  return (
    <div className="meal-card">
      <div className="meal-image">
        <img src={meals.thumbnail_url} alt="" />
      </div>
      <h3 className="title">{meals.name}</h3>

      <p className="price">
        {currencyFormatter.format(meals.price.total / 100)}
      </p>
      <div className="cart-btn-container">
        <Button className="order-btn" onClick={handleMealItemAddToCart}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}
