import "./CartItems.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const imageMap = {
  "1.jpg": new URL("../../assets/1.jpg", import.meta.url).href,
  "2.png": new URL("../../assets/2.png", import.meta.url).href,
  "3.jpg": new URL("../../assets/3.jpg", import.meta.url).href,
  "4.jpg": new URL("../../assets/4.jpg", import.meta.url).href,
  "4pagecloth.jpg": new URL("../../assets/4pagecloth.jpg", import.meta.url).href,
  "5.jpg": new URL("../../assets/5.jpg", import.meta.url).href,
  "6.jpg": new URL("../../assets/6.jpg", import.meta.url).href,
  "7.jpg": new URL("../../assets/7.jpg", import.meta.url).href,
  "8.jpg": new URL("../../assets/8.jpg", import.meta.url).href,
  "9.jpg": new URL("../../assets/9.jpg", import.meta.url).href,
};

function CartItems() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  return (
    <div className="cart-items">
      <h2 className="cart-heading">
        My Cart <span>({cart.length})</span>
      </h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your Cart is Empty 🛒</h2>

          <p>
            Start adding products to your cart and enjoy a seamless shopping experience.
          </p>

          <button
            onClick={() => (window.location.href = "/product-listing")}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-image">
                <img
                  src={imageMap[item.image]}
                  alt={item.name}
                />
              </div>

              <div className="cart-info">
                <h4>{item.name}</h4>

                <p>Category: {item.category}</p>

                <p>Status: {item.stock}</p>

                <div className="cart-actions">
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>

                  <button className="save-btn">
                    Save for later
                  </button>
                </div>
              </div>

              <div className="cart-right">
                <h4>${item.price}</h4>

                <div className="quantity-box">
                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-bottom">
            <button
              onClick={() =>
                (window.location.href =
                  "/product-listing")
              }
            >
              ← Back to shop
            </button>

            <button onClick={clearCart}>
              Remove all
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItems;