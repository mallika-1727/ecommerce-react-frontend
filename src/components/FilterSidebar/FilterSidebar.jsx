import { FaAngleDown } from "react-icons/fa";
import "./FilterSidebar.css";

function FilterSidebar() {
  return (
    <div className="filter-sidebar">

      <div className="filter-box">

        <div className="filter-heading">
  <h4>Category</h4>
  <FaAngleDown />
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
  <FaAngleDown />
</div>

        <label><input type="checkbox" /> Samsung</label>
        <label><input type="checkbox" /> Apple</label>
        <label><input type="checkbox" /> Huawei</label>
        <label><input type="checkbox" /> Poco</label>
        <label><input type="checkbox" /> Lenovo</label>
      </div>

      <div className="filter-box">

<div className="filter-heading">
  
        <h4>Features</h4>
  <FaAngleDown />
</div>

        <label><input type="checkbox" /> Metallic</label>
        <label><input type="checkbox" /> Plastic Cover</label>
        <label><input type="checkbox" /> 8GB RAM</label>
        <label><input type="checkbox" /> Super Power</label>
        <label><input type="checkbox" /> Large Memory</label>
      </div>

      <div className="filter-box">

  <div className="filter-heading">
    <h4>Price Range</h4>
    <FaAngleDown />
  </div>

  <input type="range" min="0" max="9999" />

  <div className="price-inputs">
    <input type="text" placeholder="Min" />
    <input type="text" placeholder="Max" />
  </div>

  <button className="apply-btn">Apply</button>

</div>

<div className="filter-box">

<div className="filter-heading">
  
        <h4>Condition</h4>
  <FaAngleDown />
</div>

       <label className="active-radio">
  <input type="radio" name="condition" defaultChecked /> Any
</label>
        <label><input type="radio" name="condition" /> Refurbished</label>
        <label><input type="radio" name="condition" /> Brand New</label>
        <label><input type="radio" name="condition" /> Old Items</label>
      </div>


<div className="filter-box">

  <div className="filter-heading">
    <h4>Ratings</h4>
    <FaAngleDown />
  </div>

  <label><input type="checkbox" /> ⭐⭐⭐⭐⭐</label>
  <label><input type="checkbox" /> ⭐⭐⭐⭐☆</label>
  <label><input type="checkbox" /> ⭐⭐⭐☆☆</label>
   <label><input type="checkbox" /> ⭐⭐☆☆☆</label>

</div>


    </div>
  );
}

export default FilterSidebar;