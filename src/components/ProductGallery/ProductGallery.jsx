import "./ProductGallery.css";
import products from "../../data/products.json";

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

function ProductGallery({ product }) {

  if (!product) {
    return <h2>Product Not Found</h2>;
  }
  return (
    <div className="product-gallery">

      <div className="main-image">
        <img
  src={imageMap[product.image]}
  alt={product.name}
/>
      </div>

      <div className="thumbnail-images">

  <div className="thumb">
  <img
  src={imageMap[product.image]}
  alt={product.name}
/>
  </div>

  <div className="thumb">
    <img
  src={imageMap[product.image]}
  alt={product.name}
/>
  </div>

  <div className="thumb">
    <img
  src={imageMap[product.image]}
  alt={product.name}
/>
  </div>

  <div className="thumb">
    <img
  src={imageMap[product.image]}
  alt={product.name}
/> 
  </div>

  <div className="thumb">
 <img
  src={imageMap[product.image]}
  alt={product.name}
/>
  </div>

  <div className="thumb">
 <img
  src={imageMap[product.image]}
  alt={product.name}
/>
  </div>

</div>

    </div>
  );
}

export default ProductGallery;