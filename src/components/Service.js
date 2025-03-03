// components/Services.jsx
import Image from 'next/image';
import Link from 'next/link';
import service1 from "@/assets/Images/service1.png"
import service2 from "@/assets/Images/service2.png"
import service3 from "@/assets/Images/service3.png"
import service4 from "@/assets/Images/service4.png"
import service5 from "@/assets/Images/service5.png"
import service6 from "@/assets/Images/service6.png"
import service7 from "@/assets/Images/service7.png"





const ServiceCard = ({ title, imageSrc, link }) => {
    return (
        <div className=" h-[250px] w-[200px] bg-[#003C72] rounded-[36px] p-4 flex flex-col justify-evenly items-center gap-[20px] text-center relative hover:bg-green-400">
            <div className=" h-14 w-full flex items-center justify-center ">
                <img
                    src={imageSrc.src}
                    alt={title}
                    className="h-24 w-auto object-contain"
                />
            </div>
            <div className="h-[56px] p-4 flex justify-center items-center bg-white text-blue-900 py-2 px-4 rounded-full text-[10px] font-medium w-full max-w-xs">
                {title}
            </div>
            <Link href={link} className="absolute inset-0" aria-label={`Learn more about ${title}`}></Link>
        </div>
    );
};

const Services = () => {
    const servicesFirst = [
        {
            title: "INCORPORATION AND REGISTRATION SERVICES",
            imageSrc: service1,
            link: "/incorporation-and-registration"
        },
        {
            title: "ACCOUNTING SERVICES",
            imageSrc: service2,
            link: "/account-services"
        },
        {
            title: "COMPLIANCE AND CERTIFICATION SERVICES",
            imageSrc: service3,
            link: "/compliance-certification-services"
        },
        {
            title: "AUDIT AND ASSURANCE SERVICES",
            imageSrc: service4,
            link: "/audit-assurance-services"
        },

    ];

    const serviceSecond = [
        {
            title: "DIRECT TAXATION SERVICES",
            imageSrc: service5,
            link: "/direct-taxation-services"
        },
        {
            title: "INDIRECT TAXATION SERVICES",
            imageSrc: service6,
            link: "/indirect-taxation-services"
        },
        {
            title: "VIRTUAL CFO SERVICES",
            imageSrc: service7,
            link: "/virtual-cfo-services"
        }
    ]

    return (
        <>
            <div id='services' className='mb-10'></div>
            <section className="pb-16 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl text-center font-bold mb-10">Services</h2>
                    <div className="flex flex-wrap gap-[40px] pl-[20px] pr-[20px] justify-center items-center">
                        <div className="flex flex-wrap gap-[40px] pl-[20px] pr-[20px] justify-center items-center">
                            {servicesFirst.map((service, index) => (
                                <ServiceCard
                                    key={index + 4}
                                    title={service.title}
                                    imageSrc={service.imageSrc}
                                    link={service.link}
                                />
                            ))}

                        </div>
                        <div className="flex flex-wrap gap-[40px] pl-[20px] pr-[20px] justify-center items-center">
                            {serviceSecond.map((service, index) => (
                                <ServiceCard
                                    key={index + 4}
                                    title={service.title}
                                    imageSrc={service.imageSrc}
                                    link={service.link}
                                />
                            ))}

                        </div>
                    </div>
                </div>

            </section>
            <section className="py-8 px-4">
                <div className="mx-auto text-center w-full lg:w-[60%]">
                    <h2 className="text-3xl text-center font-bold mb-10">Why us</h2>
                    <p className=" text-center px-10 pt-2 text-lg leading-snug">
                        Specializing in Corporate Law, Secretarial Compliances, Tax Matters, Audits, and
                        Accountancy, we offer cost-effective solutions with a young, dynamic team. With
                        experience across diverse sectors, we thrive on challenges and build long-term
                        client relationships. Our diverse network and cross-industry expertise ensure
                        comprehensive support for your business needs.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Services;