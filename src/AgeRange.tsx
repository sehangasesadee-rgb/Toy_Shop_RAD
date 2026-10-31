
import './App.css';

const ageRanges = [
  {
    image: '/public/0-2.png',
    label: '0–2 Years',
    description: 'Soft toys for little ones',
  },
  {
    image: '/public/3-5.png',
    label: '3–5 Years',
    description: 'Cute toys and teddy bears',
  },
  {
    image: '/public/6-8.png',
    label: '6–8 Years',
    description: 'Fun toys for curious kids',
  },
  {
    image: '/public/6-12.png',
    label: '9–12 Years',
    description: 'Creative play and building',
  },
  {
    image: '/public/12+.png',
    label: '13+ Years',
    description: 'Gifts for growing teens',
  },
];

function AgeRange() {
  return (
    <section className="age-range-section" id="age-range">
      <div className="age-range-container">

        <div className="age-range-heading">
          <span className="age-range-tag">
            SHOP BY AGE
          </span>

          <h2>
            Find the Perfect Toy for <span>Every Age!</span>
          </h2>

          <p>
            Discover toys made for every stage of childhood.
          </p>
        </div>

        <div className="age-range-grid">
          {ageRanges.map((age) => (
            <div className="age-range-card" key={age.label}>
              <div className="age-range-image-wrapper">
                <img
                  className="age-range-image"
                  src={age.image}
                  alt={`Toys for ${age.label}`}
                />
              </div>

              <div className="age-range-card-content">
                <h3>{age.label}</h3>
                <p>{age.description}</p>

                <a href="#products" className="age-range-link">
                  Explore Toys <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AgeRange;
