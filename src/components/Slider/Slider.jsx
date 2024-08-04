// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Slider.module.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 1700,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero h-[700px] rounded-2xl"
            style={{
              backgroundImage: "url(https://i.ibb.co/hVhsnsz/signup-Img.png)",
            }}
          >
            <div className="hero-content text-neutral-content text-center font-poppins">
              {/* SLider Content */}
              <div className="max-w-md p-12 bg-[#152A16] bg-opacity-70 backdrop-blur-md rounded-lg">
                <h1 className=" text-xl font-bold text-[#156BCA]">
                  Create Account
                </h1>
                <h1 className=" text-xl font-bold text-white">
                  Fill in Your Information
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[700px] rounded-2xl"
            style={{
              backgroundImage: "url(https://i.ibb.co/hVhsnsz/signup-Img.png)",
            }}
          >
            <div className="hero-content text-neutral-content text-center font-poppins">
              {/* SLider Content */}
              <div className="max-w-md p-12 bg-[#152A16] bg-opacity-70 backdrop-blur-md rounded-lg">
                <h1 className=" text-xl font-bold text-[#156BCA]">
                  Create Account
                </h1>
                <h1 className=" text-xl font-bold text-white">
                  Fill in Your Information
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[700px] rounded-2xl"
            style={{
              backgroundImage: "url(https://i.ibb.co/hVhsnsz/signup-Img.png)",
            }}
          >
            {/* SLider Content */}
            <div className="hero-content text-neutral-content text-center font-poppins">
              <div className="max-w-md p-12 bg-[#152A16] bg-opacity-70 backdrop-blur-md rounded-lg">
                <h1 className=" text-xl font-bold text-[#156BCA]">
                  Create Account
                </h1>
                <h1 className=" text-xl font-bold text-white">
                  Fill in Your Information
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
