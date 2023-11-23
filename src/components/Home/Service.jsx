import { Button, Card } from "keep-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import serviceBg from "../../assets/service-bg.png";

const Service = ({ service = {} }) => {
  const { id, title, image, description, price } = service;

  return (
    <Card className="overflow-hidden rounded-md" imgSrc={image} imgSize="md">
      <Card.Container className="px-6 pt-4 pb-7 flex flex-col h-full">
        <img
          className="absolute -z-10 bottom-0 w-full left-0 opacity-50"
          src={serviceBg}
          alt=""
        />
        <Card.Container className=" text-black">
          <Card.Title className="!text-2xl font-gugi text-black">
            {title}
          </Card.Title>
          <Card.Description className="mt-2 mb-6 font-poppins">
            {description}
          </Card.Description>
        </Card.Container>
        <Card.Container className="flex flex-col items-center justify-center gap-5 mt-auto">
          <Card.Description className="mt-2 mb-6 font-poppins text-black !text-3xl font-semibold">
            {price} USD
          </Card.Description>
          <Link to={`/service/${id}`}>
            <Button
              className="px-10 font-poppins hover:bg-[#FF4444] hover:text-white"
              size="md"
              type="outlineGray"
            >
              View Details
            </Button>
          </Link>
        </Card.Container>
      </Card.Container>
    </Card>
  );
};

Service.propTypes = {
  service: PropTypes.object,
};

export default Service;
