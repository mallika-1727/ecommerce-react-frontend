import "./SavedForLater.css";
import { FaShoppingCart } from "react-icons/fa";
import phone1 from "../../assets/2.png";
import phone2 from "../../assets/4.jpg";
import watch from "../../assets/8.jpg";
import laptop from "../../assets/7.jpg";


function SavedForLater() {
  return (
    <div className="saved-products">

      <h3>Saved for later</h3>

      <div className="saved-grid">

        <div className="saved-card">
          <div className="saved-image">
             <img src={phone1} alt="phone1" />
          </div>
                      
          <h4>$99.50</h4>

          <p>GoPro HERO6 4K Action Camera</p>

          <button className="move-cart-btn">
  <FaShoppingCart className="cart-icon" />
  Move to cart
</button>
        </div>

        <div className="saved-card">
          <div className="saved-image">
            <img src={phone2} alt="phone2" />
          </div>

          <h4>$99.50</h4>

          <p>GoPro HERO6 4K Action Camera</p>

          
          <button className="move-cart-btn">
  <FaShoppingCart className="cart-icon" />
  Move to cart
</button>
        </div>

        <div className="saved-card">
          <div className="saved-image">
            <img src={watch} alt="watch" /></div>

          <h4>$99.50</h4>

          <p>GoPro HERO6 4K Action Camera</p>
          <button className="move-cart-btn">
  <FaShoppingCart className="cart-icon" />
  Move to cart
</button>
          
        </div>

        <div className="saved-card">
          <div className="saved-image">
            <img src={laptop} alt="laptop" /></div>

          <h4>$99.50</h4>

          <p>GoPro HERO6 4K Action Camera</p>

         <button className="move-cart-btn">
  <FaShoppingCart className="cart-icon" />
  Move to cart
</button>
        </div>

    </div>
      </div>
  );
}

export default SavedForLater;