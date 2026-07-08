import "./RelatedProducts.css";
import watch from "../../assets/8.jpg";
import wallet from "../../assets/wallet.jpg";
import headphone from "../../assets/9.jpg";
import pant from "../../assets/pant.jpg";
import wallet2 from "../../assets/wallet2.jpg";
import light from "../../assets/light.jpg";
function RelatedProducts() {
  return (
    <div className="related-products">

      <h3>Related Products</h3>

      <div className="related-list">

        <div className="related-card">
          <div className="related-image">
            <img src={wallet} alt="wallet" />
            </div>
          <h4>Xiaomi Redmi 8</h4>
          <p>$32.00 - $40.00</p>
        </div>

        <div className="related-card">
          <div className="related-image">
            <img src={watch} alt="watch" />
          </div>
          <h4>Smart Watch</h4>
          <p>$19.00 - $28.00</p>
        </div>

        <div className="related-card">
          <div className="related-image">
            <img src={headphone} alt="headphone" />
          </div>
          <h4>Laptop Bag</h4>
          <p>$18.00 - $30.00</p>
        </div>

        <div className="related-card">
          <div className="related-image">
          <img src={pant} alt="pant" />  
          </div>
          <h4>Headphones</h4>
          <p>$15.00 - $22.00</p>
        </div>

        <div className="related-card">
          <div className="related-image">
          <img src={light} alt="light" />  
          </div>
          <h4>Headphones</h4>
          <p>$15.00 - $22.00</p>
        </div>

        <div className="related-card">
          <div className="related-image">
            <img src={wallet2} alt="wallet2" />
          </div>
          <h4>Camera Lens</h4>
          <p>$95.00 - $120.00</p>
        </div>

      </div>

    </div>
  );
}

export default RelatedProducts;