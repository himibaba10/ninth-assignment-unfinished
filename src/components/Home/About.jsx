import aboutUsImg from "../../assets/about-us-img.png";

const About = () => {
    return (
        <div className="bg-[rgb(10,13,18)]">
            <div className="section text-white py-20">
            <h2 className="text-4xl font-gugi text-center">About Us</h2>
            <div className="flex items-center">
                <div className="flex-1">
                <img src={aboutUsImg} className="w-96 mx-auto"/>
                </div>
                <div className="text-white flex-1">
                    <h3 className="text-4xl font-gugi mb-7 text-[#FF4444]">You&apos;re a gamer,<br/>so we know your need!</h3>
                    <p className="text-lg font-poppins mb-3">GetEvan is a complete gaming solution for you, whether you&apos;re trying to get a new game or join a community.</p>
                    <p className="text-lg font-poppins">We have a huge community for PUBG, Free Fire, Call Of Duty, etc. Plus, you can play games without paying us for 7 days!</p>
                </div>
            </div>     
        </div>
        </div>
    );
};

export default About;