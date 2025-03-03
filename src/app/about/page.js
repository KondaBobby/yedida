import React from 'react';

const AboutSection = () => {
    return (
        <div className="w-full lg:w-[550px] max-w-4xl mx-auto p-6 bg-white rounded ">
            <h1 className="text-3xl font-bold mb-6 text-center">About</h1>

            <div className="space-y-4">
                <p className='text-justify'>
                    Established in 2010, we are a firm of Chartered Accountants, with over 15 years of experience in providing professional services. We specialize in the field of Audit, Assurance, Taxation and Advisory services.
                </p>

                <p className='text-justify'>
                    We a team of qualified chartered accountants, and associates with expertise in various fields. It offers wide-range professional services and compliance services in the of Direct and Indirect tax laws with focus on adding value to the business/professional of the clients.
                </p>

                <p className='text-justify'>
                    We are based in Bengaluru, also have associations with CA firms in Hyderabad, Chennai, Coimbatore and Salem.
                </p>

                <p className='text-justify'>
                    At Yedida & Associates, we uphold strong values including integrity, objectivity, professional competence, due care, confidentiality, and professional behavior. These principles, guide our commitment to quality services and building lasting relationships with our client guide delivering high-quality services and building lasting relationships with our clients.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;