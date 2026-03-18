import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import { CartItems } from "./CartItems";

export function Cart() {
  const cartContext = useContext(CartContext);
  const totalCartItems = cartContext.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <div className="col-md-8 cart">
      <div className="title">
        <div className="row">
          <div className="col">
            <h3>Shopping Cart </h3>
          </div>
          <div className="cart-item-no">
            {totalCartItems} {totalCartItems === 1 ? "item" : "items"}
          </div>
        </div>
      </div>

      {cartContext.items.map((item) => (
        <CartItems
          key={item.id}
          name={item.name}
          image={item.thumbnail_url}
          price={item.price.total}
          quantity={item.quantity}
          onIncrease={() => cartContext.addItemToCartHandler(item)}
          onDecrease={() => cartContext.removeItemFromCartHandler(item.id)}
        />
      ))}

      <div className="back-to-shop">
        <NavLink to="/">
          <FontAwesomeIcon icon={faArrowLeft} />{" "}
        </NavLink>
      </div>
    </div>
  );
}
