export function HeroCard({ image, title, text, textClass }) {
  return (
    <div className="hero-content">
      <div className="hero-image">
        <img src={image} alt={title} />
      </div>
      <div className="hero-title">
        <h3>{title}</h3>
      </div>
      <div className={`hero-text ${textClass}`}>
        <p>{text}</p>
      </div>
    </div>
  );
}
