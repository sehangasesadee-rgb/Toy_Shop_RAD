
import React, { useState } from 'react';
import './App.css';

interface Toy {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  discount: number;
  image: string;
}

const toys: Toy[] = [
  
  
  {
    id: 1,
    name: 'Boby Wooden Crocodile Pull Drum Toy',
    category: 'Wooden Toys',
    price: 1500,
    oldPrice: 2000,
    discount: 25,
    image: '/toy_img2.png',
  },
  {
    id: 2,
    name: 'Rainbow Stacking Rings',
    category: 'Educational Toys',
    price: 1200,
    oldPrice: 1800,
    discount: 33,
    image: '/toy_img3.jpg',
  },
  {
    id: 3,
    name: 'Baby Pounding House Wooden Toy',
    category: 'Activity & Learning Toys',
    price: 1800,
    oldPrice: 2500,
    discount: 28,
    image: '/toy_img1.png',
  },
  
  {
    id: 4,
    name: 'Long Eared Bunny Rabbit Plush Toy Easter Bunny Plush Bunny Soft Toy',
    category: 'Soft Toys',
    price: 850,
    oldPrice: 1000,
    discount: 15,
    image: '/toy4.jpg',
  },
  {
    id: 5,
    name: 'Rainbow Teddy Bear Plush Toy',
    category: 'Soft Toys',
    price: 5700,
    oldPrice: 8500,
    discount: 33,
    image: '/toy5.jpg',
  },
  {
    id: 6,
    name: '3 D Super Car Toy',
    category: 'Toy Cars & Vehicles',
    price: 1850,
    oldPrice:5999 ,
    discount: 69,
    image: '/toy6.jpg',
  },
  {
    id: 7,
    name: 'Colorful Wooden Number Puzzle Toy Blocks',
    category: 'Educational Toys',
    price: 350,
    oldPrice: 500,
    discount: 30,
    image: '/toy7.jpg',
  },
  ////////////////////////////////////////////////////////////////////////////
  {
    id: 8,
    name: 'New High Quality Lovely Teddy Bear with Bow',
    category: 'Soft Toys',
    price: 9500,
    oldPrice: 12000,
    discount: 21,
    image: '/toy8.jpg',
  },
  {
    id: 9,
    name: 'Toyzone Combat Top Gun',
    category: 'Toy Guns & Blasters',
    price: 2500,
    oldPrice: 3250,
    discount:23,
    image: '/toy9.jpg',
  },

  {
    id: 10,
    name: 'Early Learning Centre Lights and Sounds Garage',
    category: 'Toddler Learning Centers',
    price: 1700,
    oldPrice: 2000,
    discount: 15,
    image: '/toy10.jpg',
  },
  {
    id: 11,
    name: 'Glock17 BB Toy Gun – Compact Spring-Powered Pistol with 6mm Plastic Bullets for Kids & Boys',
    category: 'Toy Guns & Blasters',
    price: 1000,
    oldPrice: 1200,
    discount:17,
    image: '/toy11.jpg',
  },
  {
    id: 12,
    name: 'Pets Alive Mommy Elephant and Baby Surprise by ZURU',
    category: 'Walking & Talking Toys',
    price: 3250,
    oldPrice: 5000,
    discount:35,
    image: '/toy12.jpg',
  }
];

function DealsSection() {
  const [sort, setSort] = useState('Biggest Discount');

  const visibleToys = [...toys].sort((a, b) => {
    if (sort === 'Biggest Discount') {
      return b.discount - a.discount;
    }

    if (sort === 'Lowest Price') {
      return a.price - b.price;
    }

    return a.id - b.id;
  });

  const productCard = (toy: Toy) => (
    <article className="deal-product-card" key={toy.id}>
      <div className="deal-product-image">
        <img
          src={toy.image}
          alt={toy.name}
          onError={(event) => {
            event.currentTarget.style.visibility = 'hidden';
          }}
        />

        <span className="deal-discount">
          -{toy.discount}%
        </span>

        <span className="deal-heart">♡</span>
      </div>

      <div className="deal-product-info">
        <span className="deal-category">{toy.category}</span>

        <h3>{toy.name}</h3>

        <div className="deal-prices">
          <strong>
            Rs. {toy.price.toLocaleString()}
          </strong>

          <del>
            Rs. {toy.oldPrice.toLocaleString()}
          </del>
        </div>

        <div className="deal-rating">
          ⭐⭐⭐⭐⭐ <span>(Popular toy)</span>
        </div>

        <button
          className="deal-cart-button"
          onClick={() => alert(`${toy.name} selected!`)}
        >
          🛍️ Add to Cart
        </button>
      </div>
    </article>
  );

  return (
    <section className="deals-section" id="deals">
      <div className="deals-banner">
        <img
          src="public/banner.png"
          alt="banner.png"
        />
      </div>

      <div className="deals-heading">
        <select
          className="deals-sort"
          value={sort}
          onChange={(event) => setSort(event.target.value)}
          aria-label="Sort deals"
        >
          <option value="Biggest Discount">
            Biggest Discount
          </option>

          <option value="Lowest Price">
            Lowest Price
          </option>
        </select>
      </div>

      <div className="deal-product-grid">
        {visibleToys.map(productCard)}
      </div>

    </section>
  );
}

export default DealsSection;
