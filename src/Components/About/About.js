import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/outline'
import DoctorsImage from '../../img/profile.JPG'

const About = () => {
    const naviget = useNavigate();
    return (
        <div className='max-w-7xl mx-auto px-5'>
            <div className='p-3'>
                <button onClick={() => naviget(-1)} className='py-2 px-10  bg-green-200 rounded font-xl font-semibold flex items-center justify-between'> <ArrowLeftIcon className='w-5 mr-4'></ArrowLeftIcon>Go Back</button>
            </div>
            <div className=' py-24'>
                <div className="border-2 w-72 mx-auto rounded-full ">
                    <img className=' w-72 p-2 mx-auto rounded-full h-3/4' src={DoctorsImage} alt="" />
                </div>
                <div className='md:px-10 order-2 md:order-none py-8'>
                    <h1 className='text-emerald-400 font-mono text-3xl font-bold py-7'>HI! I am Joy paul</h1>
                    <div className="block md:flex ">
                        <h1 className='my-5 font-mono text-xl font-bold bg-green-200 mx-5 p-5 text-left rounded shadow-md'>My first goal is to be A Good Doctor. Because, I have completed my Graduation of MATS. Then My Second Goal is to be A Freelancer.</h1>
                        <h1 className='my-5 font-mono text-xl font-bold bg-green-200 mx-5 p-5 text-left rounded shadow-md'>Almost everyday I think about freelancing and to be a Good Web-developer. So I am starting to learn it From Programming hero.</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;