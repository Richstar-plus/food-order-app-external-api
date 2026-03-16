import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faUtensils,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <h2>
            RichStar food <FontAwesomeIcon icon={faUtensils} />
          </h2>
        </div>
        <div className="header-middle">
          <div className="header-links">
            <p>
              <NavLink to="/">Home</NavLink>
            </p>
            <p>
              <NavLink to="/menu">Menu</NavLink>
            </p>
            <p>
              <NavLink to="/about">About</NavLink>
            </p>
            <p>
              <NavLink to="/contact">Contact</NavLink>
            </p>
          </div>
          <div className="search">
            <div className="search-icon">
              <FontAwesomeIcon icon={faSearch} className="icon" />
            </div>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="cart-icons">
          <div className="cart-button">
            <NavLink to="/cart">
              <button>
                Order now <FontAwesomeIcon icon={faShoppingCart} />
                <p>0</p>
              </button>
            </NavLink>
          </div>
          <div className="profile-icon">
            <NavLink to="/profile">
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
}
