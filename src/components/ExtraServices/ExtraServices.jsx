import "./ExtraServices.css";
import service3 from "../../assets/image 106.png";
import service1 from "../../assets/Mask group.png";
import service2 from "../../assets/Mask group (1).png";
import service4 from "../../assets/Mask group (2).png";

function ExtraServices() {

  const services = [
    {
      title: "Source from Industry Hubs",
      image:service1,
    },
    {
      title: "Customize Your Products",
         image:service2,
    },
    {
      title: "Fast, reliable shipping",
         image:service3,
    },
    {
      title: "Product monitoring and inspection",
         image:service4,
    }
  ];

  return (
    <section className="extra-services">

      <h2>Our Extra Services</h2>

      <div className="service-grid">

        {services.map((item, index) => (

          <div className="service-card" key={index}>

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="service-content">
              <h4>{item.title}</h4>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ExtraServices;