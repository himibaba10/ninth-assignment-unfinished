import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetail = () => {
    const services = useLoaderData();
    const { id } = useParams();
    const selectedService = services.find(service => service.id === Number(id));
    const { title, image, detail, price, description } = selectedService;
    return (
        <div className="bg-[rgb(10,13,18)] py-14">
            <div className="section text-white">
                <h2 className="text-4xl font-gugi text-center">{title}</h2>
                <p className="font-poppins text-center max-w-lg mx-auto mt-3 mb-7">{description}</p>
                <div className="border-[1px] rounded-lg border-[#FF4444] text-center py-10">
                <img className="mx-auto mb-3" src={image} alt="" />
                <span className="font-gugi text-4xl">Price: {price}USD</span>
                </div>
                <p className="font-poppins mt-7 leading-relaxed">{detail}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;