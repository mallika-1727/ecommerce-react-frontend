import "./CartSummary.css";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcApplePay,
} from "react-icons/fa6";

function CartSummary() {
  return (
    <div className="cart-summary">

      <div className="coupon-box">
        <p>Have a coupon?</p>

        <div className="coupon-input">
          <input
            type="text"
            placeholder="Add coupon"
          />

          <button>Apply</button>
        </div>
      </div>

      <div className="summary-box">

        <div className="summary-row">
          <span>Subtotal:</span>
          <span>$1403.97</span>
        </div>

        <div className="summary-row">
          <span>Discount:</span>
          <span className="red">- $60.00</span>
        </div>

        <div className="summary-row">
          <span>Tax:</span>
          <span className="green">+ $14.00</span>
        </div>

        <hr />

        <div className="summary-total">
          <span>Total:</span>
          <strong>$1357.97</strong>
        </div>

        <button className="checkout-btn">
          Checkout
        </button>
       <div className="payment-icons">
  <FaCcVisa className="pay-icon visa" />
  <FaCcMastercard className="pay-icon mastercard" />
  <FaCcPaypal className="pay-icon paypal" />
  <FaCcApplePay className="pay-icon applepay" />
</div>
       

      </div>

    </div>
  );
}

export default CartSummary;