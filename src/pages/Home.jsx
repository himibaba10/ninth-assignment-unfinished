import { useLoaderData } from "react-router-dom";
import About from "../components/Home/About";
import Banner from "../components/Home/Banner";
import Services from "../components/Home/Services";
import Contact from "../components/shared/Contact";

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <Banner />
      <Services services={services} />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
