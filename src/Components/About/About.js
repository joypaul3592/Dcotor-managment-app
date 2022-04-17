import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/outline'

const About = () => {
    const naviget = useNavigate();
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className=' text-6xl font-mono'>This is about Page</h1>
            <button onClick={() => naviget(-1)} className='py-2 px-10  bg-green-200 rounded font-xl font-semibold flex items-center justify-between'> <ArrowLeftIcon className='w-5 mr-4'></ArrowLeftIcon>Go Back</button>
        </div>
    );
};

export default About;