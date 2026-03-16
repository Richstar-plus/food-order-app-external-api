import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faUtensils,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
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
              <a href="#">Home</a>
            </p>
            <p>
              <a href="#">Menu</a>
            </p>
            <p>
              <a href="#">About</a>
            </p>
            <p>
              <a href="#">Contact</a>
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
            <button>
             Order now <FontAwesomeIcon icon={faShoppingCart} />
             <p>0</p>
            </button>
          </div>
          <div className="profile-icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </header>
    </>
  );
}
