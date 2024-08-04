import img from "../../assets/signup-sm.png";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const SignupSm = () => {

  const { signUpUser } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const retypePass = e.target.retypePass.value;
    const check = e.target.check.value;
    console.log(e.target.check.value);

    if (check == false) {
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
      <div
        className=" min-h-screen font-poppins"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="">
          <img className="mx-auto pt-16" src={logo} alt="" />
          <h4 className="text-[#1A2531] text-center text-3xl font-semibold my-10">
            Sign In To Your Account
          </h4>
          <p className="text-[#D1D1D1] text-base font-normal mb-5 mt-3 text-justify px-5">
            elcome Back! By click the sign up button, you are agree to Zenitood
            Terms and Service and acknlowledge the
            <span className="text-[#4285F3] underline text-base font-normal">
              {" "}
              Privacy and Policy
            </span>
          </p>
          <div className="mx-8 py-12 bg-[#1F2833] bg-opacity-70 backdrop-blur-md rounded-lg text-center my-20">
            <h1 className=" text-xl font-bold text-white">Create Account</h1>
            <h1 className=" text-xl font-bold text-white">
              Fill in Your Information
            </h1>
          </div>
          {/*Sign Up Form Start*/}
          <form onSubmit={handleSubmit} className="space-y-2 bg-white px-5 py-8 rounded-t-[36px]">
            <h1 className="text-center text-3xl text-[#1A2531] font-semibold pt-5 pb-5">
              Sign In
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-base ">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="@Username"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-base ">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                name="password"
                placeholder="Enter Your Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-base">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Re-Type Password"
                className="input input-bordered"
                name="retypePass"
                required
              />
            </div>
            <div className="pb-8">
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
                  Accept Terms of Service
                </label>
              </div>
            </div>
            <div className=" text-center mt-5">
              <button className="btn bg-[#4285F3] text-white text-base w-[250px] font-normal hover:text-[#4285F3] h-[12px]">
                Sign up
              </button>
            </div>
            <div>
              <p className="px-6 text-sm text-center text-black ">
                Already have an account?{" "}
                <Link to="/login" className="hover:underline text-[#4285F3]">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupSm;
