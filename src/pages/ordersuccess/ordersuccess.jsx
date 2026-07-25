import "./OrderSuccess.css";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function OrderSuccess() {
  return (
    <div className="success-page">

      <div className="success-card">

        <FaCheckCircle className="success-icon" />

        <h2>Order Placed Successfully!</h2>

        <p>
          Thank you for shopping with us.
          <br />
          Your order has been placed successfully.
        </p>

        <Link to="/">
          <button className="home-btn">
            Continue Shopping
          </button>
        </Link>

      </div>

    </div>
  );
}

export default OrderSuccess;