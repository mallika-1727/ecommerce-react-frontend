import "./CategoryBar.css";
import { FaBars, FaChevronDown } from "react-icons/fa";

function CategoryBar() {
  return (
    <div className="category-bar">

      <div className="left-links">
        <a href="#"><FaBars /> All Category</a>
        <a href="#">Hot Offers</a>
        <a href="#">Gift Boxes</a>
        <a href="#">Projects</a>
        <a href="#">Menu Item</a>
        <a href="#">
          Help <FaChevronDown className="down-icon" />
        </a>
      </div>

      <div className="right-links">
        <a href="#">
          English, USD <FaChevronDown className="down-icon" />
        </a>

        <a href="#">
          Ship to 🇩🇪 <FaChevronDown className="down-icon" />
        </a>
      </div>

    </div>
  );
}

export default CategoryBar;