import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGift} from "@fortawesome/free-solid-svg-icons";

const brands = [
  { name: "LEGO", image: "/public/lego.png" },
  { name: "Barbie", image: "/public/barbie.png" },
  { name: "Fisher-Price", image: "/public/fisher-price.png" },
  { name: "Hot Wheels", image: "/public/hot-wheels.png" },
  { name: "Play-Doh", image: "/public/play-doh.png" },
  { name: "Mattel", image: "/public/mattel.png" },
];

function PopularBrands() {
  return (
    <section className="brands-section">
        <h2>
        <FontAwesomeIcon icon={faGift} className="heading-icon" />
        {" "}Popular Toy Brands{" "}
        <FontAwesomeIcon icon={faGift} className="heading-icon" />
      </h2>
       <div className="brands-container">
        {brands.map((brand) => (
          <div className="brand-card" key={brand.name}>
            <img
              src={brand.image}
              alt={`${brand.name} logo`}
              className="brand-image"
            />

            <h3>{brand.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularBrands;