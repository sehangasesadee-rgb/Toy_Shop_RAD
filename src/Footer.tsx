
import React, { useState, useEffect } from 'react';
import './App.css';

import {
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaHeart,
  FaStar,
  FaPaperPlane,
  FaCamera
} from 'react-icons/fa6';

interface Review {
  id: number;
  name: string;
  message: string;
  rating: number;
  photo: string;
}

const Footer = () => {
  const [noteName, setNoteName] = useState('');
  const [noteEmail, setNoteEmail] = useState('');
  const [noteMessage, setNoteMessage] = useState('');
  const [noteSent, setNoteSent] = useState(false);

  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      return JSON.parse(
        localStorage.getItem('tootieReviews') || '[]'
      );
    } catch {
      return [];
    }
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(5);
  const [photo, setPhoto] = useState('');
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    localStorage.setItem(
      'tootieReviews',
      JSON.stringify(reviews)
    );
  }, [reviews]);

  const handleNoteSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      'New Message - TootieToys'
    );

    const body = encodeURIComponent(
      `Name: ${noteName}\nEmail: ${noteEmail}\n\nMessage:\n${noteMessage}`
    );

    window.location.href =
      `mailto:hello@tootietoys.lk?subject=${subject}&body=${body}`;

    setNoteSent(true);
    setNoteName('');
    setNoteEmail('');
    setNoteMessage('');
  };

  const handlePhoto = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file.');
      return;
    }

    if (file.size > 1024 * 1024) {
      alert('Please select an image smaller than 1MB.');
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const handleReviewSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const newReview: Review = {
      id: Date.now(),
      name,
      message,
      rating,
      photo
    };

    setReviews(previous => [newReview, ...previous]);

    setName('');
    setEmail('');
    setMessage('');
    setRating(5);
    setPhoto('');
    setHoverRating(0);

    const photoInput = document.getElementById(
      'review-photo'
    ) as HTMLInputElement;

    if (photoInput) {
      photoInput.value = '';
    }
  };

  return (
    <footer className="tootie-footer">

      <section className="note-section">

        <div className="note-content">

          <span className="footer-label">
            A LITTLE LOVE FROM US
          </span>

          <h2>A Little Note From Us 💌</h2>

          <p>
            Do you have something lovely to share? We would love to hear your thoughts! Please send us your wonderful ideas, suggestions, or simply a kind greeting.💗
          </p>

          {noteSent ? (
            <div className="success-message">

              <FaHeart />

              <h3>Thank you for your lovely note!</h3>

              <p>
                Your email application should open
                so you can send your message.
              </p>

              <button
                type="button"
                onClick={() => setNoteSent(false)}
              >
                Send Another Note
              </button>

            </div>
          ) : (

            <form
              className="note-form"
              onSubmit={handleNoteSubmit}
            >

              <input
                type="text"
                placeholder="Your lovely name"
                value={noteName}
                onChange={e => setNoteName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Your email address"
                value={noteEmail}
                onChange={e => setNoteEmail(e.target.value)}
                required
              />

              <textarea
                placeholder="Write a little note for us..."
                value={noteMessage}
                onChange={e => setNoteMessage(e.target.value)}
                required
              />

              <button type="submit">
                Send Your Note <FaPaperPlane />
              </button>

            </form>

          )}

        </div>

        <div className="note-decoration">

          <span className="note-heart">♡</span>

          <div className="note-circle">
            <span>🧸</span>
            <h3>Little Toys</h3>
            <p>Big Happiness!</p>
            <FaHeart />
          </div>

          <span className="note-star">✦</span>

        </div>

      </section>


      <section className="parent-reviews">

        <div className="review-heading">

          <span className="footer-label">
            LOVE FROM OUR CUSTOMERS
          </span>

          <h2>What Parents Say About Us 💗</h2>


        </div>


        <div className="review-form-container">

          <h3>Share Your Happy Experience ✨</h3>

          <form
            className="review-form"
            onSubmit={handleReviewSubmit}
          >

            <div className="review-input-row">

              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />

            </div>

            <label className="rating-label">
              How was your experience?
            </label>

            <div className="rating-select">

              {[1, 2, 3, 4, 5].map(star => (
                <button
                  type="button"
                  key={star}
                  className={
                    star <= (hoverRating || rating)
                      ? 'rating-star active'
                      : 'rating-star'
                  }
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  aria-label={`${star} stars`}
                >
                  <FaStar />
                </button>
              ))}

              <span>{rating} / 5</span>

            </div>

            <textarea
              placeholder="Tell us about your experience..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />

            <div className="photo-upload">

              <label htmlFor="review-photo">

                {photo ? (
                  <img
                    src={photo}
                    alt="Your profile"
                  />
                ) : (
                  <FaCamera />
                )}

                <span>
                  {photo ? 'Change Photo' : 'Add Profile Photo'}
                </span>

              </label>

              <input
                type="file"
                id="review-photo"
                accept="image/*"
                onChange={handlePhoto}
              />

            </div>

            <button
              type="submit"
              className="review-submit"
            >
              Share My Review <FaHeart />
            </button>

          </form>

        </div>


        <div className="review-list">

          {reviews.length === 0 ? (

            <div className="empty-reviews">

              <span>💌</span>

              <h3>Waiting for lovely stories!</h3>

              <p>
                Be the first to share your experience
                with us.
              </p>

            </div>

          ) : (

            reviews.map(review => (

              <div
                className="review-card"
                key={review.id}
              >

                <div className="review-person">

                  {review.photo ? (

                    <img
                      src={review.photo}
                      alt={review.name}
                      className="review-avatar"
                    />

                  ) : (

                    <div className="review-avatar default-avatar">
                      {review.name.charAt(0).toUpperCase()}
                    </div>

                  )}

                  <div>

                    <h4>{review.name}</h4>

                    <div className="stars">

                      {Array.from(
                        { length: 5 },
                        (_, i) => (

                          <span
                            key={i}
                            className={
                              i < review.rating ? 'filled' : ''
                            }
                          >
                            <FaStar />
                          </span>

                        )
                      )}

                    </div>

                  </div>

                </div>

                <p className="review-text">
                  "{review.message}"
                </p>

                <span className="verified-label">
                  <FaHeart /> Shared with love
                </span>

              </div>

            ))

          )}

        </div>

      </section>


      <section className="connect-section">

        <span className="footer-label">
          LET'S BE FRIENDS
        </span>

        <h2>Stay Connected With Us! 💕</h2>

        <p>
          Follow our little world of toys, fun and happiness.
        </p>

        <div className="social-icons">

          <a
            href="https://wa.me/0771637373"
            target="_blank"
            rel="noreferrer"
            className="social whatsapp"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="mailto:sehangasesadee@gmail.com"
            className="social email"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61577841305473"
            target="_blank"
            rel="noreferrer"
            className="social facebook"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.tiktok.com/@pinkish.x?lang=en"
            target="_blank"
            rel="noreferrer"
            className="social tiktok"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>

          <a
            href="https://www.instagram.com/d_sesadee/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="social instagram"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

        </div>

      </section>


      <div className="footer-bottom">

        <h2>🧸 TootieToys</h2>

        <p>Little Toys, Big Happiness! 💗</p>

        <div className="footer-links">

          <a href="/">Home</a>
          <a href="/#products">Shop Toys</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>

        </div>

        <div className="copyright">
          <p>© 2026 TootieToys. All Rights Reserved.<span>|</span>
          <a href="/privacy-policy">Privacy Policy</a><span>|</span>
          <a href="/terms">Terms of Service</a><span>|</span>
          <a href="/returns">Returns & Refunds</a>
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
