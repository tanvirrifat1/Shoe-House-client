import "./carousel.css";
import img1 from "../../../assets/slider/img1.png";
import img2 from "../../../assets/slider/img2.png";
import img3 from "../../../assets/slider/img3.png";
import img4 from "../../../assets/slider/img4.png";
import img5 from "../../../assets/slider/img5.png";
import img6 from "../../../assets/slider/img6.png";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={img5} className="w-full h-[700px]" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={img2} className="w-full h-[700px]" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={img3} className="w-full h-[700px]" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={img6} className="w-full h-[700px]" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-md bg-slate-300 rounded-full ">
          1
        </a>
        <a href="#item2" className="btn btn-md bg-slate-300 rounded-full">
          2
        </a>
        <a href="#item3" className="btn btn-md bg-slate-300 rounded-full">
          3
        </a>
        <a href="#item4" className="btn btn-md bg-slate-300 rounded-full">
          4
        </a>
      </div>
      <div className="text-lg bg-white">
        <marquee behavior="" direction="">
          Shoe is an item of footwear intended to protect and comfort the human
          foot. Though the human foot can adapt to varied terrains and climate
          conditions, it is vulnerable, and shoes provide protection. Form was
          originally tied to function but over time shoes also became fashion
          items. Some shoes are worn as safety equipment, such as steel-toe
          boots, which are required footwear at industrial worksites.
        </marquee>
      </div>
    </div>
  );
};

export default Banner;
