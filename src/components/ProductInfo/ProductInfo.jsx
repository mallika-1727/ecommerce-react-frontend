import { FaStar, FaRegCommentDots } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";

import "./ProductInfo.css";

function ProductInfo({ product }) {

if (!product) {
  return <h2>Product Not Found</h2>;
}

  return (
    <div className="product-info">

    <p className="stock">✔️ {product.stock}</p>

<h2>{product.name}</h2>      
      <div className="rating-row">

  <div className="stars">
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar className="last-star" />
  </div>

  <span className="rating-score">9.3</span>

  <span className="dot">•</span>

  <span className="reviews">
    <FaRegCommentDots />
    32 reviews
  </span>

  <span className="dot">•</span>

  <span className="sold">
    <BsBoxSeam />
    154 sold
  </span>

</div>

      <div className="price-box">

        <div>
          <h3>${product.price}</h3>
          <p>50-100 pcs</p>
        </div>

        <div>
          <h3>${product.price - 10}</h3>
          <p>100-700 pcs</p>
        </div>

        <div>
         <h3>${product.price - 20}</h3>
          <p>700+ pcs</p>
        </div>

      </div>

      
    <div className="product-table">

  <div className="table-row">
    <b>Price:</b>
    <span>Negotiable</span>
  </div>

  <hr />

  <div className="table-row">
    <b>Type:</b>
    <span>Classic Shoes</span>
  </div>

  <div className="table-row">
    <b>Material:</b>
    <span>Plastic Material</span>
  </div>

  <div className="table-row">
    <b>Design:</b>
    <span>Modern Nice</span>
  </div>

  <hr />

  <div className="table-row">
    <b>Customization:</b>
    <span>Customized Logo</span>
  </div>

  <div className="table-row">
    <b>Protection:</b>
    <span>Refund Policy</span>
  </div>

  <div className="table-row">
    <b>Warranty:</b>
    <span>2 Years</span>
  </div>

  <hr />

</div>


    </div>
  );
}

export default ProductInfo;