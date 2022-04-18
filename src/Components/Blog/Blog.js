import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="blog-container max-w-7xl mx-auto py-24">
                <div className='px-0 md:px-16 w-10/12  md:w-8/12 mx-auto'>
                    <div className="bg-green-200 p-5 rounded mb-20 shadow-lg">
                        <h1 className='w-full bg-gray-200 p-2 text-black text-xl font-mono rounded shadow-lg mb-4'>What is Context Api?</h1>
                        <p>Context API is React API that can solve a lot of problems, that modern applications face related to state management. Modern applications brack the site into smaller components. This small components need some data to work properly. That why we will have to pass data through props from the parent component to the child component. Sometimes props is become too complicated  and it slow down our web application. This new Context API solves major problem  of prop drilling.The Context API can used to share data with multiple components, without passing data through props manually.</p>
                    </div>
                    <div className="bg-green-200 p-5 rounded  shadow-lg mb-20">
                        <h1 className='w-full bg-gray-200 p-2 text-black text-xl font-mono rounded shadow-lg mb-4'>What is Semantic tag?</h1>
                        <p>Semantic tags makes HTML more comprehensible by better defining the different sections and layout of web pages. Semantic tags gives our many more hooks for styling your content. The semantic tags help the search engines and other user devices to determine the importance and context of web pages.The pages made with semantic elements or tags are much easier to read. A programmer  Easily can understand or  reading through hundreds or thousands of lines of code by this semantic tag. Some semantic tag are footer, aside, articlr. </p>
                    </div>

                    <div className="bg-green-200 p-5 rounded  shadow-lg">
                        <h1 className='w-full bg-gray-200 p-2 text-black text-xl font-mono rounded shadow-lg mb-4'>What is Semantic tag?</h1>
                        <p>Semantic tags makes HTML more comprehensible by better defining the different sections and layout of web pages. Semantic tags gives our many more hooks for styling your content. The semantic tags help the search engines and other user devices to determine the importance and context of web pages.The pages made with semantic elements or tags are much easier to read. A programmer  Easily can understand or  reading through hundreds or thousands of lines of code by this semantic tag. Some semantic tag are footer, aside, articlr. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;