import "./Hero.css";
import { FaUserCircle } from "react-icons/fa";
import banner from "../../assets/banner.png";

function Hero() {
  return (
    <section className="hero">

      {/* Left Menu */}

      <div className="left-menu">
        <ul>
          <li className="active">Automobiles</li>
          <li>Clothes and Wear</li>
          <li>Home Interiors</li>
          <li>Computer and Tech</li>
          <li>Tools & Equipments</li>
          <li>Sports and Outdoor</li>
          <li>Animal and Pets</li>
          <li>Machinery Tools</li>
          <li>More Categories</li>
        </ul>
      </div>

      {/* Banner */}

    <div className="banner">

  <div className="hero-content">
    <h4>Latest trending</h4>

    <h1>
      Electronic items
    </h1>

    <button>Learn more</button>
  </div>

</div>
        
      {/* Right Cards */}

      <div className="right-card">

        <div className="user-card">

          <FaUserCircle className="user-icon" />

          <h4>Hi, User</h4>

          <p>Let's get started</p>

          <button>Join now</button>

          <button>Log in</button>

        </div>

        <div className="offer orange">
          Get US $10 off
          <br />
          with a new supplier
        </div>

        <div className="offer blue">
          Send quotes with
          <br />
          supplier preferences
        </div>

      </div>

    </section>
  );
}

export default Hero;