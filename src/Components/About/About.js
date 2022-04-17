import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
// import './about.css'
const About = () => {
    return (
        <div>
            <div className='about-images p-3'>
                <Link to='/' className='text-xl   font-mono font-bold py-2 px-5 rounded bg-emerald-400 text-white  '>
                    {/* <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> */}
                    <span className='px-2 '>Back</span>
                </Link>
                <img className='rounded-full w-[200px] h-[190px] mx-auto  border mt-44' src='' alt="" />
            </div>
            <div className='w-[90%] mx-auto mt-52 gap-9 grid  grid-cols-1 md:grid-cols-2 '>
                <div className='md:px-10 order-2 md:order-none py-24'>
                    <h1 className='text-emerald-400 font-mono text-3xl font-bold py-7'>This is a my dream ..?</h1>
                    <h1 className='text-slate-400 font-mono text-2xl font-bold'>Professional Software engineers  job ,
                        My  Life susscces InsaAllha </h1>

                </div>
                <div className='order-1 shadow-2xl rounded  bg-gradient-to-r from-violet-500 to-fuchsia-500'>
                    <img className='w-[400px] mx-auto  rounded' src='' alt="" />
                </div>
            </div>

        </div>
    );
};

export default About;