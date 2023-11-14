import React from "react";
import img6 from "../../../assets/assets/cover/client.png";
import img from "../../../assets/assets/watchCover4.png";
import "./Banner.css";
import HelpLine from "./HelpLine";

const Banner = () => {
  const myStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    height: "800px",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <div
        style={myStyle}
        className="hero text-white bg-blue-gray-900 "
        data-aos="fade-right"
        data-aos-offset="600"
        data-aos-easing="ease-in-sine"
      >
        <div className="hero-content text-center ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            {/* <img className="lg:h-[768px] lg:-mr-96" src={img6} alt="" /> */}
            <div className="text-start">
              <div className="text-start ">
                <h1 className="text-5xl py-3 font-bold">Ready</h1>
                <h1 className="text-5xl py-3 font-bold">
                  For <span className="text-blue-gray-900">Help</span>
                </h1>
                <h1 className="text-5xl py-3 font-bold">You</h1>
              </div>
              <p className="py-6 text-white">
                We are certified company. We provide best plumbing services for
                you & your company .
              </p>
              {/* <button className="btn bg-[#8c2a4e] text-white hover:text-black">
                  Book online
                </button> */}
            </div>
          </div>
        </div>
      </div>

      <div>
        <HelpLine />
      </div>
    </div>
  );
};

export default Banner;
