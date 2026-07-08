import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import "./GridFilterSidebar.css";

function GridFilterSidebar() {
  return (
    <div className="grid-filter-sidebar">

      <div className="filter-box">
        <div className="filter-heading">
          <h4>Category</h4>
          <FaAngleUp />
        </div>

        <p>Mobile Accessory</p>
        <p>Electronics</p>
        <p>Smartphones</p>
        <p>Modern Tech</p>
        <span>See all</span>
      </div>

      <div className="filter-box">
        <div className="filter-heading">
          <h4>Brands</h4>
          <FaAngleUp />
        </div>

       <label><input type="checkbox" defaultChecked /> Samsung</label>
<label><input type="checkbox" defaultChecked /> Apple</label>
<label><input type="checkbox" /> Huawei</label>
<label><input type="checkbox" defaultChecked /> Poco</label>
<label><input type="checkbox" /> Lenovo</label>

        <span>See all</span>
      </div>

      <div className="filter-box">
        <div className="filter-heading">
          <h4>Features</h4>
          <FaAngleUp />
        </div>

        <label><input type="checkbox" defaultChecked /> Metallic</label>
<label><input type="checkbox" /> Plastic Cover</label>
<label><input type="checkbox"  /> 8GB RAM</label>
<label><input type="checkbox" /> Super Power</label>
<label><input type="checkbox" /> Large Memory</label>

        <span>See all</span>
      </div>

      <div className="filter-section">
  <div className="filter-heading">
    <h4>Price Range</h4>
    <FaAngleDown />
  </div>
</div>

<div className="filter-section">
  <div className="filter-heading">
    <h4>Condition</h4>
    <FaAngleDown />
  </div>
</div>

<div className="filter-section">
  <div className="filter-heading">
    <h4>Ratings</h4>
    <FaAngleDown />
  </div>
</div>

<div className="filter-section">
  <div className="filter-heading">
    <h4>Manufacturer</h4>
    <FaAngleDown />
  </div>
</div>

    </div>
  );
}

export default GridFilterSidebar;