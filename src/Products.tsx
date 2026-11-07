import React, { useState } from "react";
import "./App.css";

interface Toy {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  image: string;
  rating: number;
  badge?: string;
}

const toys: Toy[] = [
  {
    id: 1,
    name: "Cute Teddy Bear",
    category: "Soft Toys",
    price: 2500,
    oldPrice: 3000,
    image: "/toy_img1.png",
    rating: 4.8,
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Little Toy Car",
    category: "Toy Vehicles",
    price: 1800,
    oldPrice: 2200,
    image: "/toy_img2.png",
    rating: 4.7,
    badge: "Popular",
  },
  {
    id: 3,
    name: "Sweet Bunny Doll",
    category: "Dolls",
    price: 3200,
    oldPrice: 3800,
    image: "/toy_img3.jpg",
    rating: 4.9,
    badge: "New",
  },
  {
    id: 4,
    name: "Happy Teddy",
    category: "Soft Toys",
    price: 2800,
    oldPrice: 3300,
    image: "/toy_img1.png",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Colorful Toy Car",
    category: "Toy Vehicles",
    price: 2100,
    oldPrice: 2500,
    image: "/toy_img2.png",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Lovely Bunny",
    category: "Soft Toys",
    price: 3000,
    oldPrice: 3500,
    image: "/toy_img3.jpg",
    rating: 4.9,
  },
];

const categories = [
  "All Toys",
  "Soft Toys",
  "Toy Vehicles",
  "Dolls",
];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Toys");
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [sort, setSort] = useState("default");

  let filteredToys = toys.filter((toy) => {
    const matchesCategory =
      selectedCategory === "All Toys" ||
      toy.category === selectedCategory;

    const matchesSearch = toy.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (sort === "low") {
    filteredToys = [...filteredToys].sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filteredToys = [...filteredToys].sort((a, b) => b.price - a.price);
  }

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="products-page">

      {/* Products Section */}
      <section className="all-products-section">

        <div className="products-heading">
          <div>
            <span className="products-small-title">
              OUR COLLECTION
            </span>
            <h2>All Toys <span>♡</span></h2>
            <p>Find the perfect toy for every happy moment.</p>
          </div>

          <div className="products-count">
            {filteredToys.length} Lovely Toys
          </div>
        </div>

        {/* Search and Sort */}
        <div className="products-toolbar">

          <div className="product-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search your favorite toys..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="product-sort"
          >
            <option value="default">Sort By: Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>

        </div>

        {/* Categories */}
        <div className="product-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category ? "active" : ""
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="products-display-grid">

          {filteredToys.length > 0 ? (
            filteredToys.map((toy) => (
              <article className="toy-product-card" key={toy.id}>

                <div className="toy-product-image">

                  {toy.badge && (
                    <span className="toy-product-badge">
                      {toy.badge}
                    </span>
                  )}

                  <button
                    className={`toy-favorite ${
                      favorites.includes(toy.id) ? "selected" : ""
                    }`}
                    onClick={() => toggleFavorite(toy.id)}
                    aria-label="Add to favorites"
                  >
                    {favorites.includes(toy.id) ? "♥" : "♡"}
                  </button>

                  <img src={toy.image} alt={toy.name} />

                </div>

                <div className="toy-product-info">

                  <span className="toy-product-category">
                    {toy.category}
                  </span>

                  <h3>{toy.name}</h3>

                  <div className="toy-product-rating">
                    <span>★★★★★</span>
                    <small>{toy.rating}</small>
                  </div>

                  <div className="toy-product-price">
                    <strong>
                      Rs. {toy.price.toLocaleString()}
                    </strong>

                    <del>
                      Rs. {toy.oldPrice.toLocaleString()}
                    </del>
                  </div>

                  <button
                    className="toy-add-cart"
                    onClick={() => alert(`${toy.name} selected!`)}
                  >
                    View Toy →
                  </button>

                </div>

              </article>
            ))
          ) : (
            <div className="no-toys">
              <span>🧸</span>
              <h3>No toys found!</h3>
              <p>Try searching for another toy.</p>
            </div>
          )}

        </div>

      </section>

    </div>
  );
};

export default Products;