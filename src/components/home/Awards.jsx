import React from 'react';

function Awards() {
    return ( 
       <div className="max-w-screen-xl mx-auto my-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Left Image */}
            <div className="p-5 flex justify-center">
            <img src="media/images/largestBroker.svg" alt="Largest Broker" className="w-full max-w-sm" />
            </div>

            {/* Right Content */}
            <div className="p-5 md:mt-5">
            <h1 className="text-3xl font-semibold">Largest stock broker in India</h1>

            <p className="mb-5 mt-3 text-gray-600">
                2+ million Zerodha clients contribute to over 15% of all retail
                order volumes in India daily by trading and investing in:
            </p>

            {/* Two Column List */}
            <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
                </ul>

                <ul className="space-y-2 text-gray-700">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
                </ul>
            </div>

            {/* Press Logos */}
            <img 
                src="media/images/pressLogos.png" 
                alt="Press Logos" 
                className="mt-6 w-[90%]"
            />
            </div>

        </div>
        </div>

     );
}

export default Awards;