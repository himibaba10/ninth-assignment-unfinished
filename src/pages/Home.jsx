import { useLoaderData } from "react-router-dom";
import Banner from "../components/Home/Banner";
import Services from "../components/Home/Services";

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <Banner />
      <Services services={services} />
    </div>
  );
};

export default Home;
