import React from 'react';
import lungSVG from '../../img/Lungs.gif'
import HeartSVG from '../../img/Cardiologist.gif'
import EyeSVG from '../../img/Ophthalmologist.gif'
import EarSVG from '../../img/Ear.gif'
import CosmeticSVG from '../../img/Plastic surgery.gif'
import ToothSVG from '../../img/tooth.gif'
import { useNavigate } from 'react-router-dom';


const Service = () => {
    const navigate = useNavigate();

    return (
        <div className='max-w-7xl mx-auto py-16'>
            <div className="service-header mb-3">
                <h2 style={{ color: '#434343' }} className=' text-5xl font-bold'>Service</h2>
                <p style={{ color: '#666666' }} className='text-xl'>Best Service are Available in Our Cember</p>
            </div>
            <hr className='w-9/12 mx-auto' />
            <div className="service-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-36 px-5">


                <div className="serevice-card border-2 p-5 shadow-lg relative rounded-md mb-36">
                    <img className='mx-auto absolute top-[-25%] left-[25%]' src={lungSVG} alt="Svg doctro image" />
                    <h1 className='mt-28 text-2xl mb-3 font-bold font-mono'>Respiratory</h1>
                    <hr />
                    <p className='mt-5 text-justify'>The respiratory system is the network of organs and tissues that help you breathe. It includes your airways, lungs and blood vessels. The muscles that power your lungs are also part of the respiratory system. </p>
                    <button onClick={() => navigate('/checkout')} className='py-2 px-12  bg-green-200 rounded mt-7 mb-3 font-semibold'>Book Now</button>
                </div>

                <div className="serevice-card border-2 p-5 shadow-lg relative rounded-md mb-36">
                    <img className='mx-auto absolute top-[-25%] left-[25%]' src={HeartSVG} alt="Svg doctro image" />
                    <h1 className='mt-28 text-2xl mb-3 font-bold font-mono'>Cardiology</h1>
                    <hr />
                    <p className='mt-5 text-justify'>A cardiologist is a medical doctor who studies and treats diseases and conditions of the cardiovascular system — the heart and blood vessels — including heart rhythm disorders, coronary artery disease, heart attacks, heart defects and infections, and related disorders. </p>
                    <button onClick={() => navigate('/checkout')} className='py-2 px-12  bg-green-200 rounded mt-7 mb-3 font-semibold'>Book Now</button>
                </div>

                <div className="serevice-card border-2 p-5 shadow-lg relative rounded-md mb-36">
                    <img className='mx-auto absolute top-[-25%] left-[25%]' src={EyeSVG} alt="Svg doctro image" />
                    <h1 className='mt-28 text-2xl mb-3 font-bold font-mono'>Ophthalmology</h1>
                    <hr />
                    <p className='mt-5 text-justify'>An ophthalmologist is a medical doctor who specializes in the treatment of illnesses, diseases, injuries, and conditions that affect the eye. The ophthalmologist performs vision tests and prescribes corrective lenses .</p>
                    <button onClick={() => navigate('/checkout')} className='py-2 px-12  bg-green-200 rounded mt-7 mb-3 font-semibold'>Book Now</button>
                </div>


                <div className="serevice-card border-2 p-5 shadow-lg relative rounded-md mb-36">
                    <img className='mx-auto absolute top-[-25%] left-[25%]' src={CosmeticSVG} alt="Svg doctro image" />
                    <h1 className='mt-28 text-2xl mb-3 font-bold font-mono'>Cosmetology</h1>
                    <hr />
                    <p className='mt-5 text-justify'>Cosmetology is the art and science beautifying the hair, nails, and skin. A cosmetologist is an expert in applying cosmetic procedures, therapies, and treatments to beautify one’s outer appearance. and implementing cosmetic treatments to people’s hair, skin, and nails.  </p>
                    <button onClick={() => navigate('/checkout')} className='py-2 px-12  bg-green-200 rounded mt-7 mb-3 font-semibold'>Book Now</button>
                </div>

                <div className="serevice-card border-2 p-5 shadow-lg relative rounded-md mb-36">
                    <img className='mx-auto absolute top-[-25%] left-[25%]' src={ToothSVG} alt="Svg doctro image" />
                    <h1 className='mt-28 text-2xl mb-3 font-bold font-mono'>Orthodontist</h1>
                    <hr />
                    <p className='mt-5 text-justify'>Orthodontics and dentofacial orthopedics is the dental specialty that includes the diagnosis, prevention, interception, and correction of malocclusion , as well as neuromuscular and skeletal abnormalities of the developing or mature orofacial structures. </p>
                    <button onClick={() => navigate('/checkout')} className='py-2 px-12  bg-green-200 rounded mt-7 mb-3 font-semibold'>Book Now</button>
                </div>

                <div className="serevice-card border-2 p-5 shadow-lg relative rounded-md mb-36">
                    <img className='mx-auto absolute top-[-25%] left-[25%]' src={EarSVG} alt="Svg doctro image" />
                    <h1 className='mt-28 text-2xl mb-3 font-bold font-mono'>Otolaryngologist</h1>
                    <hr />
                    <p className='mt-5 text-justify'>Otolaryngology is a medical specialty which is focused on the ears, nose, and throat. It is also called otolaryngology-head and neck surgery because specialists are trained in both medicine and surgery.  </p>
                    <button onClick={() => navigate('/checkout')} className='py-2 px-12  bg-green-200 rounded mt-7 mb-3 font-semibold'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;