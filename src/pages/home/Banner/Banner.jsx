import "./carousel.css";

import img2 from "../../../assets/assets/watch5.png";
import img3 from "../../../assets/assets/watch7.png";
import img5 from "../../../assets/assets/watch3.png";
import img6 from "../../../assets/assets/watch2.png";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Banner = () => {
  const bannars = [
    {
      id: 1,
      title: " Plumbing Service",
      subTitle1: "We Provide World Class",
      subTitle2: "House shifting services in Dhaka",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image:
        "https://i.ibb.co/SmK7wt7/29709195-rs27rwix6gc44dgjnwisuy5m-Extra-Large.webp",
    },
    {
      id: 2,
      title: "Expert Plumbing Service You Can Trust.",
      subTitle1: "We Provide World Class",
      subTitle2: "House shifting services in Dhaka",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: "https://i.ibb.co/qprYHxR/s-l1200.webp",
    },
    {
      id: 3,
      title: "Expert Plumbing Service You Can Trust.",
      subTitle1: "We Provide World Class",
      subTitle2: "House shifting services in Dhaka",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: "https://i.ibb.co/syrSgf5/84-37-731.webp",
    },
  ];

  return (
    <div>
      {""}
      <AwesomeSlider
        animation="foldOutAnimation"
        className="h-[270px] md:h-[70vh] lg:h-[80vh] w-[100vw]"
      >
        {bannars?.map((banner) => (
          <>
            <div
              key={bannars?.id}
              className="hero min-w-[100vw] min-h-[100vh] object-fill"
              style={{
                backgroundImage: `url(${banner?.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content w-full text-center text-neutral-content">
                <div className="max-w-md"></div>
              </div>
            </div>
          </>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
