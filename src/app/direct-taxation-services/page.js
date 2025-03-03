'use client'
import React, { useRef } from 'react';
import { scroller } from 'react-scroll';

const DirectTaxationServices = () => {
    // References for each section
    const taxComplianceRef = useRef(null);
    const transferPricingRef = useRef(null);
    const incomeTaxRef = useRef(null);
    const advisoryServicesRef = useRef(null);
    const individualTaxationRef = useRef(null);

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
                <h1 className="text-3xl font-bold">DIRECT TAXATION SERVICES</h1>
            </div>

            {/* Navigation Bullets */}
            <ul className="mb-8 space-y-2">
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('taxCompliance')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Tax Compliance Services Certification, Audit, Filings, etc.</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('transferPricing')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Transfer Pricing study</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('incomeTax')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Income Tax Assessment and Appeals</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('advisoryServices')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Advisory Services</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('individualTaxation')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Individual and Partnership taxation</span>
                </li>
            </ul>

            {/* Sections Content */}
            <div className="space-y-12">
                {/* Tax Compliance Services Section */}
                <div id="taxCompliance" name="taxCompliance" ref={taxComplianceRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Tax Compliance Services</h2>
                    <p className="text-justify mb-4">
                        Our Tax Compliance Services are designed to ensure that your
                        business or personal finances adhere to all applicable tax laws,
                        minimize risks, and maximize compliance efficiency. With our
                        expertise, you can focus on growing your business while we
                        handle the intricacies of tax compliance.
                    </p>
                    <p className="text-justify mb-4">
                        <strong>Tax Compliance Certification:</strong> We provide formal
                        certifications to verify that your financial documents,
                        transactions, and filings comply with local, state, and federal
                        tax laws. Our team meticulously reviews your financial records
                        to ensure accuracy and adherence to regulations.
                    </p>
                    <p className="text-justify mb-4">
                        <strong>Tax Audit Services:</strong> Our tax audit services involve a
                        comprehensive review of your financial records and tax
                        returns to identify discrepancies, ensure accuracy, and
                        prepare you for potential audits by tax authorities. We also
                        represent you during tax audits, ensuring your interests are
                        protected.
                    </p>
                    <p className="text-justify">
                        <strong>Tax Filing:</strong> We handle the preparation and submission of all
                        tax returns, ensuring that they are accurate, complete, and
                        filed on time. Our services cover income tax, indirect taxes
                        (GST, VAT, sales tax), payroll taxes, and more.
                    </p>
                </div>

                {/* Transfer Pricing study Section */}
                <div id="transferPricing" name="transferPricing" ref={transferPricingRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Transfer Pricing study</h2>
                    <p className="text-justify mb-4">
                        Transfer Pricing refers to the pricing of goods, services,
                        intellectual property, or financial transactions between related
                        entities (e.g., parent companies, subsidiaries, or affiliates) within
                        a multinational enterprise. Tax authorities require these
                        transactions to be conducted at arm's length, meaning the prices
                        should be consistent with what unrelated parties would agree upon
                        under similar circumstances.
                    </p>
                    <p className="text-justify">
                        We specialize in helping businesses
                        navigate the complexities of transfer pricing—ensuring
                        compliance with local and international tax regulations while
                        optimizing your global tax structure.
                    </p>
                </div>

                {/* Income Tax Assessment and Appeals Section */}
                <div id="incomeTax" name="incomeTax" ref={incomeTaxRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Income Tax Assessment and Appeals</h2>
                    <p className="text-justify mb-4">
                        Income Tax Assessment and Appeals services are designed to
                        help you navigate the complexities of tax laws, resolve disputes
                        with tax authorities, and ensure that your tax liabilities are fair
                        and accurate.
                    </p>
                    <p className="text-justify mb-4">
                        <strong>Income Tax Assessment</strong> - This is the process by which tax
                        authorities review your tax returns, financial records, and
                        supporting documents to determine the accuracy of your
                        reported income and tax liabilities.
                    </p>
                    <p className="text-justify mb-4">
                        <strong>Income Tax Appeals</strong> - If you disagree with the tax
                        assessment or any penalties imposed by the tax authorities,
                        you have the right to file an appeal. This involves presenting
                        your case to higher authorities or courts to seek a fair
                        resolution.
                    </p>
                    <p className="text-justify">
                        We assist you during the income tax assessment process,
                        ensuring that your tax returns and financial records are
                        accurate, complete, and compliant with tax laws.
                    </p>
                </div>

                {/* Advisory Services Section */}
                <div id="advisoryServices" name="advisoryServices" ref={advisoryServicesRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Advisory Services</h2>
                    <p className="text-justify">
                        Advisory Services encompass a wide range of strategic and
                        consultative offerings that help clients make informed
                        decisions, improve performance, and achieve their financial goals.
                        These services are tailored to your unique needs and can
                        include financial planning, risk management, business
                        restructuring, and more. We help you create a comprehensive
                        financial plan that aligns with your personal or business objectives.
                        Our services include budgeting, cash flow management,
                        financial forecasting, and performance analysis.
                    </p>
                </div>

                {/* Individual and Partnership taxation Section */}
                <div id="individualTaxation" name="individualTaxation" ref={individualTaxationRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Individual and Partnership taxation</h2>
                    <p className="text-justify mb-4">
                        <strong>Individual Taxation:</strong> This involves managing tax filing requirements
                        for individuals, ensuring compliance with tax laws, and
                        identifying opportunities to reduce tax liabilities through
                        deductions, credits, and exemptions.
                    </p>
                    <p className="text-justify mb-4">
                        <strong>Partnership Taxation:</strong> This involves managing the tax obligations of
                        partnerships, including filing partnership returns, allocating income
                        among partners, and ensuring compliance with tax regulations.
                    </p>
                    <p className="text-justify">
                        Our Individual and Partnership Taxation Services
                        <br /><br />
                        We handle the preparation and filing of your individual or
                        partnership tax returns, ensuring accuracy and compliance
                        with tax laws:
                        <br />• Tax return preparation and filing.
                        <br />• Gathering and organizing financial documents.
                        <br />• Identifying eligible deductions, credits, and exemptions.
                        <br />• Filing returns electronically for faster processing.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DirectTaxationServices;