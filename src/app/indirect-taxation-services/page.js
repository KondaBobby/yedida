'use client'
import React, { useRef } from 'react';
import { scroller } from 'react-scroll';

const IndirectTaxationServices = () => {
    // References for each section
    const taxComplianceRef = useRef(null);
    const refundsRef = useRef(null);
    const incentivesRef = useRef(null);
    const litigationsRef = useRef(null);
    const gstAuditRef = useRef(null);
    const advisoryRef = useRef(null);
    const customsDrawbackRef = useRef(null);
    const advanceAuthRef = useRef(null);
    const eouSezSetupRef = useRef(null);
    const eouSezComplianceRef = useRef(null);

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
                <h1 className="text-3xl font-bold">INDIRECT TAXATION SERVICES</h1>
            </div>

            {/* Navigation Bullets */}
            <ul className="mb-8 space-y-2">
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('taxCompliance')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Tax Compliance Services Certification, Audit, Filings, etc</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('refunds')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Refunds</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('incentives')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Incentives</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('litigations')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Handling Litigations at various levels</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('gstAudit')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>GST Audit</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('advisory')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Advisory</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('customsDrawback')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Customs Drawback</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('advanceAuth')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Advance Authorisation/EPCG services</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('eouSezSetup')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>EOU/SEZ set up</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('eouSezCompliance')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>EOU/SEZ Compliance</span>
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
                        Tax Compliance Certification - We provide formal
                        certification to verify that your tax-related documents,
                        transactions, and filings comply with local, state, and federal
                        tax laws. Our team meticulously reviews your financial records
                        to ensure accuracy and adherence to regulations.
                    </p>
                    <p className="text-justify mb-4">
                        Tax Audit Services - Our tax audit services involve a
                        comprehensive review of your financial records and tax
                        filings to identify discrepancies, ensure accuracy, and
                        prepare you for potential audits by tax authorities. We also
                        represent you during tax audits, ensuring your interests are
                        protected.
                    </p>
                    <p className="text-justify">
                        Tax Filing - We handle the preparation and submission of all
                        your tax returns, ensuring they are accurate, complete, and
                        filed on time. Our services cover income tax, indirect taxes
                        (GST, VAT, sales tax), payroll taxes, and more.
                    </p>
                </div>

                {/* Refunds Section */}
                <div id="refunds" name="refunds" ref={refundsRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Refunds</h2>
                    <p className="text-justify">
                        Refunds for overpaid taxes or taxes paid on exports, inverted
                        duty structure, or other eligible activities. Our offerings in
                        Indirect Taxation services are designed to help you navigate
                        the refund process efficiently, ensuring that you receive your
                        rightful refunds while maintaining compliance with tax laws.
                        We handle the preparation and filing of your individual or
                        partnership tax returns, ensuring accuracy and compliance
                        with tax laws.
                    </p>
                </div>

                {/* Incentives Section */}
                <div id="incentives" name="incentives" ref={incentivesRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Incentives</h2>
                    <p className="text-justify mb-4">
                        Incentives are a powerful tool for businesses to reduce their
                        tax burden, improve cash flow, and enhance competitiveness.
                        Government often provides substantial tax relief across various
                        tax regimes such as Goods and Services Tax (GST), Value
                        Added Tax (VAT), and Customs Duty to promote specific
                        industries, regions, or activities.
                    </p>
                    <p className="text-justify mb-4">
                        We help you identify and assess the indirect tax incentives
                        available to your business based on your industry, location.
                    </p>
                    <p className="text-justify">
                        Our services include:
                        <br />• Reviewing your operations to identify eligible incentives.
                        <br />• Analyzing potential benefits and requirements of each
                        incentive.
                        <br />• Providing a detailed report on available incentives and
                        how to claim them.
                    </p>
                </div>

                {/* Handling Litigations at various levels Section */}
                <div id="litigations" name="litigations" ref={litigationsRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Handling Litigations at various levels</h2>
                    <p className="text-justify mb-4">
                        Tax litigations refer to legal disputes between taxpayers and
                        tax authorities over issues such as:
                    </p>
                    <p className="text-justify mb-4">
                        • Tax assessments and demands.
                        <br />• Refund claims and rejections.
                        <br />• Classification of goods or services.
                        <br />• Applicability of tax rates or exemptions.
                        <br />• Penalties and interest charges.
                        <br />• Interpretation of tax laws and regulations.
                    </p>
                    <p className="text-justify mb-4">
                        These disputes may arise at various levels, including:
                        <br />• Assessment Level: Disputes during the initial tax
                        assessment process.
                        <br />• Appellate Level: Appeals filed with higher authorities
                        (e.g., Commissioner Appeals, Tribunal).
                        <br />• Judicial Level: Litigation in courts, including High Courts
                        and the Supreme Court.
                    </p>
                    <p className="text-justify">
                        We assist you in resolving disputes at the assessment stage,
                        including:
                        <br />• Responding to notices from tax authorities.
                        <br />• Preparing and submitting detailed replies and supporting
                        documents.
                        <br />• Negotiating with tax officers to resolve disputes amicably.
                    </p>
                </div>

                {/* GST Audit Section */}
                <div id="gstAudit" name="gstAudit" ref={gstAuditRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">GST Audit</h2>
                    <p className="text-justify">
                        GST Audit is a detailed examination of a business's financial
                        records, returns, and compliance with GST laws. Ensuring
                        that all returns (GSTR-1, GSTR-3B, GSTR-9, etc.) are
                        completely and timely filed. Reconciliation of returns and
                        GST compliance, verification of GST returns and
                        reconciliation of various forms (such as GSTR-1, GSTR-3B,
                        GSTR-9, etc.) are filed correctly and on time.
                    </p>
                </div>

                {/* Advisory Section */}
                <div id="advisory" name="advisory" ref={advisoryRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Advisory</h2>
                    <p className="text-justify mb-4">
                        Advisory services in the tax domain involve providing expert
                        guidance and strategic solutions to help businesses:
                    </p>
                    <p className="text-justify mb-4">
                        • Comply with indirect tax laws and regulations.
                        <br />• Optimize their tax structure to minimize liabilities.
                        <br />• Mitigate risks associated with non-compliance or disputes.
                        <br />• Plan strategically for future tax implications.
                    </p>
                    <p className="text-justify">
                        These services are proactive, forward-looking, and tailored to
                        the specific needs of your business.
                    </p>
                </div>

                {/* Customs Drawback Section */}
                <div id="customsDrawback" name="customsDrawback" ref={customsDrawbackRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Customs Drawback</h2>
                    <p className="text-justify">
                        Customs Drawback is a vital incentive under the indirect
                        taxation framework that allows businesses to claim refunds
                        on duties, taxes, and fees paid on imported goods that are
                        subsequently exported. Our team of expert Chartered
                        Accountants provides comprehensive Customs Drawback
                        services to help businesses navigate the complexities of
                        compliance, documentation, and claim processing. Our
                        meticulous approach ensures full regulatory compliance,
                        avoiding penalties or claim rejections.
                    </p>
                </div>

                {/* Advance Authorisation/EPCG services Section */}
                <div id="advanceAuth" name="advanceAuth" ref={advanceAuthRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Advance Authorisation/EPCG services</h2>
                    <p className="text-justify mb-4">
                        The Advance Authorization scheme allows duty-free import
                        of raw materials, components, and inputs required for
                        manufacturing export products. This scheme provides
                        significant cost savings by eliminating customs duties on
                        imported goods used in exports.
                    </p>
                    <p className="text-justify mb-4">
                        The EPCG scheme enables businesses to import capital
                        goods (such as machinery, equipment, and technology) at
                        zero or reduced customs duty, provided they meet specified
                        export obligations. This helps companies modernize their
                        production processes while staying cost-effective.
                    </p>
                    <p className="text-justify">
                        From application to closure, we provide comprehensive assistance
                        for AA & EPCG schemes.
                    </p>
                </div>

                {/* EOU/SEZ set up Section */}
                <div id="eouSezSetup" name="eouSezSetup" ref={eouSezSetupRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">EOU/SEZ set up</h2>
                    <p className="text-justify mb-4">
                        Expanding a business into Export Oriented Units (EOU) and
                        Special Economic Zones (SEZ) offers significant tax benefits,
                        duty exemptions, and regulatory advantages under India's
                        Foreign Trade Policy (FTP). Setting up such EOU or SEZ unit
                        requires careful planning, regulatory approvals, and
                        compliance with indirect taxation laws. Our team of expert
                        Chartered Accountants provides comprehensive services to
                        help businesses establish and manage their EOU/SEZ
                        operations while ensuring full compliance with customs, GST,
                        and FTP regulations.
                    </p>
                </div>

                {/* EOU/SEZ Compliance Section */}
                <div id="eouSezCompliance" name="eouSezCompliance" ref={eouSezComplianceRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">EOU/SEZ Compliance</h2>
                    <p className="text-justify mb-4">
                        EOUs are units engaged in 100% export-oriented
                        manufacturing or service operations and are eligible for
                        numerous duty exemptions, GST benefits, and other fiscal
                        incentives. Our expert team guides businesses through the
                        entire process, from registration to operational compliance.
                    </p>
                    <p className="text-justify">
                        SEZs are designated zones that offer tax holidays, duty
                        exemptions, simplified procedures, and other benefits to units
                        engaged in export-oriented activities. Setting up a unit in an
                        SEZ provides access to multiple benefits, but the process
                        requires strict regulatory adherence.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default IndirectTaxationServices;