import React from 'react';

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
    return (
        <div className="max-w-6xl mx-auto mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Left Image */}
                <div className="flex justify-center md:justify-start">
                    <img src={imageURL} alt="product" className="w-full max-w-md" />
                </div>

                {/* Right Content */}
                <div className="p-6 md:p-10">
                    <h1 className="text-3xl font-semibold">{productName}</h1>

                    <p className="mt-4 text-gray-600">{productDesription}</p>

                    {/* Try Demo + Learn More */}
                    <div className="mt-5 flex items-center gap-12">
                        <a href={tryDemo} className="text-blue-600 hover:underline font-medium">
                            Try Demo
                        </a>

                        <a href={learnMore} className="text-blue-600 hover:underline font-medium">
                            Learn More
                        </a>
                    </div>

                    {/* Store Badges */}
                    <div className="mt-5 flex items-center gap-12">
                        <a href={googlePlay}>
                            <img
                                src="media/images/googlePlayBadge.svg"
                                alt="Google Play Store"
                                className="w-32"
                            />
                        </a>

                        <a href={appStore}>
                            <img
                                src="media/images/appstoreBadge.svg"
                                alt="Apple App Store"
                                className="w-32"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LeftSection;