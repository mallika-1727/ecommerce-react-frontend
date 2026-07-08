import "./Footer.css";
import flag from "../../assets/Property 1=US.png";
import { BsBagFill } from "react-icons/bs";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Brand Section */}
        <div className="footer-brand">

          <div className="brand-title">
            <div className="brand-logo">
              <BsBagFill />
            </div>

            <h2>Brand</h2>
          </div>

          <p>
            Best information about the company
            <br />
            goes here but now lorem ipsum is
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>

        </div>

        {/* Footer Links */}

        <div className="footer-links">

          <div>
            <h4>About</h4>
            <p>About Us</p>
            <p>Find Store</p>
            <p>Categories</p>
            <p>Blogs</p>
          </div>

          <div>
            <h4>Partnership</h4>
            <p>About Us</p>
            <p>Find Store</p>
            <p>Categories</p>
          </div>

          <div>
            <h4>Information</h4>
            <p>Help Center</p>
            <p>Money Refund</p>
            <p>Shipping</p>
          </div>

          <div>
            <h4>For Users</h4>
            <p>Login</p>
            <p>Register</p>
            <p>Settings</p>
          </div>

          <div className="footer-app">
  <h4>Get app</h4>

  <img
    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
    alt="App Store"
    className="store-btn"
  />

  <img
    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
    alt="Google Play"
    className="store-btn"
  />
</div>

        </div>

      </div>

     <div className="footer-bottom">

  <p>© 2026 Ecommerce</p>

  <div className="footer-language">

    <div className="flag-placeholder">
      <img src={flag} alt="flag" />
    </div>

    <span>English</span>

    <span className="arrow">▼</span>

  </div>

</div>
    </footer>
  );
}

export default Footer;