import { Link } from "react-router-dom";
import "./ProductGridList.css";
import { useEffect, useState } from "react";
import API from "../../services/api";

function ProductGridList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await API.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-grid-list">

      <div className="grid-top">
        <div className="items-count">
          <b>{products.length}</b> items
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
        {products.map((product) => (
          <Link
            key={product._id}
            to={`/product-details/${product._id}`}
            className="grid-link"
          >
            <div className="grid-card">

              <div className="grid-image">
  <img
    src={`http://localhost:5000/uploads/${product.image}`}
    alt={product.name}
    style={{
      width: "180px",
      height: "180px",
      objectFit: "contain"
    }}
  />
</div>

              <div className="grid-content">
                <h3>₹{product.price}</h3>

                <p className="product-name">
                  {product.name}
                </p>

                <div className="grid-rating">
                  ⭐⭐⭐⭐⭐ <span>7.5</span>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}

export default ProductGridList;