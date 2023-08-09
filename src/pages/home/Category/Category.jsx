import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/assets/category/watch1.png";
import img2 from "../../../assets/assets/category/watch16.png";
import img3 from "../../../assets/assets/category/watch19.png";
import img4 from "../../../assets/assets/category/watch16.png";
import img5 from "../../../assets/assets/category/watch14.png";
import img6 from "../../../assets/assets/category/watch6.png";
import img7 from "../../../assets/assets/category/watch10.png";
import img8 from "../../../assets/assets/category/watch15.png";

import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="mt-10 bg-white">
      <section className="bg-white">
        <SectionTitle
          subHeading={"From 9.00am to 11.00pm"}
          heading={"Order online"}
        />
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper mb-16"
        >
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img8} alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Category;
