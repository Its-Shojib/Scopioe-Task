import { useContext, useState } from "react";
import { IoIosArrowDown, IoMdNotificationsOutline } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import useWindowSize from "../../Hooks/useWindowSize";
import logo from "../../assets/logo.png";
import SidebarSm from "./SIdebarSm"; // Import the SidebarSm component
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { width } = useWindowSize();
  const isSmallDevice = width < 768;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const { user, logOut, updatedUser } = useContext(AuthContext);

  // sign out function
  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Sign-out successful");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  console.log("user----------->", user);
  return (
    <>
      <nav className="top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="px-2 lg:px-5 flex items-center justify-between">
            {/* large screen and small screen condition */}
            <div>
              {isSmallDevice ? (
                <img className="w-[110px] h-[30px]" src={logo} alt="Logo" />
              ) : (
                <div className="flex items-center gap-4">
                  <img
                    className="w-10 h-10 lg:w-16 lg:h-16  rounded-full"
                    src={user?.photoURL || updatedUser}
                  />
                  <div className="font-medium dark:text-white">
                    <div className="flex justify-between items-center">
                      <p className="text-xs font-normal lg:text-sm text-[#152A16]">
                        {user?.displayName}
                      </p>
                      <IoIosArrowDown />
                    </div>
                    <p className="text-sm text-[#5C635A] dark:text-gray-400 font-normal">
                      {user?.email}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* large screen and small screen condition */}

            {isSmallDevice ? (
              <div className="flex justify-between items-center gap-5">
                <div className="text-black p-3 rounded-full border border-[#E7E7E7]">
                  <IoMdNotificationsOutline className="text-xl" />
                </div>
                <HiMiniBars3BottomRight
                  className="text-black text-2xl"
                  onClick={toggleSidebar}
                />
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <div className="text-black p-3 rounded-full border border-[#E7E7E7]">
                  <IoMdNotificationsOutline className="text-base lg:text-xl" />
                </div>

                <div className="divider divider-horizontal"></div>

                <div
                  onClick={handleSignOut}
                  className="btn flex justify-start gap-2 lg:gap-5 items-center bg-transparent border-0 cursor-pointer font-normal"
                >
                  <button className="text-[#F15E4A] text-sm lg:text-base">
                    Log Out
                  </button>
                  <div className="p-3 rounded-full bg-[#FFECEA]">
                    <LuLogOut className="text-[#F15E4A] text-base lg:text-xl " />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="">
        {isSidebarOpen && <SidebarSm toggleSidebar={toggleSidebar} />}
      </div>
    </>
  );
};

export default Navbar;
