import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
const SignUp = () => {



    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);





    const naviget = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [comfirmPass, setComfirmPass] = useState('');



    // User successfully login
    if (user) {
        naviget('/service')
    }




    // email input value 
    const emailClick = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
    }
    // Password input value 
    const passwordClick = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
    }
    // Comfirm Password input value 
    const comfirmPassClick = (e) => {
        const comfirmPassValue = e.target.value;
        setComfirmPass(comfirmPassValue);
    }
    // Submit section
    const HanddleSignUp = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password)
        console.log(email, password, comfirmPass);
    }




    return (
        <div className='mb-24 mx-5'>
            <div className="w-full lg:w-1/3 md:w-2/3 mx-auto p-5 mt-[8rem] rounded-lg bg-green-200 ">
                <h1 className='text-4xl font-semibold mb-5'>Sign Up</h1>
                <div className="h-[1px] w-full bg-black opacity-20 mb-10"></div>
                <div className="flex flex-col text-left mb-3">
                    <label className=' text-xl ml-2 mb-2' htmlFor="email">Email</label>
                    <input onChange={emailClick} className='py-2 rounded-lg shadow-md border-0 outline-0 px-4 text-xl' type="email" name="email" id="email" required />
                </div>
                <div className="flex flex-col text-left mb-3">
                    <label className=' text-xl  ml-2 mb-2' htmlFor="password">Password</label>
                    <input onChange={passwordClick} className='py-2 rounded-lg shadow-md border-0 outline-0 px-4 text-xl' type="password" name="password" id="password" required />
                </div>
                <div className="flex flex-col text-left mb-3">
                    <label className=' text-xl  ml-2 mb-2' htmlFor="ComfirmPassword">Comfirm Password</label>
                    <input onChange={comfirmPassClick} className='py-2 rounded-lg shadow-md border-0 outline-0 px-4 text-xl' type="password" name="ComfirmPassword" id="ComfirmPassword" required />
                </div>
                <div className="btn-container mx-10 mt-10 mb-3">
                    <button onClick={HanddleSignUp} className='w-1/2 bg-green-500 shadow-md py-2 text-2xl rounded text-white'>Sign Up</button>
                </div>
                <p className=' font-mono font-medium'>Already have an Account? <span onClick={() => naviget('/login')} className=' text-sky-700 cursor-pointer'>LogIn</span></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignUp;