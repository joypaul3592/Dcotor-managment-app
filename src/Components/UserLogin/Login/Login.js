import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
const Login = () => {

    const naviget = useNavigate()

    return (
        <div className='mb-24 mx-5'>
            <div className="w-full lg:w-1/3 md:w-2/3 mx-auto p-5 mt-[8rem] rounded-lg bg-green-200 ">
                <h1 className='text-4xl font-semibold mb-5'>log In</h1>
                <div className="h-[1px] w-full bg-black opacity-20 mb-10"></div>
                <div className="flex flex-col text-left mb-3">
                    <label className=' text-xl ml-2 mb-2' htmlFor="email">Email</label>
                    <input className='py-2 rounded-lg shadow-md border-0 outline-0 px-4 text-xl' type="email" name="email" id="email" required />
                </div>
                <div className="flex flex-col text-left mb-3">
                    <label className=' text-xl  ml-2 mb-2' htmlFor="password">Password</label>
                    <input className='py-2 rounded-lg shadow-md border-0 outline-0 px-4 text-xl' type="password" name="password" id="password" required />
                </div>
                <div className="btn-container mx-10 mt-10 mb-3">
                    <button className='w-1/2 bg-green-500 shadow-md py-2 text-2xl rounded text-white'>Log In</button>
                </div>
                <p className=' font-mono font-medium'>Create New Account? <span onClick={() => naviget('/signup')} className=' text-sky-700 cursor-pointer'>Sign Up</span></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;