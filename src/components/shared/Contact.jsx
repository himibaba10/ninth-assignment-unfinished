import {  FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="bg-[rgb(10,13,18)] py-20 border-t-[1px]">
            <div className="section text-white">
                <h2 className="text-4xl font-gugi text-center">Have questions?</h2>
                <p className="text-center font-poppins mt-2 mb-5">Have questions about payments or price plans? We have answers!</p>
                <div className="grid grid-cols-3 gap-6 text-xl">
                    <div className="border-2 border-[#FF4444] py-7 px-5 rounded-md">
                        <FaRegEnvelope size={"50"}/>
                        <span className="font-poppins inline-block mt-3">himibaba10@gmail.com</span>
                    </div>
                    <div className="border-2 border-[#FF4444] py-7 px-5 rounded-md">
                        <FaPhoneAlt size={"50"}/>
                        <span className="font-poppins inline-block mt-3">himibaba10@gmail.com</span>
                    </div>
                    <div className="border-2 border-[#FF4444] py-7 px-5 rounded-md">
                        <FaMapMarkerAlt size={"50"}/>
                        <span className="font-poppins inline-block mt-3">himibaba10@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;