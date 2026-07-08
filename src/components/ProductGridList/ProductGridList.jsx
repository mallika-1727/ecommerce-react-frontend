import { Link } from "react-router-dom";
import "./ProductGridList.css";
import cameraImg1 from "../../assets/1.jpg";
import camerago from "../../assets/1.jpg";
import watch from "../../assets/8.jpg";
import laptop from "../../assets/7.jpg";
import cameragopro from "../../assets/4.jpg";
import phone6 from "../../assets/4.jpg";
import phone4 from "../../assets/2.png";
import phone3 from "../../assets/3.jpg";
import camera from "../../assets/6.jpg";
function ProductGridList() {
  return (
    <div className="product-grid-list">

      <div className="grid-top">
        <div className="items-count">
          <b>12,911</b> items in <b>Mobile accessory</b>
        </div>

        <div className="top-right">
          <label>
            <input type="checkbox" />
            Verified only
          </label>

          <select>
            <option>Featured</option>
          </select>

          <button>☷</button>
          <button>☰</button>
        </div>
      </div>

      <div className="filter-tags">
        <span>Samsung ✕</span>
        <span>Apple ✕</span>
        <span>Poco ✕</span>
        <span>Metallic ✕</span>
        <span>4 star ✕</span>
        <span>3 star ✕</span>

        <a href="/">Clear all filter</a>
      </div>
       
       <div className="products-grid">

  <Link to="/product-details" className="grid-link">
  <div className="grid-card">

    <div className="grid-image">
      <img src={cameraImg1} alt="product" />
    </div>

    <div className="grid-content">
      <h3>$998.00</h3>
      <p className="product-name">
        Canon Camera EOS 2000,Black 10x Zoom
      </p>
      <div className="grid-rating">
        ⭐⭐⭐⭐⭐ <span>7.5</span>
      </div>
    </div>
    </div>
</Link>
   
  
 <Link to="/product-details" className="grid-link">
  <div className="grid-card">
       <div className="grid-image">
  <img src={cameragopro} alt="cameragopro" />
</div>
    <div className="grid-content">
      <h3>$998.00</h3>
      <p className="product-name">Canon Camera EOS 2000,Black 10x Zoom</p>
      <div className="grid-rating">⭐⭐⭐⭐⭐ <span>7.5</span></div>
    </div>
  </div>
  </Link>
 <Link to="/product-details" className="grid-link">
  <div className="grid-card">
     <div className="grid-image">
  <img src={phone3} alt="phone3" />
</div>
    <div className="grid-content">
      <h3>$998.00</h3>
      <p className="product-name">Canon Camera EOS 2000,Black 10x Zoom</p>
      <div className="grid-rating">⭐⭐⭐⭐⭐ <span>7.5</span></div>
    </div>
  </div>

  </Link>
<Link to="/product-details" className="grid-link">
  <div className="grid-card">
      <div className="grid-image">
  <img src={phone4} alt="phone4" />
</div>
    <div className="grid-content">
      <h3>$998.00</h3>
      <p className="product-name">Canon Camera EOS 2000,Black 10x Zoom</p>
      <div className="grid-rating">⭐⭐⭐⭐⭐ <span>7.5</span></div>
    </div>
  </div>
</Link>

<Link to="/product-details" className="grid-link">
  <div className="grid-card">
      <div className="grid-image">
  <img src={camera} alt="camera" />
</div>
    <div className="grid-content">
      <h3>$998.00</h3>
      <p className="product-name">Canon Camera EOS 2000,Black 10x Zoom</p>
      <div className="grid-rating">⭐⭐⭐⭐⭐ <span>7.5</span></div>
    </div>
  </div>
</Link>

<Link to="/product-details" className="grid-link">
  <div className="grid-card">
      <div className="grid-image">
  <img src={phone6} alt="phone6" />
</div>
    <div className="grid-content">
      <h3>$998.00</h3>
      <p className="product-name">Canon Camera EOS 2000,Black 10x Zoom</p>
      <div className="grid-rating">⭐⭐⭐⭐⭐ <span>7.5</span></div>
    </div>
  </div>
</Link>

<Link to="/product-details" className="grid-link">
  <div className="grid-card">
       <div className="grid-image">
  <img src={laptop} alt="laptop" />
</div>
    <div className="grid-content">
      <h3>$998.00</h3>
      <p className="product-name">Canon Camera EOS 2000,Black 10x Zoom</p>
      <div className="grid-rating">⭐⭐⭐⭐⭐ <span>7.5</span></div>
    </div>
  </div>
</Link>

<Link to="/product-details" className="grid-link">
  <div className="grid-card">
      <div className="grid-image">
  <img src={watch} alt="watch" />
</div>
    <div className="grid-content">
      <h3>$998.00</h3>
      <p className="product-name">Canon Camera EOS 2000,Black 10x Zoom</p>
      <div className="grid-rating">⭐⭐⭐⭐⭐ <span>7.5</span></div>
    </div>
  </div>
</Link>

<Link to="/product-details" className="grid-link">
  <div className="grid-card">
     <div className="grid-image">
  <img src={camerago} alt="camerago" />
</div>
    <div className="grid-content">
      <h3>$998.00</h3>
      <p className="product-name">Canon Camera EOS 2000,Black 10x Zoom</p>
      <div className="grid-rating">⭐⭐⭐⭐⭐ <span>7.5</span></div>
    </div>
  </div>
</Link>
</div>
</div>
    
   
    
  );
}

export default ProductGridList;