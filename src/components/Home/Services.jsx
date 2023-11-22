import bgImage from "../../assets/blurry-gradient.png";
import PropTypes from "prop-types";
import Service from "./Service";

const Services = ({ services = [] }) => {
  const bgImageStyle = {
    backgroundImage: `linear-gradient(rgba(10,13,18,1),rgba(0,0,0,0.7)),url(${bgImage})`,
  };
  return (
    <div style={bgImageStyle} className="bg-no-repeat bg-cover">
      <div className="section text-center text-white pt-32 pb-20">
        <h2 className="text-4xl font-gugi">Our Premium Services</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

Services.propTypes = {
  services: PropTypes.array,
};

export default Services;
