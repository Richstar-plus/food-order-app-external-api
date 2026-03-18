export function Hero({chefImage}) {
  return (
    <section className="display">
      <div className="ad-message">
        <h1>Quick and Delicious Meals</h1>
        <p>
          Browse our menu, pick your favourite meals, and enjoy fast delivery
          right to your doorstep!
        </p>
        <div className="order-btn">
          <button>Sign up Now</button>
        </div>
      </div>
      <div className="ad-image">
        <img src={chefImage} alt="Chef" />
      </div>
    </section>
  );
}
