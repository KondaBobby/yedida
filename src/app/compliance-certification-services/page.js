"use client"
import React, { useRef } from 'react';
import { scroller } from 'react-scroll';

const ComplianceCertificationServices = () => {
    const statutoryDuesRef = useRef(null);
    const prescribedReturnsRef = useRef(null);
    const companiesActRef = useRef(null);
    const certificationServicesRef = useRef(null);

    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };

    return (
        <div className=" w-full lg:w-[550px] max-w-4xl mx-auto p-6 bg-white rounded ">
            <h1 className="text-2xl font-bold mb-6 text-center">COMPLIANCE AND<br />CERTIFICATION SERVICES</h1>

            {/* Navigation Bullets */}
            <ul className="mb-8 space-y-2">
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('statutoryDues')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Computations of Statutory dues Payroll taxes (viz., PF, ESI, PT etc..)</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('prescribedReturns')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Filing of prescribed returns as per the said statutes</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('companiesAct')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Compliance under Companies Act like maintenance of statutory register, Minutes etc.</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('certificationServices')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Certification Services like 15CA/CB, Networth/Turnover Certificates etc.</span>
                </li>
            </ul>

            {/* Sections Content */}
            <div className="space-y-12">
                {/* Statutory Dues Section */}
                <div id="statutoryDues" name="statutoryDues" ref={statutoryDuesRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">
                        Computations of Statutory dues<br />
                        Payroll taxes (viz., PF, ESI, PT etc..)
                    </h2>
                    <p className='text-justify'>
                        Statutory deductions are mandatory deductions that employers
                        withhold from an employee's salary. These deductions include
                        income tax, employee state insurance, Professional tax and
                        provident fund. Our team of experts ensures that your
                        compliance requirements are met without any hassle.
                    </p>
                </div>

                {/* Prescribed Returns Section */}
                <div id="prescribedReturns" name="prescribedReturns" ref={prescribedReturnsRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">
                        Filing of prescribed returns<br />
                        as per the said statutes
                    </h2>
                    <p className="mb-4 text-justify">
                        Income Tax Return (ITR) filing is an essential obligation for
                        individuals and entities in India. A legal requirement
                        imposed by the government to assess and collect taxes from
                        citizens and organizations based on their income. The process
                        of ITR filing in India can seem daunting to many, but with the
                        right knowledge and guidance, it can be smooth and hassle-
                        free experience.
                    </p>
                    <p className="mb-4  text-justify">
                        With the aim of "One Nation One Tax", Goods and Services Tax
                        (GST) was introduced in India on July 1, 2017 to curb taxation at
                        indirect taxes. The commencement of GST regime in India
                        together with itself the concept of GST Return, a document in
                        which the taxpayer under the Goods and Services Tax (GST)
                        needs to file the details of his/her income to the tax authorities.
                        All the business entities need to get themselves separately
                        registered under GST Regime and file their GST return in an
                        online or offline mode.
                    </p>
                    <p className='text-justify'>
                        Every company whether Public, Private, Section 8, Producer or
                        any other type of company incorporated under the Companies
                        Act, 2013 or under any previous law for the time being in force
                        is required to file their annual Financial Statements and Annual
                        Return within 30 days in e-form AOC 4 or e-form AOC 4 (CFS)
                        depending upon the applicability and 60 days in e-form MGT-7
                        respectively from the date of conclusion of the Annual General
                        Meeting.
                    </p>
                </div>

                {/* Companies Act Section */}
                <div id="companiesAct" name="companiesAct" ref={companiesActRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">
                        Compliance under Companies Act like<br />
                        maintenance of statutory register, Minutes etc.,
                    </h2>
                    <p className='text-justify'>
                        For an organization to function efficiently and adhere to the
                        statutory requirements, it is essential to maintain certain
                        records and registers. Maintaining such records and registers
                        are important for fulfilling statutory, disclosure, statistical, etc.
                        purposes. Our team of experts ensures that your compliance
                        requirements are met without any hassle.
                    </p>
                </div>

                {/* Certification Services Section */}
                <div id="certificationServices" name="certificationServices" ref={certificationServicesRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">
                        Certification Services like 15CA/CB,<br />
                        Networth/Turnover Certificates etc.,
                    </h2>
                    <p className='text-justify'>
                        Suppose you are an Indian resident making payments to a
                        foreign entity, and if the payment is taxable in India, then in
                        that case, it is mandatory to comply with the legal provisions of
                        the Income Tax 1961. According to the Act, you must file the
                        Form 15CA and Form 15CB with the tax authorities before
                        remitting funds to a foreign entity. Filing these 15 CA and CB
                        forms can be complex, requiring detailed knowledge of laws,
                        laws and regulations, notifications, pan aside you in navigating
                        the process of filing form 15CA and form 15CB with ease. Our
                        team of experts ensures that your compliance requirements are
                        met without any hassle.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ComplianceCertificationServices;