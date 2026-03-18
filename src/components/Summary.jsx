import { Button } from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatter";

export function Summary() {
  const cartContext = useContext(CartContext);

  const totalCartItems = cartContext.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const totalAmount = cartContext.items.reduce(
    (total, item) => total + item.price.total * item.quantity,
    0,
  );

  let shippingCost;
  if (cartContext.items.length <= 5) {
    shippingCost = 0.0;
  } else {
    shippingCost = 15.0;
  }

  return (
    <div className="summary">
      <div className="summary-title">
        <h3>Summary</h3>
      </div>

      <div className="row summary-item-price">
        <div className="col">ITEMS ({totalCartItems})</div>
        <div className="col text-right">
          {currencyFormatter.format(totalAmount / 100)}
        </div>
      </div>

      <form>
        <p>SHIPPING</p>
        <select>
          <option>
            {cartContext.items.length <= 5 ? "Free-Delivery" : "Standard-Delivery"} -{" "}
            {currencyFormatter.format(shippingCost)}
          </option>
        </select>

        <p>PROMO CODE</p>
        <input id="code" placeholder="Enter your code" />
      </form>

      <div className="row total-price">
        <div className="col">TOTAL PRICE</div>
        <div className="col text-right">
          {currencyFormatter.format(((totalAmount / 100) + shippingCost))}
        </div>
      </div>

      <Button className="btn">CHECKOUT</Button>
    </div>
  );
}
