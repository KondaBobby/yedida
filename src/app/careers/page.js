import Link from 'next/link';
import React from 'react';

const CareersComponent = () => {
    return (
        <div className="w-full lg:w-[550px] max-w-4xl mx-auto p-6 bg-white rounded ">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold">Join Our Team!</h1>
            </div>

            <div className="mb-8">
                <p className="text-justify mb-4">
                    At Yedida, we are always looking for talented individuals who are passionate about making a difference. If you're interested in exploring career opportunities with us, please reach out to our HR department. Be sure to mention the specific position you are interested in, and feel free to attach your resume and any relevant documents.
                </p>
                <p className="text-justify">
                    To apply or inquire, please contact our HR team at <Link href="mailto:info@yedida.in" className="text-blue-600 hover:underline">info@yedida.in</Link> with the subject line "Application for [Position Name]." We look forward to hearing from you and discussing how you can contribute to our growing team.
                </p>
            </div>
        </div>
    );
};

export default CareersComponent;