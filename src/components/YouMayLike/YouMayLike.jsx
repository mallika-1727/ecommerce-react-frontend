import "./YouMayLike.css";
import bag from "../../assets/5.jpg";
import suit from "../../assets/suit.jpg";
import tshirt from "../../assets/4pagecloth.jpg";
import coat from "../../assets/coat.jpg";
import bluetshirt from "../../assets/bluetshirt.jpg";

function YouMayLike() {
  return (
    <div className="you-may-like">

      <h3>You may like</h3>

      <div className="like-item">
        <div className="like-image">
          <img src={suit} alt="suit" />
        </div>
        <div>
          <p>Men Blazers Sets Elegant</p>
          <span>$7.00 - $99.50</span>
        </div>
      </div>

      <div className="like-item">
        <div className="like-image">
          <img src={tshirt} alt="tshirt" /></div>
        <div>
          <p>Men Shirt Sleeve Polo</p>
          <span>$7.00 - $99.50</span>
        </div>
      </div>

      <div className="like-item">
        <div className="like-image">
          <img src={coat} alt="coat" />
        </div>
        <div>
          <p>Apple Watch Series</p>
          <span>$7.00 - $99.50</span>
        </div>
      </div>

      <div className="like-item">
        <div className="like-image">
          <img src={bluetshirt} alt="bluetshirt" />
        </div>
        <div>
          <p>Basketball Crew Socks</p>
          <span>$7.00 - $99.50</span>
        </div>
      </div>

      <div className="like-item">
        <div className="like-image">
          <img src={bag} alt="bag" />
        </div>
        <div>
          <p>New Summer Men's Shoes</p>
          <span>$7.00 - $99.50</span>
        </div>
      </div>

    </div>
  );
}

export default YouMayLike;