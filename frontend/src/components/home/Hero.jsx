import React from 'react';
import './hero.css';
function Hero() {

    return (  
        <div className="max-w-screen-lg mx-auto p-5 mb-5 text-center">
            <div className='hero'>
                <img 
                src="media/images/homeHero.png" 
                alt="Hero Image" 
                className="mb-5 mx-auto w-full"
                />

                <h1 className="mt-5 text-3xl font-medium">
                Invest in everything
                </h1>

                <p className="mt-3 text-gray-600 text-lg">
                Online platform to invest in stocks, derivatives, mutual funds, and more
                </p>

                <button className="bg-[#387ed1] text-white border border-transparent rounded px-6 py-3 mt-5 font-medium hover:bg-blue-700 hover:bg-black hover:text-white transition">
                Signup for free
                </button>
            </div>
        </div>
    );
}

export default Hero;