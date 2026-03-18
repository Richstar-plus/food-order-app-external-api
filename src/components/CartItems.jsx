export function CartItems({ image, name, price }) {
  function truncateName(text) {
    const words = text.split(" ");

    if (words.length <= 3) return text;

    return words.slice(0, 3).join(" ") + "...";
  }

  return (
    <div>
      <div className="cart-card-item">
        <div className="col-2">
          <img className="img-fluid" src={image} alt="Product" />
        </div>

        <div className="cart-card-title">
          <div className="cart-title">{truncateName(name)}</div>
        </div>

        <div className="cart-card-quantity">
          <button className="btn">-</button>
          <a href="#" className="border">
            1
          </a>
          <button className="btn">+</button>
        </div>

        <div className="cart-item-price">${price}</div>
      </div>
    </div>
  );
}
