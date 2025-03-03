'use client'

// components/Footer.jsx
import Link from 'next/link';
import footerHedline from "@/assets/Images/footer-headline.png"
import location from "@/assets/Images/location.png"
import mailIcon from "@/assets/Images/mailIcon.png"
import mobileIcon from "@/assets/Images/mobileIcon.png"




const Footer = () => {
    return (
        <footer className="w-full bg-blue-900 text-white py-6">
            <div className="container mx-auto flex flex-col items-center px-4 ">

                {/* Title */}
                <h2 className="text-xl text-center">Connect with us</h2>

                {/* Footer Headline Image */}
                <div className="text-center mb-5">
                    <img
                        src={footerHedline.src}
                        alt="footer-headline"
                        className="w-[294px] h-[104px] object-contain"
                    />
                </div>

                {/* Contact Information Grid */}
                <div className="w-full flex flex-col md:flex-row justify-center lg:justify-around items-center gap-6">

                    {/* Address Section */}
                    <div className="flex flex-col items-center text-center">
                        <img src={location.src} alt="location" className="w-[50px] h-[50px]" />
                        <p className="text-sm">NO.2628, 27th Main Rd,</p>
                        <p className="text-sm">1st Sector, HSR Layout, Bengaluru, Karnataka</p>
                        <p className="text-sm">560102</p>
                        <p className="text-sm mt-2">
                            <Link
                                href="https://www.google.com/search?gs_ssp=eJwFwUEOQDAQBdDYStzAwsZaB2HqCG4xnfw2EsYCSTm998qqSx2RXlP06cuuWFqXhyCgkfs4gcAaF5e9cEBPyh6M0c1rjT1u1hxiknDA7kZPu579FtP3ByxfGxA&q=elfin+management+consultancy&oq=elfin&gs_lcrp=EgZjaHJvbWUqEAgCEC4YrwEYxwEYugIYgAQyDggAEEUYORhDGIAEGIoFMgcIARAAGIAEMhAIAhAuGK8BGMcBGLoCGIAEMgwIAxAAGEMYgAQYigUyEggEEC4YQxivARjHARiABBiKBTIMCAUQABhDGIAEGIoFMgoIBhAuGIAEGOUEMgcIBxAAGIAEMhMICBAuGK8BGMcBGLoCGIAEGI4FMgcICRAAGIAEMgwIChAAGEMYgAQYigUyDAgLEC4YQxiABBiKBTIHCAwQABiABDIHCA0QABiABDIHCA4QABiABNIBCDI1NTFqMGo5qAIOsAIB8QWmGoIwcsH9XPEFphqCMHLB_Vw&client=ms-android-oneplus-rvo3&sourceid=chrome-mobile&ie=UTF-8#ebo=0"
                                className="underline hover:text-blue-500">
                                Locate us on Google Maps
                            </Link>
                        </p>
                    </div>

                    {/* Email Section */}
                    <div className="flex flex-col items-center text-center">
                        <img src={mailIcon.src} alt="email" className="w-[50px] h-[40px] " />
                        <p className="text-sm">info@yedida.in</p>
                        <p className="text-sm">babu@yedida.in</p>
                    </div>

                    {/* Phone Section */}
                    <div className="flex flex-col items-center text-center">
                        <img src={mobileIcon.src} alt="phone" className="w-[50px] h-[50px]" />
                        <p className="text-sm">+91 9886258261</p>
                        <p className="text-sm">+91 9902242197</p>
                    </div>

                </div>

            </div>
        </footer>

    );
};

export default Footer;