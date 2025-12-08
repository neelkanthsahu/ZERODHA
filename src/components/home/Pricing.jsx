import React from 'react';

function Pricing() {
    return (  
        <div className="max-w-screen-xl mx-auto my-20 px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                {/* Left Section */}
                <div className="md:col-span-5 md:text-left mb-5 pl-9">
                    <h1 className="text-3xl mb-3 font-semibold">Unbeatable pricing</h1>

                    <p className="text-gray-700 mb-4">
                        We pioneered the concept of discount broking and price transparency 
                        in India. Flat fees and no hidden charges.
                    </p>

                    <a 
                        href="#"
                        className="text-blue-600 hover:text-blue-800 no-underline inline-flex items-center gap-1"
                    >
                        See Pricing →
                    </a>
                </div>

                {/* Empty Spacer (col-2) */}
                <div className="md:col-span-1"></div>

                {/* Right Section */}
                <div className="md:col-span-6 mb-5">
                <div className="grid grid-cols-2 text-center border">

                    {/* Box 1 */}
                    <div className="p-6 border-r">
                    <h1 className="text-4xl font-semibold mb-3">₹0</h1>
                    <p className="text-gray-700">
                        Free equity delivery and <br /> direct mutual funds
                    </p>
                    </div>

                    {/* Box 2 */}
                    <div className="p-6">
                    <h1 className="text-4xl font-semibold mb-3">₹20</h1>
                    <p className="text-gray-700">Intraday and F&O</p>
                    </div>

                </div>
                </div>

            </div>
        </div>

    );
}

export default Pricing;