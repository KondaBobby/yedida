// components/Header.jsx
"use client"
// components/Header.jsx
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import handshakeImg from "@/assets/Images/shake-hands.svg"
import teamWorkImg from "@/assets/Images/team-work.svg"
import learnTutor from "@/assets/Images/learn-tutor.svg"
import caIndiaImg from "@/assets/Images/HeaderImg.png"
import { Link as ScrollLink, scroller } from 'react-scroll'
import whatsappIcon from "@/assets/Images/whatsapp-icon.jpg"




const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const router = useRouter();
    const location = usePathname()
    // console.log("router", pathName)

    const scrollToServices = () => {
        scroller.scrollTo('services', {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: 50
        });
    };

    const goToHomeAndScroll = async () => {
        // await closeMobile();
        await router.push('/');
        // Need to wait for the page to load before scrolling
        setTimeout(() => {
            scrollToServices();
        }, 500);
    };

    return (
        <header className="w-full bg-gradient-to-b from-blue-900 to-[#149eca] text-white">
            {/* Top navigation bar */}
            <div className="container mx-auto px-[22px] py-3 flex justify-between items-center border-b border-blue-700">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex flex-col">
                        <div className="text-xl   text-center font-bold flex  items-center ">
                            <span className=' decoration-w-[2px]'>Yedida & Associates</span>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <div className="w-[90%] h-[1px] flex justify-center items-center text-center bg-white"></div>
                        </div>
                        <div className="text-sm text-center text-gray-300">Chartered Accountants</div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">

                    {(location === '/' || location === '') ? (
                        <div onClick={scrollToServices} className="hover:text-blue-200 cursor-pointer">
                            Services
                        </div>
                    ) : (
                        <div onClick={goToHomeAndScroll} className="hover:text-blue-200 cursor-pointer">
                            Services
                        </div>
                    )}
                    <Link href="/careers" className="hover:text-blue-200">
                        Careers
                    </Link>
                    <Link href="/contact" className="hover:text-blue-200">
                        Contact
                    </Link>
                </div>

                {/* Phone number */}
                <div className="hidden md:flex items-center gap-2">
                    <a
                        href="https://wa.me/8095943537"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-white text-blue-800 rounded-md hover:bg-blue-100 transition-colors duration-300"
                    >
                        <div className="mr-2 w-5 h-5 flex items-center justify-center">
                            <img src={whatsappIcon.src} className="w-full h-full rounded-sm" alt="WhatsApp" />
                        </div>
                        <span>+91 9886258261</span>
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? (
                        // X icon
                        <div className="relative w-6 h-6">
                            <div className="absolute top-1/2 left-0 w-6 h-0.5 bg-white transform rotate-45"></div>
                            <div className="absolute top-1/2 left-0 w-6 h-0.5 bg-white transform -rotate-45"></div>
                        </div>
                    ) : (
                        // Menu icon
                        <div className="w-6 h-6 flex flex-col justify-between">
                            <div className="w-full h-0.5 bg-white"></div>
                            <div className="w-full h-0.5 bg-white"></div>
                            <div className="w-full h-0.5 bg-white"></div>
                        </div>
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-blue-800 px-4 py-2">
                    <nav>
                        <ul className="flex flex-col space-y-3">
                            <li>
                                {(location === '/' || location === '') ? (
                                    <div onClick={scrollToServices} className="hover:text-blue-200 cursor-pointer">
                                        Services
                                    </div>
                                ) : (
                                    <div onClick={goToHomeAndScroll} className="hover:text-blue-200 cursor-pointer">
                                        Services
                                    </div>
                                )}
                            </li>
                            <li>
                                <Link href="/careers" className="hover:text-blue-200 py-2 block">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-blue-200 py-2 block">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/+918095943537"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center py-2 hover:text-blue-500 transition-colors duration-300"
                                >
                                    <div className="mr-2 w-4 h-4 flex items-center justify-center">
                                        <img src={whatsappIcon.src} className="rounded-sm w-full h-full" alt="WhatsApp" />
                                    </div>
                                    <span>+91 9886258261</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}

            {/* Banner section with reorganized layout */}
            <div className="container mx-auto px-4 py-4">
                {/* Headline - placed at the top for mobile/tablet */}
                <h1 className="text-[33px] mb-[25px] text-xl md:text-2xl font-semibold text-center text-white mb-1 md:hidden  leading-relaxed">
                    Simplifying Finances, Maximizing Growth
                </h1>

                {/* Reorganized content - uses flex-col on mobile and flex-row on larger screens */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* CA India Logo */}
                    <div className="relative lg:left-[4%] w-[334px] lg:left-15 xl:left-[px] md:w-[334px] max-w-md h-[334px] bg-white rounded-[20px] p-4 flex items-center justify-center mb-8 md:mb-0">
                        <div className="relative w-80 h-80 max-w-full ">
                            <Image
                                src={caIndiaImg}
                                alt="CA India Logo"
                                fill
                                className="object-contain  w-[315px] h-[315px]"
                                priority
                                sizes="(max-width: 768px) 100vw, 334px"
                            />
                        </div>
                    </div>

                    {/* Images and Headline container */}
                    <div className="flex flex-col w-full gap-4">
                        {/* Headline for desktop - hidden on mobile */}
                        <h1 className="text-[33px]  hidden md:block  md: font-semibold text-center text-white mb-2 ">
                            Simplifying Finances, Maximizing Growth
                        </h1>

                        {/* Top row of images */}
                        <div className="flex flex-col sm:flex-row gap-8 justify-center">
                            <div className="relative w-72 h-44 overflow-hidden rounded-md mx-auto sm:mx-0">
                                <Image
                                    src={handshakeImg}
                                    alt="Business handshake"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 299px"
                                />
                            </div>
                            <div className="relative w-72 h-44 overflow-hidden rounded-md mx-auto sm:mx-0">
                                <Image
                                    src={teamWorkImg}
                                    alt="Team collaboration"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 299px"
                                />
                            </div>
                        </div>

                        {/* Bottom row with learn tutor image */}
                        <div className="w-full flex justify-center">
                            <div className="relative w-72 h-44 overflow-hidden rounded-md">
                                <Image
                                    src={learnTutor}
                                    alt="Business documents"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 299px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};


export default Header;