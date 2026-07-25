import "./CartSummary.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcApplePay,
} from "react-icons/fa6";

function CartSummary() {
  const { cart } = useContext(CartContext);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = subtotal > 500 ? 60 : 0;

  const tax = subtotal * 0.01;

  const total = subtotal - discount + tax;

  const navigate = useNavigate();

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
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="summary-row">
          <span>Discount:</span>
          <span className="red">
            - ${discount.toFixed(2)}
          </span>
        </div>

        <div className="summary-row">
          <span>Tax:</span>
          <span className="green">
            + ${tax.toFixed(2)}
          </span>
        </div>

        <hr />

        <div className="summary-total">
          <span>Total:</span>
          <strong>${total.toFixed(2)}</strong>
        </div>

        <button
  className="checkout-btn"
  onClick={() => navigate("/checkout")}
>
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