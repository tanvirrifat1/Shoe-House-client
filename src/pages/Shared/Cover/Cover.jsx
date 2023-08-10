import { Parallax } from "react-parallax";
import Navbar from "../Navbar";

const Cover = ({ img, title, paragraph }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -70, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
      >
        <Navbar />
        <div className="hero h-[700px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-3xl font-bold uppercase">{title}</h1>
              <p className="mb-5">{paragraph}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
