import "./Suppliers.css";
import uae from "../../assets/icon.png";
import australia from "../../assets/Property 1=AU.png";
import usa from "../../assets/Property 1=US.png";
import russia from "../../assets/Property 1=RU.png";
import italy from "../../assets/Property 1=IT.png";
import denmark from "../../assets/Property 1=DK.png";
import france from "../../assets/Property 1=FR.png";
import china from "../../assets/icon.png";
import uk from "../../assets/Property 1=CN.png";
import brazil from "../../assets/Property 1=GB.png";

function Suppliers() {

  const countries = [
  { name: "Arabic Emirates", image: uae },
  { name: "Australia", image: australia },
  { name: "United States", image: usa },
  { name: "Russia", image: russia },
  { name: "Italy", image: italy },
  { name: "Denmark", image: denmark },
  { name: "France", image: france },
  { name: "China", image: china },
  { name: "Great Britain", image: uk },
  { name: "Brazil", image: brazil },
];

  return (
    <section className="suppliers">

      <h2>Suppliers by Region</h2>

      <div className="supplier-grid">

        {countries.map((country, index) => (

          <div className="supplier-card" key={index}>

            <img
              src={country.image}
              alt={country.name}
            />

            <div>
              <h4>{country.name}</h4>
              <p>shopname.com</p>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Suppliers;