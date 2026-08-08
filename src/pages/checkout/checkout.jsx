import "./Checkout.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Checkout() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login to place an order.");
        navigate("/login");
        return;
      }

      const orderData = {
        products: [
          {
            product: "6a6c424c184d62010312c2b0",
            quantity: 2,
            price: 800,
          },
        ],
        totalPrice: 1600,
      };

      const response = await axios.post(
        "http://localhost:5000/api/orders",
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        alert("Order placed successfully! ✅");
        navigate("/order-success");
      }
    } catch (error) {
      console.error("Order Error:", error);

      alert(
        error.response?.data?.message ||
          "Failed to place order. Please try again."
      );
    }
  };

  return (
    <div>
      <h2>Checkout</h2>

      <div className="checkout-container">

        {/* Shipping Form */}

        <div className="shipping-form">

          <h3>Shipping Address</h3>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />

            {errors.fullName && (
              <p className="error">{errors.fullName}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && (
              <p className="error">{errors.email}</p>
            )}

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            {errors.phone && (
              <p className="error">{errors.phone}</p>
            )}

            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>

            {errors.address && (
              <p className="error">{errors.address}</p>
            )}

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />

            {errors.city && (
              <p className="error">{errors.city}</p>
            )}

            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
            />

            {errors.state && (
              <p className="error">{errors.state}</p>
            )}

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
            />

            {errors.pincode && (
              <p className="error">{errors.pincode}</p>
            )}

            <button
              type="submit"
              className="place-order-btn"
            >
              Place Order
            </button>

          </form>

        </div>

        {/* Order Summary */}

        <div className="order-summary">

          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Product</span>
            <span>$998.00</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>$20.00</span>
          </div>

          <div className="summary-row">
            <span>Tax</span>
            <span>$6.35</span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <strong>$1024.35</strong>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Checkout;