import "./DealsSection.css";
import watch from "../../assets/8.jpg";
import laptop from "../../assets/7.jpg";
import gopro from "../../assets/4.jpg";
import headphone from "../../assets/3.jpg";
import canon from "../../assets/6.jpg";

function DealsSection() {
 const products = [
  {
    name: "Smart Watch",
    image: watch,
    discount: "-25%",
  },
  {
    name: "Laptops",
    image: laptop,
    discount: "-15%",
  },
  {
    name: "GoPro Cameras",
    image: gopro,
    discount: "-40%",
  },
  {
    name: "Headphones",
    image: headphone,
    discount: "-25%",
  },
  {
    name: "Canon",
    image: canon,
    discount: "-25%",
  },
];

  return (
    <section className="deals">

      <div className="deals-left">

        <h3>Deals and Offers</h3>

        <p>Hyygiene Equipment</p>

        <div className="timer">

          <div>
            <span>04</span>
            <small>Days</small>
          </div>

          <div>
            <span>13</span>
            <small>Hour</small>
          </div>

          <div>
            <span>34</span>
            <small>Min</small>
          </div>

          <div>
            <span>56</span>
            <small>Sec</small>
          </div>

        </div>

      </div>

      <div className="products">

        {products.map((item, index) => (
          <div className="deal-card" key={index}>

            <img src={item.image} alt={item.name} />

            <h4>{item.name}</h4>

            <span>{item.discount}</span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default DealsSection;