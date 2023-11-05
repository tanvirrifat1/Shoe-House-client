import React from "react";
import img6 from "../../../assets/assets/cover/client.png";
import img from "../../../assets/assets/cover/bg.png";

const Banner = () => {
  const myStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    height: "600px",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={myStyle} className="hero text-white">
      <div className="hero-content text-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className="lg:h-[570px]" src={img6} alt="" />
          <div className="text-start">
            <div className="text-start my-3">
              <h1 className="text-5xl font-bold">Ready</h1>
              <h1 className="text-5xl font-bold">For Help</h1>
              <h1 className="text-5xl font-bold">You</h1>
            </div>
            <p className="py-6">
              We are certified company. We provide best plumbing services for
              you & your company .
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
