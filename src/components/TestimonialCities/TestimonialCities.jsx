import Cities from "./Cities";
import Testimonial from "./Testimonial";

const TestimonialCities = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 bg-[#eef2f5] pb-5 lg:pb-10">
      {/* Testimonial section*/}
      <div>
        <h1 className="text-[#152A16] text-lg font-semibold font-poppins mt-5 md:mt-0 mx-5">
          Featured Testimonial
        </h1>
        <div className="mt-5 lg:mt-5 lg:ml-5 p-5 h-[500px] bg-white lg:rounded-xl">
          <Testimonial />
        </div>
      </div>
      {/* Cities section */}
      <div>
        <h1 className="text-[#152A16] text-lg font-semibold font-poppins mx-5">
          Popular Cities
        </h1>
        <div className="mt-5 lg:mt-5 lg:mr-5 p-5 h-full lg:h-[500px] bg-white lg:rounded-xl">
          <Cities />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCities;
