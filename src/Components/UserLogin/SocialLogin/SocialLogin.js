import React from 'react';
import auth from '../../Firebase/Firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SocialLogin = () => {


    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);




    return (
        <div>
            <div className="flex items-center justify-between my-4">
                <div className="w-[45%] h-[1px] bg-black opacity-20"></div>
                <p>or</p>
                <div className="w-[45%] h-[1px] bg-black opacity-20"></div>
            </div>
            <div className="flex items-center justify-center w-11/12 md:w-7/12 mx-auto bg-slate-50 rounded-lg shadow-md mb-5" >
                <img className='w-[45px] mr-2' src="https://pngimg.com/uploads/google/google_PNG19635.png" alt="" />
                <h3 className=' font-semibold'>Continue With Google</h3>
            </div>
            <div className="flex items-center justify-center w-11/12 md:w-7/12 mx-auto bg-slate-50 rounded-lg shadow-md mb-5" >
                <img className='w-[45px] p-1 mr-2' src="https://pngimg.com/uploads/github/github_PNG87.png" alt="" />
                <h3 className=' font-semibold'>Continue With GitHub</h3>
            </div>
        </div>
    );
};

export default SocialLogin;