import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/signup-sm.png";
import logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const LoginSm = () => {
  const { signInUser, googleSignIn, facebookSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  // Sign In Functionality
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("successfully login");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Google Sign In functionality
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("You Have Sign In Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Facebook Sign In functionality
  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("You Have Sign In Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      <div
        className="min-h-screen font-poppins w-full"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="">
          <img className="mx-auto pt-16" src={logo} alt="" />
          <div className="text-center my-10">
            <h1 className=" text-xl text-white">Sign In to view all the</h1>
            <h1 className=" text-xl text-white">massage therapists</h1>
          </div>

          {/*Login Form Start*/}
          <div className=" w-full space-y-2 bg-white px-5 py-8 rounded-t-[36px] pb-28">
            <div className="text-center my-5">
              <h4 className="text-[#152A16] text-2xl font-semibold">
                Login To Your Account
              </h4>
              <p className="text-[#5C635A] text-base font-normal my-2">
                Welcome Back! Select a method to log in:
              </p>
            </div>
            <div className="flex justify-between items-center py-5">
              <button
                onClick={handleGoogleSignIn}
                className="flex justify-center items-center bg-gradient-to-r from-[#E4E4E4] to-[#FFFFFF] space-x-2 border my-3 px-8 py-3 border-gray-300 border-rounded shadow-xl rounded-lg cursor-pointer"
              >
                <FcGoogle size={32} />

                <p className="text-base text-black">Google</p>
              </button>
              <button
                onClick={handleFacebookSignIn}
                className="flex justify-center items-center bg-gradient-to-r from-[#298FFF] to-[#0778F5] space-x-2 border my-3 px-8 py-4 border-gray-300 border-rounded  shadow-xl rounded-lg cursor-pointer"
              >
                <FaFacebookF className="text-white text-base" />
                <p className="text-base text-white">Facebook</p>
              </button>
            </div>
            <div className="divider text-[#5C635A] mt-5 pb-10">
              Or Continue with Email
            </div>

            <form action="" onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold text-base ">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className=" font-semibold text-base">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="flex justify-between pb-5">
                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center rounded-full cursor-pointer"
                    htmlFor="check"
                  >
                    <input
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-[#4285F3] checked:border-none hover:before:opacity-10"
                      id="check"
                    />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                  <label
                    className="mt-px ms-2 text-sm font-medium text-[#4285F3] cursor-pointer select-none"
                    htmlFor="check"
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#4285F3] underline">
                    Forgot password?
                  </p>
                </div>
              </div>
              <div className=" text-center ">
                <button
                  type="submit"
                  className="btn bg-[#4285F3] text-white text-base w-[250px] font-normal hover:text-[#4285F3] h-[12px]"
                >
                  Sign in
                </button>
              </div>
              <div>
                <p className="px-6 text-sm text-center text-black ">
                  Do not have account?{" "}
                  <Link to="/signup" className="hover:underline text-[#4285F3]">
                    Create Account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSm;
