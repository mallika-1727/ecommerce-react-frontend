import "./Signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Confirm Password is required";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Signup Successful 🎉");
    }
  };

  return (
    <div className="signup-page">
      <form
        className="signup-box"
        onSubmit={handleSubmit}
      >
        <h2>Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />

        {errors.name && (
          <p className="error">{errors.name}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        {errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <div className="password-box">
          <input
            type={
              showPassword ? "text" : "password"
            }
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <span
            className="toggle-password"
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        {errors.password && (
          <p className="error">
            {errors.password}
          </p>
        )}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        {errors.confirmPassword && (
          <p className="error">
            {errors.confirmPassword}
          </p>
        )}

        <button type="submit">
          Signup
        </button>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;