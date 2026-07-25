import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleLogin = () => {
    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid Email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Login Successful ✅");
    }
  };

  return (
    <div className="login-page">

      <form
        className="login-box"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <div className="password-box">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>

        </div>

        {errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <button type="submit">
          Login
        </button>

        <p>
  <Link to="/forgot-password">
    Forgot Password?
  </Link>
</p>

        <p>
          Don't have an account?
          <Link to="/signup"> Signup</Link>
        </p>

      </form>

    </div>
  );
}

export default Login;