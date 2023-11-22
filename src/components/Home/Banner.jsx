import HeroImg from "../../assets/hero-img.jpg";

const Banner = () => {
  return (
    <div className="bg-[rgb(10,13,18)]">
      <div className="section flex justify-between items-center">
        <div className="flex-1 text-white">
          <h2 className="text-2xl text-[#FF4444]">Gaming Reborn</h2>
          <h1 className="text-6xl mt-5 font-gugi leading-tight">
            Get our service and unleash your power
          </h1>
        </div>
        <div className="flex-1">
          <img
            className="w-2/3 ml-auto"
            src={HeroImg}
            alt="Header of hero image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
