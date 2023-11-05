import React from "react";
import img6 from "../../../assets/assets/cover/client.png";
import img from "../../../assets/assets/cover/cover.png";
import "./Banner.css";
import HelpLine from "./HelpLine";

const Banner = () => {
  const myStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    height: "600px",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <div>
        <div style={myStyle} className="hero text-white bg-blue-gray-900">
          <div className="hero-content text-center ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              {/* <img className="lg:h-[568px] " src={img6} alt="" /> */}
              <div className="text-start">
                <div className="text-start ">
                  <h1 className="text-5xl py-3 font-bold">Ready</h1>
                  <h1 className="text-5xl py-3 font-bold">For Help</h1>
                  <h1 className="text-5xl py-3 font-bold">You</h1>
                </div>
                <p className="py-6">
                  We are certified company. We provide best plumbing services
                  for you & your company .
                </p>
                <button className="btn bg-[#455a64] text-white hover:text-black">
                  Book online
                </button>
              </div>
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
