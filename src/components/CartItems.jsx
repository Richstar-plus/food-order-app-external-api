import { currencyFormatter } from "../util/formatter";

export function CartItems({
  image,
  name,
  price,
  quantity,
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
      <div className="col-2">
        <img className="img-fluid" src={image} alt="Product" />
      </div>

      <div className="cart-card-title">
        <div className="cart-title">{truncateName(name)}</div>
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