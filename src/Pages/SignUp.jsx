import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.png";
import Slider from "../components/Slider/Slider";
import useWindowSize from "../Hooks/useWindowSize";
import SignupSm from "../components/SignupSm/SignupSm";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import auth from "../Firebase/firebase.config";

// import bannerImg from "../assets/signupImg.png";
const SignUp = () => {
  const { width } = useWindowSize();
  const { signUpUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConPass, setShowConPass] = useState(false);

  // Define the breakpoint for small devices
  const isSmallDevice = width < 768;

  // Signup Functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const retypePass = e.target.retypePass.value;
    const check = e.target.check.value;
    console.log(e.target.check.value);

    if(check == false){
      toast.error("Please agree to Terms and Conditions");
      return;
    }

    console.log(name, email, password);
    // password match condition
    if (password !== retypePass) {
      toast.error("Passwords do not match. Please try again.");
      return;
    }
    // user data info
    signUpUser(email, password)
      .then((res) => {
        console.log(res.user);

        // update profile
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then((res) => {
            console.log(res);
            console.log("updated");
            toast.success("You Have Sign Up Successfully");
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
            console.log(error);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      {isSmallDevice ? (
        <div>
          <SignupSm />
        </div>
      ) : (
        <div className="w-full px-5 py-8 lg:px-32 lg:py-20 grid grid-cols-2 items-center gap-8 bg-white">
          <div className="w-full lg:w-[450px]  h-full lg:h-[700px] font-poppins">
            <img className="mb-8 w-[110px] h-[30px]" src={logoImg} alt="" />
            <h4 className="text-[#152A16] text-2xl font-semibold">
              Sign In To Your Account
            </h4>
            <p className="text-[#5C635A] text-sm font-normal mb-5 mt-3 text-justify">
              Welcome Back! By click the sign up button, you are agree to
              Zenitood Terms and Service and acknlowledge the <br></br>
              <span className="text-[#4285F3] underline text-base font-normal cursor-pointer">
                {" "}
                Privacy and Policy
              </span>
            </p>
            {/* SIgn Up Form Start */}
            <form onSubmit={handleSubmit} className=" w-full space-y-3">
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold text-base ">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="@Username"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold text-base ">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="relative form-control">
                <label className="label">
                  <span className=" font-semibold text-base">Password</span>
                </label>
                <input
                  // For eye button
                  type={showPass ? "text" : "password"}
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                  required
                  name="password"
                />

                <span
                  // For eye button
                  onClick={() => setShowPass(!showPass)}
                  className="absolute top-[53px] left-[25.5rem] text-2xl"
                >
                  {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>
              <div className="relative form-control">
                <label className="label">
                  <span className="font-semibold text-base">
                    Confirm Password
                  </span>
                </label>
                <input
                  // For eye button
                  type={showConPass ? "text" : "password"}
                  placeholder="Re-Type Password"
                  className="input input-bordered"
                  name="retypePass"
                  required
                />
                <span
                  // For eye button
                  onClick={() => setShowConPass(!showConPass)}
                  className="absolute top-[53px] left-[25.5rem] text-2xl"
                >
                  {showConPass ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>
              <div>
                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center rounded-full cursor-pointer"
                    htmlFor="check"
                  >
                    <input
                      type="checkbox"
                      name='check'
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
                    Accept Terms of Service
                  </label>
                </div>
              </div>
              <div className=" text-center mt-10">
                <button
                  type="submit"
                  className="bg-[#4285F3] p-3 rounded-md text-white text-base w-[300px] font-normal"
                >
                  Sign up
                </button>
              </div>
              <div>
                <p className="px-6 text-sm text-center text-black ">
                  Already have an account?{" "}
                  <Link to="/login" className="underline text-[#4285F3]">
                    Log in
                  </Link>
                </p>
              </div>
            </form>
            {/* SIgn Up Form End */}
          </div>
          {/* Slider for signup page */}
          <div className=" h-full lg:h-[700px]">
            <Slider />
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
