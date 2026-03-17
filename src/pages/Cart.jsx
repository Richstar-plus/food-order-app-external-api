import "./Cart.css";
import { Summary } from "../components/Summary";
import { Cart } from "../components/Cart";

export function CartPage() {
  return (
    <>
      <main>
        <div className="cart-container">
          <div className="card">
            <div className="row">
              <Cart />
              <Summary />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
