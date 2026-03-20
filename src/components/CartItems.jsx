import { currencyFormatter } from "../util/formatter";
import { NavLink } from "react-router-dom";

export function CartItems({
  image,
  name,
  price,
  quantity,
  id,
  onIncrease,
  onDecrease,
}) {
  function truncateName(text) {
    const words = text.split(" ");
    if (words.length <= 3) return text;
    return words.slice(0, 3).join(" ") + "...";
  }

  return (
    <div className="cart-card-item">
      <NavLink to={`/meal/${id}`}>
        <div className="cart-card-image">
          <img className="img-fluid" src={image} alt="Product" />
        </div>
      </NavLink>

      <div className="cart-card-title">
        <NavLink to={`/meal/${id}`}>
          <div className="cart-title">{truncateName(name)}</div>
        </NavLink>
      </div>

      <div className="cart-card-quantity">
        <button className="btn" onClick={onDecrease}>
          -
        </button>

        <span className="border">{quantity}</span>

        <button className="btn" onClick={onIncrease}>
          +
        </button>
      </div>

      <div className="cart-item-price">
        {currencyFormatter.format((price * quantity) / 100)}
      </div>
    </div>
  );
}
