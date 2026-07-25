import "./OrderSummary.css";
import { useNavigate } from "react-router-dom";

function OrderSummary() {

  const navigate = useNavigate();

  return (
    <div className="order-summary-page">

      <h2>Order Summary</h2>

      <div className="summary-container">

        <div className="order-products">

          <div className="summary-product">
            <img src="https://via.placeholder.com/90" alt="product" />

            <div>
              <h4>Canon Camera EOS 2000</h4>
              <p>Qty : 1</p>
              <p>$998.00</p>
            </div>

          </div>

          <div className="summary-product">
            <img src="https://via.placeholder.com/90" alt="product" />

            <div>
              <h4>Apple Smart Watch</h4>
              <p>Qty : 2</p>
              <p>$250.00</p>
            </div>

          </div>

        </div>

        <div className="price-summary">

          <h3>Payment Summary</h3>

          <div className="price-row">
            <span>Subtotal</span>
            <span>$1248.00</span>
          </div>

          <div className="price-row">
            <span>Shipping</span>
            <span>$20.00</span>
          </div>

          <div className="price-row">
            <span>Tax</span>
            <span>$12.48</span>
          </div>

          <hr />

          <div className="price-row total">
            <span>Total</span>
            <span>$1280.48</span>
          </div>

          <button
            className="place-order-btn"
            onClick={() => navigate("/order-success")}
          >
            Place Order
          </button>

        </div>

      </div>

    </div>
  );
}

export default OrderSummary;