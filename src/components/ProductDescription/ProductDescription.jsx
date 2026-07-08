import "./ProductDescription.css";

function ProductDescription({ product }) {

if (!product) {
    return <h2>Product Not Found</h2>;
  }


  return (
    <div className="product-description">

      <div className="tabs">

        <button className="active">Description</button>
        <button>Reviews</button>
        <button>Shipping</button>
        <button>About Seller</button>

      </div>

      <div className="description-content">

        <p>
  {product.description}
</p>
        <table>

          <tbody>

            <tr>
  <td>Category</td>
  <td>{product.category}</td>
</tr>

            <tr>
              <td>Model</td>
              <td>#8786867</td>
            </tr>

            <tr>
              <td>Style</td>
              <td>Classic Style</td>
            </tr>

            <tr>
              <td>Certificate</td>
              <td>ISO-898921212</td>
            </tr>

            <tr>
              <td>Size</td>
              <td>34mm x 450mm</td>
            </tr>

            <tr>
              <td>Memory</td>
              <td>36GB RAM</td>
            </tr>

          </tbody>

        </table>

        <ul className="feature-list">

          <li>✔️ Some great feature</li>
          <li>✔️ Premium Quality</li>
          <li>✔️ Easy to use</li>
          <li>✔️ Long Warranty</li>

        </ul>

      </div>

    </div>
  );
}

export default ProductDescription;