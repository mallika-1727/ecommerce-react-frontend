import "./ForgotPassword.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid Email");
      return;
    }

    setError("");
    alert("Reset link sent successfully ✅");
  };

  return (
    <div className="forgot-page">

      <form
        className="forgot-box"
        onSubmit={handleSubmit}
      >

        <h2>Forgot Password</h2>

        <p className="forgot-text">
          Enter your registered email address.
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {error && (
          <p className="error">{error}</p>
        )}

        <button type="submit">
          Send Reset Link
        </button>

        <p>
          <Link to="/login">
            Back to Login
          </Link>
        </p>

      </form>

    </div>
  );
}

export default ForgotPassword;