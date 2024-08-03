import { useState } from 'react';
import img from '../../assets/Login-Register.png'
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Register = () => {
    let [showPassword, setShowPassword] = useState(false);
    let { createUser } = useAuth();
    let navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        // Validate data before submitting
        if (data?.password !== data?.confirmPassword) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password doesn't match!",
            });
        }

        createUser(data?.email, data?.password)
            .then(() => {
                navigate('/home')
            })
            .catch(error => {
                console.log(error);
            })
    };


    return (
        <div className='p-10 w-full mx-auto'>
            <div className="flex justify-center gap-10">
                <div className='flex-1'>
                    <div className='max-w-[450px]'>
                        <div className='space-y-3 mb-4'>
                            <h1 className='font-nanum text-3xl font-extrabold text-blue-600'>LOGO</h1>
                            <h3 className='text-2xl font-bold'>Sign In To Your Account </h3>

                            <p className='text-sm'>Welcome Back! By click the sign up button, youre agree to Zenitood Terms and Service and acknlowledge the <br></br><span className='underline text-blue-500 cursor-pointer'>Privacy and Policy</span></p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="relative">
                                <p className="text-left  font-semibold">Name</p>

                                <input className="w-full p-2 text-black border-2 rounded-lg my-1"
                                    type="text"
                                    {...register("name", { required: true })}
                                    placeholder="@username"
                                />
                                {errors?.name && <span className='text-red-600 text-sm'>Name is required</span>}
                            </div>
                            <div className="relative">
                                <p className="text-left  font-semibold">Email</p>
                                <input className="w-full p-2 text-black border-2 rounded-lg my-1"
                                    type="email"
                                    {...register("email", { required: true })}
                                    placeholder="Type your email"
                                />
                                {errors?.email && <span className='text-red-600 text-sm'>Email is required</span>}
                            </div>
                            <div className="relative">
                                <p className="text-left  font-semibold">Password</p>
                                <input className="w-full p-2 text-black border-2 rounded-lg my-1"
                                    type={showPassword ? 'text' : 'password'}
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                    })}
                                    placeholder="Enter your password"
                                />
                                {errors.password?.type === "required" && (
                                    <span className='text-red-600 text-sm'>Password is required</span>
                                )}
                                {errors?.password?.type === 'minLength' && <span className='text-red-600 text-sm'>Password must be 6 character long</span>}
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 bottom-4">{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                            </div>
                            <div className="relative">
                                <p className="text-left  font-semibold">Confirm Password</p>
                                <input className="w-full p-2 text-black border-2 rounded-lg my-1"
                                    type={showPassword ? 'text' : 'password'}
                                    {...register("confirmPassword", {
                                        required: true,
                                        minLength: 6,
                                    })}
                                    placeholder="Re-type password"
                                />
                                {errors.confirmPassword?.type === "required" && (
                                    <span className='text-red-600 text-sm'>Password is required</span>
                                )}
                                {errors?.confirmPassword?.type === 'minLength' && <span className='text-red-600 text-sm'>Password must be 6 character long</span>}
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 bottom-4">{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>

                            </div>
                            <div className='my-3'>
                                <div className="flex justify-start gap-2 item-center text-sm">
                                    <input type="checkbox"
                                        {...register("condition", { required: true })}
                                    />
                                    <p className='text-blue-600'>Accept Terms of Service</p>
                                    {errors?.condition && <span className='text-red-600 text-sm'>Terms are required</span>}

                                </div>
                            </div>
                            <div className='w-2/3 text-center mx-auto space-y-2'>
                                <button
                                    className="bg-blue-600 w-full py-2 text-white font-semibold rounded-xl" type="submit">
                                    Sign up</button>
                                <p>Already have an account? <Link className='text-blue-600 underline cursor-pointer' to={'/login'}>Log In</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
                <div className='flex-1'>
                    <img src={img} className='w-10/12' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;