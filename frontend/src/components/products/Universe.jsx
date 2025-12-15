import React from 'react';

function Universe() {
    return (
        <div className="max-w-6xl mx-auto mt-10">
            <div className="text-center">

                {/* Heading */}
                <h1 className="text-3xl font-semibold">The Zerodha Universe</h1>
                <p className="text-gray-600 mt-2">
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>

                {/* Grid of Logos */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10">

                    <div className="p-3 text-center">
                        <img src="media/images/zerodhafundhouse (1).png" className="mx-auto w-32" />
                        <p className="text-gray-500 text-sm mt-2">Our asset management venture <br />
                            that is creating simple and transparent index <br />
                            funds to help you save for your goals.</p>
                    </div>

                    <div className="p-3 text-center">
                        <img src="media/images/sensibull-logo.svg" className="mx-auto w-32" />
                        <p className="text-gray-500 text-sm mt-2">Options trading platform that lets you <br />
                            create strategies, analyze positions, and examine <br />
                            data points like open interest, FII/DII, and more.</p>
                    </div>

                    <div className="p-3 text-center">
                        <img src="media/images/tijori.svg   " className="mx-auto w-32" />
                        <p className="text-gray-500 text-sm mt-2">Investment research platform <br />
                            that offers detailed insights on stocks, <br />
                            sectors, supply chains, and more.</p>
                    </div>

                    <div className="p-3 text-center">
                        <img src="media/images/streak-logo.png" className="mx-auto w-32" />
                        <p className="text-gray-500 text-sm mt-2">Systematic trading platform <br />
                            that allows you to create and backtest <br />
                            strategies without coding.</p>
                    </div>

                    <div className="p-3 text-center">
                        <img src="media/images/smallcaseLogo.png" className="mx-auto w-32" />
                        <p className="text-gray-500 text-sm mt-2">Thematic investing platform <br />
                            that helps you invest in diversified <br />
                            baskets of stocks on ETFs.</p>
                    </div>

                    <div className="p-3 text-center">
                        <img src="media/images/ditto-logo.png" className="mx-auto w-32" />
                        <p className="text-gray-500 text-sm mt-2">Personalized advice on life <br />
                            and health insurance. No spam <br />
                            and no mis-selling.</p>
                    </div>

                </div>

                {/* Signup Button */}
                <div className="mt-10 mb-10">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-2 rounded">
                        Signup Now
                    </button>
                </div>

            </div>
        </div>

    );
}

export default Universe;