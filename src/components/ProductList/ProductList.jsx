import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../../data/products.json";
import { FaRegHeart } from "react-icons/fa";
import "./ProductList.css";
const imageMap = {
  "1.jpg": new URL("../../assets/1.jpg", import.meta.url).href,
  "2.png": new URL("../../assets/2.png", import.meta.url).href,
  "3.jpg": new URL("../../assets/3.jpg", import.meta.url).href,
  "7.jpg": new URL("../../assets/7.jpg", import.meta.url).href,
  "8.jpg": new URL("../../assets/8.jpg", import.meta.url).href,
  "9.jpg": new URL("../../assets/9.jpg", import.meta.url).href,
   "4pagecloth.jpg": new URL("../../assets/4pagecloth.jpg", import.meta.url).href,
   "5.jpg": new URL("../../assets/5.jpg", import.meta.url).href,
   "6.jpg": new URL("../../assets/6.jpg", import.meta.url).href,
  
};



function ProductList() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

const filteredProducts = products.filter((item) => {
  const matchesSearch = item.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    category === "All" || item.category === category;

  return matchesSearch && matchesCategory;
});

  return (
    <div className="product-list">

    <div className="product-top">

  <div className="items-count">
    12,911items in <b>Mobile Accessory</b>
  </div>
   
   <input
  type="text"
  placeholder="Search products..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="search-box"
/>


<select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="All">All Categories</option>
  <option value="Electronics">Electronics</option>
  <option value="Clothing">Clothing</option>
  <option value="Accessories">Accessories</option>
  <option value="Home">Home</option>
  <option value="Furniture">Furniture</option>
  <option value="Shoes">Shoes</option>
</select>

  <div className="top-right">

    <label>
      <input type="checkbox" />
      Verified only
    </label>

    <select>
      <option>Featured</option>
      <option>Newest</option>
      <option>Lowest Price</option>
      <option>Highest Price</option>
    </select>

    <button>☰</button>
    <button>☷</button>

  </div>

</div>
{filteredProducts.map((item) => (
  <div className="product-card" key={item.id}>

    <div className="product-image">
      <img
        src={imageMap[item.image]}
        alt={item.name}
      />
    </div>

    <div className="product-details">

      <h3>{item.name}</h3>

      <div className="price">
        <h2>${item.price}</h2>
        <span className="old-price">
          ${item.price + 100}
        </span>
      </div>

      <div className="rating">
        <span className="stars">⭐⭐⭐⭐⭐</span>
        <span className="rate-number">7.5</span>
        <span className="dot">|</span>
        <span className="orders">154 orders</span>
        <span className="dot">|</span>
        <span className="shipping">Free Shipping</span>
      </div>

      <p className="description">
        {item.description}
      </p>

      <Link
        to={`/product-details/${item.id}`}
        className="view-details"
      >
        View Details
      </Link>

    </div>

    <div className="wishlist">
      <FaRegHeart />
    </div>

  </div>
))}
<div className="pagination">

  <select className="show-more">
    <option>Show 10</option>
    <option>Show 20</option>
    <option>Show 30</option>
  </select>

  <button className="page-arrow">‹</button>

  <button className="page-number active">1</button>
  <button className="page-number">2</button>
  <button className="page-number">3</button>

  <button className="page-arrow">›</button>

</div>
      

    </div>
  );
}

export default ProductList;