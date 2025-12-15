import React from 'react';

function Education() {
    return (  
        <div className="max-w-screen-xl mx-auto my-20 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Left Image */}
                <div className="flex justify-left">
                    <img 
                        src="media/images/education.svg" 
                        alt="Education" 
                        className="w-[70%]"
                    />
                </div>

                {/* Right Content */}
                <div className='text-left'>
                    <h1 className="text-3xl font-medium mb-3">
                        Free and open market education
                    </h1>

                    <p className="text-gray-700 mb-4">
                        Varsity, the largest online stock market education book in the world
                        covering everything from the basics to advanced trading.
                    </p>

                    <a 
                        href="#" 
                        className="text-blue-600 hover:text-blue-800 no-underline inline-flex items-center gap-1"
                    >
                        Varsity →
                    </a>

                    <p className="text-gray-700 mt-5 mb-4">
                        TradingQ&A, the most active trading and investment community in India 
                        for all your market related queries.
                    </p>

                    <a 
                        href="#" 
                        className="text-blue-600 hover:text-blue-800 no-underline inline-flex items-center gap-1"
                    >
                        TradingQ&A →
                    </a>
                </div>

            </div>
        </div>

    );
}

export default Education;