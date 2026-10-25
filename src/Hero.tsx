
const Hero = () => {
  const scrollToToys = () => {
    document.getElementById('products')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <span className="eyebrow">
           WELCOME TO TOOTIE TOYS
        </span>

        <h1>
          Little Toys,
          <br />
          <span>Big Happiness!</span>
        </h1>

        {/* <p>
          Discover magical toys, adorable friends and
          wonderful gifts for every little dreamer.
        </p> */}

        <button className="shop-now" onClick={scrollToToys}>
          Shop Now <span>→</span>
        </button>

        <div className="hero-note">
          ♡ Bringing smiles to little faces every day
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-circle">
          <img
            src="/teddy-hero.png"
            alt="Tootie Toys featured toy"
            className="hero-image"
          />
        </div>

        <span className="hero-spark spark-a">✦</span>
        <span className="hero-spark spark-b">✧</span>
        <span className="hero-heart">♡</span>

        {/* <div className="hero-sticker">
          Made with love 💗
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
