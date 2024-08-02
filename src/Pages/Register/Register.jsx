import img from '../../assets/Login-Register.png'

const Register = () => {
    return (
        <div className='p-10'>
            <div className="flex justify-center items-center gap-20">
                <div className='flex-1'>
                    <h1 className='font-nanum text-2xl font-extrabold text-blue-600'>LOGO</h1>
                    <h3>Sign In To Your Account </h3>

                    <p>{`Welcome Back! By click the sign up button, you're agree to Zenitood Terms and Service and acknlowledge the Privacy and Policy`}</p>
                </div>
                <div className='flex-1'>
                    <img src={img} className='w-10/12 h-5/6' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;