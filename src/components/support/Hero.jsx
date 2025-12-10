import React from 'react';

function Hero() {
    return (
        <div className="w-full bg-[#f7f7f7] pb-20">

            {/* Page Title */}
            <div className="max-w-5xl mx-auto pt-12 text-center">
                <h1 className="text-3xl font-semibold">Support Portal</h1>

                {/* Search Box */}
                <div className="mt-6">
                    <input
                        type="text"
                        placeholder="Eg: How do I open my account, How do I activate F&O..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm 
                   focus:ring-1 focus:ring-blue-500 text-[15px]"
                    />
                </div>
            </div>

            {/* Main Layout */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-4">

                {/* LEFT = Accordion Categories */}
                <div className="md:col-span-2 space-y-4">

                    {/* Accordion Item */}
                    <div className="border rounded-lg shadow-sm bg-white flex items-center justify-between px-5 py-4 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <i className="fa fa-plus-circle text-blue-600"></i>
                            <span className="text-[17px]">Account Opening</span>
                        </div>
                        <i className="fa fa-chevron-down text-gray-500"></i>
                    </div>

                    <div className="border rounded-lg shadow-sm bg-white flex items-center justify-between px-5 py-4 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <i className="fa-regular fa-user text-blue-600"></i>
                            <span className="text-[17px]">Your Zerodha Account</span>
                        </div>
                        <i className="fa fa-chevron-down text-gray-500"></i>
                    </div>

                    <div className="border rounded-lg shadow-sm bg-white flex items-center justify-between px-5 py-4 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <i className="fa fa-folder-open text-blue-600"></i>
                            <span className="text-[17px]">Kite</span>
                        </div>
                        <i className="fa fa-chevron-down text-gray-500"></i>
                    </div>

                    <div className="border rounded-lg shadow-sm bg-white flex items-center justify-between px-5 py-4 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <i className="fa fa-rupee-sign text-blue-600"></i>
                            <span className="text-[17px]">Funds</span>
                        </div>
                        <i className="fa fa-chevron-down text-gray-500"></i>
                    </div>

                    <div className="border rounded-lg shadow-sm bg-white flex items-center justify-between px-5 py-4 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <i className="fa fa-list-check text-blue-600"></i>
                            <span className="text-[17px]">Console</span>
                        </div>
                        <i className="fa fa-chevron-down text-gray-500"></i>
                    </div>

                    <div className="border rounded-lg shadow-sm bg-white flex items-center justify-between px-5 py-4 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <i className="fa fa-circle text-blue-600"></i>
                            <span className="text-[17px]">Coin</span>
                        </div>
                        <i className="fa fa-chevron-down text-gray-500"></i>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-8">

                    {/* Orange Highlight Box */}
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded shadow-sm text-[15px] space-y-2">
                        <ul className="list-disc ml-5">
                            <li>
                                <a href="#" className="text-blue-600 hover:underline">
                                    Latest Intraday leverages and Square-off timings
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-600 hover:underline">
                                    Surveillance measure on scrips – December 2025
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="border rounded-lg shadow-sm bg-white">
                        <h3 className="bg-gray-100 py-3 px-4 font-semibold text-[15px]">
                            Quick links
                        </h3>

                        <ul className="text-[15px] divide-y">
                            <li className="p-3">
                                <a href="#" className="text-blue-600 hover:underline">
                                    1. Track account opening
                                </a>
                            </li>
                            <li className="p-3">
                                <a href="#" className="text-blue-600 hover:underline">
                                    2. Track segment activation
                                </a>
                            </li>
                            <li className="p-3">
                                <a href="#" className="text-blue-600 hover:underline">
                                    3. Intraday margins
                                </a>
                            </li>
                            <li className="p-3">
                                <a href="#" className="text-blue-600 hover:underline">
                                    4. Kite user manual
                                </a>
                            </li>
                            <li className="p-3">
                                <a href="#" className="text-blue-600 hover:underline">
                                    5. Learn how to create a ticket
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>

    );
}

export default Hero;