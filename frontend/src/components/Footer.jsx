import React from 'react';

function Footer() {
    return ( 
        <footer className="bg-[#fafafa] border-t mt-10">
            <div className="max-w-screen-xl mx-auto px-4 py-10">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logo + Copyright */}
                <div>
                    <img src="media/images/logo.svg" alt="Logo" className="w-1/2 mb-3" />
                    <p className="text-gray-600 text-sm">
                    © 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
                    </p>
                </div>

                {/* Column 1 */}
                <div>
                    <p className="font-semibold mb-2">Company</p>

                    <div className="flex flex-col space-y-1 text-gray-700">
                    <a href="#" className="hover:text-blue-600">About</a>
                    <a href="#" className="hover:text-blue-600">Products</a>
                    <a href="#" className="hover:text-blue-600">Pricing</a>
                    <a href="#" className="hover:text-blue-600">Referral programme</a>
                    <a href="#" className="hover:text-blue-600">Careers</a>
                    <a href="#" className="hover:text-blue-600">Zerodha.tech</a>
                    <a href="#" className="hover:text-blue-600">Press & media</a>
                    <a href="#" className="hover:text-blue-600">Zerodha cares (CSR)</a>
                    </div>
                </div>

                {/* Column 2 */}
                <div>
                    <p className="font-semibold mb-2">Support</p>

                    <div className="flex flex-col space-y-1 text-gray-700">
                    <a href="#" className="hover:text-blue-600">Contact</a>
                    <a href="#" className="hover:text-blue-600">Support portal</a>
                    <a href="#" className="hover:text-blue-600">Z-Connect blog</a>
                    <a href="#" className="hover:text-blue-600">List of charges</a>
                    <a href="#" className="hover:text-blue-600">Downloads & resources</a>
                    </div>
                </div>

                {/* Column 3 */}
                <div>
                    <p className="font-semibold mb-2">Account</p>

                    <div className="flex flex-col space-y-1 text-gray-700">
                    <a href="#" className="hover:text-blue-600">Open an account</a>
                    <a href="#" className="hover:text-blue-600">Fund transfer</a>
                    <a href="#" className="hover:text-blue-600">60 day challenge</a>
                    </div>
                </div>
                </div>

                {/* Disclaimer Section */}
                <div className="mt-10 text-gray-500 text-sm space-y-5 leading-relaxed">

                <p>
                    Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
                    INZ000031633 CDSL: Depository services through Zerodha Securities
                    Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
                    through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
                    no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
                    #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
                    J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
                </p>

                <p>
                    Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
                    Mandatory details: Name, PAN, Address, Mobile Number, Email ID.
                </p>

                <p>
                    Investments in securities market are subject to market risks; read all 
                    related documents carefully before investing.
                </p>

                <p>
                    Prevent unauthorized transactions in your account. Update your mobile
                    numbers/email IDs with your stock brokers...
                    If you find anyone claiming to be part of Zerodha offering such services, 
                    please create a ticket here.
                </p>
                </div>

            </div>
        </footer>

     );
}

export default Footer;