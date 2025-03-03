'use client'
import React, { useRef } from 'react';
import { scroller } from 'react-scroll';

const AuditAssuranceServices = () => {
    // References for each section
    const statutoryAuditRef = useRef(null);
    const taxAuditRef = useRef(null);
    const gstAuditRef = useRef(null);
    const concurrentAuditsRef = useRef(null);
    const internalAuditsRef = useRef(null);
    const regulatoryAuditsRef = useRef(null);
    const dueDiligenceRef = useRef(null);

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
                <h1 className="text-3xl font-bold">AUDIT AND ASSURANCE SERVICES</h1>
            </div>

            {/* Navigation Bullets */}
            <ul className="mb-8 space-y-2">
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('statutoryAudit')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Statutory Audit</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('taxAudit')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Tax Audit</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('gstAudit')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>GST Audit</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('concurrentAudits')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Concurrent Audits</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('internalAudits')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Internal Audits</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('regulatoryAudits')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Regulatory Compliance Audits</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('dueDiligence')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Due Diligence</span>
                </li>
            </ul>

            {/* Sections Content */}
            <div className="space-y-12">
                {/* Statutory Audit Section */}
                <div id="statutoryAudit" name="statutoryAudit" ref={statutoryAuditRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Statutory Audit</h2>
                    <p className="text-justify">
                        In India, the laws pertaining to Statutory Audit are prescribed
                        under Companies Act, 2013. In general terms, it is an audit of
                        the Financial Statements of the Company i.e. of the Balance
                        Sheet and Profit & Loss Account of the company. It is
                        mandatory to conduct statutory audit and it has to be
                        performed by an Independent Chartered Accountant if a
                        business meets certain criteria and thereafter a report is to be
                        prepared by the Auditor stating the facts, opinion, ensure
                        from the said balance of accounts. It term "Statutory" is the
                        Auditor in the format as prescribed by the regulator.
                        Independent auditor means the auditor should not have any
                        relation with the auditee (The company in which the audit is
                        required to perform). our team of experts ensures that your
                        Audit requirements are met without any hassle.
                    </p>
                </div>

                {/* Tax Audit Section */}
                <div id="taxAudit" name="taxAudit" ref={taxAuditRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Tax Audit</h2>
                    <p className="text-justify">
                        Audit refers to an official inspection or unbiased investigation of
                        a firm's or companies financial statements or reports as well as
                        the proper recording of records for reporting to stakeholders.
                        There are various types of audits under different laws such as
                        company audit, statutory audit, cost audit, stock audit, etc.
                        Similarly, an audit compulsated under Income Tax is termed
                        "Tax Audit". A tax audit is an inspection or study of accounts of
                        any firm or a sole account by an assessor to validate the income
                        estimation for filing the ITRs. our team of experts ensures that
                        your audit requirements are met without any hassle.
                    </p>
                </div>

                {/* GST Audit Section */}
                <div id="gstAudit" name="gstAudit" ref={gstAuditRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">GST Audit</h2>
                    <p className="text-justify">
                        GST Audit refers to the examination of the returns, records and
                        other important documents which a taxable individual
                        maintains. Besides, confirming the adherence to the provisions
                        of GST, other motives behind GST audit is to verify the fairness
                        and accuracy of the turnover notified, input tax credit availed
                        and refunds claimed. our team of experts ensures that your
                        audit requirements are met without any hassle.
                    </p>
                </div>

                {/* Concurrent Audits Section */}
                <div id="concurrentAudits" name="concurrentAudits" ref={concurrentAuditsRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Concurrent Audits</h2>
                    <p className="text-justify">
                        Concurrent audit that takes place at the moment when
                        transactions take place, that means it is parallelly conducted.
                        Unlike most audits that are post transactional review, the
                        concurrent audit is as and when transactions take place. It gives
                        an early warning to ensure timely detection of irregularities and
                        lapses.
                        Concurrent Audit Procedure. our team of experts ensures that
                        your audit requirements are met without any hassle.
                    </p>
                </div>

                {/* Internal Audits Section */}
                <div id="internalAudits" name="internalAudits" ref={internalAuditsRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Internal Audits</h2>
                    <p className="text-justify">
                        Internal audit is to identify weaknesses within the organization's
                        processes and control environment internally, so that they can
                        be fixed as quickly as possible to prevent harm to the
                        organization or its stakeholders. Accordingly, the internal audit
                        adds far more attention being devoted to internal controls. In
                        other words, be designed to examine those areas that present
                        the greatest risk to the corporation. The internal audit plan should
                        also include a component of the strategic needs of an
                        organization. our team of experts ensures that your audit
                        requirements are met without any hassle.
                    </p>
                </div>

                {/* Regulatory Compliance Audits Section */}
                <div id="regulatoryAudits" name="regulatoryAudits" ref={regulatoryAuditsRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Regulatory Compliance Audits</h2>
                    <p className="text-justify">
                        Compliance audit is a detailed review to ensure an organization
                        follows the necessary rules and regulations. It checks whether
                        the company is adhering to the laws and policies set by the
                        external regulatory requirements. It involves examining various
                        aspects, such as security measures, risk management
                        strategies, and user access control. our team of experts ensures
                        that your audit requirements are met without any hassle.
                    </p>
                </div>

                {/* Due Diligence Section */}
                <div id="dueDiligence" name="dueDiligence" ref={dueDiligenceRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Due Diligence</h2>
                    <p className="text-justify">
                        Due Diligence Report is shield against unforeseen risks. It
                        identifies potential pitfalls, legal issues, financial vulnerabilities,
                        and operational challenges. By uncovering these risks early, you
                        can make informed decisions about proceeding with deals or with
                        your investments and assets. our team of experts ensures that
                        your requirements are met without any hassle.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuditAssuranceServices;