// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Testimonial.module.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { FaLocationDot } from "react-icons/fa6";

export default function Slider() {
  return (
    <div>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 1700,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="space-y-10 mb-10">
            <div className="w-full md:w-[500px] h-[full] mx-auto card card-side bg-base-100 shadow-xl border border-gray-200">
              <img
                className="w-full md:w-[300px] h-[200px] rounded-lg p-3"
                src="https://i.ibb.co/Jjb0GD2/card-1.png"
              />

              <div className="">
                <div className="flex justify-start items-center gap-2 mb-3 mt-5 font-poppins">
                  <FaLocationDot />
                  <p className=" text-[#5C635A] text-sm">
                    123 Elm Street, New York
                  </p>
                </div>
                <h5 className="text-[#232F3C] text-sm md:text-base font-semibold font-poppins my-2 md:my-4">
                  Healing Bodywork{" "}
                  <span className="italic text-[#156BCA]">by Cort</span>
                </h5>
                <p className="text-xs text-[#5C635A]">
                  {`Cort's healing bodywork massage was absolutely transformative.
                Their intuitive touch and deep understanding of...`}
                  <span className="text-[#156BCA] underline">Read More</span>
                </p>
              </div>
            </div>
            <div className="w-full md:w-[500px] h-[full] mx-auto card card-side bg-base-100 shadow-xl border border-gray-200">
              <img
                className="w-full md:w-[300px] h-[200px] rounded-lg p-3"
                src="https://i.ibb.co/ZWBvnkJ/card-2.png"
              />

              <div className="">
                <div className="flex justify-start items-center gap-2 mb-3 mt-5 font-poppins">
                  <FaLocationDot />
                  <p className=" text-[#5C635A] text-sm">
                    123 Elm Street, New York
                  </p>
                </div>
                <h5 className="text-[#232F3C] text-sm md:text-base font-semibold font-poppins my-2 md:my-4">
                  Healing Bodywork{" "}
                  <span className="italic text-[#156BCA]">by Cort</span>
                </h5>
                <p className="text-xs text-[#5C635A]">
                  {`Cort's healing bodywork massage was absolutely transformative.
                Their intuitive touch and deep understanding of...`}
                  <span className="text-[#156BCA] underline">Read More</span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* 2--- */}
        <SwiperSlide>
          <div className="space-y-10 mb-10">
            <div className="w-full md:w-[500px] h-[full] mx-auto card card-side bg-base-100 shadow-xl border border-gray-200">
              <img
                className="w-full md:w-[300px] h-[200px] rounded-lg p-3"
                src="https://i.ibb.co/Jjb0GD2/card-1.png"
              />

              <div className="">
                <div className="flex justify-start items-center gap-2 mb-3 mt-5 font-poppins">
                  <FaLocationDot />
                  <p className=" text-[#5C635A] text-sm">
                    123 Elm Street, New York
                  </p>
                </div>
                <h5 className="text-[#232F3C] text-sm md:text-base font-semibold font-poppins my-2 md:my-4">
                  Healing Bodywork{" "}
                  <span className="italic text-[#156BCA]">by Cort</span>
                </h5>
                <p className="text-xs text-[#5C635A]">
                  {`Cort's healing bodywork massage was absolutely transformative.
                Their intuitive touch and deep understanding of...`}
                  <span className="text-[#156BCA] underline">Read More</span>
                </p>
              </div>
            </div>
            <div className="w-full md:w-[500px] h-[full] mx-auto card card-side bg-base-100 shadow-xl border border-gray-200">
              <img
                className="w-full md:w-[300px] h-[200px] rounded-lg p-3"
                src="https://i.ibb.co/ZWBvnkJ/card-2.png"
              />

              <div className="">
                <div className="flex justify-start items-center gap-2 mb-3 mt-5 font-poppins">
                  <FaLocationDot />
                  <p className=" text-[#5C635A] text-sm">
                    123 Elm Street, New York
                  </p>
                </div>
                <h5 className="text-[#232F3C] text-sm md:text-base font-semibold font-poppins my-2 md:my-4">
                  Healing Bodywork{" "}
                  <span className="italic text-[#156BCA]">by Cort</span>
                </h5>
                <p className="text-xs text-[#5C635A]">
                  {`Cort's healing bodywork massage was absolutely transformative.
                Their intuitive touch and deep understanding of...`}
                  <span className="text-[#156BCA] underline">Read More</span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* 3 */}
        <SwiperSlide>
          <div className="space-y-10 mb-10">
            <div className="w-full md:w-[500px] h-[full] mx-auto card card-side bg-base-100 shadow-xl border border-gray-200">
              <img
                className="w-full md:w-[300px] h-[200px] rounded-lg p-3"
                src="https://i.ibb.co/Jjb0GD2/card-1.png"
              />

              <div className="">
                <div className="flex justify-start items-center gap-2 mb-3 mt-5 font-poppins">
                  <FaLocationDot />
                  <p className=" text-[#5C635A] text-sm">
                    123 Elm Street, New York
                  </p>
                </div>
                <h5 className="text-[#232F3C] text-sm md:text-base font-semibold font-poppins my-2 md:my-4">
                  Healing Bodywork{" "}
                  <span className="italic text-[#156BCA]">by Cort</span>
                </h5>
                <p className="text-xs text-[#5C635A]">
                  {`Cort's healing bodywork massage was absolutely transformative.
                Their intuitive touch and deep understanding of...`}
                  <span className="text-[#156BCA] underline">Read More</span>
                </p>
              </div>
            </div>
            <div className="w-full md:w-[500px] h-[full] mx-auto card card-side bg-base-100 shadow-xl border border-gray-200">
              <img
                className="w-full md:w-[300px] h-[200px] rounded-lg p-3"
                src="https://i.ibb.co/ZWBvnkJ/card-2.png"
              />

              <div className="">
                <div className="flex justify-start items-center gap-2 mb-3 mt-5 font-poppins">
                  <FaLocationDot />
                  <p className=" text-[#5C635A] text-sm">
                    123 Elm Street, New York
                  </p>
                </div>
                <h5 className="text-[#232F3C] text-sm md:text-base font-semibold font-poppins my-2 md:my-4">
                  Healing Bodywork{" "}
                  <span className="italic text-[#156BCA]">by Cort</span>
                </h5>
                <p className="text-xs text-[#5C635A]">
                  {`Cort's healing bodywork massage was absolutely transformative.
                Their intuitive touch and deep understanding of...`}
                  <span className="text-[#156BCA] underline">Read More</span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
