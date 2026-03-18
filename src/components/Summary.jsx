import { Button } from "./UI/Button";
import { useContext, useState } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatter";
import { Modal } from "./Modal";

export function Summary() {
  const cartContext = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  function handleCheckout() {
    setShowModal(true);
    cartContext.clearCartHandler();
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  const totalCartItems = cartContext.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const totalAmount = cartContext.items.reduce(
    (total, item) => total + item.price.total * item.quantity,
    0,
  );

  let shippingCost;
  if (cartContext.items.length <= 2) {
    shippingCost = 0.0;
  } else {
    shippingCost = 15.0;
  }

  return (
    <>
      <Modal open={showModal} onClose={handleCloseModal}>
        <div>
          <h2>Order Confirmed ✅</h2>
          <h4>Order Number: #{Math.floor(Math.random() * 10000)}</h4>
          <p>Your order has been placed successfully!</p>
        </div>

        <Button onClick={handleCloseModal}>Close</Button>
      </Modal>
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
              {cartContext.items.length <= 5
                ? "Free-Delivery"
                : "Standard-Delivery"}{" "}
              - {currencyFormatter.format(shippingCost)}
            </option>
          </select>

          <p>PROMO CODE</p>
          <input id="code" placeholder="Enter your code" />
        </form>

        <div className="row total-price">
          <div className="col">TOTAL PRICE</div>
          <div className="col text-right">
            {currencyFormatter.format(totalAmount / 100 + shippingCost)}
          </div>
        </div>

        <Button
          className="btn"
          onClick={handleCheckout}
          disabled={cartContext.items.length === 0}
        >
          CHECKOUT
        </Button>
      </div>
    </>
  );
}
