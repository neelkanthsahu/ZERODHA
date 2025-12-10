import React from 'react';

function Brokerage() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10 mt-10 text-center border-t">

                {/* Left Section (Brokerage Calculator) */}
                <div className="md:col-span-2 p-4">
                    <a href="#" className="no-underline">
                        <h3 className="text-lg font-semibold">Brokerage calculator</h3>
                    </a>

                    <ul className="text-left leading-loose text-[12px] text-gray-600 mt-4 space-y-2">
                        <li>
                            Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST
                            per order.
                        </li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>
                            Physical copies of contract notes, if required, shall be charged ₹20
                            per contract note. Courier charges apply.
                        </li>
                        <li>
                            For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity
                            (whichever is lower).
                        </li>
                        <li>
                            For NRI account (PIS), 0.5% or ₹200 per executed order for equity
                            (whichever is lower).
                        </li>
                        <li>
                            If the account is in debit balance, any order placed will be charged
                            ₹40 per executed order instead of ₹20 per executed order.
                        </li>
                    </ul>
                </div>

                {/* Right Section (List of Charges) */}
                <div className="p-4 flex items-start justify-center md:justify-start">
                    <a href="#" className="no-underline">
                        <h3 className="text-lg font-semibold">List of charges</h3>
                    </a>
                </div>

            </div>
        </div>

    );
}

export default Brokerage;