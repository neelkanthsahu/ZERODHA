import React from 'react';

function Hero() {
    return (
        <div className="max-w-6xl mx-auto border-b mb-10">
            <div className="text-center mt-10 p-4">

                <h1 className="text-4xl font-semibold">Technology</h1>

                <h3 className="text-gray-500 mt-3 text-2xl">
                    Sleek, modern and intuitive trading platforms
                </h3>

                <p className="mt-4 mb-10 text-gray-600">
                    Check out our{" "}
                    <a href="#" className="text-blue-600 hover:underline inline-flex items-center">
                        investment offerings
                        <i className="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
                    </a>
                </p>

            </div>
        </div>

    );
}

export default Hero;