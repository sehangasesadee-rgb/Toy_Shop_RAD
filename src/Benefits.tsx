
import { Link } from 'react-router-dom';
import './App.css';

const Benefits = () => {
  return (
    <section className="benefits">
      <Link to="/returns" className="benefit-card returns">
        <span>↩</span>
        <div>
          <b>Return &amp; Refund</b>
          <small>Easy returns</small>
        </div>
        <strong>→</strong>
      </Link>

      <Link to="/payment" className="benefit-card payment">
        <span>♙</span>
        <div>
          <b>Secure Payment</b>
          <small>Safe shopping</small>
        </div>
        <strong>→</strong>
      </Link>

      <Link to="/support" className="benefit-card support">
        <span>☏</span>
        <div>
          <b>Quality Support</b>
          <small>Here to help</small>
        </div>
        <strong>→</strong>
      </Link>

      <Link to="/offers" className="benefit-card offers">
        <span>♧</span>
        <div>
          <b>Daily Offers</b>
          <small>Deals you will love</small>
        </div>
        <strong>→</strong>
      </Link>
    </section>
  );
};

export default Benefits;
