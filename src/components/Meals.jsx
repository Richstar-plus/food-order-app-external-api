import { currencyFormatter } from "../util/formatter.js";

export function Meals({ meals }) {
  return (
    <div className="meals-container">
      {meals.map((recipe) => (
        <div className="meal-card" key={recipe.id}>
          <div className="meal-image">
            <img src={recipe.thumbnail_url} alt="" />
          </div>
          <h3 className="title">{recipe.name}</h3>

          <p className="price">
            {currencyFormatter.format(recipe.price.total / 100)}
          </p>
          <div className="cart-btn-container">
            <button className="order-btn">Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
