import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaUserAlt, FaShoppingCart,FaRegHeart } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

function Navbar() {
  return (
    <>
      <div className="navbar">

        <Link to="/" className="logo">
  <h2>Brand</h2>
</Link>
        <div className="search-box">
          <input type="text" placeholder="Search" />

          <select>
            <option>All Category</option>
          </select>

          <button>Search</button>
        </div>

        <div className="icons">

          <div>
            <FaUserAlt />
            <p>Profile</p>
          </div>

          <div>
            <MdMessage />
            <p>Message</p>
          </div>

          <div>
            <FaRegHeart />
            <p>Orders</p>
          </div>

         <Link to="/cart" className="icon-link">
  <div>
    <FaShoppingCart />
    <p>Cart</p>
  </div>
</Link>
        </div>

      </div>
    </>
  );
}

export default Navbar;