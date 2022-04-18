import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { XIcon } from '@heroicons/react/outline'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CheckOut = () => {


    const naviget = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    // Error
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [nameError, setNameError] = useState('');
    const [addressError, setAddressError] = useState('');


    // email input value & validation
    const emailClick = (e) => {
        const EmailRegex = /\S+@\S+\.\S+/;
        const emailValue = EmailRegex.test(e.target.value);
        if (emailValue) {
            setEmail(e.target.value);
            setEmailError('')
        } else {
            setEmailError('Please give the valid Email')
            setEmail('');
        }
    }


    // Password input value 
    const passwordClick = (e) => {
        const passwordValue = e.target.value;
        if (passwordValue.length >= 6) {
            setPassword(passwordValue);
            setPassError('')
        } else {
            setPassword('');
            setPassError('Please Give Minimum 6 Chrecter')
        }
    }



    // handel Login

    const handelSubmit = (e) => {
        if (email !== '' && password !== '' && name !== '' && address !== '') {
            setEmailError('')
            setPassError('')
            setNameError('')
            setAddressError('')

            tostmessage()
            naviget('/')
        } else {
            setEmailError('Please Give Valid Email')
            setPassError('Please Give minimum 6 digit')
            setNameError('Please Give the Name ')
            setAddressError('Please Give The Address')
        }
        e.preventDefault()
    }

    const tostmessage = () => {
        toast('Thanks For Boocking');
        console.log('thank u');
    }



    return (
        <div className='mb-24 mx-5'>
            <div className="w-full lg:w-1/3 md:w-2/3 mx-auto p-5 mt-[8rem] rounded-lg bg-green-200 ">
                <h1 className='text-4xl font-semibold mb-5'>Boocking</h1>
                <div className="h-[1px] w-full bg-black opacity-20 mb-10"></div>

                <div className="flex flex-col text-left mb-8">
                    <label className=' text-xl ml-2 mb-2' htmlFor="name">Name</label>
                    <input onChange={(e) => setName(e.target.value)} className='py-2 rounded-lg shadow-md border-0 outline-0 px-4 text-xl' type="text" name="name" id="name" required />
                </div>
                {
                    nameError ? <p className='text-left mb-7 text-red-600 flex'><XIcon className='w-5 mr-2'></XIcon> {nameError}</p> : ''
                }

                <div className="flex flex-col text-left mb-8">
                    <label className=' text-xl ml-2 mb-2' htmlFor="address">Address</label>
                    <input onChange={(e) => setAddress(e.target.value)} className='py-2 rounded-lg shadow-md border-0 outline-0 px-4 text-xl' type="text" name="address" id="address" required />
                </div>
                {
                    addressError ? <p className='text-left mb-7 text-red-600 flex'><XIcon className='w-5 mr-2'></XIcon> {addressError}</p> : ''
                }

                <div className="flex flex-col text-left mb-8">
                    <label className=' text-xl ml-2 mb-2' htmlFor="email">Email</label>
                    <input onChange={emailClick} className='py-2 rounded-lg shadow-md border-0 outline-0 px-4 text-xl' type="email" name="email" id="email" required />
                </div>
                {
                    emailError ? <p className='text-left mb-7 text-red-600 flex'><XIcon className='w-5 mr-2'></XIcon> {emailError}</p> : ''
                }

                <div className="flex flex-col text-left mb-8">
                    <label className=' text-xl  ml-2 mb-2' htmlFor="password">Password</label>
                    <input onChange={passwordClick} className='py-2 rounded-lg shadow-md border-0 outline-0 px-4 text-xl' type="password" name="password" id="password" required />
                </div>
                {
                    passError ? <p className='text-left mb-7 text-red-600 flex'><XIcon className='w-5 mr-2'></XIcon> {passError}</p> : ''
                }
                <div className="btn-container mx-10 mt-10 mb-3">

                    <button onClick={handelSubmit} className='w-1/2 bg-green-500 shadow-md py-2 text-2xl rounded text-white'>Book Now</button>
                </div>

                <ToastContainer />
            </div>
        </div>
    );
};

export default CheckOut;