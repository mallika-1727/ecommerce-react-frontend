import "./CartItems.css";
import tshirt from "../../assets/4pagecloth.jpg";
import bag from "../../assets/5.jpg";
import light from "../../assets/light.jpg";
function CartItems() {
  return (
    <div className="cart-items">
<h2 className="cart-heading">
  My Cart<span>(3)</span>
</h2>
      


      <div className="cart-item">
        <div className="cart-image">
          <img src={tshirt} alt="tshirt" />
        </div>
        <div className="cart-info">
          <h4>T-shirts with multiple colors, for men and lady</h4>

          <p>Size: medium, Color: blue, Material: Plastic</p>

          <p>Seller: Artel Market</p>

          <div className="cart-actions">
            <button className="remove-btn">Remove</button>
            <button className="save-btn">Save for later</button>
          </div>
        </div>

        <div className="cart-right">
          <h4>$78.99</h4>

          <select>
            <option>Qty: 9</option>
          </select>
        </div>
      </div>

      <div className="cart-item">
        <div className="cart-image">
          <img src={bag} alt="bag" />
        </div>

        <div className="cart-info">
          <h4>T-shirts with multiple colors, for men and lady</h4>

          <p>Size: medium, Color: blue, Material: Plastic</p>

          <p>Seller: Artel Market</p>

          <div className="cart-actions">
            <button className="remove-btn">Remove</button>
            <button className="save-btn">Save for later</button>
          </div>
        </div>

        <div className="cart-right">
          <h4>$39.00</h4>

          <select>
            <option>Qty: 3</option>
          </select>
        </div>
      </div>

      <div className="cart-item">
        <div className="cart-image">
          <img src={light} alt="light" />
        </div>

        <div className="cart-info">
          <h4>T-shirts with multiple colors, for men and lady</h4>

          <p>Size: medium, Color: blue, Material: Plastic</p>

          <p>Seller: Artel Market</p>

          <div className="cart-actions">
            <button className="remove-btn">Remove</button>
            <button className="save-btn">Save for later</button>
          </div>
        </div>

        <div className="cart-right">
          <h4>$170.50</h4>

          <select>
            <option>Qty: 1</option>
          </select>
        </div>
      </div>

      <div className="cart-bottom">
        <button>← Back to shop</button>
        <button>Remove all</button>
      </div>

    </div>
  );
}

export default CartItems;