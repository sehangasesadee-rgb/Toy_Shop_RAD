
import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

interface TrendingToy {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

const trendingToys: TrendingToy[] = [
  {
    id: 1,
    name: "Cute Teddy Bear",
    category: "Soft Toys",
    price: 2500,
    image: "/toy_img1.png",
  },
  {
    id: 2,
    name: "Little Toy Car",
    category: "Toy Vehicles",
    price: 1800,
    image: "/toy_img2.png",
  },
  {
    id: 3,
    name: "Sweet Bunny Doll",
    category: "Dolls",
    price: 3200,
    image: "/toy_img3.jpg",
  },
  {
    id: 4,
    name: "Happy Teddy",
    category: "Soft Toys",
    price: 2800,
    image: "/toy_img1.png",
  },
  {
    id: 5,
    name: "Colorful Toy Car",
    category: "Toy Vehicles",
    price: 2100,
    image: "/toy_img2.png",
  },
  {
    id: 6,
    name: "Lovely Bunny",
    category: "Soft Toys",
    price: 3000,
    image: "/toy_img3.jpg",
  },
];

const TrendingItems: React.FC = () => {
  return (
    <section className="trending-section" id="trending">

      <div className="trending-layout">

        
        <div className="trending-illustration">
          <img
            src="/cutebg.png"
            alt="Child playing with toys"
            className="trending-kid-image"
          />
        </div>

        <div className="trending-products">


          <div className="trending-grid">

            {trendingToys.map((toy) => (
              <article
                className="trending-card"
                key={toy.id}
              >

                <div className="trending-card-image">

                  <img
                    src={toy.image}
                    alt={toy.name}
                  />

                  <button
                    type="button"
                    className="trending-heart-button"
                    aria-label={`Add ${toy.name} to favorites`}
                  >
                    ♡
                  </button>

                </div>

                <div className="trending-card-info">

                  <span className="trending-category">
                    {toy.category}
                  </span>

                  <h3>{toy.name}</h3>

                  <div className="trending-card-bottom">

                    <strong>
                      Rs. {toy.price.toLocaleString()}
                    </strong>

                    <span className="trending-rating">
                      ★ 4.8
                    </span>

                  </div>

                </div>

              </article>
            ))}

          </div>

          <div className="trending-see-more">
            <Link to= "/product">See more  →</Link>
          </div>

        </div>

      </div>

    </section>
  );
};

export default TrendingItems;
