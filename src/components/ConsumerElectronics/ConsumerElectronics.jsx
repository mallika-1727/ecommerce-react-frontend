import "./ConsumerElectronics.css";
import watch from "../../assets/8.jpg";
import camera from "../../assets/6.jpg";
import headphone from "../../assets/9.jpg";
import jug from "../../assets/jug.jpg";
import headphone2 from "../../assets/blueheadphone.jpg";
import laptop from "../../assets/7.jpg";
import phone1 from "../../assets/2.png";
import phone2 from "../../assets/1.jpg";

function ConsumerElectronics() {
  const products = [
    { name: "Smart Watches", price: " USD 19",image:watch},
    { name: "Cameras", price: " USD 89", image:camera},
    { name: "Headphones", price: "USD 10", image:headphone },
    { name: "Smart Phones", price: " USD 99", image:jug },
    { name: "Gaming Set", price: " USD 35", image:headphone2 },
    { name: "Laptops", price: " USD 340", image:laptop },
    { name: "Accessories", price: "USD 15", image:phone1},
    { name: "Tablets", price: "USD 120", image:phone2},
  ];

  return (
    <section className="consumer-electronics">

      <div className="left-banner">
        <h2>Consumer 
          <br />
          Electronics and
          <br />gadgets</h2>
        <button>Source Now</button>
      </div>

      <div className="product-grid">
        {products.map((item, index) => (
          <div className="grid-card" key={index}>
            <h4>{item.name}</h4>
          <p className="price">

  <span>From</span>
  <span>{item.price}</span>
</p>
            <img
              src={item.image}
              alt={item.name}
            />
          </div>
        ))}
      </div>

    </section>
  );
}

export default ConsumerElectronics;