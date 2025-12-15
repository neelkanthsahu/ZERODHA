import React from 'react';

function RightSection({ imageURL, productName, productDesription, learnMore }) {
    return (
        <div className="max-w-6xl mx-auto mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Left Content */}
                <div className="p-6 md:p-10">
                    <h1 className="text-3xl font-semibold">{productName}</h1>
                    <p className="mt-4 text-gray-600">{productDesription}</p>

                    <div className="mt-4">
                        <a
                            href={learnMore}
                            className="text-blue-600 hover:underline font-medium"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center md:justify-end">
                    <img src={imageURL} alt="product" className="w-full max-w-md" />
                </div>

            </div>
        </div>

    );
}

export default RightSection;