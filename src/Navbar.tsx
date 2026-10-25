
import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-top">
        <h2 className="logo">
        <img src="/TootieToys_Kawaii_Bear_Logo.png" alt="TootieToys Logo" className="logo-image"/>
  <span>TootieToys</span>
</h2>
        <div className="search-box">
          <input type="text" placeholder="Search toys..." />
          <button aria-label="Search">⌕</button>
        </div>

        <div className="navbar-actions">
          <a href="#login">Login</a>
          <a href="#signin">Sign In</a>
          <a href="#favorites" aria-label="Favorites">♡</a>
          <a href="#cart" aria-label="Shopping Cart">🛒</a>
        </div>
      </div>

      <div className="navbar-bottom">
        <nav>
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#products">Toys</a>
          <a href="#about">About Us</a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle categories menu"
          aria-expanded={showMenu}
        >
          ☰
        </button>

        {showMenu && (
          <div className="category-menu">
            <a href="#soft-toys" onClick={() => setShowMenu(false)}>
              Soft Toys
            </a>
            <a href="#teddy-bears" onClick={() => setShowMenu(false)}>
              Teddy Bears
            </a>
            <a href="#baby-toys" onClick={() => setShowMenu(false)}>
              Baby Toys
            </a>
            <a
              href="#educational-toys"
              onClick={() => setShowMenu(false)}
            >
              Educational Toys
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
