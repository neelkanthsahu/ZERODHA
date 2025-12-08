import React from 'react';

function Stats() {
    return (  
        <div className="max-w-screen-xl mx-auto  my-20 p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-8">

            {/* Left Section */}
            <div className="p-5 text-right md:text-left">
                <h1 className="text-3xl font-medium mb-5">Trust with confidence</h1>

                <h2 className="text-xl font-semibold mt-4 font-normal">Customer-first always</h2>
                <p className="text-gray-600 mt-1">
                    That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments,
                     making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
                </p>

                <h2 className="text-xl font-semibold mt-4 font-normal">No spam or gimmicks</h2>
                <p className="text-gray-600 mt-1">
                   No gimmicks, spam, "gamification", or annoying push notifications.
                    High quality apps that you use at your pace, the way you like. Our philosophies.
                </p>

                <h2 className="text-xl font-semibold mt-4 font-normal">The Zerodha universe</h2>
                <p className="text-gray-600 mt-1">
                    Not just an app, but a whole ecosystem. Our investments in 30+
                    fintech startups offer you tailored services specific to your needs.
                </p>

                <h2 className="text-xl font-semibold mt-4 font-normal">Do better with money</h2>
                <p className="text-gray-600 mt-1">
                    With initiatives like Nudge and Kill Switch, we don't just facilitate
                    transactions, but actively help you do better with your money.
                </p>
            </div>

            {/* Right Section */}
            <div className="p-5">
            <img 
                src="media/images/ecosystem.png" 
                alt="ecosystem"
                className="w-[90%] mx-auto"
            />

            <div className="text-center mt-3 space-x-8">
                <a 
                href="#"
                className="text-blue-600 hover:text-blue-800 no-underline inline-flex items-center gap-1"
                >
                Explore our products 
                <span className="inline-block">→</span>
                </a>

                <a 
                href="#"
                className="text-blue-600 hover:text-blue-800 no-underline inline-flex items-center gap-1"
                >
                Try Kite demo 
                <span className="inline-block">→</span>
                </a>
            </div>
            </div>

        </div>
        </div>

    );
}

export default Stats;