'use client'
import React, { useRef } from 'react';
import { scroller } from 'react-scroll';

const AccountingServices = () => {
    const bookkeepingRef = useRef(null);
    const payrollRef = useRef(null);
    const reportingRef = useRef(null);

    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };

    return (
        <div className="w-full lg:w-[550px] max-w-4xl mx-auto p-6 bg-white rounded">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold">ACCOUNTING SERVICES</h1>
            </div>

            <ul className="mb-8 space-y-2">
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('bookkeeping')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Book keeping services</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('payroll')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Payroll Management services</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('reporting')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Internal Reporting Services.</span>
                </li>
            </ul>

            <div id="bookkeeping" name="bookkeeping" ref={bookkeepingRef} className="mb-8 scroll-mt-6">
                <h2 className="text-xl font-bold mb-3 text-center">Book keeping services</h2>
                <p className='text-justify'>
                    We do Daily, Monthly, Quarterly Bookkeeping Services
                    depending on the size, volume, and nature of company's
                    business activity and as per the client requirements. We
                    provide both on-site and off-site accounting services. We
                    support the cloud as well as desktop-based accounting
                    software.
                </p>
            </div>

            <div id="payroll" name="payroll" ref={payrollRef} className="mb-8 scroll-mt-6">
                <h2 className="text-xl font-bold mb-3 text-center">Payroll Management services</h2>
                <p className='text-justify'>
                    Processing of payroll has a very important finance function
                    due to the tax compliance involved in the processing of
                    payroll. Obtaining Income Tax Declaration Forms from
                    employees.Advising on the Structuring CTC.Preparation of
                    Monthly Pay Roll register and advice to the Company for the
                    amount to be paid, and execution of payment, Payslip
                    generation.
                </p>
            </div>

            <div id="reporting" name="reporting" ref={reportingRef} className="scroll-mt-6">
                <h2 className="text-xl font-bold mb-3 text-center">Internal Reporting Services.</h2>
                <p className="mb-4 text-justify">
                    Internal Reporting is generating and distributing detailed
                    financial and operational information within a company,
                    specifically designed to support management decision-
                    making, performance evaluation, and strategic planning, by
                    providing insights into various aspects of the business.
                </p>
                <p className="mb-4 text-justify">
                    Analysis of expenses by department, identifying areas for
                    cost reduction.
                </p>
                <p>
                    Comparison of actual spending against budgeted amounts.
                </p>
            </div>
        </div>
    );
};

export default AccountingServices;