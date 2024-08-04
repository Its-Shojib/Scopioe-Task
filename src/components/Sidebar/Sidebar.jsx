import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { BiCategoryAlt } from "react-icons/bi";
import { LuUsers2 } from "react-icons/lu";
import { CiSearch, CiSettings, CiSquareInfo } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="flex justify-center items-center pb-12">
        <img src={logo} alt="" />
      </div>
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className=" ">
          {
            <>

              <li>
                <NavLink to="/" className={({ isActive }) =>
                  isActive ? " text-[#152A16] bg-[#D4E9FF]  font-medium  border-l-4 border-[#102C4A] hover:bg-[#4797ec] hover:border-l-[6px]  hover:text-white text-[15px]  flex items-center pl-[25px] gap-[12px] h-[46px]" :
                    "font-normal hover:bg-[#4797ec] hover:border-l-[6px] hover:border-[#102C4A] hover:text-white   text-[#5C635A]     text-[15px] flex items-center pl-[25px] gap-[12px] h-[46px]"}>

                  <BiCategoryAlt className=" w-[18px] h-[18px]" />
                  Home

                </NavLink>
              </li>

              <li>
                <NavLink to="/new_listings"
                  className={({ isActive }) =>
                    isActive ? " text-[#152A16] bg-[#D4E9FF]  font-medium  border-l-4 border-[#102C4A] hover:bg-[#4797ec] hover:border-l-[6px]  hover:text-white text-[15px]  flex items-center pl-[25px] gap-[12px] h-[46px]" :
                      "font-normal hover:bg-[#4797ec] hover:border-l-[6px] hover:border-[#102C4A] hover:text-white   text-[#5C635A]     text-[15px] flex items-center pl-[25px] gap-[12px] h-[46px]"}>
                  <LuUsers2 className=" w-[18px] h-[18px]" />
                  New Listing</NavLink>
              </li>
              <li>
                <NavLink to="/search"
                  className={({ isActive }) =>
                    isActive ? " text-[#152A16] bg-[#D4E9FF]  font-medium  border-l-4 border-[#102C4A] hover:bg-[#4797ec] hover:border-l-[6px]  hover:text-white text-[15px]  flex items-center pl-[25px] gap-[12px] h-[46px]" :
                      "font-normal hover:bg-[#4797ec] hover:border-l-[6px] hover:border-[#102C4A] hover:text-white   text-[#5C635A]     text-[15px] flex items-center pl-[25px] gap-[12px] h-[46px]"}>
                  <CiSearch className=" w-[18px] h-[18px]" />
                  Search</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) =>
                  isActive ? " text-[#152A16] bg-[#D4E9FF]  font-medium  border-l-4 border-[#102C4A] hover:bg-[#4797ec] hover:border-l-[6px]  hover:text-white text-[15px]  flex items-center pl-[25px] gap-[12px] h-[46px]" :
                    "font-normal hover:bg-[#4797ec] hover:border-l-[6px] hover:border-[#102C4A] hover:text-white   text-[#5C635A]     text-[15px] flex items-center pl-[25px] gap-[12px] h-[46px]"}>
                  <IoNewspaperOutline className=" w-[18px] h-[18px]" />
                  About</NavLink>
              </li>
              <li>
                <NavLink to="/favorites" className={({ isActive }) =>
                  isActive ? " text-[#152A16] bg-[#D4E9FF]  font-medium  border-l-4 border-[#102C4A] hover:bg-[#4797ec] hover:border-l-[6px]  hover:text-white text-[15px]  flex items-center pl-[25px] gap-[12px] h-[46px]" :
                    "font-normal hover:bg-[#4797ec] hover:border-l-[6px] hover:border-[#102C4A] hover:text-white   text-[#5C635A]     text-[15px] flex items-center pl-[25px] gap-[12px] h-[46px]"}>
                  <FaRegHeart className=" w-[18px] h-[18px]" />
                  Favorites</NavLink>
              </li>


            </>

          }

          <div className="divider my-[25px] divide-gray-500 w-[210px] mx-auto"></div>
          <li>
            <NavLink to="/help_center" className={({ isActive }) =>
              isActive ? " text-[#152A16] bg-[#D4E9FF]  font-medium  border-l-4 border-[#102C4A] hover:bg-[#4797ec] hover:border-l-[6px]  hover:text-white text-[15px]  flex items-center pl-[25px] gap-[12px] h-[46px]" :
                "font-normal hover:bg-[#4797ec] hover:border-l-[6px] hover:border-[#102C4A] hover:text-white   text-[#5C635A]     text-[15px] flex items-center pl-[25px] gap-[12px] h-[46px]"}>
              <CiSquareInfo className=" w-[18px] h-[18px]" />
              Help Center</NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) =>
              isActive ? " text-[#152A16] bg-[#D4E9FF]  font-medium  border-l-4 border-[#102C4A] hover:bg-[#4797ec] hover:border-l-[6px]  hover:text-white text-[15px]  flex items-center pl-[25px] gap-[12px] h-[46px]" :
                "font-normal hover:bg-[#4797ec] hover:border-l-[6px] hover:border-[#102C4A] hover:text-white   text-[#5C635A]     text-[15px] flex items-center pl-[25px] gap-[12px] h-[46px]"}>
              <CiSettings className=" w-[18px] h-[18px]" />
              Settings</NavLink>
          </li>

        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
