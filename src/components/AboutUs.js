// components/AboutUs.jsx
import Image from 'next/image';
import Link from 'next/link';
import aboutIllustrationImg from "@/assets/Images/about-illustration.png"

const AboutUs = () => {
    return (
        <>
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <h2 className=" font-varela text-3xl font-bold text-center mb-2">About us</h2>
                    <div className="flex flex-col  gap-4">
                        <div className="w-full gap-2 flex flex-col justify-center items-center  text-center md:text-left">
                            <p className="font-varela lg:w-[60%] text-center px-10 py-2 text-lg leading-snug">
                                Established in 2010, Yedida & Associates is a leading Chartered Accountancy firm based in
                                the vibrant city of Bangalore. With over a decade of expertise, we have built
                                a strong reputation for delivering exceptional services in the fields of audit,
                                taxation, assurance, and advisory. Our commitment to excellence, integrity,
                                and client-centric solutions has made us a trusted partner for businesses
                                and individuals alike.
                            </p>

                            <div className="flex justify-center items-center">
                                <Link
                                    href="/about"
                                    className="inline-flex items-center cursor-pointer bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-green-500 transition-colors"
                                >
                                    Read more
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Image */}

                    </div>
                </div>



            </section>

            <div className="w-full flex justify-start">
                <img
                    src={aboutIllustrationImg.src}
                    alt="Business professionals meeting"

                    className="w-[568px] h-[510] object-cover"
                />
            </div>
        </>

    );
};

export default AboutUs;