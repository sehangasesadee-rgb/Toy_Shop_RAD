
import './App.css';

const toys = [
  {
    name: 'Cute Teddy Bear',
    category: 'Soft Toys',
    image: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=600',
    price: 15.99,
    oldPrice: 19.99,
    discount: '20% OFF',
    rating: '4.8',
  },
  {
    name: 'Baby Racing Car',
    category: 'Vehicles',
    image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=600',
    price: 12.74,
    oldPrice: 14.99,
    discount: '15% OFF',
    rating: '4.6',
  },
  {
    name: 'Princess Doll',
    category: 'Dolls',
    image: 'https://images.unsplash.com/photo-1560961911-ba7ef651a56c?w=600',
    price: 11.24,
    oldPrice: 14.99,
    discount: '25% OFF',
    rating: '4.7',
  },
];

const categories = [
  { name: 'Toys', emoji: '🧸' },
  { name: 'Vehicles', emoji: '🚗' },
  { name: 'Dolls', emoji: '👧' },
  { name: 'Building Blocks', emoji: '🧱' },
  { name: 'Puzzles', emoji: '🧩' },
  { name: 'Games', emoji: '🎮' },
  { name: 'Educational', emoji: '📚' },
  { name: 'Sports', emoji: '⚽' },
];

function FlashSale() {
  return (
    <main className="flash-page">
      <div className="flash-heading">
        <div>
          <span className="flash-eyebrow">DON'T MISS OUT</span>
          <h1>Flash Sale <span>✧</span></h1>
        </div>

        <div className="flash-offer">
          <span className="timer-icon">◷</span>
          <div>
            <small>SPECIAL OFFERS</small>
            <h3>LIMITED TIME</h3>
            <p>Grab your favourite toys!</p>
          </div>
        </div>
      </div>

      <section className="flash-grid">
        {toys.map((toy) => (
          <article className="flash-card" key={toy.name}>
            <div className="flash-picture">
              <img src={toy.image} alt={toy.name} />
              <span className="flash-discount">{toy.discount}</span>
              <button className="flash-heart" aria-label="Add to favorites">
                ♡
              </button>
            </div>

            <div className="flash-info">
              <span className="flash-category">{toy.category}</span>
              <h2>{toy.name}</h2>

              <div className="flash-prices">
                <strong>Rs.{toy.price.toFixed(2)}</strong>
                <del>Rs.{toy.oldPrice.toFixed(2)}</del>
              </div>

              <p className="flash-rating">
                ⭐ {toy.rating} <span>Customer rating</span>
              </p>

              <button className="flash-cart">
                🛒 Add to Cart
              </button>

              <button className="flash-compare">
                ⇄ Compare
              </button>
            </div>
          </article>
        ))}
      </section>

      <section className="popular-categories">
        <div className="popular-heading">
          <h2>Popular Categories</h2>
          <button>View all →</button>
        </div>

        <div className="popular-grid">
          {categories.map((category) => (
            <button className="popular-item" key={category.name}>
              <span>{category.emoji}</span>
              <small>{category.name}</small>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

export default FlashSale;
