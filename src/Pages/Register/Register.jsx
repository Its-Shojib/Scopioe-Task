import { useState } from 'react';
import img from '../../assets/Login-Register.png'
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { BsFillFileImageFill, BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    let [showPassword, setShowPassword] = useState(false);
    let { createUser, updateUserProfile } = useAuth();
    let navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        createUser(data?.email, data?.password)
            .then(() => {
                updateUserProfile(data?.name, data?.img)
                    .then(() => {
                        navigate('/')
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(error => {
                console.log(error);
            })

    };


    return (
        <div className='p-10'>
            <div className="flex justify-center items-center gap-20">
                <div className='flex-1'>
                    <h1 className='font-nanum text-2xl font-extrabold text-blue-600'>LOGO</h1>
                    <h3>Sign In To Your Account </h3>

                    <p>{`Welcome Back! By click the sign up button, you're agree to Zenitood Terms and Service and acknlowledge the Privacy and Policy`}</p>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="relative">
                                <p className="text-left text-lg font-semibold">User Name</p>
                                <BsFillPersonFill className="absolute bottom-4 left-2"></BsFillPersonFill>
                                <input className="w-full p-2 pl-7 text-black rounded-lg my-1"
                                    type="text"
                                    {...register("name", { required: true })}
                                    placeholder="Type your name"
                                />
                                {errors?.name && <span className='text-red-600'>Name is required</span>}
                            </div>
                            <hr className="my-2" />
                            <div className="relative">
                                <p className="text-left text-lg font-semibold">Image Url</p>
                                <BsFillFileImageFill className="absolute bottom-4 left-2"></BsFillFileImageFill>
                                <input className="w-full p-2 pl-7 text-black rounded-lg my-1"
                                    type="text"
                                    {...register("img", { required: true })}
                                    placeholder="Paste Image Url"
                                />
                                {errors?.img && <span className='text-red-600'>Image is required</span>}
                            </div>
                            <hr className="my-2" />
                            <div className="relative">
                                <p className="text-left text-lg font-semibold">User Email</p>
                                <AiOutlineMail className="absolute bottom-4 left-2"></AiOutlineMail>
                                <input className="w-full p-2 pl-7 text-black rounded-lg my-1"
                                    type="email"
                                    {...register("email", { required: true })}
                                    placeholder="Type your email"
                                />
                                {errors?.email && <span className='text-red-600'>Email is required</span>}
                            </div>
                            <hr className="my-2" />
                            <div className="relative">
                                <p className="text-left text-lg font-semibold">Password</p>
                                <RiLockPasswordFill className="absolute bottom-4 left-2"></RiLockPasswordFill>
                                <input className="w-full p-2 pl-6 text-black rounded-lg my-1"
                                    type={showPassword ? 'text' : 'password'}
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/
                                    })}
                                    placeholder="Type your password"
                                />
                                {errors.password?.type === "required" && (
                                    <span className='text-red-600'>Password is required</span>
                                )}
                                {errors?.password?.type === 'minLength' && <span className='text-red-600'>Password must be 6 character long</span>}
                                {errors.password?.type === "pattern" && (
                                    <span className='text-red-600'>Password must have one uppercase, lowercase,special symbol and a digit</span>
                                )}
                                {errors?.password?.type === 'maxLength' && <span className='text-red-600'>Password must be less than 20 character</span>}
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 bottom-4">{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                            </div>
                            <hr className="my-2" />
                            <button
                                className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full py-2 text-white font-semibold text-lg rounded-xl" type="submit">
                                Register</button>

                        </form>
                    </div>
                </div>
                <div className='flex-1'>
                    <img src={img} className='w-10/12 h-5/6' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;