export function CartItems({ image }) {
  return (
    <div className="cart-card-item">
      <div className="col-2">
        <img className="img-fluid" src={image} alt="Product" />
      </div>
      <div className="cart-card-title">
        <div className="cart-title">Shirt Cotton T-shirt</div>
      </div>
      <div className="cart-card-quantity">
        <button className="btn">-</button>
        <a href="#" className="border">
          1
        </a>
        <button className="btn">+</button>
      </div>
      <div className="cart-item-price">44.00</div>
    </div>
  );
}
