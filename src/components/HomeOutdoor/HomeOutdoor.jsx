import "./HomeOutdoor.css";
import sofa from "../../assets/sofa.jpg";
import light from "../../assets/light.jpg";
import fryer from "../../assets/fryer.jpg";
import dish from "../../assets/dish.jpg";
import fruitmixer from "../../assets/fruitmixer.jpg";
import mixer from "../../assets/mixer.jpg";
import wallet2 from "../../assets/wallet2.jpg";
import pot from "../../assets/pot.jpg";


function HomeOutdoor() {

const products = [
  { name: "Soft Chairs", price: "USD 19", image: sofa },
  { name: "Sofa & Chair", price: "USD 39", image: light },
  { name: "Kitchen Dishes", price: "USD 29", image: fryer },
  { name: "Smart Lamps", price: "USD 19", image: dish },
  { name: "Kitchen Mixer", price: "USD 100", image: fruitmixer },
  { name: "Blenders", price: "USD 39", image: mixer },
  { name: "Home Appliance", price: "USD 19", image: wallet2 },
  { name: "Coffee Maker", price: "USD 10", image: pot},
];
  return (
    <section className="home-outdoor">

      <div className="left-banner">

        <h2>
          Home and
          <br />
          Outdoor
        </h2>

        <button>Source now</button>

      </div>

      <div className="product-grid">

        {products.map((item, index) => (

          <div className="grid-card" key={index}>

            <div>

              <h4>{item.name}</h4>

              <p className="price">
                <span>From</span>
                <span>{item.price}</span>
              </p>

            </div>

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

export default HomeOutdoor;