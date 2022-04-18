import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="blog-container max-w-7xl mx-auto py-24">
                <div className='px-0 md:px-16 w-10/12  md:w-8/12 mx-auto'>
                    <div className="bg-green-200 p-5 rounded mb-20 shadow-lg">
                        <h1 className='w-full bg-gray-200 p-2 text-black text-xl font-mono rounded shadow-lg mb-4'>Difference between authorization and authentication?</h1>
                        <p className='text-left'>Authentication verifies the user. Authentication is the first step of identity and access management process. Authentication is visible and partially changeable by the user. Authorization determines the resources a user can access. Authorization always takes place after authentication. Authorization is not visible to or changeable by the user.</p>
                    </div>
                    <div className="bg-green-200 p-5 rounded  shadow-lg mb-20">
                        <h1 className='w-full bg-gray-200 p-2 text-black text-xl font-mono rounded shadow-lg mb-4'>Why are you using firebase? What other options do you have to implement authentication?</h1>

                        <p className='text-left mb-5'> <span className='font-semibold'>1.</span> I am using Firebase For Authentication. Firebase Authentication makes building secure sign-in for any platform easy. This  solution supports email and passowrd, phone auth and mult-platform login.</p>

                        <h3 className='font-semibold text-left mb-3'>2. Other Option For Authentication is :</h3>
                        <p>
                            <div className="flex w-10/12 items-center justify-between mx-auto">
                                <div className='text-left'>
                                    <li>Parse.</li>
                                    <li>Back4App.</li>
                                    <li>AWS Amplify.</li>
                                    <li>Kuzzle.</li>
                                </div>
                                <div className='text-left'>
                                    <li>Couchbase.</li>
                                    <li>NativeScript.</li>
                                    <li>RxDB.</li>
                                    <li>Flutter.</li>
                                </div>
                            </div>
                        </p>
                    </div>

                    <div className="bg-green-200 p-5 rounded  shadow-lg">
                        <h1 className='w-full bg-gray-200 p-2 text-black text-xl font-mono rounded shadow-lg mb-4'>What other services does firebase provide other than authentication?</h1>
                        <p>
                            <div className="flex w-10/12 items-center justify-between mx-auto">
                                <div className='text-left'>
                                    <li>Cloud Firestore</li>
                                    <li>Cloud Functions</li>
                                    <li>Hosting</li>
                                    <li>Cloud Storage</li>
                                </div>
                                <div className='text-left'>
                                    <li>Google Analytics</li>
                                    <li>Cloud Messaging</li>
                                    <li>Dynamic Links</li>
                                    <li>Predictions</li>
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;