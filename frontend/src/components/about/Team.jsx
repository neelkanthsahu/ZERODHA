import React from 'react';

function Team() {
    return (
        <div className="max-w-6xl mx-auto">

            {/* Title */}
            <div className="py-6 mt-10 border-t">
                <h1 className="text-center text-3xl font-semibold">People</h1>
            </div>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5 text-gray-600 leading-relaxed text-[1.15rem]">

                {/* Left: Photo & Name */}
                <div className="text-center p-3">
                    <img
                        src="media/images/nithinKamath.jpg"
                        className="rounded-full mx-auto w-1/2"
                        alt="Nithin Kamath"
                    />
                    <h4 className="mt-6 text-xl font-semibold">Nithin Kamath</h4>
                    <h6 className="text-gray-500 text-sm">Founder, CEO</h6>
                </div>

                {/* Right: Description */}
                <div className="p-3 space-y-4">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles
                        he faced during his decade long stint as a trader. Today, Zerodha has
                        changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
                        and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>

                    <p>
                        Connect on{" "}
                        <a href="#" className="text-blue-600 hover:underline">Homepage</a> /
                        <a href="#" className="text-blue-600 hover:underline ml-1">TradingQnA</a> /
                        <a href="#" className="text-blue-600 hover:underline ml-1">Twitter</a>
                    </p>
                </div>

            </div>
        </div>

    );
}

export default Team;