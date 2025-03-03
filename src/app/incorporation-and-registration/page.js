import React from 'react';

const IncorporationServices = () => {
    return (
        <div className="w-full lg:w-[550px] max-w-4xl mx-auto p-6 bg-white rounded ">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold mb-1">INCORPORATION AND</h1>
                <h1 className="text-3xl font-bold">REGISTRATION SERVICES</h1>
            </div>

            <ul className="mb-8 space-y-2">
                <li className="flex items-start">
                    <span className="mr-2 text-lg">•</span>
                    <span>Company/LLP incorporation</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-2 text-lg">•</span>
                    <span>Partnership Firm Registration</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-2 text-lg">•</span>
                    <span>Proprietorship Registration and Trust Registration</span>
                </li>
            </ul>

            <div className="mb-6 text-justify">
                <p className="mb-4">
                    In India, company registration is also known as incorporation of a
                    company or formation of a business entity. Registering your company
                    helps you to make your business as a distinguished entity and gives it
                    a legal existence also.
                </p>

                <p className="mb-6">
                    The process of company registration in India is done under the
                    Ministry of Corporate Affairs(MCA).
                </p>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-2 text-center">Documents Required for Company Registration</h2>
                <ul className="space-y-1">
                    <li className="flex items-start">
                        <span className="mr-2 text-lg">•</span>
                        <span>PAN CARD</span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-lg">•</span>
                        <span>AADHAAR CARD</span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-lg">•</span>
                        <span>LATEST BANK STATEMENT</span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-lg">•</span>
                        <span>RENT AGREEMENT AND ELECTRICITY BILL</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default IncorporationServices;