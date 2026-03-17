import image from "../images/image1.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export function Cart() {
  return (
    <div className="col-md-8 cart">
      <div className="title">
        <div className="row">
          <div className="col">
            <h3>Shopping Cart </h3>
          </div>
          <div className="cart-item-no">3 items</div>
        </div>
      </div>

      <div className="row border-top border-bottom">
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
      </div>

      <div className="back-to-shop">
        <NavLink to="/">
          <FontAwesomeIcon icon={faArrowLeft} />{" "}
        </NavLink>
      </div>
    </div>
  );
}
