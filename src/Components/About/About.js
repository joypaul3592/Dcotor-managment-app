import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/outline'
import DoctorsImage from '../../img/doctor.gif'

const About = () => {
    const naviget = useNavigate();
    return (
        <div className='max-w-7xl mx-auto px-5'>
            <div className='p-3'>
                <button onClick={() => naviget(-1)} className='py-2 px-10  bg-green-200 rounded font-xl font-semibold flex items-center justify-between'> <ArrowLeftIcon className='w-5 mr-4'></ArrowLeftIcon>Go Back</button>
            </div>
            <div className=' flex py-24'>

                <img src={DoctorsImage} alt="" />

                <div className='md:px-10 order-2 md:order-none py-24'>
                    <h1 className='text-emerald-400 font-mono text-3xl font-bold py-7'>This is a my dream ..?</h1>
                    <h1 className='text-slate-400 font-mono text-2xl font-bold'>Professional Software engineers  job ,
                        My  Life susscces InsaAllha </h1>
                </div>
            </div>

        </div>
    );
};

export default About;