import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import TestimonialCities from "../components/TestimonialCities/TestimonialCities";
import SliderTp from "../components/Therapist/SliderTp";
import bannerImg from "../assets/homeImg.png";
import "./banner.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const [therapist, setTherapist] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // State for filtered data

  const HandleSubmit = (e) => {
    e.preventDefault();
    const searchInput = e.target.searchInput.value.toLowerCase(); // Lowercase for case-insensitive search
    setInput(searchInput);

    // Filter data based on search input
    const filtered = therapist?.filter((therapist) => {
      // Customize filtering logic based on therapist data structure
      // Example: Search by city or therapist name (assuming properties exist)
      return (
        therapist.address.toLowerCase().includes(searchInput) ||
        therapist.name.toLowerCase().includes(searchInput)
      );
    });
    setFilteredData(filtered);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/therapist.json");
        const result = await response.json();
        setTherapist(result);
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (input === "") {
      setFilteredData(therapist);
    }
  }, [input, therapist]);

  return (
    <div className="font-poppins">
      {/* sidebar for large screen */}
      <Sidebar className="block md:hidden" />

      <div className="sm:ml-64 bg-[#eef2f5]">
        <Navbar />
        <div className="lg:m-5 mt-5 p-7 flex justify-between flex-col lg:flex-row items-center bg-white lg:rounded-lg">
          {/* banner content */}
          <div>
            <h3 className="text-lg lg:text-xl font-medium text-[#152A16]">
              {`I'm Looking for Massage Therapist Near...`}
            </h3>
            <p className="text-base text-[#2E3439] font-normal my-2 md:my-5">
              In using this site, I agree to be bound by the{" "}
              <span className="text-[#156BCA]">Terms of Service</span> <br /> and{" "}
              <span className="text-[#156BCA]">Privacy Policy</span>
            </p>
            <div className="hidden lg:block">
              <form onSubmit={HandleSubmit}>
                <label className="input input-bordered flex items-center gap-2 w-[500px] bg-[#eef2f5]">
                  <input
                    type="text"
                    name="searchInput"
                    className="grow"
                    placeholder="ZIP code or city name"
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <span className="badge cursor-pointer badge-info bg-[#156BCA] rounded-lg p-[18px] text-white px-10 md:-mr-[11px]">
                    <button type="submit">Go</button>
                  </span>
                </label>
              </form>
            </div>
          </div>
          {/* Banner img */}

          <div className="banner-bg">
            <img className="mx-auto lg:ml-[23rem]" src={bannerImg} alt="" />
          </div>
          <div className="block lg:hidden">
            <form onSubmit={HandleSubmit}>
              <label className="input input-bordered flex items-center gap-2 w-full md:w-[500px] mt-8 bg-[#eef2f5]">
                <input
                  type="text"
                  className="grow"
                  placeholder="ZIP code or city name"
                  onChange={(e) => setInput(e.target.value)}
                />
                <span className="badge cursor-pointer badge-info bg-[#156BCA] rounded-lg p-[18px] text-white px-10 md:-mr-[11px]">
                  <button type="submit">Go</button>
                </span>
              </label>
            </form>
          </div>
        </div>

        {/* <Therapist /> */}
        <div className="pb-1 bg-[#eef2f5]">
          <h1 className="text-[#152A16] text-lg font-semibold font-poppins m-5">
            Featured Therapist
          </h1>
          <div className="lg:m-5 p-7 bg-white lg:rounded-lg">
            <div className="">
              {/* Pass either all data or filtered data based on input */}
              <SliderTp therapists={filteredData} />
            </div>
          </div>
        </div>
        <TestimonialCities />
      </div>
    </div>
  );
};

export default Home;
