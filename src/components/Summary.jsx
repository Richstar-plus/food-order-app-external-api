export function Summary() {
  return (
    <div className="summary">
      <div className="summary-title">
        <h3>Summary</h3>
      </div>

      <div className="row summary-item-price">
        <div className="col">ITEMS (3)</div>
        <div className="col text-right">&euro; 132.00</div>
      </div>
      <form>
        <p>SHIPPING</p>
        <select>
          <option className="text-muted">Standard-Delivery- &euro;5.00</option>
        </select>
        <p>PROMO CODE</p>
        <input id="code" placeholder="Enter your code" />
      </form>
      <div className="row total-price">
        <div className="col">TOTAL PRICE</div>
        <div className="col text-right">&euro; 137.00</div>
      </div>
      <button className="btn">CHECKOUT</button>
    </div>
  );
}
