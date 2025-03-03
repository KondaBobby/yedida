import React from 'react';
import Image from 'next/image';
import indsutIllustrationImg from "@/assets/Images/industry-illustration.svg"
import industry1 from "@/assets/Images/industry1.png"
import industry2 from "@/assets/Images/industry2.png"
import industry3 from "@/assets/Images/industry3.png"
import industry4 from "@/assets/Images/industry4.png"
import industry5 from "@/assets/Images/industry5.png"
import industry6 from "@/assets/Images/industry6.png"
import industry7 from "@/assets/Images/industry8.png"
import industry8 from "@/assets/Images/industry7.png"
import industry9 from "@/assets/Images/industry9.png"
import industry10 from "@/assets/Images/industry10.png"
import sucess from "@/assets/Images/sucess.png"







const IndustryCard = ({ icon, title }) => {
    return (
        <div className="w-[132px] h-[118px] bg-blue-900 rounded-xl p-4 flex flex-col items-center justify-center  aspect-square text-white hover:bg-blue-800 transition-colors cursor-pointer">
            <div className="w-full flex justify-center items-center h-12 mb-2">
                <img src={icon.src} alt={title} className='w-[55px] h-[52px]' />
            </div>
            <p className="text-center text-sm font-medium">{title}</p>
        </div>
    );
};

const Industries = () => {
    const industries = [
        { id: 1, title: 'Automobiles', icon: industry1 },
        { id: 2, title: 'Information Technology', icon: industry2 },
        { id: 3, title: 'Financial sector', icon: industry3 },
        { id: 4, title: 'Hospitality', icon: industry4 },
        { id: 5, title: 'Agri Sector', icon: industry5 },
        { id: 6, title: 'Educational Institutions', icon: industry6 },
        { id: 7, title: 'Real Estate & construction', icon: industry7 },
        { id: 8, title: 'Stock brokering', icon: industry8 },
        { id: 9, title: 'Manufacturing sector', icon: industry9 },
        { id: 10, title: 'Engineering & Electronics', icon: industry10 }
    ];

    return (
        <>
            <section className="pt-16 bg-white w-full">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Industries</h2>

                    <div className="w-full flex justify-center items-center ">
                        <div className='w-full lg:w-[60%] flex  justify-center items-center   flex-wrap gap-[30px]'>
                            {industries.map((industry) => (
                                <IndustryCard
                                    key={industry.id}
                                    icon={industry.icon}
                                    title={industry.title}
                                />
                            ))}
                        </div>
                    </div>


                </div>
            </section>
            <div className="mt-16 flex justify-end">
                <img
                    src={sucess.src}
                    alt="Analytics illustration"
                    className='w-[663px] h-[558px]'
                />
            </div>
        </>

    );
};

export default Industries;