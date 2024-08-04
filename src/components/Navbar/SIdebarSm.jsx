import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { MdLogout } from "react-icons/md";
import toast from "react-hot-toast";
const SidebarSm = ({ toggleSidebar }) => {
  const { user, updatedUser, logOut } = useContext(AuthContext);
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
  return (
    <div className="fixed inset-0 z-50  flex justify-end flex-row-reverse">
      <div className=" w-2/3 md:w-1/3">
        {/* sidebar content */}
        <div className="flex flex-col items-center bg-[#156BCA] justify-end py-16">
          <img
            className="w-16 h-16  rounded-full"
            src={user?.photoURL || updatedUser}
          />
          <h2 className="text-white text-xl font-bold mt-2">
            {user?.displayName}
          </h2>
          <p className="text-black text-sm">{user?.email}</p>
        </div>
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 pt-5">
          <ul className="space-y-2 font-medium">
            {/* sidebar list item */}
            <li className="">
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#D4E9FF] group"
              >
                <img src="https://i.ibb.co/fNLw56H/home.png" alt="" />
                <span className="ms-3 text-[#5C635A] text-base font-normal">
                  Home
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#D4E9FF] group"
              >
                <img src="https://i.ibb.co/jyQKKJD/new.png" alt="" />
                <span className="flex-1 ms-3 whitespace-nowrap text-[#5C635A] text-base font-normal">
                  New Listing
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#D4E9FF] group"
              >
                <img src="https://i.ibb.co/pWGfgXP/Search.png" alt="" />
                <span className="flex-1 ms-3 whitespace-nowrap text-[#5C635A] text-base font-normal">
                  Search
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#D4E9FF] group"
              >
                <img src="https://i.ibb.co/7K37Cv3/Paper.png" alt="" />
                <span className="flex-1 ms-3 whitespace-nowrap text-[#5C635A] text-base font-normal">
                  About
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#D4E9FF] group mb-5"
              >
                <img src="https://i.ibb.co/48DMrm8/Vector.png" alt="" />
                <span className="flex-1 ms-3 whitespace-nowrap text-[#5C635A] text-base font-normal">
                  Favorites
                </span>
              </a>
            </li>
            <hr className="my-10 py-[1px] h-0.5 border-t-0 bg-[#E7E7E7] dark:bg-white/10" />
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#D4E9FF] group mt-5"
              >
                <img src="https://i.ibb.co/3zKYZmv/info.png" alt="" />
                <span className="flex-1 ms-3 whitespace-nowrap text-[#5C635A] text-base font-normal">
                  Help Center
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#D4E9FF] group"
              >
                <img src="https://i.ibb.co/b53KmBg/Setting.png" alt="" />
                <span className="flex-1 ms-3 whitespace-nowrap text-[#5C635A] text-base font-normal">
                  Setting
                </span>
              </a>
            </li>

            <li className="" onClick={handleSignOut}>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#D4E9FF] group"
              >
                <MdLogout className="text-[#F15E4A]" />
                <span className="flex-1 ms-3 whitespace-nowrap text-[#F15E4A] text-base font-normal">
                  Log Out
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="bg-black opacity-50 w-1/3 md:w-2/3 h-full"
        onClick={toggleSidebar}
      ></div>
    </div>
  );
};

export default SidebarSm;
