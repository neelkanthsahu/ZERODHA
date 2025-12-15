import React from 'react';

function OpenAccount() {
    return ( 
        <div className="max-w-screen-lg mx-auto p-5 mb-5 text-center">
            <h1 className="mt-5 text-3xl font-medium">
                Open a Zerodha account
            </h1>

            <p className="text-gray-700 mt-3">
                Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
                F&O trades.
            </p>

            <button
                className="mt-6 mb-5 bg-[#387ed1] text-white text-lg font-normal
                        py-2 px-8 rounded hover:bg-black hover:text-white transition mx-auto block"
            >
                Sign up for free
            </button>
        </div>

     );
}

export default OpenAccount;