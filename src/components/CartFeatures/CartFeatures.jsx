import "./CartFeatures.css";
import { FaLock, FaCommentDots, FaTruck } from "react-icons/fa";

function CartFeatures() {
  return (
    <div className="cart-features">

      <div className="feature-card">
        <div className="feature-icon">
          <FaLock />
        </div>

        <div>
          <h4>Secure payment</h4>
          <p>Have you ever finally just</p>
        </div>
      </div>

      <div className="feature-card">
        <div className="feature-icon">
          <FaCommentDots />
        </div>

        <div>
          <h4>Customer support</h4>
          <p>Have you ever finally just</p>
        </div>
      </div>

      <div className="feature-card">
        <div className="feature-icon">
          <FaTruck />
        </div>

        <div>
          <h4>Free delivery</h4>
          <p>Have you ever finally just</p>
        </div>
      </div>

    </div>
  );
}

export default CartFeatures;