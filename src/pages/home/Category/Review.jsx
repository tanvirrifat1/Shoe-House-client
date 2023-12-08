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

import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

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
  Avatar,
} from "@material-tailwind/react";

import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { useGetAllReviewsQuery } from "../../../Redux/api/reviewApi";

const Reviews = () => {
  const { data, isLoading } = useGetAllReviewsQuery(undefined);

  // const { data, isLoading } = useQuery({
  //   queryKey: ["data"],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `https://watch-shop-mongoose.vercel.app/api/v1/reviews`
  //     );
  //     return res.json();
  //   },
  // });

  if (isLoading) {
    return (
      <div className="mt-52">
        <p className="text-5xl text-center min-h-[500px] ">Loading...</p>;
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <section className="container relative py-10">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <SectionTitle
              heading={"What Peoples Say"}
              subHeading={"Read trusted reviews from our customers"}
            />
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
                <Card
                  color="transparent"
                  shadow={false}
                  className="w-full max-w-[26rem] border lg:h-[300px] border-black p-4"
                >
                  <CardHeader
                    color="transparent"
                    floated={false}
                    shadow={false}
                    className="mx-0  flex items-center gap-4 pt-0 pb-8"
                  >
                    <Avatar
                      size="lg"
                      variant="circular"
                      src={review?.image}
                      alt="tania andrew"
                      className="h-16 w-20"
                    />
                    <div className="flex w-full flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray">
                          {review?.name}
                        </Typography>
                        <div className="flex justify-center mt-2 gap-0.5 ">
                          {Array(review?.rating)
                            .fill(0)
                            .map((index, i) => (
                              <AiFillStar
                                key={i}
                                className="w-6 h-6 text-yellow-900"
                              />
                            ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="mb-6 p-0">
                    <Typography>{review?.details.slice(0, 200)}...</Typography>
                  </CardBody>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="absolute right-20 bottom-10 hidden md:flex gap-5">
          <button className="prev z-10 w-10 h-10 rounded-full bg-blue-500 shadow-xl flex items-center hover:-translate-x-1 transition-all duration-300 justify-center group">
            <AiOutlineLeft className="w-6 h-6 text-white" />
          </button>
          <button className="next z-10 w-10 h-10 rounded-full bg-blue-500 shadow-xl flex items-center hover:translate-x-1 transition-all duration-300 justify-center group">
            <AiOutlineRight className="w-6 h-6 text-white" />
          </button>
        </div> */}
      </section>
    </div>
  );
};

export default Reviews;
