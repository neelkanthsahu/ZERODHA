import React from 'react';

function Hero() {
    return (
        <div className="max-w-6xl mx-auto">

            {/* Title Section */}
            <div className="text-center p-10 mt-10 border-b">
                <h1 className="text-4xl font-semibold">Pricing</h1>
                <h3 className="text-gray-500 mt-3 text-lg">
                    Free equity investments and flat ₹20 intraday and F&O trades
                </h3>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10 mt-10 text-center">

                {/* Card 1 */}
                <div className="p-5">
                    <img src="media/images/pricingEquity.svg" className="mx-auto mb-4" />
                    <h1 className="text-2xl font-semibold mb-2">Free equity delivery</h1>
                    <p className="text-gray-600">
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹0
                        brokerage.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="p-5">
                    <img src="media/images/intradayTrades.svg" className="mx-auto mb-4" />
                    <h1 className="text-2xl font-semibold mb-2">Intraday and F&O trades</h1>
                    <p className="text-gray-600">
                        Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday
                        trades across equity, currency, and commodity trades.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="p-5">
                    <img src="media/images/pricingEquity.svg" className="mx-auto mb-4" />
                    <h1 className="text-2xl font-semibold mb-2">Free direct MF</h1>
                    <p className="text-gray-600">
                        All direct mutual fund investments are absolutely free — ₹0 commissions
                        & DP charges.
                    </p>
                </div>

            </div>
        </div>

    );
}

export default Hero;