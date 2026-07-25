import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Navbar.css";
import {
  FaUserAlt,
  FaShoppingCart,
  FaRegHeart,
} from "react-icons/fa";
import { MdMessage } from "react-icons/md";

function Navbar() {
  const { cart } = useContext(CartContext);

  const [search, setSearch] = useState("");
  const [searchError, setSearchError] = useState("");

  const handleSearch = () => {
    if (!search.trim()) {
      setSearchError("Search term is required");
      return;
    }

    setSearchError("");
    alert("Searching for: " + search);
  };

  return (
    <>
      <div className="navbar">

        <Link to="/" className="logo">
          <h2>Brand</h2>
        </Link>

        <div className="search-box">

          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select>
            <option>All Category</option>
          </select>

          <button onClick={handleSearch}>
            Search
          </button>

        </div>

        {searchError && (
          <p className="error">{searchError}</p>
        )}

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
            <div className="cart-icon-box">

              <FaShoppingCart />

              {cart.length > 0 && (
                <span className="cart-badge">
                  {cart.reduce(
                    (total, item) => total + item.quantity,
                    0
                  )}
                </span>
              )}

              <p>Cart</p>

            </div>
          </Link>

        </div>

      </div>
    </>
  );
}

export default Navbar;