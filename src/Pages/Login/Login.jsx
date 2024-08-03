import { useState } from 'react';
import img from '../../assets/Login-Register.png'
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Register = () => {
    let [showPassword, setShowPassword] = useState(false);
    let { SignInUser, googleSignIn, setLoading } = useAuth();
    let navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        console.log(data);

        SignInUser(data?.email, data?.password)
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sign In Success",
                    showConfirmButton: false,
                    timer: 1000
                });
                setLoading(false);
                navigate('/home')
            })
            .catch(error => {
                console.log(error);
            })
    };

    let handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result?.user)
                setLoading(false);
                navigate('/home');
            
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                })
            })
    }


    return (
        <div className='p-10 w-full mx-auto'>
            <div className="flex justify-center gap-10">
                <div className='flex-1'>
                    <div className='max-w-[450px]'>
                        <div className='space-y-3 mb-4'>
                            <h1 className='font-nanum text-3xl font-extrabold text-blue-600'>LOGO</h1>
                            <h3 className='text-2xl font-bold'>Log In To Your Account </h3>

                            <p className='text-sm'>Welcome Back! Select a method to log in:</p>
                        </div>
                        <div className='flex gap-10 justify-center items-center'>
                            <div className='cursor-pointer' onClick={handleGoogleLogin}>Google</div>
                            <div className='cursor-pointer'>Facebook</div>
                        </div>
                        <p className='flex justify-center items-center text-center my-3 text-sm'>
                            Or Continue with Email
                        </p>

                        <form onSubmit={handleSubmit(onSubmit)}>

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

                            <div className='my-5'>
                                <div className="flex justify-between gap-2 item-center text-sm">
                                    <div className='flex justify-start gap-2 item-center text-sm'>
                                        <input type="checkbox"
                                            {...register("remember", { required: false })}
                                        />
                                        <p>Remember me</p>
                                    </div>
                                    <div>
                                        <p className='text-blue-600 underline cursor-pointer'>Forgot Password?</p>
                                    </div>

                                </div>
                            </div>
                            <div className='w-2/3 text-center mx-auto space-y-2 my-5'>
                                <button
                                    className="bg-blue-600 w-full py-2 text-white font-semibold rounded-xl" type="submit">
                                    Sign In</button>
                                <p>Don’t Have an Account? <Link className='text-blue-600 underline cursor-pointer' to={'/'}>Create Account</Link></p>
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