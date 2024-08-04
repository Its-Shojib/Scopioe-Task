import { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Style.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey", left: "-25px" }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey", right: "-25px" }}
      onClick={onClick}
    />
  );
};

export default function SliderTp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("therapist.json");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container ">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 shadow-xl rounded-lg "
          >
            <img
              className="w-full h-[220px] p-3"
              src={item.image}
              alt={item.name}
            />
            <div className="px-5 font-poppins">
              <h2 className="text-lg text-[#152A16] font-medium mt-3">
                {item.name}
              </h2>
              <div className="flex justify-start items-center gap-2 mb-3 mt-5">
                <FaLocationDot />
                <p className=" text-[#5C635A] text-sm">{item.address}</p>
              </div>
              <div className="flex justify-start items-center gap-2 mb-6">
                <FaCar />
                <p className="card-text text-[#5C635A] text-sm">
                  {item.service}
                </p>
              </div>
            </div>
            <div className="w-full text-[#152A16] bg-[#D4E9FF] hover:bg-[#156BCA] hover:text-[white] py-5 text-center">
              <button className="text-sm underline">See Details</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
