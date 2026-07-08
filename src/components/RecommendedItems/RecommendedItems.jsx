import products from "../../data/products.json";
import "./RecommendedItems.css";
import watch from "../../assets/8.jpg";
import laptop from "../../assets/7.jpg";
import camera from "../../assets/6.jpg";
import headset from "../../assets/9.jpg";
import tshirt from "../../assets/4pagecloth.jpg";
import bag from "../../assets/5.jpg";
import phone from "../../assets/3.jpg";
import iphone from "../../assets/4.jpg";
import shoes from "../../assets/1.jpg";
import coffee from "../../assets/2.png";

function RecommendedItems() {
 const imageMap = {
  "8.jpg": watch,
  "7.jpg": laptop,
  "6.jpg": camera,
  "9.jpg": headset,
  "4pagecloth.jpg": tshirt,
  "5.jpg": bag,
  "3.jpg": phone,
  "4.jpg": iphone,
  "1.jpg": shoes,
  "2.png": coffee,
};
  return (
    <section className="recommended">
      <h2>Recommended Items</h2>

      <div className="recommended-grid">
        {products.map((item, index) => (
          <div className="recommended-card" key={index}>
            <img
              src={imageMap[item.image]}
              alt={item.name}
            />
            <h4>{item.price}</h4>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecommendedItems;