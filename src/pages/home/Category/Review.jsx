import { Swiper, SwiperSlide } from "swiper/react";
import "../Category/Category.css";
import {
  Navigation,
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import img1 from "../../../assets/assets/category/watch1.png";
import img2 from "../../../assets/assets/category/watch16.png";
import img3 from "../../../assets/assets/category/watch19.png";
import img4 from "../../../assets/assets/category/watch16.png";
import img5 from "../../../assets/assets/category/watch14.png";
import img6 from "../../../assets/assets/category/watch6.png";
import img7 from "../../../assets/assets/category/watch10.png";
import img8 from "../../../assets/assets/category/watch15.png";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import { useQuery } from "@tanstack/react-query";

const Reviews = () => {
  const { data } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/api/v1/reviews`);
      return res.json();
    },
  });

  return (
    <div className=" w-full lg:w-[1440px] -mt-10 mx-auto">
      <section className="container relative py-10">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="block mb-2 text-lg font-semibold text-[#455a64]">
                Read trusted reviews from our customers
              </span>
              <h2 className=" text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                What Peoples Say
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Swiper
            // install Swiper modules

            modules={[Navigation, Autoplay, Keyboard, Pagination, Scrollbar]}
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="testimonal"
          >
            {data?.data?.map((review, i) => (
              <SwiperSlide className="pt-3" key={i}>
                <Card className="mt-6 w-96">
                  <CardHeader color="blue-gray" className="relative h-56">
                    <img src={review?.image} alt="card-image" />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {review?.name}
                    </Typography>
                    <Typography>{review?.details}</Typography>
                  </CardBody>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute right-20 bottom-10 hidden md:flex gap-5">
          <button className="prev z-10 w-10 h-10 rounded-full bg-blue-500 shadow-xl flex items-center hover:-translate-x-1 transition-all duration-300 justify-center group">
            <AiOutlineLeft className="w-6 h-6 text-white" />
          </button>
          <button className="next z-10 w-10 h-10 rounded-full bg-blue-500 shadow-xl flex items-center hover:translate-x-1 transition-all duration-300 justify-center group">
            <AiOutlineRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
